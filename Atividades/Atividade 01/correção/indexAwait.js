import fetch from "node-fetch";

const baseURL = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

async function fetchAsync(){
    const response = await fetch(baseURL);
    const json = await response.json()
    console.log(json) 
}

fetchAsync()