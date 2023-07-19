import sequelize from "../db_sequalize";
import {Model, DataTypes} from "sequelize";

class User extends Model {
    public id! : number;
    public email! : string;
    public password! : number;
    public role! : string;
}