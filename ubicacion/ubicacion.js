const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
    getUbicacion : async () => {
let response = await fetch("http://ipwho.is/");
let ubicacion = await response.json();
return ubicacion;
    }
}
