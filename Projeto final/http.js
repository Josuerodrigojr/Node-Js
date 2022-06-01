import express from 'express';
import fs from 'fs';
const app = express();

const arquivoTxt =
  'C:/Users/josue/OneDrive/Área de Trabalho/Curso Ifood/Node-Js/Projeto final/Livros.txt';
let palavraAtualizada = '';

app.get(/POST/, function (req, res) {
  const url = req.path;
  const UrlPalavra = url.split('/');
  let palavra = UrlPalavra[2];

  for (let i = 0; i < palavra.length; i++) {
    if (
      palavra[i] === '%' &&
      palavra[i + 1] === '2' &&
      palavra[i + 2] === '0'
    ) {
      palavraAtualizada = palavra.replace('%20', ' ');
      palavra = palavraAtualizada;
    }
  }

  fs.promises.appendFile(arquivoTxt, `\n ${palavraAtualizada}`);

  res.send('Adicionado');
});

app.get('/GET', function (req, res) {
  async function listaDeLivros() {
    const listaTxt = await fs.promises.readFile(arquivoTxt, 'utf-8');
    const listaTxtExibicao = listaTxt.split('\n');
    res.json(listaTxtExibicao);
  }
  listaDeLivros();
});

app.listen(3000, function (req, res) {
  console.log('Server is running at port 3001');
});
