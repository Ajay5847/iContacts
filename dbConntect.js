const mongoose = require("mongoose");
const mongoUrl = "mongodb+srv://ajaybunty91:2yUmUmNwqD1uiZXR@cluster0.uzmafqw.mongodb.net/?retryWrites=true&w=majority"

const connectToMongo = async () => {
    mongoose.connect(mongoUrl);
    console.log("mongoDB Connected");
}

module.exports = connectToMongo;