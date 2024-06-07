import { Router } from "express";
import multer from 'multer';
import {imageHandler} from "../controllers/ApiController.js";
const router = Router();
// const arrayBuffer = await file.arrayBuffer()
// const buffer = Buffer.from(arrayBuffer)
const upload = multer({ dest: 'uploads/' });
router.route("/image").post(upload.single('file'),imageHandler);


router.route("/tiny_video").get(async (req, res) => {
    try {

        let myFile = req.files;
        if (myFile) {
            
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