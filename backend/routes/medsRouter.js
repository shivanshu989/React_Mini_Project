const express = require('express');
const medsRouter = express.Router();
const Meds = require("../models/Meds");

medsRouter
.route('/getallmeds')
.get(getAllMeds);

function getAllMeds(req, res) {
    Meds.find({})
    .then((medsArr) => {
        res.send({
            medsArr
        });
    })
    .catch((err) => {
        res.send({
            error
        })
    })
}

module.exports = medsRouter;