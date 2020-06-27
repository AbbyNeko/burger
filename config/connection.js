const mysql = require("mysql");
let connection;

if(process.env.JAWSDB_URL) {

    connection = mysql.connection({
        port: 3306,
        host: "l7cup2om0gngra77.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        username: "zidz3tbh7ui4anyi",
        password: "tpj8uapme6enc6av"
    });

} else {

    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "Password!",
        database: "burgers_db"
    });

}

connection.connect(function(err) {
    if (err) throw err;
    //console.log("connected!");
});

module.exports = connection;