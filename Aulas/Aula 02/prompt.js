import readline from 'readline';

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

terminal.question("Qual sua cor favorita? ", (cor)=>{
  console.log("Sua cor favorita é ", cor)
  terminal.question ("Qual seu sabor de sorvete favorito? ", (sabor)=>{
    console.log("Seu sabor de sorvete favorito é: ", sabor)
    terminal.close();
  })
  
})

