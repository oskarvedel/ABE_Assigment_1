const guestCollection = require('../model/guest');

//Create a guest
module.exports.CreateAdmin = async function (req, res) {
    let guest = await guestCollection.create({
        //guest data
    }).catch(reason =>
        res.status(400).json({
            "title": "Unable to create a guest",
            "detail": reason
        })
    );
    if (guest)
        res.status(201).json({
            guest
        })
    else {
        res.status(500).json({
            "title": "ETERNAL SERVER ERROR"
        })
    };
};

//Returns a list of guests
module.exports.GetAllGuests = async function (req, res) {
    const guests = await guestCollection.find({})
        .catch(reason =>
            res.status(400).json({
                "title": "Unable to find any guests from the database",
                "detail": reason
            })
        );
    res.status(200).json({
        guests
    })
};

//Gets a specific guest
module.exports.getGuestById = async function (req, res) {
    try {
        const guest = await guestCollection.findById(req.params.guestid);
        if (guest) {
            res.status(200).json({
                guest
            })
        } else {
            throw ("Guest not found");
        }
    } catch (err) {
        res.status(400).json({
            "title": "Unable to find guest from the database",
            "detail": err
        })
    };
}

//Deletes a specific guest
module.exports.DeleteGuestById = async function (req, res) {
    try {
        //Need to add real guest id
        await guestCollection.findByIdAndDelete(req.params.guestid);
        res.status(200).send();
    } catch (err) {
        res.status(400).json({
            "title": "Unable to delete guest from the database",
            "detail": err
        })
    };
}