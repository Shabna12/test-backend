const users = require('../models/userModel')
const jwt = require('jsonwebtoken')

// for register
exports.registerController = async(req,res) => {
    console.log("Inside regsiter function");
    const {username, email, password, phoneNo} = req.body
    console.log(username, email, password, phoneNo);
    try {
        //email - mongodb users
        const exisitingUser = await users.findOne({email})
        if (exisitingUser) {
            //already present
            res.status(406).json("Account already exisit ! Please login..")
        } else {
            //new user
            const newUser = new users({
                username,email,password,phoneNo:""
            })
            // update mongodb from model
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (err) {
        res.status(401).json(err)
    }
}

//login
exports.loginController = async(req,res) => {
    console.log("Inside login function");
    const {email,password} = req.body
    console.log(email,password);
    try {
        const exisitingUser = await users.findOne({email,password})
        if (exisitingUser) {
            //token
            const token = jwt.sign({userId:exisitingUser._id},process.env.JWT_PASSWORD)
            res.status(200).json({
              user:exisitingUser,
              token
           })
        } else {
            res.status(404).json("Invalid Email or Password")
        }
    } catch (err) {
        res.status(401).json(err)
    }
}