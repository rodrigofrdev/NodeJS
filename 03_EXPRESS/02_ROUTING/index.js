// const http = require("http");
const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
    console.log("This always runs!");
    next();
});

app.use("/add-product", (req, res, next) => {
    console.log("In add-product middleware!");
    res.send("<h1>Add Product!</h1>");
});

app.use("/", (req, res, next) => {
    console.log("In / middleware!");
    res.send("<h1>Hello from Express!</h1>");
});

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000); // Express.js já cria um servidor para nós, então não precisamos criar um servidor manualmente