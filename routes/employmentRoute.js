const express = require('express');
const router = express.Router();

const employmentController = require('../controllers/employmentController');

router.get('/', employmentController.showEmploymentList);
router.get('/add', employmentController.showAddEmploymentForm);
router.get('/edit/:employmentId', employmentController.showEditEmploymentForm);
router.get('/details/:employmentId', employmentController.showEmploymentDetails);


module.exports = router;
