const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  // Compartilhamento ficticio de dados entre rotas, pois é compartilhado entre todos os usuários, pois fica salvo na memória do servidor
  // Variável products é compartilhada entre as rotas admin.js e shop.js
  // console.log('shop.js', adminData.products);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

  // Pug engine
  res.render("shop", {prods: adminData.products, pageTitle: "Shop", hasProducts: adminData.products.length > 0});
});

module.exports = router;
