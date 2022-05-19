
import readline from 'readline';

const createPrompt = (readline) => {
    return (question) => {
    return new Promise ((result, reject) =>{
        const terminal = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        })

        terminal.question(question, (value) =>{
            terminal.close();
            result(value);
        })

    })
}
}

console.log("Chamou")
const prompt = createPrompt(readline);
export default prompt

// import readline from 'readline';

// const createPrompt = (readline) => {
//   return (question) => {
//     return new Promise((resolve, reject) => {
//       const terminal = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout,
//       });

//       terminal.question(question, (result) => {
//         terminal.close();
//         resolve(result);
//       });
//     });
//   };
// };

// console.log("Chamou")
// const prompt = createPrompt(readline);
// export default prompt;