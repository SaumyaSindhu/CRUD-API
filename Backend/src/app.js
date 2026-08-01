import express from "express";
import taskRouter from "./routes/tasks.routes.js";

const app = express();

app.use(express.json());
app.use("/tasks", taskRouter);

app.get("/", (req, res) => {
    res.json({
        name: "Task API",
        version: "1.0",
        endpoints: ["/tasks"]
    });
})

app.get("/health", (req, res) => {
    res.json({
        status: "ok"
    });
})

export default app;