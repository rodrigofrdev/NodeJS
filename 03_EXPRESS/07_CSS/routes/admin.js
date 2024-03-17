const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require("../util/path");

router.get("/add-product", (req, res, next) => {
    console.log("In add-product middleware!");
    // Ao criar um formulário dentro de uma rota administrativa, você precisa garantir que a ação do formulário reflita essa estrutura de rota.
    // res.send('<html><body><form action="/admin/product" method="POST"><input type="text" name="title"><button>Add Product</button></form></body></html>');
    res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
    console.log(req.body); // Aqui podemos ver o body da requisição, que foi parseado pelo middleware bodyParser
    res.redirect("/");
});

module.exports = router;