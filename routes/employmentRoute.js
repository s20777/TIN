const express = require('express');
const router = express.Router();

const employmentController = require('../controllers/employmentController');

router.get('/', employmentController.showEmploymentList);
router.get('/add', employmentController.showEmploymentForm);
router.get('/details/:employmentId', employmentController.showEmploymentDetails);
router.get('/edit/:employmentId', employmentController.showEmploymentEdit);


module.exports = router;
