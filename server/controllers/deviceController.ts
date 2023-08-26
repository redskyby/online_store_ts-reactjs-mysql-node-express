import {Request, Response} from "express";

class deviceController {
    async create(req: Request, res: Response) {
        const {name, price, brandId , typeId, info} = req.body;
        const {img} = req.files;
    }

    async getAll(req: Request, res: Response) {

    }

    async getOne(req: Request, res: Response) {

    }
}

export default new deviceController();