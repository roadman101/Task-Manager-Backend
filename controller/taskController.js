// A controller in Back-end is like a manager that handles the logic for specific paths of your application. it decides what should happen when a request comes in and cordinate between the request, your data and response 


// const task = require("../models/task");
const Task = require("../models/task");
const validateID = require("../utils/validateID");
// const validateID 


// ======= Function to get all the tasks ========= ==
const getAllTask = async (req, res) => {
    const tasks = await Task.find({});  // Retrieve all tasks from the database
    res.status(200).json({ tasks });  // Send the retrieved task in a JSON response
};

// ========== Function for Creating a New Task =================

const createTask = async (req, res) => {
    const { title, description, tag} = req.body;  // Destructure the required fields from the request body

    if (!title) {
        return res.status(400).json({message: "Please provide a title"})
    }

    if (!description) {
        return res.status(400).json({message: "Please provide a Description"})
    }

    if (!tag) {
        return res.status(400).json({message: "Please provide a Tag"})
    }

    const task = await Task.create(req.body);  // Create a new task with the request data
    res.status(201).json({ message: "Task created successfully", task });   // Send a status code with a message of success 
};

// ======== FUNCTION FOR EDITING AN EXISTING TASK ========

const editTask = async (req, res) => {
    const { id } = req.params;   //Get the task ID from the request parameters

    if (!validateID(id)) {
        return res.status(400).json({ message: `ID: ${id} is not valid` })
    }

    const task = await Task.findOneAndUpdate({ _id: id }, { ...req.body });  // Update the task with the provided data.
    res.status(200).json({ message: "Task updated successfully" });  // Send a status code with a message of successfully updated. 
};

// ====== Function to Delete an existing task =========
const deleteTask = async (req, res) => {
    const { id } = req.params;  // Get the task ID form the requested parameter
    if (!validateID(id)) {
        return res.status(400).json({message: `ID: ${id} is not valid`})
    }
    const task = await Task.findOneAndDelete({ _id: id });  // Delete the task with the special ID
    res.status(200).json({ message: "Task deleted successfully" });  // Send success message if deletion is successful.
};

//======= ===Function to get each Task ======
const findEachTask = async (req, res) => {
    const { id } = req.params;  // Get the task ID from the request parameters
    if (!validateID(id)) {
        return res.status(400).json({message: `ID: ${id} is not valid`})
    }
    const task = await Task.findOne({ _id: id });  // Find the task with the provided ID
    res.status(200).json({ task });  // Send the found task in a JSON response
}


module.exports = { getAllTask, createTask, editTask, deleteTask, findEachTask };   //Export the controller function to be used in the router.