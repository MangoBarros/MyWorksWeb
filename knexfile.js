const config = require("./src/config")

exports.development = exports.production = exports.test = config.database;
