const express = require("express");
const expHandleBars = require("express-handlebars");

const app = express();
var PORT = process.env.PORT || 8080;

app.engine("handlebars", expHandleBars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.listen(PORT, function(){
    console.log("app is listening at http://localhost:"+PORT);
});