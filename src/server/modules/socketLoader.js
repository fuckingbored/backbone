const path = require('path');
const glob = require('glob');

//Load socket routes
export default class SocketLoader {
    constructor(server, opts = { dir: path.join(__dirname, "../../app/routes/socketroutes") }) {
        this.server = server;
        this.opts = opts;

        this.loadedRoutes = [];

        this.loadDir(this.opts.dir);
    }

    loadDir(dir = this.opts.dir) {
        if (!dir) {
            throw new Error(`SocketLoader Error: No directory specified`)
        }
        
        let items = glob.sync(`${dir}/**/*.js`).map(file => {
            let item = require(file).default;
            console.log(`Success: Added new SOCKET route ${item.event}`);
            return item;
        });

        this.server.on('connection', function (socket) {
            items.forEach(item => {
                if (item.enabled) {
                    if (item.handler instanceof Array) {
                        socket.on(item.event, (params) => {
                            item.handler.forEach(i => {
                                i.handler.bind(Object.assign(this, { server: this.server, socket: socket })).call(null, params)
                            })
                        });
                    } else {
                        socket.on(item.event, (params) => {
                            item.handler.bind(Object.assign(this, { server: this.server, socket: socket })).call(null, params)
                        });
                    }
                }
            });
        });

        return items
    }
}