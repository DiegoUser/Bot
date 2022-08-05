const express = require("express");
const app = express();
//conexión a base de datos
const mongoose = require('mongoose');

const Frase = require('../models/frase')

const user = 'dmg';
const password = '2y14wtWkRf3VXZfJ';
const dbname = 'HeyNow';
const uri = `mongodb+srv://${user}:${password}@${dbname}.umqxrmr.mongodb.net/?retryWrites=true&w=majority`;

async function main() {
  
  main().catch(err => console.log(err));
  await mongoose.connect(uri);
}

const PORT = 3000;

const quotes = require("./frases.json");

app.get("/quotes/:type", (req, res) => {
  const type = req.params.type;

  if (!Object.keys(quotes).includes(type)) {
    res.json("Not found");
  }

  const selectedQuotes = quotes[type];
  const index = Math.ceil(Math.random() * (selectedQuotes.length - 1 - 0) + 0);

res.json({
  quote: selectedQuotes[index],
});

})

app.listen(PORT, () => {
  console.log("Escuchando en el puerto: " + PORT);
});
