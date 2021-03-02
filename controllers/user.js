const userCollection = require('../model/user');

//Create an user
module.exports.CreateUser = async function (req, res) {
    let user = await userCollection.create({
        //user data
    }).catch(reason =>
        res.status(400).json({
            "title": "Unable to create an User",
            "detail": reason
        })
    );
    if (user)
        res.status(201).json({
            user
        })
    else {
        res.status(500).json({
            "title": "ETERNAL SERVER ERROR"
        })
    };
};

//Returns a list of users
module.exports.GetAllUsers = async function (req, res) {
    const users = await userCollection.find({})
        .catch(reason =>
            res.status(400).json({
                "title": "Unable to find any users from the database",
                "detail": reason
            })
        );
    res.status(200).json({
        users
    })
};

//Gets a specific user
module.exports.getUserByUserName = async function (req, res) {
    try {
        const user = await userCollection.findById(req.params.username);
        if (user) {
            res.status(200).json({
                user
            })
        } else {
            throw ("User not found");
        }
    } catch (err) {
        res.status(400).json({
            "title": "Unable to find user from the database",
            "detail": err
        })
    };
}

//Deletes a specific admin
module.exports.deleteUserById = async function (req, res) {
    try {
        //Need to add real admin id
        await userCollection.findByIdAndDelete(req.params.username);
        res.status(200).send();
    } catch (err) {
        res.status(400).json({
            "title": "Unable to delete user from the database",
            "detail": err
        })
    };
}