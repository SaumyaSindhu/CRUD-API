import express from "express";

const app = express();

app.use(express.json());

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