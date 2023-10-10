import {Router} from 'express';

const router = Router();

import deviceRoutes from "./deviceRoutes";
import brandRoutes from "./brandRoutes";
import typeRoutes from './typeRoutes';
import userRoutes from "./userRoutes";
import infoRoutes from "./infoRoutes";


router.use('/user', userRoutes);
router.use('/type', typeRoutes);
router.use('/brand', brandRoutes);
router.use('/device', deviceRoutes);
router.use('/info' , infoRoutes);

export default router;