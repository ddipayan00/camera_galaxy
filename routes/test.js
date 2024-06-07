import { Router } from "express";
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

export default router;