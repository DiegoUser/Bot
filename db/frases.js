const conn = require("./connection");

module.exports = {
  getFraseAleatoria: async (type) => {
    const database = conn.getDatabase();
    const frases = database.collection("frases");
    const query = { type: type };
    const options = {
      sort: { value: -1 },
      projection: { _id: 0, value: 1, type: 1 },
    };

    const frasesCursor = await frases.find(query, options);
    const arr = await frasesCursor.toArray();
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
  },
};