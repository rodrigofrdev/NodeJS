const http = require('http');
const fs = require('fs');

// Criando um servidor HTTP usando o módulo 'http'
const server = http.createServer((req, res) => {
  // Obtendo a URL da requisição
  const url = req.url;

  // Rota principal '/'
  if (url === '/') {
    // Configurando o cabeçalho da resposta
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    // Criando um formulário que redireciona para '/message' ao ser enviado
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    // Finalizando a resposta
    return res.end();
  }

  // Rota '/message' para lidar com solicitações POST
  if (url === '/message' && req.method === 'POST') {
    const body = [];

    // Evento 'data' é acionado quando novos dados são recebidos
    req.on('data', (chunk) => {
      // Os chunks são pedaços de dados recebidos
      console.log(chunk);
      body.push(chunk);
    });

    // Evento 'end' é acionado quando todos os dados foram recebidos
    req.on('end', () => {
      // Concatenando os chunks em um Buffer e convertendo para string
      const parsedBody = Buffer.concat(body).toString();
      // Extraindo a mensagem do corpo da requisição
      const message = parsedBody.split('=')[1];

      // Escrevendo a mensagem em um arquivo chamado 'message.txt'
      fs.writeFileSync('message.txt', message);
    });

    // Configurando cabeçalhos de resposta para redirecionamento
    // Será executado antes do evento 'end', pois o evento 'end' é assíncrono (não bloqueante) que retorna uma função callback
    res.statusCode = 302; // Código de redirecionamento
    res.setHeader('Location', '/'); // Redirecionando para a rota principal '/'
    // Finalizando a resposta
    return res.end();
  }

  // Rota padrão, respondendo com uma mensagem simples
  res.setHeader('Content-Type', 'text/html');
  res.write('<p>Hello from the server!</p>');
  // Finalizando a resposta
  res.end();
});

// Ouvindo na porta 3000 (pode ser obtida de process.env.PORT em uma aplicação real)
server.listen(3000);
