import express, {Express} from 'express';
import {config} from 'dotenv';
import connection from "./db";
import sequelize from "./db_sequalize";

config();

const app :Express = express();
const port : number = parseInt(process.env.PORT!, 10) || 5000;

app.use(express.json());

const start = async ()=>{
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(port , ()=>{
            console.log(`Server running at http://localhost:${port}`);
        })
    }catch (e) {
        console.log(e);
    }
}
start();