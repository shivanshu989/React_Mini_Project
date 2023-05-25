const express = require('express');
const userRouter = express.Router();
const User = require("../models/Users");

userRouter
.route('/signup')
.post(signUpUser);

userRouter
.route('/login')
.post(loginUser);

async function signUpUser(req, res) {
    const {fname, lname, email, password, contact} = req.body;

    let user = await User.findOne({email: email})
    if(user) {
        res.send({
            error: "User not found"
        })
    } else {
        User.create({fname, lname, email, password, contact})
        .then((user) => {
            res.send({
                user
            });
        })
        .catch((error) => {
            res.send({
                error: error.message
            });
        });
    }
}

async function loginUser(req, res) {
    const {email, password} = req.body;

    let user = await User.findOne({email: email});
    if(user) {
        res.send({
            user
        })
    } else {
        res.send({
            error: "User not found"
        })
    }
}

module.exports = userRouter;