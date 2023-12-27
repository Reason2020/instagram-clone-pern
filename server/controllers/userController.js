const db = require('../db');
const { v4: uuid } = require('uuid');
const bcrypt = require('bcrypt');

//get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await db.query('SELECT * FROM users');
        res.status(200).json({ 
            success: true,
            users: users.rows
        });
    } catch (err) {
        console.log("Error: ", err);
        res.status(500).json({ message: err })
    }
}

//get single user by id
const getUserById = async (req, res) => {
    try {
        //get user id from params
        const userId = req.params.userId;

        //query db with userid
        const user = await db.query("SELECT * FROM users WHERE id=$1", [ userId ]);

        //response
        if (user.rowCount === 0) {
            return res.status(400).json({ 
                success: false,
                message: 'No user found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'User found',
            user: user.rows[0]
        });
    } catch (err) {
        console.log("Error: ", err);
        res.status(500).json({ 
            success: false,
            message: 'Invalid User Id'
        });
    }
}

//add new user
const addNewUser = async (req, res) => {
    try {
        //get username, email and password from the request object
        const { username, email, password } = req.body;

        //check if username or email already exists
        const usernameExists = await db.query('SELECT username FROM users WHERE username=$1', [ username ]);
        if (usernameExists.rowCount !== 0) {
            return res.status(400).json({
                success: false,
                message: 'Username already exists'
            });
        }
        const emailExists = await db.query('SELECT email FROM users WHERE email=$1', [ email ]);
        if (emailExists.rowCount !== 0) {
            return res.status(400).json({ 
                success: false,
                message: 'Email already exists'
            });
        }

        //if username and email are ok

        //generate userid
        const userId = uuid();
        //hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        //store in db
        const result = await db.query('INSERT INTO users(id, username, email, password) VALUES ($1, $2, $3, $4)', [ userId, username, email, hashedPassword ]);
        if (!result) {
            res.status(400).json({
                success: false,
                message: 'Some error just occured'
            });
        }
        res.status(201).json({
            success: true,
            message: 'New User signed up',
            userId: userId
        });

    } catch (err) {
        console.log("Error: ", err);
        res.status(500).json({
            success: false,
            message: 'Server error'
        })
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    addNewUser
}