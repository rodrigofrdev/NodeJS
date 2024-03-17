// const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); // Este middleware é responsável por fazer o parsing do body da requisição

app.use("/", (req, res, next) => {
    console.log("This always runs!");
    next();
});

app.use("/add-product", (req, res, next) => {
    console.log("In add-product middleware!");
    res.send('<html><body><form action="/product" method="POST"><input type="text" name="title"><button>Add Product</button></form></body></html>');
});

app.post("/product", (req, res, next) => {
    console.log(req.body); // Aqui podemos ver o body da requisição, que foi parseado pelo middleware bodyParser
    res.redirect("/");
});

app.use("/", (req, res, next) => {
    console.log("In / middleware!");
    res.send("<h1>Hello from Express!</h1>");
});

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000); // Express.js já cria um servidor para nós, então não precisamos criar um servidor manualmente