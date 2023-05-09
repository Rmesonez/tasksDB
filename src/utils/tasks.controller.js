const Task  = require('../models/Task.models');

const getAllTasks = async (req, res) => {
    try {
        const getTasks = await Task.findAll();
        // console.log(getTasks)
        // res.send('get all tasks');
        res.json(getTasks);
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong cannot get tasks',
        });
    }
};

const createTask = async (req, res) => {
    const { title, description, completed } = req.body;
    try {
        const newTask = await Task.create({ title, description, completed });
        // console.log(newTask)
        // res.send('task created');
        res.json(newTask);
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong cannot create a task',
        });
    }
};

const updateTask = async (req, res) => {
    const { title, description, completed } = req.body;
    try {
        const updateTask = await Task.update(
            { title, description, completed },
            { where: { id: req.params.id }
        });
        res.json(updateTask);
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong cannot update a task',
        });
    }
};

const deleteTask = async (req, res) => {
    // console.log(req.params.id)
    try {
        await Task.destroy({ where: { id: req.params.id } });
        res.status(204).json({
            message: 'Task deleted successfully',
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong cannot delete a task',
        });
    }
};

const getOneTask = async (req, res) => {
    try{
        const getTask = await Task.findOne({ where: { id: req.params.id } });
        res.json(getTask);
    }   catch (error) {
        return res.status(500).json({
            message: 'Something went wrong cannot get a task',
        });
    }
};


module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    getOneTask
};

