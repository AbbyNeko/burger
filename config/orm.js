const connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {

  selectAll: function(table, cb) {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            cb(result);
        });
  },
    updateOne: function(id, table, column, newValue) {
        let queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";

        if(newValue === 'true') {
            newValue = true;
        }
        
        connection.query(queryString, [table, column, newValue, id], function(err, result) {
            if (err) throw err;
            console.log("Update was Successful");
        });
    },
    insertOne: function(table, column, newData) {
        let queryString = "INSERT INTO ?? (??) VALUES(?)";

        connection.query(queryString, [table, column, newData], function(err) {
            if (err) throw err;
            console.log(`Successfully added a new record to ${table}`);
        });

    }
    
};

module.exports = orm;
