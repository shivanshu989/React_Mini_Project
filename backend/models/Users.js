const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    contact:String
});

const User = mongoose.model("User",userSchema)

module.exports = User;