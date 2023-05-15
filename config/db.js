const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    host: "localhost",
    dialect: "mysql",
    username: "root",
    database: "180daraga",
    logging : console.log ,
});

module.exports = sequelize;