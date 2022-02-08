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

    //work experience

    //experience 1

    organization1: {
        type: String,
        required: true,
    },
    role1: {
        type: String,
        required: true,
    },
    jobdetails1: {
        type: String,
        required: true,
    },
    jobstart1: {
        type: String,
        required: true,
    },
    jobend1: {
        type: String,
        required: true,
    },
    jobtype1: {
        type: String,
        required: true,
    },

    //experience 2
    organization2: {
        type: String,
        required: true,
    },
    role2: {
        type: String,
        required: true,
    },
    jobdetails2: {
        type: String,
        required: true,
    },
    jobstart2: {
        type: String,
        required: true,
    },
    jobend2: {
        type: String,
        required: true,
    },
    jobtype2: {
        type: String,
        required: true,
    },

    //Certifications and Licenses


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

const candidatesResumeCollection = new mongoose.model("DataForTheResume", candidateResumeSchema);

module.exports = candidatesResumeCollection;