const express = require('express');
const router = express.Router();
const usersData = require('./addUser');

router.get('/users', (req, res, next) => {
   res.render('users', {
      pageTitle: 'Users',
      users: usersData.users,
   });
});

exports.routes = router;