import {NextFunction, Request, Response} from "express";
import {UploadedFile} from 'express-fileupload';
import {v4 as uuidv4} from 'uuid';
import * as path from 'path';
import models from "../models/models";
import ApiError from "../error/ApiError";

class deviceController {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const {name, price, brandId, TypeId, info} = req.body;
            const img = req.files?.img as UploadedFile;
            let fileName: string = uuidv4() + ".jpg";
            await img.mv(path.resolve(__dirname, '..', 'static', fileName));

            const device = await models.Device.create(
                {name, price, brandId, TypeId, info, img: fileName}
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
        const {brandId , typeId} = req.query;
        let devises ;
        if(!brandId && !typeId){
            devises = await  models.Device.findAll();
        }
        if(brandId && !typeId){
            devises = await  models.Device.findAll({where : {brandId}});
        }
        if(!brandId && typeId){
            devises = await  models.Device.findAll({where : {typeId}});
        }
        if(brandId && typeId){
            devises = await  models.Device.findAll({where : {typeId , brandId}});
        }
        return res.json(devises);
    }

    async getOne(req: Request, res: Response) {

    }
}

export default new deviceController();