import fetch from "node-fetch";

const baseURL = "https://pokeapi.co/api/v2/pokemon/?limit=151";

// Promise
function fetchWithPromise() {
  fetch(baseURL).then((response) => {
    response.json().then((json) => {
      console.log(json);
    });
  });
}



fetchWithPromise();
