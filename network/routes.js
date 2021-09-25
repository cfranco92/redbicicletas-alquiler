// By Cristian Franco
const bicicleta = require('../components/bicicleta/network');

const routes = function (server) {
    server.use('/bicicleta', bicicleta);
}

module.exports = routes;