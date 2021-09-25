// By Cristian Franco
const store = require('./store');

function listBicycles() {
    return store.list();
}

function updateBicycleById(id, user) {
    return new Promise(async (resolve, reject) => {
        const result = await store.updateById(id, user);

        resolve(result);
    })
}

module.exports = {
    listBicycles,
    updateBicycleById,
}