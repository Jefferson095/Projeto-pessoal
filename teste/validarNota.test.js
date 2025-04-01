const validarNota = require('../src/validarNota');

test('Deve validar uma nota válida', () => {
    expect(validarNota(7)).toBe(true);
});