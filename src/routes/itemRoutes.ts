import { Router } from 'express';
import { createItem, getItems, withdrawItem } from '../controllers/itemController';

const router = Router();

router.get('/list', getItems);
router.post('/add', createItem);
router.post('/withdraw/:id', withdrawItem);

export default router;