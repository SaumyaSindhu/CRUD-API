import {
  getAllTasksRepo,
  getTaskByIdRepo,
  createTaskRepo,
  updateTaskRepo,
  deleteTaskRepo,
} from "../repositories/task.repository.js";

export const getAllTasks = async (req, res) => {
  const tasks = await getAllTasksRepo();
  res.json(tasks);
};

export const getTaskById = async (req, res) => {
  const id = Number(req.params.id);
  const task = await getTaskByIdRepo(id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  res.json(task);
};

export const createTask = async (req, res) => {
  const { title } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({
      error: "Title is required",
    });
  }

  const newTask = await createTaskRepo(title.trim());
  res.status(201).json(newTask);
};

export const updateTask = async (req, res) => {
  const id = Number(req.params.id);
  const { title, done } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({
      error: "Title is required",
    });
  }

  if (typeof done !== "boolean") {
    return res.status(400).json({
      error: "Done must be a boolean",
    });
  }

  const updatedTask = await updateTaskRepo(id, title.trim(), done);

  if (!updatedTask) {
    return res.status(404).json({
      error: `Task ${id} not found`,
    });
  }

  res.json(updatedTask);
};

export const deleteTask = async (req, res) => {
  const id = Number(req.params.id);
  const wasDeleted = await deleteTaskRepo(id);

  if (!wasDeleted) {
    return res.status(404).json({
      error: `Task ${id} not found`,
    });
  }

  res.sendStatus(204);
};