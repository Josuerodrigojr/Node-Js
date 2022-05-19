import fetch from "node-fetch";

async function chamada (){
const URL_TO_FETCH = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

const lista = await fetch(URL_TO_FETCH);
const listaJson = await lista.json();
console.log(listaJson)
}

chamada()