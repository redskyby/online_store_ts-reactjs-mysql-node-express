import {Request, Response} from "express";
import models from "../models/models";

class InfoController {
    async getOne(req: Request, res: Response) {
        try {
            const {deviceId}= req.params;
            const types = await models.Device_Info.findAll({where: {deviceId}});
            return res.json(types);
        } catch (e) {
            return res.status(403).json({message: "Нет доступа к базе данных"});
        }
    }
}

export default new InfoController();