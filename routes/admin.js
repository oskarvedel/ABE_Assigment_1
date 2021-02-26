var express = require('express');
var router = express.Router();
const adminController = require('../controllers/admin');
const authorize = require('../helpers/authorize')
const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    requestProperty: 'payload'
});

/**
 * @swagger
 * /admin:
 *   get:
 *     summary: test
 *     description: test
*/
router.route('').get(authorize(Role.Admin), auth, adminController.GetAllAdmins)
        .post(authorize(Role.Admin), auth, adminController.CreateAdmin);

router.route('/:adminid')
    .get(authorize(Role.Admin), auth, adminController.getAdminById)
    .delete(authorize(Role.Admin), auth, adminController.DeleteAdminById)

module.exports = router;    