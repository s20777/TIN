const express = require('express');
const router = express.Router();

const empApiController = require('../../api/employeeAPI');

router.get('/', empApiController.getEmployees);
router.get('/:empId', empApiController.getEmployeeById);
router.post('/', empApiController.createEmployee);
router.put('/:empId', empApiController.updateEmployee);
router.delete('/:empId', empApiController.deleteEmployee);

module.exports = router;