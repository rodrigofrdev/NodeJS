const express = require('express');
const router = express.Router();

const users = [];

router.get('/', (req, res, next) => {
   res.render('add-user', {
      pageTitle: 'Add User',
   });
});

router.post('/', (req, res, next) => {
   const name = req.body.name;

   users.push({ name });
   
   res.redirect('/users', );
});

exports.routes = router;
exports.users = users;