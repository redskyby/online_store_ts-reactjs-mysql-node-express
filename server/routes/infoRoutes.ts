import {Router} from 'express';
import infoController from "../controllers/infoController";

const router = Router();

router.get("/:deviceId" , infoController.getOne);

export default router;