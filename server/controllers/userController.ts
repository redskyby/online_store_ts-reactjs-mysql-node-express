import {NextFunction, Request, Response} from "express";
import ApiError from "../error/ApiError";


class UserController {
    async registration(req: Request, res: Response) {

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