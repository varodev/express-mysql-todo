const mysql = require('mysql');
const fs = require('fs');
let connection;

const host = process.env.MYSQL_HOST
const password = process.env.MYSQL_ROOT_PASSWORD

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: host,
        user: 'root',
        password: password,
        database: 'webapp'
    });
}

connection.on('connect', () => {
    console.log(`--> Connected to database '${connection.config.database}'.`);
});

connection.on('error', err => {
    console.log('--> Connection error: ', err);
});

connection.connect();

module.exports = connection;
