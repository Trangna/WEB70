import express from "express";
import logAPI from "../middlewares/logAPI.mdw";
const router = express.Router();

router.get("/", logAPI, (req, res) => {
  res.send("Comments API");
});

export default router;
