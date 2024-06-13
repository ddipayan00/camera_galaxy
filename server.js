import connectToMongo from "./controllers/dbController.js";
import setup_runner from "./setups/setup_runner.js";
import app_builder from "./app.js";
import process_env from "./configs/global_config.js";
import { mongo_connection_state } from "./handlers/mongo_helper.js";

if (setup_runner() != null) {
  console.log("Working directories created!");
} else {
  console.log("Error while creating working directories!");
  process.exit();
}

const PORT = process_env.APP_PORT;
const HOST = process_env.APP_HOST;
const is_secure_site = process_env.APP_SECURESITE;

const PROTOCOL = !is_secure_site ? "https" : "http";

mongo_connection_state();

const app = app_builder();

app.listen(PORT, async () => {
  const connection = await connectToMongo("test");

  if (connection === true) {
    console.log("Database connection established!");
    mongo_connection_state();
  } else {
    console.log("Error while connecting to database!");
    process.exit();
  }

  console.log(`App listening at ${PROTOCOL}://${HOST}:${PORT}`);
});
