import db from "../db/database.js";

const toTask = (row) => ({
  id: row.id,
  title: row.title,
  done: Boolean(row.done),
});

export async function getAllTasksRepo() {
  const result = await db.query("SELECT * FROM tasks ORDER BY id ASC");
  return result.rows.map(toTask);
}

export async function getTaskByIdRepo(id) {
  const result = await db.query("SELECT * FROM tasks WHERE id = $1", [id]);
  return result.rows[0] ? toTask(result.rows[0]) : null;
}

export async function createTaskRepo(title) {
  const result = await db.query(
    "INSERT INTO tasks (title, done) VALUES ($1, $2) RETURNING *",
    [title, false]
  );

  return toTask(result.rows[0]);
}

export async function updateTaskRepo(id, title, done) {
  const result = await db.query(
    "UPDATE tasks SET title = $1, done = $2 WHERE id = $3 RETURNING *",
    [title, done, id]
  );

  return result.rows[0] ? toTask(result.rows[0]) : null;
}

export async function deleteTaskRepo(id) {
  const result = await db.query("DELETE FROM tasks WHERE id = $1", [id]);
  return result.rowCount > 0;
}
