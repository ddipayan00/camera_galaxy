import { Router } from "express";
import {
  create_database,
  drop_database,
  list_database,
} from "../controllers/testController.js";
const router = Router();

router.route("/simple-get").get((req, res) => {
  return res.status(200).json({
    message: "get-test",
  });
});

router.route("/simple-post").post((req, res) => {
  return res.status(200).json({
    message: "post-test",
  });
});

router.route("/create-database").get(create_database);
router.route("/drop-database").get(drop_database);
router.route("/list-database").get(list_database);

export default router;
