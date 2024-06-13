import express from "express";
import cors from "cors";
import apiRouter from "./routes/apisRoute.js";
import testRoute from "./routes/testRoute.js";


const app_builder = () => {
    const app = express();
    app.use(cors());
    app.use("/test", testRoute);
    app.use("/upload", apiRouter);
    return app;
};
export default app_builder;



