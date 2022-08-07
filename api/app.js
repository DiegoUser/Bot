const express = require('express');
const frases = require('../db/frases');

const app = express();
const PORT = 3000;

main: async () => {
  main().catch(err => console.log(err));
};

app.get('/frase/graciosa', async (req, res) => {
  const frase = await frases.getFraseAleatoria("graciosa");
  res.send(frase.value);
});
app.get('/frase/equia', async (req, res) => {
  const frase = await frases.getFraseAleatoria("equia");
  res.send(frase.value);
});
app.get('/frase/equis', async (req, res) => {
  const frase = await frases.getFraseAleatoria("equis");
  res.send(frase.value);
});

app.get('/', (req, res) => {
  res.send('Hola Mundo!');
});

app.listen(PORT, () => {
  console.log('Escuchando en el puerto: ' + PORT);
});
