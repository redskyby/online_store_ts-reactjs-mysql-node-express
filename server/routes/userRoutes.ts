import {Router} from 'express';

const router = Router();
import userController from "../controllers/userController";

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.get("/auth", userController.check);

export default router;