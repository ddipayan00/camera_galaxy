import { Router } from "express";
import { imageHandler } from "../controllers/ApiController.js";
import { upload } from "../configs/multer_config.js";

const router = Router();


router.route("/image").post(upload.single('file'), imageHandler);


router.route("/tiny_video").get(async (req, res) => {
    try {

        let myFile = req?.file;
        if (myFile) {
            console.log("file found!");
            console.log("req.files : ",myFile);
        };
        res.status(200).send("<html>gta</html>")
    }
    catch (err) {
        info(JSON.stringify(err));
        res.status(200).send("<html>gta</html>")
    }
});

router.route("/full_video").post(async (req, res) => {
    try {
        let myFile = req.files;
        if (myFile) {
            info(JSON.stringify(myFile))
        };
        res.status(200).send("<html>gta</html>")
    }
    catch (err) {
        info(JSON.stringify(err));
    }
});

export default router;