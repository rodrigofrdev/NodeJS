const http = require('http');
const routes = require('./routes');

console.log(routes.someText);

// Criando um servidor HTTP usando o módulo 'http'
const server = http.createServer(routes);

// Ouvindo na porta 3000 (pode ser obtida de process.env.PORT em uma aplicação real)
server.listen(3000);
