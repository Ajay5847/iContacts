const mongoose = require('mongoose');
const { Schema } = mongoose;

const Contact = new Schema({
    name: {
        type: String,
        require: true
    },
    mobile: {
        type: Number,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true
    },
    timeStamp: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('contact', Contact);