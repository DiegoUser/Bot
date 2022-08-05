const mongoClient = require('mongoose');
const app = require('express');
const PORT = 3000;

const user = 'dmg';
const password = '2y14wtWkRf3VXZfJ';
const dbname = 'HeyNow';
const uri = `mongodb+srv://${user}:${password}@${dbname}.umqxrmr.mongodb.net/?retryWrites=true&w=majority`;

const db='';

async function main() {
  
    main().catch(err => console.log(err));
    await mongoose.connect(uri);
  }

  app.listen(PORT, () => {
    console.log("Escuchando en el puerto: " + PORT);
  });