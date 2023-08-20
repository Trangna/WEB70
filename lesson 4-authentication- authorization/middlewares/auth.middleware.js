import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  if (!token) {
    return res.status(400).json({
      message: "Missing access token",
    });
  }

  try {
    const decoded = jwt.verify(token, secret_key);
    next();
  } catch (error) {
    return res.status(401).json({
      error,
    });
  }
};
