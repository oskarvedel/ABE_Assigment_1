var express = require('express');
var router = express.Router();
const jwt = require('express-jwt');

const auth = jwt({
  secret: process.env.JWT_SECRET,
  requestProperty: 'payload',
  algorithms: ['HS256']
});


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
