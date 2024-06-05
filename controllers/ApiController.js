
const imageHandler = async (req, res) => {
    try {
        let myFile = req.files;
        if (myFile) {
            
        };
        res.status(200).send("<html>gta</html>");
    }
    catch (err) {
        logger.info(JSON.stringify(err));
        res.status(500).send("<html>gta</html>");
    }
}
export default imageHandler;