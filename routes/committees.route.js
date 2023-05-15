const express = require("express");
const route = express.Router();
const Committees = require("../models/committees.model");

route.get("/", async (req, res) => {
    try {
        const committees = await Committees.findAll({
            attributes: { exclude: ['id'] }
        });
        res.status(200).send(committees);
    }
    catch (error) {
        res.status(403).send(error);
    }

});

route.post("/", async (req, res) => {
    try {
        const newCommittees = await Committees.create({
            name: req.body.name,
            head_name: req.body.head_name,
            vice_name: req.body.vice_name
        });
        res.send(newCommittees);
    }
    catch (error) {
        res.status(403).send(error);
    }
});


route.patch("/:id", async (req, res) => {
    try {
        const editCommittees = await Committees.update({
            name: req.body.name,
            head_name: req.body.head_name,
            vice_name: req.body.vice_name,
        }, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).send(editCommittees);
    }
    catch (error) {
        res.status(403).send(error);
    }
});


route.delete("/:id", async (req, res) => {
    try {
        await Committees.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).send("deleted");
    }
    catch (error) {
        res.status(403).send(error);
    }

});

module.exports = route;