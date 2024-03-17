const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/home', (req, res, next) => {
    console.log('In /home middleware!');
    res.sendFile(path.join(__dirname, '..', 'views', 'home.html'));
});

module.exports = router;