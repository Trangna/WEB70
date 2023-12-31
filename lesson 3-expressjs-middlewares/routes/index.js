import express from "express";
import postRouter from "./posts.js";
import userRouter from "./users.js";
import commentRouter from "./comments.js";

const router = express.Router();

//Dua middleware logAPI. Tat ca cac API deu can luu log
router.use(logAPI);

router.use("/posts", postRouter);
router.use("/users", userRouter);
router.use("/comments", commentRouter);

export default router;
