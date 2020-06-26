const express = require("express");
const expHandleBars = require("express-handlebars");

const app = express();
var PORT = process.env.PORT || 8080;

//use public folder as root
app.use(express.static("public"));

app.engine("handlebars", expHandleBars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//ROUTER
const routes = require("./controllers/burger_controller.js");
app.use(routes);

app.listen(PORT, function(){
    console.log("app is listening at http://localhost:"+PORT);
});