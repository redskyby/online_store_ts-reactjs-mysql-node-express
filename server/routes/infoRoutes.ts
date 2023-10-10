import {Router} from 'express';
import infoController from "../controllers/infoController";

const router = Router();

router.get("/" , infoController.getAll);

export default router;