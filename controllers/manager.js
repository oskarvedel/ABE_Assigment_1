const managerCollection = require('../model/manager');

//Create a manager
module.exports.CreateManager = async function (req, res) {
    let manager = await managerCollection.create({
        //manager data
    }).catch(reason =>
        res.status(400).json({
            "title": "Unable to create a manager",
            "detail": reason
        })
    );
    if (manager)
        res.status(201).json({
            manager
        })
    else {
        res.status(500).json({
            "title": "ETERNAL SERVER ERROR"
        })
    };
};

//Returns a list of managers
module.exports.GetAllManagers = async function (req, res) {
    const managers = await managerCollection.find({})
        .catch(reason =>
            res.status(400).json({
                "title": "Unable to find any managers from the database",
                "detail": reason
            })
        );
    res.status(200).json({
        managers
    })
};

//Gets a specific manager
module.exports.getManagerById = async function (req, res) {
    try {
        const manager = await managerCollection.findById(req.params.managerid);
        if (manager) {
            res.status(200).json({
                manager
            })
        } else {
            throw ("Manager not found");
        }
    } catch (err) {
        res.status(400).json({
            "title": "Unable to find manager from the database",
            "detail": err
        })
    };
}

//Deletes a specific manager
module.exports.DeleteManagerById = async function (req, res) {
    try {
        //Need to add real manager id
        await managerCollection.findByIdAndDelete(req.params.managerid);
        res.status(200).send();
    } catch (err) {
        res.status(400).json({
            "title": "Unable to delete manager from the database",
            "detail": err
        })
    };
}