const mongoose = require('mongoose');
const Role = require('../roles');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    role:Role.User
});

module.exports = mongoose.model('User',userSchema);