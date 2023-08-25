import {Router} from 'express';

const router = Router();
import brandController from "../controllers/brandController";

router.post("/", brandController.create);
router.get("/", brandController.getAll);

export default router;