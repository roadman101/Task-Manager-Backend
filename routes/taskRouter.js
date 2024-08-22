const express = require("express");    // Import Express Framework
const { getAllTask, createTask, editTask, deleteTask, eachTask } = require("../controller/taskController"); 

const router = express.Router();      // Create a new router instance 

router.get("/", getAllTask); // route to get all tasks, handled by getalltask function
router.post("/create", createTask); // route to create a new task handled by createTask function

router.patch("/:id", editTask)  // route to edit a task handled by editTask function

router.delete("/:id", deleteTask)  //  {Route to delete a }   route to delete a task handled by deleteTask function .

router.get("/:id", eachTask) // Route to get a task handled by the each task function .

module.exports = router;    // Export the router to be used in the main server file app.js