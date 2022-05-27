import readline from "readline";

function prompt(terminal, question) {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    terminal.question(question, (value) => {
      resolve(value);
    });
  });
}

async function main() {
  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const cor = await prompt(terminal, "Qual sua cor favorita?");
  console.log(cor);
  const sabor = await prompt(terminal, "Qual seu sabor de sorvete favorito? ");
  console.log(sabor);
  terminal.close();
}

main();
