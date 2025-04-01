function determinarSituacao(media) {
    if (media >= 7) return 'Aprovado';
    if (media >= 5) return 'Recuperação';
    return 'Reprovado';
}

module.exports = determinarSituacao;
