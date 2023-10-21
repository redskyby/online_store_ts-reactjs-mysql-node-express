import {Request, Response} from "express";
import models from "../models/models";

class RatingController {

    async createRating(req: Request, res: Response) {
        const {rate, userId, deviceId} = req.query;
        const rating = await models.Rating.create({rate: rate, userId: userId, deviceId: deviceId});
        return res.json(rating);

    }

    async getRating(req: Request, res: Response) {
        const {userId, deviceId} = req.query;
        const rate = await models.Rating.findOne({
            where: {userId, deviceId}
        });
        return res.json(rate);

    }
}

export default new RatingController();