const mongoose = require('mongoose');
mongoose.set("strictQuery", true)

mongoose.connect("mongodb+srv://admin:Test@123@cluster0.y4xoh6o.mongodb.net/teach-lancer").
    then(() => {
        console.log("Database Connected!")
        console.log("=========================================================================");
    }).catch((err) => {
        console.log("Database Not Connected!")
    })


// mongodb+srv://teachLancer:teachLancer@cluster0.ktqzdyg.mongodb.net/teach-lancer   
