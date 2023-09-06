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
            return next(ApiError.badRequest("Некорректный email или password!"));
        }
        const candidate = await models.User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest("Пользователь с таким email существует!"));
        }

        const hashPassword: string = await bcrypt.hash(password, 5);
        const user = await models.User.create({email, role, password: hashPassword});
        const basket = await models.Basket.create({userId: user.id});

        const token: string = generateJwt(user.id, user.email, user.role);
        return res.json({token});
    }

    async login(req: Request, res: Response, next: NextFunction) {
        const {email, password} = req.body;
        const user = await models.User.findOne({where: {email}});
        if (!user) {
            return next(ApiError.internal("Пользователь с таким email не существует!"));
        }

        let comparePassword: boolean = bcrypt.compareSync(String(password), String(user.dataValues.password));

        if (!comparePassword) {
            return next(ApiError.internal("Указан неверный пароль"));
        }

        const token = generateJwt(user.id, user.email, user.role);
        return res.json({token});
    }

    async check(req: Request, res: Response) {
        // const {id} = req.query;
        // if (!id) {
        //     return next(ApiError.badRequest("Не задан ID!"));
        // }
        // res.json(id);
        const token = generateJwt(req.user.id , req.user.email , req.user.role);
        return res.json({token});
    }
}

export default new UserController();