const mongoose = require('mongoose');
const Role = require('../roles');

const guestSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    role:Role.Guest
});

module.exports = mongoose.model('Guest',guestSchema);