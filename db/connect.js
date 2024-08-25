
const mongoose = require("mongoose");

const connectDb = (url) => {
    try {
        if (mongoose.connect(url)){
            console.log('Successfully connected to database');
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb;