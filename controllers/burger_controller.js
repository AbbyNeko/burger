const express = require("express");
const burger = require('../models/burger.js');
const router = express.Router();

//load all burgers and load all burgers devoured
router.get('/', function(req, res) {

    burger.getAllBurgers(function(allBurgers) {

        let burgersEatenArr = allBurgers.filter(burger => burger.devoured);
        let burgersOnTableArr = allBurgers.filter(burger => !burger.devoured);
    
        res.render("index", { burgersOnTable: burgersOnTableArr, burgersEaten: burgersEatenArr });
        
    });

});


module.exports = router;