const db = require('../db');

//get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await db.query('SELECT * FROM users');
        res.status(200).json({ 
            success: true,
            users
        });
    } catch (err) {
        console.log("Error: ", err);
        res.status(500).json({ message: err })
    }
}

module.exports = {
    getAllUsers
}