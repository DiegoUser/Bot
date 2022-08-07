const { MongoClient } = require("mongodb");

const user = "dmg";
const password = "2y14wtWkRf3VXZfJ";
const dbname = "api";
const uri = `mongodb+srv://${user}:${password}@cluster0.umqxrmr.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

let database = client.db(dbname);
module.exports = {
  getDatabase: () => {
    return database;
  },
};