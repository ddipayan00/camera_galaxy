

export const imageHandler = async (req, res) => {
    try {
        let myFile = req?.files;
        if (myFile) {
            
        };
        return res.status(200).send("<html>gta success</html>");
    }
    catch (err) {
        console.error(err);
        return res.status(500).send("<html>gta error</html>");
    }
};
export const imageHandler1 = async (req, res) => {
    try {
        let myFile = req?.files;
        if (myFile) {
            
        };
        return res.status(200).send("<html>gta success</html>");
    }
    catch (err) {
        return res.status(500).send("<html>gta</html>");
    }
};
