// =========================================
// PEDIDO-EXTRACTOR.JS
// Responsável por localizar o número do pedido
// dentro do texto extraído de um PDF.
// =========================================

/*
    Formato do pedido

    2X    = ano (20 a 29 → cobre de 2020 a 2029)
    01-12 = mês
    01-31 = dia
    00000 = sequencial

    Exemplo:
    26071800022

    Observação: se precisar cobrir anos fora da faixa 2020-2029
    (por exemplo, a partir de 2030), basta ajustar o grupo do ano
    abaixo, de "2[0-9]" para algo como "[23][0-9]" (2020 a 2039).
*/
const REGEX_PEDIDO = /\b2[0-9](0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])\d{5}\b/g;

/**
 * Procura o primeiro número de pedido válido dentro do texto.
 * @param {string} texto - Texto completo extraído do PDF.
 * @returns {string|null} Número do pedido encontrado, ou null.
 */
export function encontrarPedido(texto) {

    const pedidos = texto.match(REGEX_PEDIDO);

    if (!pedidos) {
        return null;
    }

    return pedidos[0];

}
