function calcularMediana(notas) {
    if (!Array.isArray(notas) || notas.length === 0) return null;
    const ordenadas = [...notas].sort((a, b) => a - b);
    const meio = Math.floor(ordenadas.length / 2);
    return ordenadas.length % 2 === 0 ? (ordenadas[meio - 1] + ordenadas[meio]) / 2 : ordenadas[meio];
}

module.exports = calcularMediana;