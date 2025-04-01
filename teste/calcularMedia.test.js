const calcularMedia = require('../src/calcularMedia');

test('Deve calcular a média corretamente', () => {
    expect(calcularMedia([5, 10, 7])).toBeCloseTo(7.33, 1);
});