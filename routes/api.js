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
 * components:
 *  securitySchemes:
 *      bearerAuth:
 *          type: http
 *          scheme: bearer
 * /api/getHotels:
 *   get:
 *     security:
 *       - bearerAuth: []
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
        .get(authorize(Role.Admin), hotelReservationController.GetAllHotels)

/**
 * @swagger
 * /api/createHotel:
 *  post:
 *      security:
 *          - bearerAuth: []
 *      summary: Add a hotel to the system
 *      description: adds a hotel to the system
 *      parameters:
 *        - in: query
 *          name: hotelname
 *          schema:
 *              type: string
 *          description: name of the hotel to be created
 *      requestBody:
 *          description: Sign up to the system
 *          content:
 *              application/json:
 *                  schema:
 *                      type: json
 *                  example:
 *                      hotelname: Hilton
 *      responses:
 *       201:
 *         description: Hotel Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 hotel:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     __v:
 *                       type: integer
 */
router.route('/createHotel')
        .post(authorize(Role.Admin), auth, hotelReservationController.CreateHotel);


/**
 * @swagger
 * /api/signUp:
 *  post:
 *      summary: SignUp for the hotel system
 *      description: Register an user
 *      parameters:
 *        - in: request body
 *          name: username
 *          schema:
 *              type: string
 *          description: Username of user that wants to sign up
 *        - in: request body
 *          name: password
 *          schema:
 *              type: string
 *          description: Password of user that wants to sign up
 *      requestBody:
 *          description: Sign up to the system
 *          content:
 *              application/json:
 *                  schema:
 *                      type: json
 *                  example:
 *                      username: User
 *                      password: Password
 *      responses:
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
 *      summary: login
 *      parameters:
 *        - in: request body
 *          name: username
 *          schema:
 *              type: string
 *          description: Username of user that wants to log in
 *        - in: request body
 *          name: password
 *          schema:
 *              type: string
 *          description: Password of user that wants to log in
 *      requestBody:
 *          description: Login to the system
 *          content:
 *              application/json:
 *                  schema:
 *                      type: json
 *                  example:
 *                      username: Admin
 *                      password: Admin
 *      responses:
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
