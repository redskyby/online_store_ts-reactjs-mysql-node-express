import {Router} from 'express';

const router = Router();
import userController from "../controllers/userController";
import authMiddleware from "../middleware/authMiddleware";

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.get("/auth", authMiddleware, userController.check);

export default router;