function transformarNotas(notas, fator) {
    return notas.map(nota => Math.min(nota + fator, 10));
}

module.exports = transformarNotas;
