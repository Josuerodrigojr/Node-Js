import readline from 'readline';
import fs from 'fs';
import Path from 'path';


const VarPath = 'D:/Escola Celia/2022/Provas/Provas I unidade';

// Promises
// fs.promises.readdir(path).then(files =>{
//     console.log(files)
// });

// Async/Await

// async function teste(){
//     const files = await fs.promises.readdir(VarPath);
//     const filesRead = []
//     console.log(files);
//     for (let i = 0; i < files.length; i++) {
//         const file = files[i];
//         const filePath = Path.join(VarPath, file)
//         console.log(filePath)
//         filesRead.push(filePath)
        
//     }
// }

// teste()

// fs.promises
//     .readFile('D:/Escola Celia/2022/Provas/Provas I unidade/teste.txt', 'utf8')
//     .then(console.log)


// async function teste(){
//     const file = await fs.promises.readFile('D:/Escola Celia/2022/Provas/Provas I unidade/teste.txt', 'utf8');
//     console.log(file)
// }

// teste()

// const readStream = fs.createReadStream('D:/Escola Celia/2022/Provas/Provas I unidade/teste.txt', 'utf8');

// const reader = readline.createInterface({
//     input: readStream,
//     crlfDelay: Infinity,
// })

// let lines = [];

// reader.on('line', (line) =>{
//     lines.push(line)
//     console.log(line)
// })

// once(reader, 'close')

// const content = "Hello World foi 2!";
// const pathToWrite = 'D:/Escola Celia/2022/Provas/Provas I unidade/teste2.txt'
// fs.promises
// .writeFile(pathToWrite, content, 'utf8').then(() => console.log("Foi"))

// fs.promises.appendFile(pathToWrite, '\n teste2')
// fs.promises.rm(pathToWrite)
