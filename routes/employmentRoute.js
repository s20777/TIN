const express = require('express');
const router = express.Router();

const employmentController = require('../controllers/employmentController');
const employeeController = require("../controllers/employeeController");

router.get('/', employmentController.showEmploymentList);
router.get('/add', employmentController.showAddEmploymentForm);
router.get('/edit/:employmentId', employmentController.showEditEmploymentForm);
router.get('/details/:employmentId', employmentController.showEmploymentDetails);

router.post('/add', employmentController.addEmployment);
router.post('/edit', employmentController.updateEmployment);
router.get('/delete/:employmentId', employmentController.deleteEmployment);

module.exports = router;
