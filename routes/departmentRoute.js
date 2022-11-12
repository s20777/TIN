const express = require('express');
const router = express.Router();

const departmentController = require('../controllers/departamentController');

router.get('/', departmentController.showDepartmentList);
router.get('/add', departmentController.showDepartmentForm);
router.get('/details/:deptId', departmentController.showDepartmentDetails);
router.get('/edit/:deptId', departmentController.showDepartmentEdit);


module.exports = router;
