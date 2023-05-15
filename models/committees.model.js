const { DataTypes } = require("sequelize");

const db = require("../config/db");


module.exports = db.define("committees", {
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
    head_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            max:100,
            isAlpha:true,
            isAlphanumeric:false,
            is: ["^[a-z]+$",'i']
        }
    },
    vice_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            max:100,
            isAlpha:true,
            isAlphanumeric:false,
            is: ["^[a-z]+$",'i']
        }
    },
    
},{
    timestamps:false,
    tableName:false
});

