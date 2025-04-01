const validarNotasArray = require('../src/validarNotasArray');

test('Deve validar um array de notas corretas', () => {
    expect(validarNotasArray([8, 5, 10, 7])).toBe(true);
});