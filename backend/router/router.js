import express from "express";
import mongoose from "mongoose";
import board from "../db/board.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const page = req.query.page || 1
    console.log(page)
    // const perPage = 4;
    // const page = req.params.page || 1;
    // const allPosts = await board
    //   .find()
    //   .skip(perPage * page - perPage)
    //   .limit(perPage);
    // res.json(allPosts);
    const allPosts = await board.find();
    res.json(allPosts);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await board.findById(id);
    if (!post) return;
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const post = req.body;
    const createdPost = await board.create(post);
    res.status(201).json(createdPost);
  } catch (error) {
    console.log(error);
  }
});

// !! 수정했을 때 created 시간까지 바뀌는 문제 있음 해결요망
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { author, password, title, content } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("게시글 없음");
    const updatedPost = { author, password, title, content, _id: id };
    await board.findByIdAndUpdate(id, updatedPost, { new: true });
    res.json(updatedPost);
  } catch (error) {
    console.log(error);
  }
});

// 데이터 전체 삭제
router.delete("/all", async (req, res) => {
  try {
    await board.deleteMany({})
    res.json({ message: "All Post Deleted" });
  } catch (error) {
    console.log(error)
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await board.findByIdAndRemove(id);
    res.json({ message: "Post Deleted" });
  } catch (error) {
    console.log(error);
  }
});

export default router;
