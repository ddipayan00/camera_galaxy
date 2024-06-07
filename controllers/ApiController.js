

export const imageHandler = async (req, res) => {
    try {
        console.log(req);
        let myFile = req?.files;
        if (myFile) {
            const fileContent = fs.readFileSync(file.path);
            console.log(myFile);
        };
        return res.status(200).send("<html>gta success</html>");
    }
    catch (err) {
        console.error(err);
        return res.status(500).send("<html>gta error</html>");
    }
};
