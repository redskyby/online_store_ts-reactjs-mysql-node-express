import {Router} from 'express';
import ratingController from "../controllers/ratingController";


const router = Router();

router.get("/" , ratingController.getRating);
router.post("/" , ratingController.createRating);

export default router;