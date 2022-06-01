import express from "express";
import fs from 'fs'
const app = express();

  const pathToWrite =
    "C:/Users/josue/OneDrive/Área de Trabalho/Curso Ifood/Node-Js/Exemplo/Exemplo 1/teste.txt";





app.post(/POST/, function (req, res) {
  let url = req.path;
  var resultadoTesteString = url.split("/");
  let foi = resultadoTesteString[2];

  fs.promises.appendFile(pathToWrite, `\n ${foi}`);

  res.send("Adicionado");
});


app.get("/GET", function (req, res) {
   async function teste2() {
     const teste = await fs.promises.readFile(pathToWrite, "utf-8");
     const teste3 = teste.split('\n');
        res.json(teste3);
   }
   teste2()

});

app.listen(3001, function (req, res) {
  console.log("Server is running at port 3000");
});
