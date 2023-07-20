import sequelize from "../db_sequalize";
import {Model, DataTypes} from "sequelize";

class User extends Model {
    public id!: number;
    public email!: string;
    public password!: number;
    public role!: string;
}

class Basket extends Model {
    public id!: number;
}

class Basket_Device extends Model {
    public id!: number;
}

class Device extends Model {
    public id!: number;
    public name!: string;
    public price!: number;
    public rating!: number;
    public img!: string;
}
class Type extends Model {
    public id!: number;
    public name!: string;
}
class Brand extends Model {
    public id!: number;
    public name!: string;
}
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            type: DataTypes.STRING
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: "USER"
        }
    },
    {
        sequelize,
        modelName: "User"
    }
)

Basket.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
    },
    {
        sequelize,
        modelName: "Basket"
    }
)
Basket_Device.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
    },
    {
        sequelize,
        modelName: "Basket_Device"
    }
)

Device.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: "Device"
    }
)
Type.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
    },
    {
        sequelize,
        modelName: "Type"
    }
)
Brand.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
    },
    {
        sequelize,
        modelName: "Brand"
    }
)