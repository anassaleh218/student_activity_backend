const { DataTypes } = require("sequelize");

const db = require("../config/db");


module.exports = db.define("members", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            max:100,
            isAlpha:true,
            isAlphanumeric:false,
            is: ["^[a-z]+$",'i']
        }
    },
    Committee:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    isGrad: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    DateJoined:{
        type:DataTypes.DATE,
        allowNull: false
    },
    
},{
    timestamps:false,
    tableName:false
});


