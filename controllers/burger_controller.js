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

//Updates burger name
router.post('/update-burger/:id', function(req, res) {

    burger.updateBurger(req.params.id, req.body.column, req.body.newValue);
    res.status(200).end();

});

//Adds new burger
router.post('/add-burger', function(req, res) {

    console.log(req.body);
    burger.addNewBurger(req.body.burger_name);
    res.status(200).end();

});



module.exports = router;