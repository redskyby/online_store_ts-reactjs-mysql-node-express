import {NextFunction, Request, Response} from "express";
import {UploadedFile} from 'express-fileupload';
import {v4 as uuidv4} from 'uuid';
import * as path from 'path';
import models from "../models/models";
import ApiError from "../error/ApiError";

class deviceController {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const {name, price, brandId, typeId, info} = req.body;
            const img = req.files?.img as UploadedFile;
            let fileName: string = uuidv4() + ".jpg";
            await img.mv(path.resolve(__dirname, '..', 'static', fileName));

            const device = await models.Device.create(
                {name, price, brandId, typeId, info, img: fileName}
            );

            return res.json(device);
        } catch (e) {
            if (typeof e === 'string') {
                next(ApiError.badRequest(e));
            } else {
                next(console.log(e));
            }
        }
    }

    async getAll(req: Request, res: Response) {
        let {brandId, typeId, limit = 9, page = 1} = req.query;
        let devises;
        limit = Number(limit)
        let offset: number = Number(page) * limit - limit;
        if (!brandId && !typeId) {
            devises = await models.Device.findAll({limit, offset});
        }
        if (brandId && !typeId) {
            devises = await models.Device.findAll({where: {brandId}, limit, offset});
        }
        if (!brandId && typeId) {
            devises = await models.Device.findAll({where: {typeId}, limit, offset});
        }
        if (brandId && typeId) {
            devises = await models.Device.findAll({where: {typeId, brandId}, limit, offset});
        }
        return res.json(devises);
    }

    async getOne(req: Request, res: Response) {

    }
}

export default new deviceController();