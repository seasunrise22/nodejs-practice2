import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const board = mongoose.model("prac-board", postSchema);

export default board;