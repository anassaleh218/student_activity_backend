const { DataTypes } = require("sequelize");
const db = require("../config/db");

module.exports = db.define("admin", {
    
    adminID:{
       type: DataTypes.INTEGER,
       autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    adminemail:{
     type:DataTypes.STRING,
     allowNull:false,
     validate:{
         isEmail:true
     }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            max:100
        }
    },
},{
    timestamps:false,
    tableName:false
}
);