const transformarNotas = require('../src/transformarNotas');

test('Deve aumentar as notas pelo fator sem ultrapassar 10', () => {
    expect(transformarNotas([5, 8, 9], 2)).toEqual([7, 10, 10]);
});
