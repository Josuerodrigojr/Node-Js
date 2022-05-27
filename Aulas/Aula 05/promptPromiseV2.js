import prompt from "./promptTools.js";

async function main() {
  const cor = await prompt("Qual sua cor favorita?");
  console.log(cor);
  const sabor = await prompt("Qual o seu sabor favorito de sorvete?");
  console.log(sabor);
}

main();

// import prompt from './promptTools.js'

// async function main() {
//   const name = await prompt('Qual o seu nome?');
//   console.log(name);
//   const sobrenome = await prompt('Qual o seu sobrenome?');
//   console.log(sobrenome);
//   const idade = await prompt('Qual a sua idade?');
//   console.log(idade);
//   const endereco = await prompt('Qual o seu endereço?');
//   console.log(endereco);
// }

// main();
