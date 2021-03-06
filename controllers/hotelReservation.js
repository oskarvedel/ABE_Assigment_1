const userCollection = require('../model/user');
const hotelCollection = require('../model/hotel');
const jwt = require('jsonwebtoken');

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
    let user = await userCollection.create({
        username: req.body.username,
        password: req.body.password,
        role: "User"
    }).catch(reason =>
        res.status(400).json({
            "title": "Unable to create an user",
            "detail": reason
        })
    );
    res.status(201).json({
        user
    });
}
//Lets a user log in
module.exports.Login = async function (req, res) {
    try {
        let user = await userCollection.findOne({
            'username': req.body.username
        }).exec();

        if (user.password == req.body.password) {
            const token = jwt.sign({ username: user.username, role: user.role }, process.env.JWT_SECRET);
            res.status(201).json({
                token
            });}
    } catch (err) {
        res.status(400).json({
            "title": "Unable to login",
            "detail": err
        })
    }
}