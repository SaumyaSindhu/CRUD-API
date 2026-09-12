import express from "express";
import { getProfile } from "../controllers/profileController.js";

const protectedRouter = express.Router();

protectedRouter.get(
  "/profile",
  (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        error: "Access token required",
      });
    }

    if (!authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        error: "Access token required",
      });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        error: "Access token required",
      });
    }

    // Token exists, but we DON'T verify it yet.
    req.token = token;

    next();
  },
  getProfile,
);

export default protectedRouter;
