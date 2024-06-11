import { createMongoClient } from "./dbController.js";

const create_client = () => {
  try {
    const client = createMongoClient();
    if (client) {
      const db = client.connect();
      return db;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const connect_database = async (req, res) => {
  try {
    const db = create_client();
    if (db) {
      const list_of_databases = await db.listDatabases();
      console.log(list_of_databases);
      console.log("instance : ", typeof list_of_databases);
      return res.status(200).json({
        result: list_of_databases,
        message: "database creation success!",
        statusCode: 200,
      });
    } else {
      console.log("Error connecting to database");
      return res.status(500).send("Error connecting to database");
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("something went wrong!");
  }
};
