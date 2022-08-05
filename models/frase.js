const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fraseSchema = new Schema({
    tipo: String,
    contenido: String
})

//crear modelo
const Frase = mongoose.model('Frase', fraseSchema);

module.exports = Frase;