const mongoose = require('mongoose');


const candidateResumeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,

    },
    lastName: {
        type: String,
        required: true,

    },
    //skills
    techSkills: {
        type: String,
        required: true,
    },
    softSkills: {
        type: String,
        required: true,
    },


    //contact section
    email: {
        type: String,
        required: true,


    },
    phone: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },

    //social profiles

    facebook: {
        type: String,
        required: true,
    },

    linkedin: {
        type: String,
        required: true,
    },
    github: {
        type: String,
        required: true,
    },


    //EDUCATION RECORDS
    //first degree
    degree1: {
        type: String,
        required: true,
    },
    institution1: {
        type: String,
        required: true,
    },
    AOS1: {
        type: String,
        required: true,
    },
    batch1: {
        type: String,
        required: true,
    },
    grade1: {
        type: String,
        required: true,
    },
    achievement1: {
        type: String,
        required: true,
    },


    //second degreee
    degree2: {
        type: String,
        required: true,
    },
    institution2: {
        type: String,
        required: true,
    },
    AOS2: {
        type: String,
        required: true,
    },
    batch2: {
        type: String,
        required: true,
    },
    grade2: {
        type: String,
        required: true,
    },
    achievement2: {
        type: String,
        required: true,
    },


    //certificate1
    certificatenameorganization1: {
        type: String,
        required: true,
    },


    certificatawardby1: {
        type: String,
        required: true,
    },
    certificatedescription1: {
        type: String,
        required: true,
    },
    certificateissuedate1: {
        type: String,
        required: true,
    },
    certificateURL1: {
        type: String,
        required: true,
    },
    certificategrade1: {
        type: String,
        required: true,
    },
    //certificate2

    certificatenameorganization2: {
        type: String,
        required: true,
    },


    certificatawardby2: {
        type: String,
        required: true,
    },
    certificatedescription2: {
        type: String,
        required: true,
    },
    certificateissuedate2: {
        type: String,
        required: true,
    },
    certificateURL2: {
        type: String,
        required: true,
    },
    certificategrade2: {
        type: String,
        required: true,
    }


})

//creating a collection

const candidatesFresherResumeCollection = new mongoose.model("DataForTheResumeOfFresher", candidateResumeSchema);

module.exports = candidatesFresherResumeCollection;