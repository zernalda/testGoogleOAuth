const express = require('express');
const router = require('express-promise-router')();
// const router = express.Router();

const UsersController = require('../controllers/users');

router.route('/signup')
    .post(UsersController.signUp);

module.exports = router;