const express = require('express')
const userController = require('../controllers/userControllers')


const router = new express.Router()

//register - POST - http://localhost:3000/register
router.post('/register',userController.registerController)

//login - POST - http://localhost:3000/login
router.post('/login',userController.loginController)




module.exports = router