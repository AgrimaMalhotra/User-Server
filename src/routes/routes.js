import express from 'express';
import controller from '../controller/controller.js';

const router = express.Router();

router.route('/users')
  .get(controller.getUsers)
  .post(controller.createUser);

router.route('/users/:id')
  .get(controller.getUser);

export default router;
