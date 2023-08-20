import express, {Express} from 'express';
import {config} from 'dotenv';
import sequelize  from "./db_sequalize";
import models from "./models/models";
import cors from 'cors';
import routes from "./routes/index";
import errorHandlingMiddleware from "./middleware/ErrorHandlingMiddleware";
config();

const app: Express = express();
const port: number = parseInt(process.env.PORT!, 10) || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/' , routes);
//MiddleWare должен быть в самом конце.
//errorHandlingMiddleware -- замыкающий
app.use(errorHandlingMiddleware);

const start = async () => {
    try {
        await sequelize.authenticate();
        console.log("есть подключение!");
        await sequelize.sync();
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        })
    } catch (e) {
        console.log(e);
    }
}
start();
