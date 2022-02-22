const mysql = require('myql2');
const { database } = require('./keys');

const pool = mysql.createConnection(database);

module.exports = pool;
