// app.get('/api/v1/tasks')         - Get All The Task
const getAllTasks = (req, res) => {
  res.send("Get All Task");
};

// app.post('/api/v1/tasks')        - Create a new Task
const createTask = (req, res) => {
  res.json(req.body);
};

// app.get('/api/v1/tasks/:id')     - Get Single Task
const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

// app.path('/api/v1/tasks/:id')    - Update Task
const updateTask = (req, res) => {
  res.send("Update Task");
};

// app.delete('/api/v1/tasks/:id')  - Delete Task
const deleteTask = (req, res) => {
  res.send("Delete Task");
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
