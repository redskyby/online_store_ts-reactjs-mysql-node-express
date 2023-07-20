import sequelize from "../db_sequalize";
import {Model, DataTypes} from "sequelize";

class User extends Model {
    public id! : number;
    public email! : string;
    public password! : number;
    public role! : string;
}
class Basket extends Model {
    public id! : number;
}

class Basket_Device extends Model {
    public id! : number;
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

Basket.init(
    {
        id:{
            type :DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
        },
    },
    {
        sequelize,
        modelName: "BASKET"
    }
)
Basket_Device.init(
    {
        id:{
            type :DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
        },
    },
    {
        sequelize,
        modelName: "Basket_Device"
    }
)