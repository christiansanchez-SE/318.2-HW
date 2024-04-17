const express = require ('express');
const app = express ();
const port = 3000;

// Importing the data from the database files.
const food = require("./data/food");
const drinks = require("./data/drinks");
const desserts = require("./data/desserts");
// const bodyParser = require("body-parser");

// Using Express's built-in body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("To look for full menu api type http://localhost:3000/api/data <br> For food type http://localhost:3000/api/food <br> For drinks type http://localhost:3000/api/drinks <br> For desserts type http://localhost:3000/api/desserts" );
  });

// Creating a GET route for the entire data database.
app.get("/api/data", (req, res) => {
    res.json({food, drinks, desserts});
});
///////////////////////////////////////////////////////////////////
// Creating a GET route for the food database.
app.get("/api/food", (req, res) => {
    res.json(food);
});

// Creating a GET for a specific food id
app.get("/api/food/:id", (req, res) => {
    const foods = food.find((f) => f.id == req.params.id);
    if(foods) res.json(foods);
});
//////////////////////////////////////////////////////////////////
// Creating a GET route for the drinks database.
app.get("/api/drinks", (req, res) => {
    res.json(drinks);
});

// Creating a GET for a specific drinks id
app.get("/api/drinks/:id", (req, res) => {
    const bev = drinks.find((f) => f.id == req.params.id);
    if(bev) res.json(bev);
});

//////////////////////////////////////////////////////////////////

// Creating a GET route for the desserts database.
app.get("/api/desserts", (req, res) => {
    res.json(desserts);
});

// Creating a GET for a specific desserts id
app.get("/api/desserts/:id", (req, res) => {
    const past = desserts.find((f) => f.id == req.params.id);
    if(past) res.json(past);
});

app.listen (port, () => { console.log (`Currently Listening on ${port}`); });