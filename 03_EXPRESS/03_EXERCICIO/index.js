const express = require("express");
const app = express();

const middleware1 = (req, res, next) => {
    console.log("Middleware 1");
    next();
};

const middleware2 = (req, res, next) => {
    console.log("Middleware 2");
    next();
};

app.use(middleware1);
app.use(middleware2);

app.use("/users", (req, res, next) => {
    console.log("In users route!");
    res.send("<h1>Users!</h1>");
});

app.use("/", (req, res, next) => {
    console.log("In home route!");
    res.send("<h1>Home!</h1>");
});

app.listen(3000);