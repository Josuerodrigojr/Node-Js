import fetch from "node-fetch";

function prompt(){
    return new Promise((resolve,reject)=>{
        const URL_TO_FETCH = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

        const lista = fetch(URL_TO_FETCH).then(lista => lista.json());
        resolve(lista)

    })
}

prompt().then(console.log);