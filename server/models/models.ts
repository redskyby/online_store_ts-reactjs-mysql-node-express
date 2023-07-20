import sequelize from "../db_sequalize";
import {Model, DataTypes} from "sequelize";

class User extends Model {
    public id! : number;
    public email! : string;
    public password! : number;
    public role! : string;
}

User.init(
    {
        id:{
            type :DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
        },
        email:{
            type: DataTypes.STRING,
            unique:true
        },
        password:{
            type : DataTypes.STRING
        },
        role:{
            type : DataTypes.STRING,
            defaultValue : "USER"
        }
    },
    {
        sequelize,
        modelName: "USER"
    }
)