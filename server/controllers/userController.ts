import {NextFunction, Request, Response} from "express";
import ApiError from "../error/ApiError";
import models from "../models/models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {config} from "dotenv";

config();

const generateJwt = (id: number, email: string, role: string): string => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY!,
        {expiresIn: '24h'}
    );
}

class UserController {
    async registration(req: Request, res: Response, next: NextFunction) {
        const {email, password, role} = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest("Не коректный email или password!"));
        }
        const candidate = await models.User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest("Пользователь с такм email существует!"));
        }

        const hashPassword: string = await bcrypt.hash(password, 5);
        const user = await models.User.create({email, role, password: hashPassword});
        const basket = await models.Basket.create({userId: user.id});
        // const token: string = jwt.sign(
        //     {id: user.id, email: user.email, role},
        //     process.env.SECRET_KEY!,
        //     {expiresIn: '24h'}
        // );
        const token : string = generateJwt(user.id , user.email , user.role);
        return res.json({token});
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