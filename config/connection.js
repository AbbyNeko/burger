const mysql = require("mysql");
require('dotenv').config();

let connection;

if(process.env.JAWSDB_URL) {

    connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {

    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: process.env.DB_USER,
        password: process.env.DB_PW,
        database: process.env.DB_NAME
    });

}

connection.connect(function(err) {
    if (err) throw err;
    //console.log("connected!");
});

module.exports = connection;