const { MongoClient } = require("mongodb");
require("dotenv").config();

// Connection URL
const url = `mongodb+srv://${process.env.DB_username}:${process.env.DB_username}cluster0.cmmr6ft.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(url);

// Database Name
const dbName = process.env.DB_name;

//Global variable
let db;

const connectToDB = async (app) => {
  try {
    await client.connect();

    const db = client.db(dbName);

    console.log("Connected succesffully to database");

    app.listen(process.env.PORT, (err) => {
      if (err) {
        console.log(`cannot start by server by ${err}`);
      }
      console.log(`Server started at http://localhost:${process.ebv.PORT}`);
    });
  } catch (error) {
    console.log(`cannot connect to db`);
  }

  const getCollection = (collectionName) => {
    const coleection = db.collection();
  };

  console.log("Connected successfully to server");
  const collection = db.collection(collectionName);

  return "done.";
};

module.export = { connectToDB, getCollection };
