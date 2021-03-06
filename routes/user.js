var express = require('express');
var router = express.Router();
var hotelReservationController = require('../controllers/hotelReservation');
const authorize = require('../authorize')
const jwt = require('express-jwt');
const Role = require('../roles');

const auth = jwt({
    secret: process.env.JWT_SECRET,
    requestProperty: 'payload',
    algorithms: ['HS256']
});


router.route('')
        .get(hotelReservationController.GetAllAdmins)
        .post(hotelReservationController.CreateAdmin);

router.route('/:adminid')
    .get(authorize(Role.Admin), auth, hotelReservationController.getAdminById)
    .delete(authorize(Role.Admin), auth, hotelReservationController.DeleteAdminById)



/**
 * @swagger
 * /hotels:
 *   get:
 *     summary: Retrieve the list of hotels
 *     description: Retrieve a list of hotels.
 *     responses:
 *       200:
 *         description: A list of hotels.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: The hotels's name.
 *                         example: Hilton
 */
/*
router.route('')
<<<<<<< HEAD
        .get(hotelReservationController.GetAllAdmins)
        .post(hotelReservationController.CreateAdmin);

router.route('/:adminid')
    .get(authorize(Role.Admin), auth, hotelReservationController.getAdminById)
    .delete(authorize(Role.Admin), auth, hotelReservationController.DeleteAdminById)


*/

router.route('/hotel')
    .get(hotelReservationController.GetAllHotels)
    .post(hotelReservationController.CreateHotel);
module.exports = router;    