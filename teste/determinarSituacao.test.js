const determinarSituacao = require('../src/determinarSituacao');

test('Deve aprovar aluno com média maior ou igual a 7', () => {
    expect(determinarSituacao(7)).toBe('Aprovado');
});