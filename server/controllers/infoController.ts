import {NextFunction, Request, Response} from "express";
import ApiError from "../error/ApiError";
import models from "../models/models";

class InfoController {
    async getAll(req: Request, res: Response) {

        const {deviceId} = req.query;
        const types = await models.Device_Info.findAll({where: {deviceId}});
        return res.json(types);

    }
}

export default new InfoController();