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
 * /api/getHotels:
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
        .get(authorize(Role.User), hotelReservationController.GetAllHotels)

/**
 * @swagger
 * /api/createHotel:
 *   post:
 *     summary: Add a hotel to the system
 *     description: adds a hotel to the system
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
        .post(authorize(Role.Admin), auth, hotelReservationController.CreateHotel);


/**
 * @swagger
 * /api/signUp:
 *   post:
 *     summary: SignUp for the hotel system
 *     description: Register an user
 *     responses:
 *       201:
 *         description: User Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: array
 *                   items:
 *                     type: object
 */
router.route('/signUp')
    .post(hotelReservationController.SignUp);

    /**
 * @swagger
 * /api/login:
 *   post:
 *     summary: login
 *     description: Login to the system
 *     responses:
 *       200:
 *         description: Logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 jwt:
 *                   type: array
 *                   items:
 *                     type: object
 */
router.route('/login')
    .post(hotelReservationController.Login);

module.exports = router;
