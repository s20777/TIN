const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/departamentController');
const employeeController = require("../controllers/employeeController");

router.get('/', departmentController.showDepartmentList);
router.get('/add', departmentController.showDepartmentForm);
router.get('/details/:deptId', departmentController.showDepartmentDetails);
router.get('/edit/:empId', employeeController.showEmployeeDetails);


module.exports = router;
