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

    loadDir(dir=this.opts.dir) {
        if (!dir) {
            throw new Error(`SocketLoader Error: No directory specified`)
        }
        let items = glob.sync(`${dir}/**/*.js`).map(file => require(file).default);
        this.server.on('connection', function (socket) { 
            items.forEach(item => {
                if (item.enabled) {
                    if(item.handler instanceof Array) {
                        socket.on(item.event, function() {item.handler.forEach(i => {
                            i.call(this, this.server, socket);
                        })});
                    } else {
                        socket.on(item.event, item.handler.bind(this.server, socket));
                        console.log(item.handler);
                    }
                }
                console.log(`Success: Added new SOCKET route ${item.event}`);
            });
        });

        return items
    }
}