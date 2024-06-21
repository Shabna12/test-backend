const express = require('express')
const userController = require('../controllers/userControllers')
const jwtMiddleware = require('../middleware/jwtMiddleware')


const router = new express.Router()

//register - POST - http://localhost:3000/register
router.post('/register',userController.registerController)

//login - POST - http://localhost:3000/login
router.post('/login',userController.loginController)

//listusers - GET
router.get('/',jwtMiddleware,userController.listUsers)

//getusers - GET
router.get('/:id',jwtMiddleware,userController.getUserDetails)




module.exports = router