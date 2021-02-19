var express = require('express');
var router = express.Router();

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
