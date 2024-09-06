const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : [true, 'price must be mentioned'],
    },
    featured : {
        type : Boolean,
        default: false 
    },
    rating:{
        type: Number,
        required : [false, 'rating must be mentioned.']
    },
    created_at : {
        type : Date,
        default : Date.now(),
    },
    company:{
        type : String,
        enum : {
            values : ['apple', 'mi', 'dell'],
            message : `{VALUE} is not supported.`,
        }
    }

})

module.exports = mongoose.model("Products", productSchema);