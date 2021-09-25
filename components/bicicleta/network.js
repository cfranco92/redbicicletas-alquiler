// By Cristian Franco
const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

// END-POINTS
router.get('/', getBicycles);
router.patch('/:id', updateBicycle);

function getBicycles(req, res) {
    controller.listBicycles()
        .then(bicicletas => {
            response.success(req, res, bicicletas, 200);
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err);
        });
};

function updateBicycle(req, res) {
    controller.updateBicycleById(req.params.id, req.body.user)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Internal Error', 500, e);
        });
}

module.exports = router;