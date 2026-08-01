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

export const createTask = (req, res) => {
    const { title } = req.body;

    if (!title || title.trim() === "") {
        return res.status(400).json({
            error: "Title is required"
        })
    }

    const id = tasks.length + 1;

    const newTask = {
        id,
        title,
        done: false
    };

    tasks.push(newTask);

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