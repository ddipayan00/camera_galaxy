import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";
// import subTopicSchema from "mongoose";
const imageSchema = new mongoose.Schema({
  raw_data: {
    type: Buffer,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  mimetype: {
    type: String,
    required: true,
  },
  encoding: {
    type: String,
    required: true,
  },
  generated_file_name: {
    type: String,
    required: true,
  },
  original_file_name: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  created_by: [
    { type: mongoose.Schema.ObjectId, ref: "User", autopopulate: true },
  ],
  last_modified_at: {
    type: Date,
    default: Date.now,
  },
  last_modified_by: [
    { type: mongoose.Schema.ObjectId, ref: "User", autopopulate: true },
  ],
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
  is_test: {
    type: Boolean,
    default: false,
  },
});

imageSchema.plugin(autopopulate);
export default mongoose.model("Image", imageSchema);
