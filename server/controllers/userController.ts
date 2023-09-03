import {NextFunction, Request, Response} from "express";
import ApiError from "../error/ApiError";
import models from "../models/models";

class UserController {
    async registration(req: Request, res: Response, next: NextFunction) {
        const {email, password, role} = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest("Не коректный email или password!"));
        }
        const candidate = await models.User.findOne({where : {email}})
    }

    async login(req: Request, res: Response) {

    }

    async check(req: Request, res: Response, next: NextFunction) {
        const {id} = req.query;
        if (!id) {
            return next(ApiError.badRequest("Не задан ID!"));
        }
        res.json(id);
    }
}

export default new UserController();