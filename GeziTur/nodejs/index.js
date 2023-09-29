

const express = require("express");
const app = express();
const userRoutes = require("./routes/users");
const dotenv = require("dotenv").config();
const cookie = require("cookie-parser");/*!  */
const session = require('express-session');
app.set("view engine", "ejs");

app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(userRoutes);

app.use(session({
    secret : 'webslesson',
    resave: true,
    saveUninitialized : true

}))





app.listen(3000, () => {
    console.log("listening on port 3000");
});