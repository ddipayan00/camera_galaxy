const express = require("express");
const logger = require("../logger.js").default;
const imageHandler = require("../controllers/ApiController.js");
const router = express.Router();
// const arrayBuffer = await file.arrayBuffer()
// const buffer = Buffer.from(arrayBuffer)

router.route("/image").get(imageHandler);


router.route("/tiny_video").get(async (req, res) => {
    try {

        let myFile = req.files;
        if (myFile) {
            
        };
        res.status(200).send("<html>gta</html>")
    }
    catch (err) {
        logger.info(JSON.stringify(err));
    }
});

router.route("/full_video").post(async (req, res) => {
    try {
        let myFile = req.files;
        if (myFile) {
            logger.info(JSON.stringify(myFile)) 
        };
        res.status(200).send("<html>gta</html>")
    }
    catch (err) {
        logger.info(JSON.stringify(err));
    }
});

module.exports = router;