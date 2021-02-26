var express = require('express');
var router = express.Router();
const jwt = require('express-jwt');

const auth = jwt({
  secret: process.env.JWT_SECRET,
  requestProperty: 'payload',
  algorithms: ['HS256']
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
