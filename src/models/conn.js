const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/CandidateRegistration", {

    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => {
    console.log("Database Succesful")
}).catch((err) => {
    console.log(err)
})