import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();
const userMockData = [
  {
    id: "1",
    username: "alice",
    password: "alice@123",
    fullname: "Alice H",
  },
  {
    id: "2",
    username: "bob",
    password: "bob@123",
    fullname: "Bobby",
  },
  {
    id: "3",
    username: "charlie",
    password: "charlie@123",
    fullname: "Charlie H",
  },
];

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // 1. Validation
  if (!username || !password) {
    return res.status(400).json({
      message: "Missing required key",
    });
  }

  // 2. Check authentication
  const existingUser = userMockData.find(
    (u) => u.username === username && u.password === password
  );

  if (!existingUser) {
    return res.status(401).json({
      message: "Invalid username or password",
    });
  }

  // 3. Generate an access token (JWT)
  // a JWT includes 3 parts, separating by "."
  // - Header: algorithm + type of toke
  // - Payload/body: info that developers want to attach to the token
  // - Footer: infor of signature (secret key)

  const jwtPayload = {
    username: existingUser.username,
    id: existingUser.id,
    fullname: existingUser.fullname,
  };

  const secret_key = process.env.secret_key;
  const token = jwt.sign(jwtPayload, secret_key, {
    expiresIn: "30s",
  });

  res.json({
    message: "Login successfully",
    user: jwtPayload,
    accessToken: token,
  });
});

export default router;
