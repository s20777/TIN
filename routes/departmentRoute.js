const express = require('express');
const router = express.Router();

const departmentController = require('../controllers/departamentController');

router.get('/', departmentController.showDepartmentList);
router.get('/add', departmentController.showAddDepartmentForm);
router.get('/edit/:deptId', departmentController.showEditDepartmentForm);
router.get('/details/:deptId', departmentController.showDepartmentDetails);

router.post('/add', departmentController.addDepartment);
router.post('/edit', departmentController.updateDepartment);
router.get('/delete/:deptId', departmentController.deleteDepartment);

module.exports = router;
