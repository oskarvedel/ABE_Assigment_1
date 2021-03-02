const adminCollection = require('../model/user');

//Create an Admin
module.exports.CreateAdmin = async function (req, res) {
    let admin = await adminCollection.create({
        name: req.body.username,
        password: req.body.password,
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

//Returns a list of admins
module.exports.GetAllAdmins = async function (req, res) {
    let admins = await adminCollection.find({})
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
        const admin = await adminCollection.findById(req.params.adminid);
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
        await adminCollection.findByIdAndDelete(req.params.adminid);
        res.status(200).send();
    } catch (err) {
        res.status(400).json({
            "title": "Unable to delete admin from the database",
            "detail": err
        })
    };
}