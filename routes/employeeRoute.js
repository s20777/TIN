const express = require('express');
const router = express.Router();


const employeeControler = require('../controllers/employeeController');

router.get('/', employeeControler.showEmployeeList)

module.exports = router;
