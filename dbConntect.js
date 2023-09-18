const mongoose = require("mongoose");
const mongoUrl = `mongodb+srv://ajaybunty91:rgVkRfwDJ1mF4AFH@cluster0.uzmafqw.mongodb.net/?retryWrites=true&w=majority`

const connectToMongo = async () => {
    mongoose.connect(mongoUrl);
    console.log("mongoDB Connected");
}

module.exports = connectToMongo;