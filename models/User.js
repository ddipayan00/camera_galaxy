import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    trim: true,
    required: true,
  },
  lastname: {
    type: String,
    trim: true,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: false
  },
  country_code: {
    type: String,
    trim: true,
    required: false,
  },
  mobile: {
    type: String,
    trim: true,
    required: false,
  },
  last_modified_at: {
    type: Date,
    default: Date.now,
    required: true,
  },
  is_spam: {
    type: Boolean,
    default: false,
  },
  is_under_moderation: {
    type: Boolean,
    default: false,
  },
  is_image_upload_active: {
    type: Boolean,
    default: false,
  },
  spam_count: {
    type: Number,
    default: 0,
  },
  is_available: {
    type: Boolean,
    default: true,
  },
  is_test: {
    type: Boolean,
    default: false,
  },
  last_login_at: {
    type: Date,
    default: Date.now,
    required: true,
  },
  last_login_device: {
    type: String,
    default: null,
    required: true,
  },
  last_login_ip_address: {
    type: String,
    default: null,
    required: true,
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    autopopulate: true,
    required: false,
  }],
  topics: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Topic",
    autopopulate: true,
    required: false,
  }],
  groups: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Group",
    autopopulate: true,
    required: false,
  }],
}
);

export default mongoose.model("User", userSchema);
