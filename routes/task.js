const express = require('express');
const passport = require('passport');
const router = express.Router();
// task controller
const taskController = require('../controller/task_controller');

//create task
router.post('/create',passport.checkAuthentication,taskController.addTask);

//delete task
router.get('/delete/:id',passport.checkAuthentication,taskController.deleteTask)

//edit task
router.get('/edit/:id',passport.checkAuthentication,taskController.editTaskPage);

//update task
router.post('/update',passport.checkAuthentication,taskController.updateTask);

module.exports = router;