import mongoose from "mongoose";

const current = new Date();
const timeStamp = new Date(
  Date.UTC(
    current.getFullYear(),
    current.getMonth(),
    current.getDate(),
    current.getHours(),
    current.getMinutes(),
    current.getSeconds(),
    current.getMilliseconds()
  )
);

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
  created_at: {
    type: Date,
    default: timeStamp,
  },
  updated_at: {
    type: Date,
    default: timeStamp,
  },
});

const board = mongoose.model("prac-board", postSchema);

export default board;
