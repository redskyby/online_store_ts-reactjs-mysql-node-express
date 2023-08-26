import {Request, Response} from "express";
import { UploadedFile } from 'express-fileupload';
import { v4 as uuidv4 } from 'uuid';

class deviceController {
    async create(req: Request, res: Response) {
        const {name, price, brandId , typeId, info} = req.body;
        const img = req.files?.img as UploadedFile;
        let fileName : string = uuidv4() + ".jpg";
    }

    async getAll(req: Request, res: Response) {

    }

    async getOne(req: Request, res: Response) {

    }
}

export default new deviceController();