import mongoose from "mongoose";
import process_env from "../configs/global_config.js";
const mongo_host = process_env.MONGO_HOST;
const mongo_protocol = process_env.MONGO_PROTOCOL;
const mongo_username = process_env.MONGO_USERNAME;
const mongo_password = process_env.MONGO_PASSWORD;
const mongo_authMechanism = process_env.MONGO_AUTHMECHANISM || "default";


const createMongoClient = async () => {
  try {
    const connection_uri = `${mongo_protocol}://${mongo_username}:${mongo_password}@${mongo_host}`;
    console.log(connection_uri);
    await mongoose.connect(connection_uri);
    return true;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export default createMongoClient;