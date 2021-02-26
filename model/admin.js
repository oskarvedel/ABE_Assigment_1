const mongoose = require('mongoose');
const Role = require('roles')

const adminSchema = new mongoose.Schema({

});

module.exports = mongoose.model('Admin',adminSchema);