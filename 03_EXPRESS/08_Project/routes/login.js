const express = require("express");
const router = express.Router();
const path = require("path");

// Simulates a user in a database
const user = {
    login: "admin",
    password: "admin"
};

router.get("/", (req, res, next) => {
    console.log("In / middleware!");
    res.sendFile(path.join(__dirname, "..", "views", "login.html"));
});

router.post("/login", (req, res, next) => {
    console.log("In /login middleware!");
    const {login, password} = req.body;
    console.log(`Login: ${login}, Password: ${password}`);

    if(login === user.login && password === user.password) {
      res.redirect("/home");
    } else {
      res.redirect("/");
    }
});

module.exports = router;