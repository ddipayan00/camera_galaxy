import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const topicSchema = new mongoose.Schema({
  topic_name: {
    type: String,
    required: true,
  },
  topic_parent_path: {
    type: String,
    required: true,
  }, 
  description: {
    type: String,
    required: true,
  },
  parent_topic: { type: mongoose.Schema.ObjectId, ref: "Topic", autopopulate: true,  },
  child_topic: [
    { type: mongoose.Schema.ObjectId, ref: "Topic", autopopulate: true },
  ],
  groups: [
    { type: mongoose.Schema.ObjectId, ref: "Group", autopopulate: true }
  ],
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

topicSchema.plugin(autopopulate);
export default mongoose.model("Topic", topicSchema);
