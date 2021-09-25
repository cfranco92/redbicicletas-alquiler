// By Cristian Franco
const Model = require('./model');

async function updateBicycle(id, user) {
    const founBicycle = await Model.findOne({
        _id: id
    });

    founBicycle.user = user;

    const newStatus = await founBicycle.save();
    return newStatus;
}

function listBicycle() {
    return Model.find();
}

module.exports = {
    list: listBicycle,
    updateById: updateBicycle,
}