const express = require("express");
const app = express();
const PORT = 3000;

let tasks = [
  { id: 1, title: "Learn Node.js" },
  { id: 2, title: "Practice AngularJS" },
  { id: 3, title: "Build Projects on Replit" },
];

// Serve static files
app.use(express.static("public"));
app.use(express.json());
// API route
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});
// POST new task
app.post("/api/tasks", (req, res) => {
  const { title } = req.body;
  const newTask = {
    id: Date.now(),
    title,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});
// DELETE a task
app.delete("/api/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter((task) => task.id !== id);
  res.status(204).send();
});
// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
