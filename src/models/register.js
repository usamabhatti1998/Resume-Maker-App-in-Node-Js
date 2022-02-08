const mongoose = require('mongoose');


const candidatesRegistrationFormSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,

    },
    lastName: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,


    },
    password: {
        type: String,
        required: true,
    },
    confirmpassword: {
        type: String,
        required: true,
    }

})

//creating a collection

const candidatesRegistrationFormCollection = new mongoose.model("RegisteredUsers", candidatesRegistrationFormSchema);

module.exports = candidatesRegistrationFormCollection;