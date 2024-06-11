import { Router } from "express";
import {connect_database} from "../controllers/testController.js";
const router = Router();

router.route("/simple-get").get((req,res) => {
    return res.status(200).json({
        message: "get-test"
    });
});

router.route("/simple-post").post((req,res) => {
    return res.status(200).json({
        message: "post-test"
    });
});

router.route("/create-database").get(connect_database);

export default router;