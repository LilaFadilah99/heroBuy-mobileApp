const { MongoClient } = require("mongodb");

// const uri = "mongodb://localhost:27017";
const uri = "mongodb+srv://Dila:mongodb@cluster0.zjlg3kt.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

let database;
const dbName = "brand-showcase";

async function connect() {
  try {
    await client.connect();
    console.log("success connect to mongodb");
    const db = client.db(dbName);
    database = db;
    return db;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

function getDatabase() {
  return database;
}

module.exports = {
  getDatabase,
  connect,
};
