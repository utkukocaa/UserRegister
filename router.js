const express = require('express')
const router = express.Router()
const homeController = require('./controllers/homeController')
const userController = require('./controllers/userController')

router.get('/', homeController.home)

router.post('/register', userController.register)






module.exports = router

