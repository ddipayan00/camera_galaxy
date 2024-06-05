const logger = require("../logger.js");


const imageHandler = async (req, res) => {
    try {
        logger.debug(JSON.stringify(req))
        let myFile = req.files;
        if (myFile) {
            
        };
        res.status(200).send("<html>gta success in imageHandler</html>");
    }
    catch (err) {
        logger.info(JSON.stringify(err));
        res.status(500).send("<html>gta error in imageHandler</html>");
    }
}
const imageHandler1 = async (req, res) => {
    try {
        let myFile = req.files;
        if (myFile) {
            
        };
        res.status(200).send("<html>gta success in imageHandler1</html>");
    }
    catch (err) {
        logger.info(JSON.stringify(err));
        res.status(500).send("<html>gta error in imageHandler1</html>");
    }
}

module.exports = imageHandler,imageHandler1;