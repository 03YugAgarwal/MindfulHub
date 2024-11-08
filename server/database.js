require('dotenv').config()

let mongoose = require('mongoose')

async function connectDB() {
    try {
        await mongoose.connect("mongodb+srv://mindfulteam:1300d527@mindfulhub.dubaazv.mongodb.net/?retryWrites=true&w=majority&appName=mindfulhub")
        console.log('Database Connected Succesfully');
    } catch (err) {
        console.log("MongoDB Couldnt Connect: ", err);
    }
}

module.exports = connectDB