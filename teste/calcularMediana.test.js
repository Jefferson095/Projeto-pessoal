const calcularMediana = require('../src/calcularMediana');

test('Deve calcular a mediana corretamente para lista ímpar', () => {
    expect(calcularMediana([5, 8, 10, 7, 9])).toBe(8);
});