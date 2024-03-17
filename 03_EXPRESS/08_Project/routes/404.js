const express = require("express");
const router = express.Router();
const path = require("path");

router.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "..", "views", "404.html"));
});

module.exports = router;