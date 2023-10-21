import {Router} from 'express';
import ratingController from "../controllers/ratingController";


const router = Router();

router.get("/:ratingId" , ratingController.create);

export default router;