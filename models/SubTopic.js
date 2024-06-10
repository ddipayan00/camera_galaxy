// import mongoose from "mongoose";
// import autopopulate from "mongoose-autopopulate";

// const subTopicSchema = new mongoose.Schema({
//   topic_name: {
//     type: String,
//     required: true,
//   },
//   parent_topic: [
//     { type: mongoose.Schema.ObjectId, ref: "Topic", autopopulate: true },
//   ],
//   posts: [{ type: mongoose.Schema.ObjectId, ref: "Post", autopopulate: true }],
//   groups: [{ type: mongoose.Schema.ObjectId, ref: "Group", autopopulate: true }],
//   description: {
//     type: String,
//     required: true,
//   },
//   created_at: {
//     type: Date,
//     default: Date.now,
//   },
//   created_by: [
//     { type: mongoose.Schema.ObjectId, ref: "User", autopopulate: true },
//   ],
//   last_modified_at: {
//     type: Date,
//     default: Date.now,
//   },
//   last_modified_by: [
//     { type: mongoose.Schema.ObjectId, ref: "User", autopopulate: true },
//   ],
//   is_spam: {
//     type: Boolean,
//     default: false,
//   },
//   spam_count: {
//     type: Number,
//     default: 0,
//   },
//   is_under_moderation: {
//     type: Boolean,
//     default: false,
//     required: true,
//   },
//   is_test: {
//     type: Boolean,
//     default: false,
//   },
//   is_active: {
//     type: Boolean,
//     default: true,
//   },
// });

// subTopicSchema.plugin(autopopulate);
// export default mongoose.model("SubTopic", subTopicSchema);
