var express = require('express');
var router = express.Router();

const authController = require('../controllers/authController');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { navLocation: 'main' });
});

router.post('/login', authController.login);
router.get('/logout', authController.logout);


module.exports = router;
