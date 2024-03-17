// Importações
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const loginRoutes = require("./routes/login");
const homeRoutes = require("./routes/home");
const notFoundRoutes = require("./routes/404");

// Inicialização
const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false })); // Este middleware é responsável por fazer o parsing do body da requisição
app.use(express.static(path.join(__dirname, "public"))); // Este middleware é responsável por servir arquivos estáticos, como CSS, imagens, etc.

// Rotas
app.use(loginRoutes);
app.use(homeRoutes);
app.use(notFoundRoutes);
app.listen(3000); // Express.js já cria um servidor para nós, então não precisamos criar um servidor manualmente