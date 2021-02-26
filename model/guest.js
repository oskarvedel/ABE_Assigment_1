const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Guest',guestSchema);