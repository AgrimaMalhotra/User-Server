const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.route('/users')
  .get(controller.getUsers)
  .post(controller.createUser);

router.route('/users/:id')
  .get(controller.getUser);

module.exports = router;
