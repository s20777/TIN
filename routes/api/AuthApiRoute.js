const express = require('express');
const router = express.Router();

const apiAuth = require('../../api/authApi');

router.post('/login', apiAuth.login);

module.exports = router;