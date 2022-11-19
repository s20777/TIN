const express = require('express');
const router = express.Router();


const employeeController = require('../controllers/employeeController');

router.get('/', employeeController.showEmployeeList);
router.get('/add', employeeController.showEmployeeFormNew);
router.get('/edit/:empId', employeeController.showEmployeeEdit);
router.get('/details/:empId', employeeController.showEmployeeDetails);

module.exports = router;
