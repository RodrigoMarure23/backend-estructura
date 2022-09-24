import express from 'express';
import * as clientController from '../controllers/clientController.js';

const router = express.Router();

router
.route('/clients')
.get(clientController.getAllClients);
export default router;