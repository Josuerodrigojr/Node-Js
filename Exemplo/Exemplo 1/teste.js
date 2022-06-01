import http from "http";
import fs from 'fs';
import express from 'express';

const server = http.createServer((req, res) => {
  const { url } = req;

  const pathToWrite =
    "C:/Users/josue/OneDrive/Área de Trabalho/Curso Ifood/Node-Js/Exemplo/Exemplo 1/teste.txt";
   


  if (url.indexOf("POST") === 1) {

          var resultadoTesteString = url.split("/");
          let foi = resultadoTesteString[2];
          

        fs.promises.appendFile(pathToWrite, `\n ${foi}`);


    return res.end("Foi");
  } else if (url.indexOf("GET") === 1) {

     async function teste2() {
       const teste = await fs.promises.readFile(pathToWrite, "utf-8");
       const teste3 = teste.split("\n");
       console.log(teste3);
      return teste3;
      
     }
     console.log(typeof(teste2()))
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(teste2()));





   


    
  }



  return res.end();
});

server.listen(8083);




//  return res.end("ok");