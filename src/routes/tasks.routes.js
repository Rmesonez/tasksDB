const { Router } = require('express');
const router = Router();
const Task = require('../models/Task');
const { 
    getAllTasks, 
    createTask,
    updateTask,
    deleteTask,
    getOneTask
    } = require('../utils/tasks.controller');




// Get all tasks
router.get('/api/v1/todos', getAllTasks);

// Create a task
router.post('/api/v1/todos', createTask);

// Update a task
router.put('/api/v1/todos/:id', updateTask);

// Delete a task
router.delete('/api/v1/todos/:id', deleteTask);

// Get a task
router.get('/api/v1/todos/:id', getOneTask);


module.exports = router;