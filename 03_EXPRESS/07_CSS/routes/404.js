const express = require('express');
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");

router.use((req, res, next) => {
    // res.status(404).send("<h1>404 Page not found</h1>");
    res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

module.exports = router; // Exportamos o router para que ele possa ser utilizado em outros arquivos