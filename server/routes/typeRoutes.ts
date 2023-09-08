import {Router} from 'express';

const router = Router();
import typeController from '../controllers/typeController';
import checkRoleMiddleware from "../middleware/checkRoleMiddleware";

router.post("/", checkRoleMiddleware("ADMIN"), typeController.create);
router.get("/", typeController.getAll);

export default router;