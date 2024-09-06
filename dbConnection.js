const mongoose = require('mongoose');

const dbConnection = (uri)=> {
        console.log("My DB is connected")
        mongoose.connect(uri)
}

module.exports = dbConnection;