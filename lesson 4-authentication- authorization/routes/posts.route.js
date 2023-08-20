import express from "express";
import { v4 as uuidv4 } from "uuid";
import { posts } from "../utils/mockData.js";
import logAPI from "../middlewares/logAPI.mdw.js";
import jwt from "jsonwebtoken";
const router = express.Router();

//Middleware handlers : should move to a separate folder
// const logAPI = (req, res, next) => {
//   const currentDate = new Date();
//   console.log(`API is coming as ${currentDate}`);
//   next();
// };

//Dua middleware logAPI
// router.use(logAPI);

router.get(
  "/",
  // (req, res, next) => {
  //   const isValid = true;
  //   if (isValid) {
  //     console.log("1. Kiem tra chay no");
  //     next();
  //   } else {
  //     res.status(400).send("Something wrong");
  //   }
  // },
  // (req, res, next) => {
  //   console.log("2. Kiem tra ve");
  // },

  (req, res) => {
    const token = req.header["x-access-token"];
    secret_key = "MINDX_WEB_FULLSTACK_70";
    console.log("3. Buoc cuoi");

    res.json({
      data: posts,
    });
  }
);

router.get("/:id", (req, res) => {
  const postId = req.params.id;

  const existingPost = posts.find((post) => post.id === postId);

  if (!existingPost) {
    return res.json({
      message: "Resource is not existence",
    });
  }

  return res.json({
    data: existingPost,
  });
});

router.post("/", (req, res) => {
  const body = req.body;

  const newPost = {
    ...body,
    id: uuidv4(),
  };

  posts.push(newPost);

  res.json({
    message: "Create new post successfully",
  });
});

router.put("/:id", (req, res) => {
  const postId = req.params.id;
  const body = req.body;

  const existingPostIndex = posts.findIndex((post) => post.id === postId);

  if (existingPostIndex === -1) {
    return res.json({
      message: "Resource is not exist",
    });
  }

  const updatedPost = {
    ...posts[existingPostIndex],
    ...body,
  };

  posts[existingPostIndex] = updatedPost;

  return res.json({
    message: "Update successfully",
  });
});

router.delete("/:id", (req, res) => {
  const postId = req.params.id;
  const existingPostIndex = posts.findIndex((post) => post.id === postId);
  if (existingPostIndex === -1) {
    return res.json({
      message: "Resource is not exist",
    });
  }

  posts.splice(existingPostIndex, 1);

  return res.json({
    message: "Delete successfully",
  });
});

export default router;
