const express = require("express");
const route = express.Router();
const Members = require("../models/members.model");
const Committees = require("../models/committees.model");


route.get("/", async (req, res) => {
    try {
        const members = await Members.findAll({
            attributes: { exclude: ['id'] }
        });
        res.status(200).send(members);
    }
    catch (error) {
        res.status(403).send(error);
    }
});

route.post("/", async (req, res) => {
    try {
        const newMembers = await Members.create({
            name: req.body.name,
            Committee: req.body.Committee,
            isGrad: req.body.isGrad,
            DateJoined: req.body.DateJoined
        });
        res.status(200).send(newMembers);
    }
    catch (error) {
        res.status(403).send(error)
    }
});

route.patch("/:id", async (req, res) => {
    try {
        const editMembers = await Members.update({
            name: req.body.name,
            Committee: req.body.Committee,
            isGrad: req.body.isGrad,
            DateJoined: req.body.DateJoined
        }, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).send(editMembers);
    }
    catch (error) {
        res.status(403).send(error);
    }
});


route.delete("/:id", async (req, res) => {
    try {
        await Members.destroy({
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


route.get("/q6", async (req, res) => {
    try {
        
        const members = await Members.findAll({
            attributes: ['name'],
            include:[{
                model: Committees,
                attributes:['name']
            }]
        });

        res.status(200).send(members);
    }
    catch (error) {
        res.status(403).send(error);
    }

});

route.get("/:committe", async (req, res) => {
    try {
        const members = await Members.findAll({
            attributes: ['name'],
            where: {
                Committee: req.params.committe
            }
        });

        res.status(200).send(members);
    }
    catch (error) {
        res.status(403).send(error);
    }

});

module.exports = route;