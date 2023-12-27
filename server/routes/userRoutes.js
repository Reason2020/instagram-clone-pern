const express = require('express');
const userRouter = express.Router();
const { getAllUsers } = require('../controllers/userController');


//get all users
userRouter.get('/', getAllUsers)

//get single user by id
// userRouter.get('/:userId', getAllUsers);

module.exports = userRouter;