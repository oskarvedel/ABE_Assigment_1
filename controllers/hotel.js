const hotelCollection = require('../model/hotel');

//Create an hotel
module.exports.CreateHotel = async function (req, res) {
    const manager=
    let hotel = await hotelCollection.create({
        //hotel data
    }).catch(reason =>
        res.status(400).json({
            "title": "Unable to create a hotel",
            "detail": reason
        })
    );
    if (hotel)
        res.status(201).json({
            hotel
        })
    else {
        res.status(500).json({
            "title": "ETERNAL SERVER ERROR"
        })
    };
};

//Returns a list of hotels
module.exports.GetAllHotels = async function (req, res) {
    const hotels = await hotelCollection.find({})
        .catch(reason =>
            res.status(400).json({
                "title": "Unable to find any hotels from the database",
                "detail": reason
            })
        );
    res.status(200).json({
        hotels
    })
};

//Gets a specific hotel
module.exports.getHotelByHotelName = async function (req, res) {
    try {
        const hotel = await hotelCollection.findById(req.params.hotelname);
        if (hotel) {
            res.status(200).json({
                hotel
            })
        } else {
            throw ("Hotel not found");
        }
    } catch (err) {
        res.status(400).json({
            "title": "Unable to find hotel from the database",
            "detail": err
        })
    };
}

//Deletes a specific hotel
module.exports.DeleteHotelByHotelName = async function (req, res) {
    try {
        await hotelCollection.findByIdAndDelete(req.params.hotelname);
        res.status(200).send();
    } catch (err) {
        res.status(400).json({
            "title": "Unable to delete hotel from the database",
            "detail": err
        })
    };
}