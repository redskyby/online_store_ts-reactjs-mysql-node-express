import {Request , Response} from "express";

class UserController {
    async registration(req : Request, res: Response){

    }
    async login(req : Request, res: Response){

    }
    async check(req : Request, res: Response){
        const query = req.query;
        res.json(query);
    }
}

export default new UserController();