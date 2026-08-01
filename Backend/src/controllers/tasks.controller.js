const tasks = [
  {
    id: 1,
    title: "Learn Express",
    done: false,
  },
  {
    id: 2,
    title: "Build CRUD API",
    done: false,
  },
  {
    id: 3,
    title: "Push project to GitHub",
    done: true,
  },
];

export const getAllTasks = (req, res) => {
    res.json(tasks);
}

export const getTaskById = (req, res) => {
    const id = Number(req.params.id);

    const task = tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    res.json(task);
}