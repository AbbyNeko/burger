# EAT-DA-BURGER APP

### Overview

The Eat-Da-Burger app adds a new burger, updates the burger name and shows a list of devoured/not-devoured burgers.

These functionalities are created using MySQL, Node, Express, Handlebars and a homemade ORM (Object-Relational Mapping). It follows the MVC (Model View Controller) design pattern. Express is used to create the web app. Node and MySQL is used to make queries to the burgers table. Handlebars renders the HTML pages and the ORM handles the SQL queries.

### Usage

To use the app, the user just needs to add a burger he or she wants to eat using the text input on the left of the screen. After pressing "Add Burger", a new burger entry will be added to the list below it. 

<img src="./public/img/addBurger.png" alt="add burger" width="400" height="450"/>

To update the burger name, type in the text box as shown below and click away. The burger name will be automatically updated and the page will refresh.

<img src="./public/img/updateBurger.png" alt="update burger" width="400" height="450"/>

Pressing the "DEVOUR IT!" button next to it will move your burger to the "Burger Devoured" list on the right.

<img src="./public/img/devouredBurger.png" alt="devour burger" width="400" height="450"/>

Go to https://enigmatic-hamlet-73997.herokuapp.com/ to try it out! All burger entries will be stored in the database.
