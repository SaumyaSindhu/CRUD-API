import express from "express";
import { getAllTasks, getTaskById } from "../controllers/tasks.controller.js";

const tasksRouter = express.Router();

tasksRouter.get("/", getAllTasks);
tasksRouter.get("/:id", getTaskById);

export default tasksRouter;