const verificarNotaZero = require('../src/verificarNotaZero');

test('Deve retornar true se houver nota 0 no array', () => {
    expect(verificarNotaZero([0, 8, 10, 7])).toBe(true);
});
