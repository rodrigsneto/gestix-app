import { Router } from 'express';

import * as HomeController from '../controllers/homeController';
import * as EquipController from '../controllers/ticketEquipController';

const router = Router();

router.get('/', HomeController.home);

router.get('/ticketEquips', EquipController.ticketEquip);
router.get('/ticketEquips/new', EquipController.ticketEquipNew);
router.post('/ticketEquips/newAction', EquipController.addTicketEquip);

export default router;