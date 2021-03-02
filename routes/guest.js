var express = require('express');
var router = express.Router();
const guestController = require('../controllers/guest');
const authorize = require('../authorize')
const jwt = require('express-jwt');
const Role = require('../roles');

const auth = jwt({
    secret: process.env.JWT_SECRET,
    requestProperty: 'payload',
    algorithms: ['HS256']
});

/**
 * @swagger
 * /guest:
 *   get:
 *     summary: test
 *     description: test
*/
router.route('').get(authorize(Role.Guest), auth, guestController.GetAllGuests)
        .post(authorize(Role.Guest), auth, guestController.CreateGuest);

router.route('/:guestid')
    .get(authorize(Role.Guest), auth, guestController.getGuestById)
    .delete(authorize(Role.Guest), auth, guestController.DeleteGuestById)

module.exports = router;    