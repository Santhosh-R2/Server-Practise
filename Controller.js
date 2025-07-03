const Schema = require('./Schema');

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

module.exports = {
    UserRegistration,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};