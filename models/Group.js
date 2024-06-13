import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const groupSchema = new mongoose.Schema({
  group_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  topics: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Topic",
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
  is_active: {
    type: Boolean,
    default: true,
  },
});

groupSchema.plugin(autopopulate);
export default mongoose.model("Group", groupSchema);
