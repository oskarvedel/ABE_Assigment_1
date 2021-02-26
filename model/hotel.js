const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    hotelname:{
        type:String
    }

});

module.exports = mongoose.model('Hotel',hotelSchema);