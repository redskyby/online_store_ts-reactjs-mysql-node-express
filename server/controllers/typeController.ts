import {Request, Response} from "express";
import models from "../models/models";
import ApiError from "../error/ApiError";

class typeController {
    async create(req: Request, res: Response) {
            const {name} = req.body;
            const type  = await models.Type.create({name});
            return res.json(type);
    }

    async getAll(req: Request, res: Response) {

    }
}

export default new typeController();