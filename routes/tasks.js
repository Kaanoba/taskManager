const router = require('express').Router();
const {getAllTasks,getTasks, updateTasks, deleteTasks, createTasks} = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createTasks);
router.route('/:taskID').get(getTasks).patch(updateTasks).delete(deleteTasks);


module.exports = router;