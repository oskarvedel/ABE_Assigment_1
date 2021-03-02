const userCollection = require('../model/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const hotelCollection = require('../model/hotel');
const hotel = require('../model/hotel');

//Create an Hotel
module.exports.CreateHotel = async function (req, res) {
    let hotel = await hotelCollection.create({
        hotelname: req.body.hotelname
    }).catch(reason =>
        res.status(400).json({
            "title": "Unable to create an hotel",
            "detail": reason
        })
    );
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

//Signs up a new user
module.exports.SignUp = async function (req, res) {
    try {
        let username = req.params.userName;
        let plainTextPassword = req.params.password;
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

    let user = await userCollection.findOne({'username': req.body.username}).exec();

    if (user.password == req.body.password) {
        res.status(200).send();
    }

    // try {
    //     var userr = userCollection.find({
    //         'username': req.body.username
    //     });
    //     if (userr.select(password) == req.body.password) {
    //         res.status(200).send();
    //     }
    // } catch (err) {
    //     res.status(400).json({
    //         "title": "Unable to login",
    //         "detail": err
    //     })
    // }
}