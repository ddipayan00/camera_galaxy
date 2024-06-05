const express = require("express");
const cors = require("cors");
// import logger from "./logger.cjs";
const apiRouter = require("./routes/apis.js");

const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || 'localhost';
const is_secure_site = process.env.SECURESITE || false;
let PROTOCOL;
if (is_secure_site) {
    PROTOCOL = "https"
}
else {
    PROTOCOL = "http"
}


const app = express();


app.use(cors());
app.use("/upload",apiRouter);

// app.get("/user", (req, res) => {
//     let template;
//     logger.info(JSON.stringify(req.query));
//     if (req.query && Object.keys(req.query).length != 0) {
//         template = `<html><h1>${JSON.stringify(req.query)}</h1></html>`
//     }
//     else {
//         logger.info('User not found!');
//         template = `<html><h1>User not found!</h1></html>`;
//     }
//     res.status(200).send(template)
// })

// app.get("/", (req, res) => {
//     if (req) {
//         if (req.query) {
//             logger.debug(JSON.stringify(req.query));
//             res.status(200).json({
//                 message: req.query,
//                 statusCode: 200
//             })
//         }
//     }
// })

// app.get("*", (req, res) => {
//     res.status(404).send(`<html><h1 style="color:red">Page not found!</h1></html>`)
// })


app.listen(PORT, () => console.log(`App listening at ${PROTOCOL}://${HOST}:${PORT} `));