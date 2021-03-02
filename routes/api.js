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
router.route('/getHotels')
        .get(hotelReservationController.GetAllHotels)

/**
 * @swagger
 * /hotels:
 *   post:
 *     summary: Add a hotel to the system
 *     description: adds a hotel to the system - needs to be administrator
 *     responses:
 *       201:
 *         description: Hotel created
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
router.route('/createHotel')
        .post(auth, hotelReservationController.CreateHotel);

router.route('/createUser')
    .post(hotelReservationController.CreateHotel);

router.route('/signUp')
    .post(hotelReservationController.SignUp);

router.route('/login')
    .get(hotelReservationController.Login);

module.exports = router;
