const userCollection = require('../model/user');
const hotelCollection = require('../model/hotel');
const roomCollection = require('../model/hotel');
const { Mongoose } = require('mongoose');

mongoose.model('User',userSchema);

const Loc = mongoose