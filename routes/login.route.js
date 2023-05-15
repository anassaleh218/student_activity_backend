const express = require("express");
const route = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/admin.model");


route.get("/", async (req, res) => {
    try {
        const admins = await Admin.findAll();
        res.status(200).send(admins)
    }
    catch (error) {
        res.status(403).send(error);
    }
})


route.post("/", async (req, res) => {
    try {
        var hash = bcrypt.hashSync(req.body.password, 10)
        const newAdmin = await Admin.create({
            adminemail: req.body.adminemail,
            password: hash
        });
        res.status(200).send(newAdmin);
    }
    catch (error) {
        res.status(403).send(error);
    }
})



route.post("/check", async (req, res) => {
    const admin = await Admin.findByPk(req.body.adminID);
    if (bcrypt.compareSync(req.body.password, admin.password)) {
        var token = jwt.sign({ password: admin.password },
            process.env.JWT_SECRET,
            {
                expiresIn: "72h",
            }
        );
        res.status(200).send(token);
    } else {
        res.status(403).send("wrong");
    }
});

module.exports = route;
