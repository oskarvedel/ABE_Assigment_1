const mongoose = require('mongoose');
const Role = require('../roles');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    role:{
        type: String
    }
});

module.exports = mongoose.model('User',userSchema);