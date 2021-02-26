const mongoose = require('mongoose');
const Role = require('../roles');

const managerSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    role:Role.HotelManager
});

module.exports = mongoose.model('Manager',managerSchema);