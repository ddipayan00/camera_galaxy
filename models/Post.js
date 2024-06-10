import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const postSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  post_type: {
    type: String,
    required: true,
  },
  topic: {
    type: mongoose.Schema.ObjectId,
    required: false,
    ref: "Topic",
    autopopulate: true,
  },
  group: {
    type: mongoose.Schema.ObjectId,
    required: false,
    ref: "Group",
    autopopulate: true,
  },
  image: [
    {
      type: mongoose.Schema.ObjectId,
      required: false,
      ref: "Image",
      autopopulate: true,
    },
  ],
  created_at: {
    type: Date,
    default: Date.now,
  },
  created_by: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    autopopulate: true,
  },
  last_modified_at: {
    type: Date,
    default: Date.now,
  },
  last_modified_by: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    autopopulate: true,
  },
  is_spam: {
    type: Boolean,
    default: false,
  },
  is_under_moderation: {
    type: Boolean,
    default: false,
  },
  is_available: {
    type: Boolean,
    default: true,
  },
  spam_count: {
    type: Number,
    default: 0,
  },
  is_test: {
    type: Boolean,
    default: false,
  },
  like_count: {
    type: Number,
    default: 0,
    required: true,
  },
});

postSchema.plugin(autopopulate);
export default mongoose.model("Image", postSchema);
