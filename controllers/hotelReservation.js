const adminCollection = require('../model/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const hotelCollection = require('../model/hotel');
const hotel = require('../model/hotel');

//Create an Hotel
module.exports.CreateHotel = async function (req, res) {
    try {
        // let hotelname = req.body;
        console.log(req.body);
    } catch (err) {}
    // let hotel = await hotelCollection.create({
    //     name: req.body.hotelname
    // }).catch(reason =>
    //     res.status(400).json({
    //         "title": "Unable to create an hotel",
    //         "detail": reason
    //     })
    // );
    res.status(201).json({
        hotel
    });
};

//Get all hotels
module.exports.GetAllHotels = async function (req, res) {
    let hotels = await hotelCollection.find({})
        .catch(reason =>
            res.status(400).json({
                "title": "Unable to find any Hotels from the database",
                "detail": reason
            })
        );
    res.status(200).json({
        hotels
    })
};
/*
//Returns a list of admins
module.exports.GetAllAdmins = async function (req, res) {
    let admins = await userCollection.find({})
        .catch(reason =>
            res.status(400).json({
                "title": "Unable to find any admins from the database",
                "detail": reason
            })
        );
    res.status(200).json({
        admins
    })
};

//Gets a specific admin
module.exports.getAdminById = async function (req, res) {
    try {
        const admin = await userCollection.findById(req.params.adminid);
        if (admin) {
            res.status(200).json({
                admin
            })
        } else {
            throw ("Admin not found");
        }
    } catch (err) {
        res.status(400).json({
            "title": "Unable to find admin from the database",
            "detail": err
        })
    };
}

//Deletes a specific admin
module.exports.DeleteAdminById = async function (req, res) {
    try {
        //Need to add real admin id
        await userCollection.findByIdAndDelete(req.params.adminid);
        res.status(200).send();
    } catch (err) {
        res.status(400).json({
            "title": "Unable to delete admin from the database",
            "detail": err
        })
    };
}

//Signs up a new user
module.exports.SignUp = async function (req, res) {
    try {
        let username = req.params.userName;
        let plainTextPassword = req.params.password;
        bcrypt.hash(plainTextPassword, saltRounds).then(function (hash) {

        })
        res.status(200).send();
    } catch (err) {
        res.status(400).json({
            "title": "Unable to delete admin from the database",
            "detail": err
        })
    };
}

//Lets a user log in
module.exports.Login = async function (req, res) {
    try {
        let username = req.params.userName;
        let plainTextPassword = req.params.password;
        bcrypt.hash(plainTextPassword, saltRounds).then(function (hash) {

        })
        res.status(200).send();
    } catch (err) {
        res.status(400).json({
            "title": "Unable to delete admin from the database",
            "detail": err
        })
    }
}*/