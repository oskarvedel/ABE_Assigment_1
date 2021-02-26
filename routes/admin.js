var express = require('express');
var router = express.Router();
const adminController = require('../controllers/admin');
const jwt = require('express-jwt');

const auth = jwt({
secret: process.env.JWT_SECRET,
});



/**
 * @swagger
 * /admin:
 *   get:
 *     summary: test
 *     description: test
*/
router.route('').get(adminController.GetAllAdmins)
        .post(adminController.CreateAdmin);

router.route('/:adminid')
    .get(adminController.getAdminById)
    .delete(adminController.DeleteAdminById)

module.exports = router;