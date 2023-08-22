const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    address:{
        type: {},
        required: true
    },
    answer:{
        type: String,
        required: true
    },
    role:{
        type: String,
        default: "user"
    }
},
    {
        timestamps: true
    }
);

//Export the model
module.exports = mongoose.model('users', userSchema);