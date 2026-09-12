import express from "express";
import "./db/database.js";
import taskRouter from "./routes/tasks.routes.js";
import authRouter from "./routes/auth.routes.js";
import protectedRouter from "./routes/protected.routes.js";

import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./docs/openapi.json" with { type: "json" };

const app = express();

app.use(express.json());
app.use("/tasks", taskRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/auth", authRouter);
app.use("/protected", protectedRouter);

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

app.get("/public/info", (req, res) => {
  res.status(200).json({
    message: "Welcome stranger! This info is public.",
  });
});

export default app;