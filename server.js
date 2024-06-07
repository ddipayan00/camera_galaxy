import express from "express";
import cors from "cors";
import apiRouter from "./routes/apis.js";
import testRoute from "./routes/test.js";

import { create_logs_directory } from "./setups/logging_setup.js";
import { create_upload_directory } from "./setups/upload_folder_setup.js";
import { create_working_directory } from "./setups/directory_setup.js";


const PORT = process.env.APP_PORT || 3001;
const HOST = process.env.APP_HOST || 'localhost';
const is_secure_site = process.env.APP_SECURESITE || false;

const PROTOCOL = is_secure_site ? "https":"http";

const app = express();
app.use(cors());
app.use("/test",testRoute);
app.use("/upload",apiRouter);

create_working_directory();
create_logs_directory();
create_upload_directory();

app.listen(PORT, () => console.log(`App listening at ${PROTOCOL}://${HOST}:${PORT} `));