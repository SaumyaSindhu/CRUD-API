# Task API

A clean, minimal Express.js CRUD API for managing tasks. It ships with a live Swagger UI, simple in-memory data, and a health check so you can spin it up fast and understand it even faster.

## What you get

- Full CRUD endpoints for tasks
- Interactive API docs at `/api-docs`
- JSON-only responses with lightweight validation
- A health endpoint for quick uptime checks
- ES module-based Node.js backend

## Preview

<img width="1919" height="1077" alt="Screenshot 2026-08-01 181344" src="https://github.com/user-attachments/assets/c64c543f-fa24-46b5-abc8-3c7ce7c44367" />


## API Overview

Base URL: `http://localhost:3000`

| Method | Route        | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/`          | Basic API info    |
| GET    | `/health`    | Health check      |
| GET    | `/tasks`     | List all tasks    |
| GET    | `/tasks/:id` | Get a task by ID  |
| POST   | `/tasks`     | Create a new task |
| PUT    | `/tasks/:id` | Update a task     |
| DELETE | `/tasks/:id` | Delete a task     |

## Example Task Shape

```json
{
  "id": 1,
  "title": "Learn Express",
  "done": false
}
```

## Run Locally

```bash
cd Backend
npm install
npm run dev
```

The server starts on port `3000` by default. You can override it with a `.env` file:

```env
PORT=3000
```

## Swagger Docs

Open `http://localhost:3000/api-docs` to explore and test the API in Swagger UI.

## Project Structure

```text
Backend/
├─ server.js
└─ src/
   ├─ app.js
   ├─ controllers/
   │  └─ tasks.controller.js
   ├─ docs/
   │  └─ openapi.json
   └─ routes/
      └─ tasks.routes.js
```

## Notes

- Tasks are stored in memory, so restarting the server resets the data.
- The API is ideal for demos, practice, and as a base for adding a database later.
