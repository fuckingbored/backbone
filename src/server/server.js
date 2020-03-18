const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

import RouteLoader from "./modules/routeLoader";
import connectMongo from "./modules/connectMongo";
import initEmailTransporter from "./modules/initEmailTransporter";

//load env vars
if (process.env.NODE_ENV == "development") require("custom-env").env("dev");

if (process.env.NODE_ENV == "production") require("custom-env").env("prod");

let server = express();

// allow cross origin requests
server.use(cors());
// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
server.use(bodyParser.json());

(async function() {
  try {
    //connect to mongodb
    //await connectMongo();

    //load all routes
    let routeLoader = new RouteLoader(server, {
      dir: path.join(__dirname, "../app/routes"),
      verbose: true,
      strict: true,
      binds: {
        //emailTransporter: initEmailTransporter()
      }
    });
    await routeLoader.loadDir();

    server.listen(process.env.PORT || 3000, function() {
      console.log(
        `${server.name} listening at http://localhost:${process.env.PORT ||
          3000}`
      );
    });
  } catch (err) {
    console.error(err);
  }
})();
