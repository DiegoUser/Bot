

//IMPORTANTE usaba esta api para probar las frases sin necesidad del bot,
//la decidí dejar en el código para mostrar como la iba testeando.

const express = require('express');
const frases = require('../db/frases');

const app = express();
const PORT = 3000;

main: async () => {
  main().catch(err => console.log(err));
};
//Api para testear
app.get('/frase/graciosa', async (req, res) => {
  const frase = await frases.getFraseAleatoria("graciosa");
  res.send(frase.value);
});
app.get('/frase/amistad', async (req, res) => {
  const frase = await frases.getFraseAleatoria("amistad");
  res.send(frase.value);
});
app.get('/frase/informaticos', async (req, res) => {
  const frase = await frases.getFraseAleatoria("informaticos");
  res.send(frase.value);
});

app.get('/', (req, res) => {
  res.send('Testeando');
});

app.listen(PORT, () => {
  console.log('Escuchando en el puerto: ' + PORT);
});
