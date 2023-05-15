const express = require("express");
const app = express();
const db = require("./config/db");
require("dotenv").config();

const committeesModel = require("./models/committees.model");
const membersModel = require("./models/members.model");

app.use(express.json());

committeesModel.hasMany(membersModel, { foreignKey: 'Committee' });
membersModel.belongsTo(committeesModel, { foreignKey: 'Committee' })


db.authenticate().then(() => {
  db.sync({ alter: true });
  console.log("connect");
})


app.use("/180committees", require("./routes/committees.route"));
app.use("/180members", require("./routes/members.route"));
app.use("/login", require("./routes/login.route"));


app.listen(5200, () => {
  console.log("Running");
});