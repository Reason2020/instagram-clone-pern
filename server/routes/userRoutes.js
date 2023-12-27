const express = require('express');
const userRouter = express.Router();
const { 
    getAllUsers,
    getUserById,
    addNewUser
} = require('../controllers/userController');


//get all users
userRouter.get('/', getAllUsers)

//get single user by id
userRouter.get('/:userId', getUserById);

//sign up user
userRouter.post('/', addNewUser);

module.exports = userRouter;