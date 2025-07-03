const express = require('express')
const Router = express.Router()
const UserController = require('./Controller')

Router.post('/users', UserController.UserRegistration)

Router.get('/Allusers', UserController.getAllUsers)

Router.get('/FindUserName', UserController.findOneUser)


Router.get('/users/:id', UserController.getUserById)

Router.put('/users/:id', UserController.updateUser)

Router.delete('/users/:id', UserController.deleteUser)

module.exports = Router