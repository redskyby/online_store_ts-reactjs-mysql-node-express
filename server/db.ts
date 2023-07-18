import {config} from 'dotenv';
import mysql, {Connection} from "mysql2";
config();


interface configData {
    host : string,
    user : string,
    password :string,
    database : string
}

const configConnect : configData ={
    host: process.env.HOST!,
    user: process.env.USER!,
    password: process.env.PASSWORD!,
    database: process.env.DATABASE!
}

const connection : Connection  = mysql.createConnection(configConnect);

export default connection;