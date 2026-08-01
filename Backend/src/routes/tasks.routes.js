import express from "express";
import { getAllTasks, getTaskById, createTask } from "../controllers/tasks.controller.js";

const tasksRouter = express.Router();

tasksRouter.get("/", getAllTasks);
tasksRouter.get("/:id", getTaskById);
tasksRouter.post("/", createTask);
export default tasksRouter;