import { MongoClient } from "mongodb";
import process_env from "../configs/global_config.js";
const mongo_host = process_env.MONGO_HOST;
const mongo_protocol = process_env.MONGO_PROTOCOL;
const mongo_username = process_env.MONGO_USERNAME;
const mongo_password = process_env.MONGO_PASSWORD;
const mongo_authMechanism = process_env.MONGO_AUTHMECHANISM || "default";

const connection_uri = `${mongo_protocol}://${mongo_username}:${mongo_password}@${mongo_host}`;

export const createMongoClient = () => {
  try {
    // console.log(connection_uri);
    return new MongoClient(connection_uri);
    const client = new MongoClient({
      srv: true,
      host: mongo_host,
      username: mongo_username,
      password: mongo_password,
      authMechanism: mongo_authMechanism,
    });
    console.log("client : ",client);
    return client;
  } catch (e) {
    console.log(e);
    return null;
  }
};
