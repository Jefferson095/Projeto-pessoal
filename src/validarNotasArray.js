const validarNota = require('./validarNota');

function validarNotasArray(notas) {
    return Array.isArray(notas) && notas.every(validarNota);
}

module.exports = validarNotasArray;