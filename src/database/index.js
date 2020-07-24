const config = require('src/config');
const knex = require('knex');

module.exports = knex(config.database);