import express, {Express} from 'express';
import {config} from 'dotenv';
import sequelize from "./db_sequalize";
import cors from 'cors';
import routes from "./routes/index";
import errorHandlingMiddleware from "./middleware/ErrorHandlingMiddleware";
import fileUpload from 'express-fileupload';
import * as path from 'path';

config();

const app: Express = express();
const port: number = parseInt(process.env.PORT!, 10) || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use('/api/', routes);

//MiddleWare должен быть в самом конце.
//errorHandlingMiddleware -- замыкающий
app.use(errorHandlingMiddleware);
const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        })
    } catch (e) {
        console.log(e);
    }
}
start();
