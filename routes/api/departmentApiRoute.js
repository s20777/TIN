const express = require('express');
const router = express.Router();

const deptApiController = require('../../api/departmentAPI');

router.get('/', deptApiController.getDepartments);
router.get('/:deptId', deptApiController.getDepartmentById);
router.post('/', deptApiController.createDepartment);
router.put('/:deptId', deptApiController.updateDepartment);
router.delete('/:deptId', deptApiController.deleteDepartment);

module.exports = router;