const adminCollection = require('../model/room');

//Create a room
module.exports.CreateRoom = async function (req, res) {
    let room = await roomCollection.create({
        //room data
    }).catch(reason =>
        res.status(400).json({
            "title": "Unable to create a room",
            "detail": reason
        })
    );
    if (room)
        res.status(201).json({
            room
        })
    else {
        res.status(500).json({
            "title": "ETERNAL SERVER ERROR"
        })
    };
};

//Returns a list of rooms
module.exports.GetAllRooms = async function (req, res) {
    const rooms = await roomCollection.find({})
        .catch(reason =>
            res.status(400).json({
                "title": "Unable to find any rooms from the database",
                "detail": reason
            })
        );
    res.status(200).json({
        rooms
    })
};

//Gets a specific room
module.exports.getRoomById = async function (req, res) {
    try {
        const Room = await roomCollection.findById(req.params.roomid);
        if (room) {
            res.status(200).json({
                room
            })
        } else {
            throw ("room not found");
        }
    } catch (err) {
        res.status(400).json({
            "title": "Unable to find admin from the database",
            "detail": err
        })
    };
}

//Deletes a specific admin
module.exports.DeleteRoomById = async function (req, res) {
    try {
        //Need to add real admin id
        await roomCollection.findByIdAndDelete(req.params.roomid);
        res.status(200).send();
    } catch (err) {
        res.status(400).json({
            "title": "Unable to delete room from the database",
            "detail": err
        })
    };
}