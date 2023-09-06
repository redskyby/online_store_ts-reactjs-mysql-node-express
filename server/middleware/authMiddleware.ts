import {NextFunction, Request, Response} from "express";
import jwt from "jsonwebtoken";
import {config} from "dotenv";

config();

declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}
export default function (req: Request, res: Response, next: NextFunction) {
    if (req.method === "OPTIONS") {
        next();
    }
    try {
        const token: string = req.headers.authorization!.split(' ')[1];
        if (!token) {
            return res.status(401).json({message: "Не авторизован!"});
        }
        const decoded: string | any = jwt.verify(token, process.env.SECRET_KEY!);
        req.user = decoded;
        next();
    } catch (e) {
        res.status(401).json({message: "Не авторизован!"});
    }
}
