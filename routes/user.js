var express = require('express');
var router = express.Router();
const hotelReservationController = require('../controllers/hotelReservation');
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
 * /admin:
 *   get:
 *     summary: test
 *     description: test
*/
router.route('')
        .get(hotelReservationController.GetAllAdmins)
        .post(hotelReservationController.CreateAdmin);

router.route('/:adminid')
    .get(authorize(Role.Admin), auth, hotelReservationController.getAdminById)
    .delete(authorize(Role.Admin), auth, hotelReservationController.DeleteAdminById)

module.exports = router;    