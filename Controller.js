const Schema = require('./Schema');


// Registration start here
const UserRegistration = ((req, res) => {
    let User = new Schema({
        name: req.body.name,
        email: req.body.email
    });
    
    User.save()
    .then((result) => {
        res.status(201).json({
            User: result,
            message: "User Registration Done"
        });
    })
    .catch((error) => {
        res.status(500).json({
            error: error.message
        });
    });
});
// Registration end here


// View All Users start here
const getAllUsers = (req, res) => {
    Schema.find()
    .then((users) => {
        res.status(200).json({
            users: users,
            count: users.length
        });
    })
    .catch((error) => {
        res.status(500).json({
            error: error.message
        });
    });
};
// View All Users End here

// Find User by ID start here
const getUserById = (req, res) => {
    const userId = req.params.id;
    
    Schema.findById(userId)
    .then((user) => {
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        res.status(200).json({
            user: user
        });
    })
    .catch((error) => {
        res.status(500).json({
            error: error.message
        });
    });
};
// Find User by ID End here

// Find User by name start here

const findOneUser = (req, res) => {
    const name = req.body.name;
    
    Schema.findOne({name})
    .then((user) => {
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        res.status(200).json({
            user: user
        });
    })
    .catch((error) => {
        res.status(500).json({
            error: error.message
        });
    });
};
// Find User by name end here

// Update User start here
const updateUser = (req, res) => {
    const userId = req.params.id;
    const updateData = {
        name: req.body.name,
        email: req.body.email
    };
    
    Schema.findByIdAndUpdate(userId, updateData, { new: true })
    .then((user) => {
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        res.status(200).json({
            user: user,
            message: "User updated successfully"
        });
    })
    .catch((error) => {
        res.status(500).json({
            error: error.message
        });
    });
};
// Update User End here

// Delete User start here
const deleteUser = (req, res) => {
    const userId = req.params.id;
    
    Schema.findByIdAndDelete(userId)
    .then((user) => {
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        res.status(200).json({
            message: "User deleted successfully"
        });
    })
    .catch((error) => {
        res.status(500).json({
            error: error.message
        });
    });
};

// Delete User End here
module.exports = {
    UserRegistration,
    getAllUsers,
    getUserById,
    findOneUser,
    updateUser,
    deleteUser
};