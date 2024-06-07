

export const imageHandler = async (req, res) => {
    try {
        let myFile = req?.file;
        if (myFile) {
            console.log("file found!");
            console.log("req.files : ",myFile);
            return res.status(200).json({
                message: 'File uploaded successfully',
                file: req.file
            });
        };
        return res.status(200).send("<html>file not found</html>");
    }
    catch (err) {
        console.error(err);
        return res.status(500).send("<html>gta error</html>");
    }
};
