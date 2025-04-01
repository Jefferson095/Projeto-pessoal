const verificarNotaPerfeita = require('../src/verificarNotaPerfeita');

test('Deve retornar true se houver nota 10 no array', () => {
    expect(verificarNotaPerfeita([5, 8, 10, 7])).toBe(true);
});