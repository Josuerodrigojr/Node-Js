import fs from 'fs';
import Path from 'path';

const dirPath = 'D:/Escola Celia/2022/Prova paralela'

// fs.promises.readdir(path).then(files =>(console.log(files)))

// async function teste(){
//     const files = await fs.promises.readdir(dirPath)
//     for (let i=0; i<= files.length; i+=1){
//         const file = files[i]
//         const filePath = Path.join(dirPath,file);
//         filesRead = 
//     }
// }
// teste()

// Leitura de dados

fs.promises.readFile('D:/Escola Celia/2022/Prova paralela','utf8').then(console.log)