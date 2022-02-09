const express = require('express');
const app = express();
const path = require('path')
require("./models/conn.js")
const hbs = require('hbs')

//import schema for cadidates collection
const registerUser = require("./models/register.js")
const addRecord = require("./models/resume.js")
const addRecordOfFresher = require("./models/resume-fresher.js")

//allocate port
const port = process.env.PORT || 8080;
const static_path = path.join(__dirname, '../assets')
app.use(express.static(static_path));

const templates_path = path.join(__dirname, '../templates/views')
const partials_path = path.join(__dirname, '../templates/partials')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.set("view engine", "hbs")
app.set('views', templates_path)

hbs.registerPartials(partials_path)


//user get method to run root folder

//Setting up routes
app.get('/', (req, res) => {

        res.render("index")
    })
    //register new user
app.get('/register', (req, res) => {
        res.render("register")
    })
    //login exisitng one
app.get('/login', (req, res) => {
    res.render("login")
})

app.get('/resume', (req, res) => {
        res.render("resume")
    })
    //for expereinced
app.get('/createresume', (req, res) => {
        res.render("adddata")

    })
    //for fresh grad
app.get('/createfresherresume', (req, res) => {
        res.render("adddatafresh")
    })
    //landing here
app.get('/home', (req, res) => {
        res.render("frontpage")

    })
    //just to test pages
app.get('/test', (req, res) => {
    res.render("welcome")
})

//choose either fresh or exp
app.get('/choice', (req, res) => {
    res.render("category")
})

app.get('/finalresume', (req, res) => {
    res.render("cv")
})

app.get('/finalresumefresher', (req, res) => {
    res.render("freshgradcv")
})


app.post('/register', async(req, res) => {
    try {
        const password = req.body.password;
        const confirmPassword = req.body.confirmPassword;

        if (password === confirmPassword) {
            //res.send("The User That Have Registered is " + req.body.firstName + " Plus the last name of the man wo has registered is  " + req.body.lastName + " and his email is " + req.body.emailData)
            const register = new registerUser({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                confirmpassword: req.body.confirmPassword
            })

            const registered = await register.save()

            res.status(201).render("category")


        } else {

            res.status(201).render("registeragain")
        }

    } catch (err) {
        res.status(400).send(err)
    }
})





app.post('/login', async(req, res) => {
    try {
        console.log("Password Matched")
        const email = req.body.loginEmail;
        const Logpassword = req.body.loginPassword;
        //     console.log(email, Logpassword)
        const userEmail = await registerUser.findOne({ email: email });
        console.log(userEmail);
        if (userEmail.password === Logpassword) {
            console.log("Password Matched")
            res.status(201).render("category", { layout: false })
        } else {
            console.log("Password Not Matched")

            res.status(201).render("loginFailed", { layout: false })
        }

    } catch (err) {
        res.status(400).send(err)
    }
})

//storing resume data into database
app.post('/createresume', async(req, res) => {
    try {

        const registerCandidate = new addRecord({
            //personal details

            firstName: req.body.candidateFirstName,
            lastName: req.body.candidateLastName,


            //skills
            techSkills: req.body.candidateTechnicalSkills,
            softSkills: req.body.candidateSoftSkills,


            //contact section
            email: req.body.candidateEmail,
            phone: req.body.candidatePhone,
            address: req.body.candidateAddress,

            //social profiles

            facebook: req.body.candidateFacebook,
            linkedin: req.body.candidateLinkedIn,
            github: req.body.candidateGithub,




            //EDUCATION RECORDS

            //first degree
            degree1: req.body.candidateDegree1,
            institution1: req.body.candidateInstitution1,
            AOS1: req.body.candidateAreaOfSpecilization1,
            batch1: req.body.candidateBatch1,
            grade1: req.body.candidateGrade1,
            achievement1: req.body.candidateAchievements1,


            //second degreee
            degree2: req.body.candidateDegree2,
            institution2: req.body.candidateInstitution2,
            AOS2: req.body.candidateAreaOfSpecilization2,
            batch2: req.body.candidateBatch2,
            grade2: req.body.candidateGrade2,
            achievement2: req.body.candidateAchievements2,

            //work experience

            //experience 1

            organization1: req.body.candidateorganization1,
            role1: req.body.candidateRole1,
            jobdetails1: req.body.candidateRoleDetails1,
            jobstart1: req.body.candidateRoleStart1,
            jobend1: req.body.candidateRoleEnd1,
            jobtype1: req.body.candidateRoleType1,

            //experience 2
            organization2: req.body.candidateorganization2,
            role2: req.body.candidateRole2,
            jobdetails2: req.body.candidateRoleDetails2,
            jobstart2: req.body.candidateRoleStart2,
            jobend2: req.body.candidateRoleEnd2,
            jobtype2: req.body.candidateRoleType2,


            //Certifications and Licenses


            //certificate1

            certificatenameorganization1: req.body.candidateCertificationName1,
            certificatawardby1: req.body.candidateCertificationAwardedBy1,
            certificatedescription1: req.body.candidateCertificationDetail1,
            certificateissuedate1: req.body.issuesDateCertificate1,
            certificateURL1: req.body.certificateURL1,
            certificategrade1: req.body.certificategrade1,


            //certificate2

            certificatenameorganization2: req.body.candidateCertificationName2,
            certificatawardby2: req.body.candidateCertificationAwardedBy2,
            certificatedescription2: req.body.candidateCertificationDetail2,
            certificateURL2: req.body.certificateURL2,
            certificateissuedate2: req.body.issuesDateCertificate2,
            certificategrade2: req.body.certificategrade2

        })


        const recordSaved = await registerCandidate.save()
        console.log("data saved succesfuly")
        res.status(201).render("cv", {
            layout: false,
            firstName: req.body.candidateFirstName,
            lastName: req.body.candidateLastName,


            //skills
            techSkills: req.body.candidateTechnicalSkills,
            softSkills: req.body.candidateSoftSkills,


            //contact section
            email: req.body.candidateEmail,
            phone: req.body.candidatePhone,
            address: req.body.candidateAddress,






            //EDUCATION RECORDS

            //first degree
            degree1: req.body.candidateDegree1,
            institution1: req.body.candidateInstitution1,
            AOS1: req.body.candidateAreaOfSpecilization1,
            batch1: req.body.candidateBatch1,
            grade1: req.body.candidateGrade1,
            achievement1: req.body.candidateAchievements1,


            //second degreee
            degree2: req.body.candidateDegree2,
            institution2: req.body.candidateInstitution2,
            AOS2: req.body.candidateAreaOfSpecilization2,
            batch2: req.body.candidateBatch2,
            grade2: req.body.candidateGrade2,
            achievement2: req.body.candidateAchievements2,

            //work experience

            //experience 1

            organization1: req.body.candidateorganization1,
            role1: req.body.candidateRole1,
            jobdetails1: req.body.candidateRoleDetails1,
            jobstart1: req.body.candidateRoleStart1,
            jobend1: req.body.candidateRoleEnd1,
            jobtype1: req.body.candidateRoleType1,

            //experience 2
            organization2: req.body.candidateorganization2,
            role2: req.body.candidateRole2,
            jobdetails2: req.body.candidateRoleDetails2,
            jobstart2: req.body.candidateRoleStart2,
            jobend2: req.body.candidateRoleEnd2,
            jobtype2: req.body.candidateRoleType2,


            //Certifications and Licenses


            //certificate1

            certificatenameorganization1: req.body.candidateCertificationName1,
            certificatawardby1: req.body.candidateCertificationAwardedBy1,
            certificatedescription1: req.body.candidateCertificationDetail1,
            certificateissuedate1: req.body.issuesDateCertificate1,
            certificateURL1: req.body.certificateURL1,
            certificategrade1: req.body.certificategrade1,


            //certificate2

            certificatenameorganization2: req.body.candidateCertificationName2,
            certificatawardby2: req.body.candidateCertificationAwardedBy2,
            certificatedescription2: req.body.candidateCertificationDetail2,
            certificateURL2: req.body.certificateURL2,
            certificateissuedate2: req.body.issuesDateCertificate2,
            certificategrade2: req.body.certificategrade2


        })





    } catch (err) {
        res.status(400).send(err)
    }
})



// setting route for freshgrad resume form
app.post('/createresume', async(req, res) => {
    try {

        const registerCandidateFresh = new addRecordOfFresher({
            //personal details

            firstName: req.body.candidateFirstName,
            lastName: req.body.candidateLastName,


            //skills
            techSkills: req.body.candidateTechnicalSkills,
            softSkills: req.body.candidateSoftSkills,


            //contact section
            email: req.body.candidateEmail,
            phone: req.body.candidatePhone,
            address: req.body.candidateAddress,

            //social profiles

            facebook: req.body.candidateFacebook,
            linkedin: req.body.candidateLinkedIn,
            github: req.body.candidateGithub,




            //EDUCATION RECORDS

            //first degree
            degree1: req.body.candidateDegree1,
            institution1: req.body.candidateInstitution1,
            AOS1: req.body.candidateAreaOfSpecilization1,
            batch1: req.body.candidateBatch1,
            grade1: req.body.candidateGrade1,
            achievement1: req.body.candidateAchievements1,


            //second degreee
            degree2: req.body.candidateDegree2,
            institution2: req.body.candidateInstitution2,
            AOS2: req.body.candidateAreaOfSpecilization2,
            batch2: req.body.candidateBatch2,
            grade2: req.body.candidateGrade2,
            achievement2: req.body.candidateAchievements2,


            //Certifications and Licenses


            //certificate1

            certificatenameorganization1: req.body.candidateCertificationName1,
            certificatawardby1: req.body.candidateCertificationAwardedBy1,
            certificatedescription1: req.body.candidateCertificationDetail1,
            certificateissuedate1: req.body.issuesDateCertificate1,
            certificateURL1: req.body.certificateURL1,
            certificategrade1: req.body.certificategrade1,


            //certificate2

            certificatenameorganization2: req.body.candidateCertificationName2,
            certificatawardby2: req.body.candidateCertificationAwardedBy2,
            certificatedescription2: req.body.candidateCertificationDetail2,
            certificateURL2: req.body.certificateURL2,
            certificateissuedate2: req.body.issuesDateCertificate2,
            certificategrade2: req.body.certificategrade2

        })


        const recordSavedOfFresher = await registerCandidateFresh.save()
        console.log("data saved succesfuly")
        res.status(201).render("login", { layout: false })





    } catch (err) {
        res.status(400).send(err)
    }
})




app.listen(port, () => {
    console.log("Server Running on Port ", port);
})