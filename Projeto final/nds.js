import dns from 'dns';

dns.promises.lookup('letscode.com.br'). then(console.log);
