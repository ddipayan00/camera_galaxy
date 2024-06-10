import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const commentSchema = new mongoose.Schema({
  comment_data: {
    type: String,
    required: true,
  },
  parent_comment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
    autopopulate: true,
    default: null,
  },
  child_comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
      autopopulate: true,
      default: null,
    },
  ],
  post: {
    type: mongoose.Schema.ObjectId,
    ref: "Post",
    autopopulate: true,
  },
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
  spam_count: {
    type: Number,
    default: 0,
  },
  is_under_moderation: {
    type: Boolean,
    default: false,
    required: true,
  },
  is_test: {
    type: Boolean,
    default: false,
  },
  is_available: {
    type: Boolean,
    default: true,
  },
});

commentSchema.plugin(autopopulate);
export default mongoose.model("Comment", commentSchema);
