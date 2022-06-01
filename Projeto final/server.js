// Menor divisão de como chegar os dados da rede no computador

import dgram from 'dgram';

// Tipo de entrega do datagrama irá receber.
// Socket é uma porta dinâmica para receber os dados.
const server = dgram.createSocket('udp4');


// O server podemos utilizar para gerar algumas mensagens, o primeiro caso colocamos para quando dar erro no nosso programa. O segundo é uma mensagem é quando chega uma informação; e o listerning  é quando dar tudo certo na conexão.
server.on('error', (err) => {
  console.log(`server error: ${err}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
  console.log(`[${rinfo.address}:${rinfo.port}]:${msg.toString().trim()}`);
});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(5000);
