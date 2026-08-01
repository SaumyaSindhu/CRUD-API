import express from "express";
import taskRouter from "./routes/tasks.routes.js";

import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./docs/openapi.json" with { type: "json" };

const app = express();

app.use(express.json());
app.use("/tasks", taskRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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