import createMongoClient from "./controllers/dbController.js";
import setup_runner from "./setups/setup_runner.js";
import app_builder from "./app.js";
import process_env from "./configs/global_config.js";



if (setup_runner() != null) { console.log("Working directories created!") }
else { console.log("Error while creating working directories!"); process.exit(); }


if (createMongoClient() != null) { console.log("Database connection establihed!"); }
else { console.log("Error while connecting to database!"); process.exit(); }



const PORT = process_env.APP_PORT || 3001;
const HOST = process_env.APP_HOST || 'localhost';
const is_secure_site = process_env.APP_SECURESITE || false;

const PROTOCOL = is_secure_site ? "https" : "http";



const app = app_builder();
app.listen(PORT, () => console.log(`App listening at ${PROTOCOL}://${HOST}:${PORT}`));