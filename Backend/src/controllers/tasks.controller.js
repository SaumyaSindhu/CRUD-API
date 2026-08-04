import db from "../db/database.js";

export const getAllTasks = (req, res) => {
    const tasks = db.prepare(
      `SELECT * FROM tasks`
    ).all();

    res.json(tasks);
}

export const getTaskById = (req, res) => {
    const id = Number(req.params.id);

    const task = db.prepare(
      `SELECT *
       FROM tasks
      WHERE id = ?`
    ).get(id);

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    res.json(task);
}

export const createTask = (req, res) => {
    const { title } = req.body;

    if (!title || title.trim() === "") {
        return res.status(400).json({
            error: "Title is required"
        })
    }

    const insert = db.prepare(`
      INSERT INTO tasks (title, done)
      VALUES (?, ?)
    `);

    const result = insert.run(title.trim(), 0);

    const newTask = db.prepare(`
      SELECT *
      FROM tasks
      WHERE id = ?
    `).get(result.lastInsertRowid);

    newTask.done = Boolean(newTask.done);

    res.status(201).json(newTask);
}

export const updateTask = (req, res) => {
    const id = Number(req.params.id);

    const task = tasks.find(task => task.id === id);

    if (!task) {
      return res.status(404).json({
        error: `Task ${id} not found`,
      });
    }

    const { title, done } = req.body;

    if (!title || title.trim() === "") {
      return res.status(400).json({
        error: "Title is required",
      });
    }

    task.title = title;
    task.done = done;

    res.json(task);
}

export const deleteTask = (req, res) => {
    const id = Number(req.params.id);

    const index = tasks.findIndex(task => task.id === id);

    if (index === -1) {
      return res.status(404).json({
        error: `Task ${id} not found`,
      });
    }

    tasks.splice(index, 1);

    res.status(204).send();
}