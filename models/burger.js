const orm = require("../config/orm.js");

let Burger = {

    getAllBurgers: function(cb) {
        orm.selectAll('burgers', cb);
    },
    updateBurger: function(burgerId, field, newValue) {
        orm.updateOne(burgerId, 'burgers', field, newValue)
    },
    addNewBurger: function(burgerObj) {
        orm.insertOne('burgers', ['burger_name', 'devoured'], burgerObj);
    }

};

module.exports = Burger;