# Task API

This project is a RESTful CRUD API built with Node.js and Express. The original version used an in-memory or SQLite-style direct database access pattern; this version uses a Postgres repository behind the same route and controller layer so the app behavior stays consistent while storage becomes durable and containerized.

The service and routes are intentionally unchanged. Only the persistence layer was swapped from a direct database access implementation to a repository abstraction backed by Postgres.

---

## Features

- Full CRUD operations for tasks
- Postgres in Docker with a persistent volume
- Repository-based storage layer
- Same controllers and routes as before
- Input validation
- Proper HTTP status codes
- Interactive Swagger API documentation
- Health check endpoint
- Automatic database initialization and seed data

---

## Tech Stack

- Node.js
- Express.js
- PostgreSQL
- pg
- Swagger UI Express
- Docker Compose

---

## API Overview

Base URL

```bash
http://localhost:3000
```

| Method | Route | Description |
| --- | --- | --- |
| GET | `/` | API information |
| GET | `/health` | Health check |
| GET | `/tasks` | Get all tasks |
| GET | `/tasks/:id` | Get one task |
| POST | `/tasks` | Create task |
| PUT | `/tasks/:id` | Update task |
| DELETE | `/tasks/:id` | Delete task |

---

## Local development

From the project root:

```bash
docker compose up --build
```

This starts both the Postgres container and the app container together. Once the app is healthy, open:

```bash
http://localhost:3000
http://localhost:3000/api-docs
```

---

## Environment variables

Create a `.env` file inside `Backend/` using the example file as a template:

```bash
cp Backend/.env.example Backend/.env
```

`Backend/.env` is gitignored and contains the app's database connection string.

```env
PORT=3000
DATABASE_URL=postgresql://postgres:postgres@db:5432/tasksdb
```

When running locally without Docker, the fallback value is:

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/tasksdb
```

---

## Database

The API uses PostgreSQL in Docker with a named volume so task data survives restarts. The database initialization is handled by `Backend/database/init.sql` and a startup check in `Backend/src/db/database.js`.

The table definition is:

```sql
CREATE TABLE IF NOT EXISTS tasks (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  done BOOLEAN NOT NULL DEFAULT FALSE
);
```

---

## Persistence proof

This was checked by creating a task, restarting the app and database container, and confirming the same record still existed after restart.

Example flow:

```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Persistence check"}'

docker compose down
docker compose up --build
curl http://localhost:3000/tasks
```

The inserted task remained available after the restart, confirming persistence through the Docker volume.

---

## Docker Compose

The app and database are launched together from the repo root with:

```bash
docker compose up
```

`docker-compose.yml` includes:

- a Postgres service using a persistent Docker volume
- an app service that depends on Postgres
- the application configured with `DATABASE_URL`

---

## Repository note

The app architecture remains the same from the API consumer perspective: routes and controllers did not change. The only change was in the persistence layer, which was replaced by a Postgres repository implementing the same CRUD contract.

---

## Swagger Documentation

After the app is running, open:

```bash
http://localhost:3000/api-docs
```

---

## Project Structure

```text
CRUD-API/
├── Backend/
│   ├── database/
│   │   └── init.sql
│   ├── src/
│   │   ├── controllers/
│   │   │   └── tasks.controller.js
│   │   ├── db/
│   │   │   └── database.js
│   │   ├── repositories/
│   │   │   └── task.repository.js
│   │   ├── routes/
│   │   │   └── tasks.routes.js
│   │   ├── docs/
│   │   │   └── openapi.json
│   │   └── app.js
│   ├── server.js
│   ├── .env.example
│   ├── .env
│   ├── Dockerfile
│   ├── package.json
│   └── package-lock.json
├── docker-compose.yml
└── README.md
```

---

## Example request

Create a task:

```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Learn Postgres"}'
```

Response:

```json
{
  "id": 1,
  "title": "Learn Postgres",
  "done": false
}
```
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