require("dotenv").config();   // Load environment variables from a .env file into process.env


const express = require("express");  // Import Express FrameWork 

const mongoose = require("mongoose"); // Import Mongoose for MongoDB interactions

const cors = require("cors");

const app = express(); // spinning up the express framework server


const port = 3000; // Define the port number for the server. 

app.use(cors());

const taskRouter = require("./routes/taskRouter");   // Import the taskRouter for task related routes
const notFound = require("./middlewares/notFound");

app.use(express.json()); // Middleware to parse incoming JSON requests from postman allowing access to the req.body

app.use("/api/task", taskRouter); // Mount the taskRouter at /api/task, all task-related route start with /api/task
app.use(notFound); // Use the custom 404 Middleware for handling

const start = async () => {
    try {
        // attempt to connect to mongoDB using Monoose
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database Connected");
        app.listen(port, () => {
            console.log(`Server is running on PORT ${port}`);
        });   // Start the server and listen on the specified port. 
        // start();
    } catch (error) {
        // log the error if the database connection fails
        console.log(error);
        console.log("Unable to connect");
    }
};
start();




// Mongoose is an ODM [Object Data Modelling] library for MongoDB and Node.js.

// MongoDB is a NoSQL Database that stores data in a flexible,  JSON like format. 

//ericljohn1
//Vx9HbcJNFHrFMoHv
// mongodb+srv://ericljohn1:Vx9HbcJNFHrFMoHv@cluster0.irqek.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0