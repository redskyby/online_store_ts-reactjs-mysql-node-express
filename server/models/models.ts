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

class Rating extends Model {
    public id!: number;
    public rate!: number;
}

class Device_Info extends Model {
    public id!: number;
    public title!: string;
    public description!: string;
}

class Type_Brand extends Model {
    public id!: number;
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
        modelName: "basket"
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
        modelName: "basket_device"
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
        modelName: "device"
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
        modelName: "type"
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
        modelName: "brand"
    }
)

Rating.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        rate: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    {
        sequelize,
        modelName: "rating"
    }
)

Device_Info.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: "device_info"
    }
)

Type_Brand.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
    },
    {
        sequelize,
        modelName: "type_Brand"
    }
)

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(Basket_Device)
Basket_Device.belongsTo(Basket)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(Basket_Device)
Basket_Device.belongsTo(Device)

Device.hasMany(Device_Info, {as: 'info'});
Device_Info.belongsTo(Device)

Type.belongsToMany(Brand, {through: Type_Brand})
Brand.belongsToMany(Type, {through: Type_Brand})

export default {
    User,
    Basket,
    Basket_Device,
    Device,
    Type,
    Brand,
    Rating,
    Device_Info,
    Type_Brand
};