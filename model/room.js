const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    roomNumber:{
        type: Number
    }
});

module.exports = mongoose.model('Room',roomSchema);