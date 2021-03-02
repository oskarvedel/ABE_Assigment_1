const userCollection = require('../model/user');
const hotelCollection = require('../model/hotel');
const roomCollection = require('../model/hotel');
const {
    Mongoose
} = require('mongoose');

//Returns a list of admins
module.exports.initializeDB = function () {

    userCollection.remove({}, function (err) {
        console.log('collection removed')
    });

    roomCollection.remove({}, function (err) {
        console.log('collection removed')
    });

    hotelCollection.remove({}, function (err) {
        console.log('collection removed')
    });

    userCollection.create({
        username: 'Admin',
        password: 'Admin',
        role: 'Admin'
    });

    userCollection.create({
        username: 'User',
        password: 'User',
        role: 'User'
    });
};