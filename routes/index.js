var express = require('express');
var router = express.Router();
const jwt = require('express-jwt');

const auth = jwt({
secret: process.env.JWT_SECRET,
});


/**
 * @swagger
 * /index:
 *   get:
 *     summary: test
 *     description: test
*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
