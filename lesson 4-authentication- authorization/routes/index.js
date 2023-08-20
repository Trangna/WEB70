import express from "express";
import postRouter from "./posts.route.js";
import userRouter from "./users.js";
import commentRouter from "./comments.route.js";
import authRouter from "./auth.route.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import "dotenv/config";
import logAPI from "../middlewares/logAPI.mdw.js";
const router = express.Router();

//Dua middleware logAPI. Tat ca cac API deu can luu log
router.use(logAPI);

router.use("/posts", authMiddleware, postRouter);
router.use("/users", userRouter);
router.use("/comments", commentRouter);
router.use("/auth", authRouter);

export default router;
