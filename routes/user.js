var express = require('express');
var router = express.Router();
<<<<<<< HEAD
var hotelReservationController = require('../controllers/hotelReservation');
=======
const hotelReservationController = require('../controllers/hotelReservation');

/*
>>>>>>> 9d38e1d6980f49e574c24afa52880859a48dd7df
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
 *   post:
 *     summary: Adds a hotel to the system
 */
<<<<<<< HEAD
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
=======
    .get(hotelReservationController.GetAllHotels);
>>>>>>> 0b4dcf81d26bc037cd2ae78ef9d91be933fa2db6
=======
router.route('/hotels')
    .get(hotelReservationController.GetAllHotels)
    .post(hotelReservationController.CreateHotel);

>>>>>>> 9d38e1d6980f49e574c24afa52880859a48dd7df

module.exports = router;    