import { Router } from "express";
const router = Router();

router.route("/simple-get").get((req,res) => {
    return res.status(200).json({
        message: "test"
    });
});

export default router;