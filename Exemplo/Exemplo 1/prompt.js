import readline from "readline";


// Variavel para ter acesso ao terminal.
const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question("Qual o seu nome? ", (name) => {
  console.log("Nome digitado: ", name);
  terminal.question("Qual o seu sobrenome?", (sobrenome) => {
    console.log("Sobrenome digitado: ", sobrenome);

    terminal.question("Qual o seu endereço?", (endereco) => {
      console.log("Sobrenome digitado: ", endereco);
      terminal.close();
    });
  });
});


