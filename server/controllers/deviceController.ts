import {NextFunction, Request, Response} from "express";
import {UploadedFile} from 'express-fileupload';
import {v4 as uuidv4} from 'uuid';
import * as path from 'path';
import models from "../models/models";
import ApiError from "../error/ApiError";

class deviceController {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            let {name, price, brandId, typeId, info} = req.body;
            const img = req.files?.img as UploadedFile;
            let fileName: string = uuidv4() + ".jpg";
            await img.mv(path.resolve(__dirname, '../', 'static', fileName));

            const device = await models.Device.create(
                {name, price, brandId, typeId, info, img: fileName}
            );

            if (info) {
                info = JSON.parse(info);
                info.forEach((i: { title: string, description: string }) =>
                    models.Device_Info.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                );
            }

            return res.json(device);
        } catch (e) {
            if (typeof e === 'string') {
                next(ApiError.badRequest(e));
            } else {
                console.error(e);
                next(e)
            }
        }
    }

    async getAll(req: Request, res: Response) {
        let {brandId, typeId, limit = 9, page = 1} = req.query;
        let devises;
        limit = Number(limit)
        let offset: number = Number(page) * limit - limit;
        if (!brandId && !typeId) {
            devises = await models.Device.findAndCountAll({limit, offset});
        }
        if (brandId && !typeId) {
            devises = await models.Device.findAndCountAll({where: {brandId}, limit, offset});
        }
        if (!brandId && typeId) {
            devises = await models.Device.findAndCountAll({where: {typeId}, limit, offset});
        }
        if (brandId && typeId) {
            devises = await models.Device.findAndCountAll({where: {typeId, brandId}, limit, offset});
        }
        return res.json(devises);
    }

    async getOne(req: Request, res: Response) {
        const {id} = req.params;
        const device = await models.Device.findOne(
            {
                where: {id},
                include: [{
                    model: models.Device_Info, as: 'info'
                }]
            }
        )
        return res.json(device);
    }
}

export default new deviceController();
