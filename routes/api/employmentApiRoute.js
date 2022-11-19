const express = require('express');
const router = express.Router();

const employmentApiController = require('../../api/employmentAPI');

router.get('/', employmentApiController.getEmployments);
router.get('/:employmentId', employmentApiController.getEmploymentById);
router.post('/', employmentApiController.createEmployment);
router.put('/:employmentId', employmentApiController.updateEmployment);
router.delete('/:employmentId', employmentApiController.deleteEmployment);

module.exports = router;