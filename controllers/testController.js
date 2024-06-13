import { mongo_connection_state } from "../handlers/mongo_helper.js";
import Group from "../models/Group.js";
import Image from "../models/Image.js";
import User from "../models/User.js";
import Post from "../models/Post.js";
import Topic from "../models/Topic.js";
import Comment from "../models/Comment.js";
import mongoose from "mongoose";

export const list_database = async (req, res) => {};

export const drop_database = async (req, res) => {
  if (mongo_connection_state() === 1) {
    try {
      const drop_list = [];
      const collections = mongoose.connections[0].collections;
      Object.entries(collections).forEach(async (k, v) => {
        // console.log(v);
        let temp = await k[1].collection
          .drop()
          .then(() => true)
          .catch(() => false);
        drop_list.push(temp);
      });

      const drop_partial = drop_list.some((v) => v === false);
      console.log("drop_partial : ",drop_partial);
      const drop_success = drop_list.every((v) => v === true);
      console.log("drop_success : ",drop_success);
      if (drop_success) {
        return res.status(200).json({
          message: "database drop success!",
          statusCode: 200,
        });
      } else if (drop_partial) {
        return res.status(200).json({
          message: "database drop failed or partially done!",
          statusCode: 200,
        });
      } else {
        return res.status(500).json({
          message: "database drop failed!",
          statusCode: 200,
        });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).send("something went wrong!");
    }
  }
};

export const create_database = async (req, res) => {
  try {
    if (mongo_connection_state() === 1) {
      const group_res = await Group.find();
      console.log("group_res : ", group_res);
      const image_res = await Image.find();
      console.log("image_res : ", image_res);
      const post_res = await Post.find();
      console.log("post_res : ", post_res);
      const topic_res = await Topic.find();
      console.log("topic_res : ", topic_res);
      const comment_res = await Comment.find();
      console.log("comment_res : ", comment_res);
      const user_res = await User.find();
      console.log("user_res : ", user_res);

      return res.status(200).json({
        result: {
          group_res: group_res,
          image_res: image_res,
          user_res: user_res,
          topic_res: topic_res,
          comment_res: comment_res,
          post_res: post_res,
        },
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
