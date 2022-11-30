const express = require("express");
const loginRouter = express.Router()
const UserController = require('../controller/controller')




loginRouter.post('/', UserController.CheckUserAuthorisation)


module.exports = loginRouter;