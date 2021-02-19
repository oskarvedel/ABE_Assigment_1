const adminCollection = require('../model/admin');

//Create an Admin
module.exports.CreateAdmin = async function (req, res) {
    let admin = await adminCollection.create({
        //admin data
    }).catch(reason =>
        res.status(400).json({
            "title": "Unable to create an Admin",
            "detail": reason
        })
    );
    if (admin)
        res.status(201).json({
            admin
        })
    else {
        res.status(500).json({
            "title": "ETERNAL SERVER ERROR"
        })
    };
};

