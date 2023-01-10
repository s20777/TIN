const express = require('express');
const router = express.Router();

const empApiController = require('../../api/employeeAPI');
const isAuth = require('../../middleware/isAuth');


router.get('/', empApiController.getEmployees);
router.get('/:empId', empApiController.getEmployeeById);
router.post('/', empApiController.createEmployee);
router.put('/:empId', empApiController.updateEmployee);
router.delete('/:empId',isAuth, empApiController.deleteEmployee);

module.exports = router;