// const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const notFound = require("./routes/404");

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); // Este middleware é responsável por fazer o parsing do body da requisição

// Como estamos usando o router, a ordem não importa
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(notFound);

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000); // Express.js já cria um servidor para nós, então não precisamos criar um servidor manualmente