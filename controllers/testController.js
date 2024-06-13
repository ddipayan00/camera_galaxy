import mongoose from "mongoose";
import process_env from "../configs/global_config.js";
export const connect_database = async (req, res) => {
  try {
    const db = create_client();
    if (db) {
      const group_res = await mongoose.model("Group").find();

      return res.status(200).json({
        result: group_res,
        message: "database creation success!",
        statusCode: 200,
      });
    } else {
      console.log("Error connecting to database");
      return res.status(500).send("Error connecting to database");
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("something went wrong!");
  }
};
