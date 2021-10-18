//this lab is a practice in creating a portfolio

//================================================================
//Imports

//Import dependencies
const express = require("express");
const cors = require("cors");

//Import JSON files
const projects = require("./projects.json")
const about = require("./about.json")

//=====================================================================
//objects and middleware

//Creat app object 
const app = express();

//using cors for middleware
app.use(cors());

//========================================================================
//routes 

//test route
app.get("/", (req,res) => {
    res.send("Hello World");
});

// route for retrieving projects
app.get("/projects", (req, res) => {
    // send projects via JSON
    res.json(projects);
});

// route for retrieving about info
app.get("/about", (req, res) => {
    // send projects via JSON
    res.json(about);
});

//========================================================================
//ports

//declare a variable for our port number
const PORT = process.env.PORT || 4000;

// turn on the server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));