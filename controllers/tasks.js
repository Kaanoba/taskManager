
const Task = require('../models/Tasks');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find( {} )
        res.json({ tasks });
    } catch (error) {
        res.json({ error })
    }
};

const createTasks = async (req, res) => {
    try{
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (err) {
        res.status(500).json( {msg: err});
    }
};
const getTasks = async (req, res) => {
    try{

        const { taskID } = req.params
        const task = await Task.findOne({ _id: taskID })

        if (!task) {
            return res.status(404).json({ msg: `No task with id : ${taskID}` })
        } else {
            return res.status(200).json({ task });
        }

    } catch (error) {
        res.status(500).json({ error })
    }
};
const updateTasks = async (req, res) => {
    try {
        const { taskID } = req.params
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true,
        } )


        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: 'error' });
    }
};
const deleteTasks = async (req, res) => {
    try{

        const { taskID } = req.params
        const task = await Task.findOneAndDelete({ _id: taskID })

        if (!task) {
            return res.status(404).json({ msg: `No task with id ${taskID}` })
        }
        res.status(200).json({  task: null, message: 'successfully deleted' });




    } catch (error) {
        res.status(500).json({msg: error});
    }
};

module.exports = {
    getAllTasks,
    createTasks,
    getTasks,
    updateTasks,
    deleteTasks
}