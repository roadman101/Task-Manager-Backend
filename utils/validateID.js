// utils is short for utilities which refers to a collection of helper functions or modules designed to perform common tasks on multiple functions. 



// This task often includes things like data validation, formatting or other repetitive operations that are used across different paths of the application.

const mongoose = require("mongoose");  // Import Mongoose 


// Utility function ti validate MongoDB Object IDs
const validateID = (id) => { 
    const isValid = mongoose.Types.ObjectId.isValid(id);  // Check is the ID is a Valid MongoDb Object ID
    return isValid;   // Return the validation results
 };

module.exports = validateID;