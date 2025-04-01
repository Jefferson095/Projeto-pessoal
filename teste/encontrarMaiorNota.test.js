const encontrarMenorNota = require('../src/encontrarMenorNota');

test('Deve encontrar a menor nota em um array', () => {
    expect(encontrarMenorNota([5, 8, 10, 7])).toBe(5);
});