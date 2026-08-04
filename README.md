# Task API

A clean, production-inspired RESTful CRUD API built with **Node.js**, **Express.js**, and **SQLite**. The project demonstrates backend fundamentals such as REST architecture, routing, controllers, SQL database integration, request validation, and interactive API documentation using Swagger UI.

---

## Features

- Full CRUD operations for tasks
- SQLite database for persistent storage
- Clean Routes + Controllers architecture
- Input validation
- Proper HTTP status codes
- Interactive Swagger API documentation
- Health check endpoint
- Automatic database creation and seeding

---

## Tech Stack

- Node.js
- Express.js
- SQLite
- better-sqlite3
- Swagger UI Express

---

## Preview

<img width="1919" height="1077" alt="Swagger UI" src="https://github.com/user-attachments/assets/c64c543f-fa24-46b5-abc8-3c7ce7c44367" />

---

# API Overview

**Base URL**

```
http://localhost:3000
```

| Method | Route | Description |
|---------|------|-------------|
| GET | `/` | API Information |
| GET | `/health` | Health Check |
| GET | `/tasks` | Get all tasks |
| GET | `/tasks/:id` | Get task by ID |
| POST | `/tasks` | Create task |
| PUT | `/tasks/:id` | Update task |
| DELETE | `/tasks/:id` | Delete task |

---

# Example Task Object

```json
{
  "id": 1,
  "title": "Learn Express",
  "done": false
}
```

---

# Installation

Clone the repository

```bash
git clone https://github.com/SaumyaSindhu/CRUD-API.git
```

Navigate into the backend folder

```bash
cd CRUD-API/Backend
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

The server runs on:

```
http://localhost:3000
```

---

# Environment Variables

Create a `.env` file inside the Backend folder.

```env
PORT=3000
```

---

# Database

This project uses **SQLite** with the **better-sqlite3** package.

The database file

```
tasks.db
```

is automatically created when the application starts.

On the first run the application automatically:

- Creates the database
- Creates the `tasks` table
- Seeds three default tasks

Data is persisted even after restarting the server.

---

# Swagger Documentation

After running the server, open:

```
http://localhost:3000/api-docs
```

Swagger UI lets you:

- View every endpoint
- Send requests
- Test the API directly from the browser
- Inspect request and response bodies

---

# Project Structure

```text
Backend/
│
├── src/
│   ├── controllers/
│   │   └── tasks.controller.js
│   │
│   ├── db/
│   │   └── database.js
│   │
│   ├── docs/
│   │   └── openapi.json
│   │
│   ├── routes/
│   │   └── tasks.routes.js
│   │
│   └── app.js
│
├── server.js
├── package.json
├── package-lock.json
├── tasks.db
├── .env
└── README.md
```

---

# Example Requests

## Create Task

**POST**

```
/tasks
```

Body

```json
{
  "title": "Learn SQLite"
}
```

Response

```json
{
  "id": 4,
  "title": "Learn SQLite",
  "done": false
}
```

---

## Update Task

**PUT**

```
/tasks/4
```

Body

```json
{
  "title": "Learn SQLite Database",
  "done": true
}
```

---

## Delete Task

**DELETE**

```
/tasks/4
```

Response

```
204 No Content
```

---

# HTTP Status Codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 201 | Resource Created |
| 204 | No Content |
| 400 | Bad Request |
| 404 | Resource Not Found |

---

# Learning Outcomes

This project demonstrates understanding of:

- REST API development
- Express.js routing
- Controller-based architecture
- SQLite database integration
- SQL queries (SELECT, INSERT, UPDATE, DELETE)
- Request validation
- Swagger API documentation
- Git & GitHub workflow

---

# Future Improvements

- JWT Authentication
- PostgreSQL + Prisma ORM
- User Accounts
- Pagination
- Filtering & Search
- Automated Testing (Jest)
- Docker Support
- Deployment

---

# Author

**Saumya Sindhu**

Computer Science (IoT) Undergraduate  
Guru Gobind Singh Indraprastha University

GitHub: https://github.com/SaumyaSindhu

---

## License

This project is developed for learning purposes as part of the **FlyRank Backend Internship** assignment.