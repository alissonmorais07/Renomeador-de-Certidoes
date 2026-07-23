// =========================================
// UTILS.JS
// Funções utilitárias genéricas, sem regra de negócio.
// =========================================

/**
 * Dispara o download de um Blob (ou File) com o nome informado.
 * @param {Blob|File} blob - Conteúdo a ser baixado.
 * @param {string} nomeArquivo - Nome final do arquivo (com extensão).
 */
export function baixarBlob(blob, nomeArquivo) {

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = nomeArquivo;

    link.click();

    URL.revokeObjectURL(link.href);

}

/**
 * Retorna a data e hora atuais formatadas para uso em nome de arquivo,
 * no padrão AAAA-MM-DD_HH-MM-SS (sem caracteres inválidos como ":").
 * Ex.: 2026-07-23_14-32-05
 */
export function obterDataHoraParaNomeArquivo() {

    const agora = new Date();

    const pad = (numero) => String(numero).padStart(2, "0");

    const data = [
        agora.getFullYear(),
        pad(agora.getMonth() + 1),
        pad(agora.getDate())
    ].join("-");

    const hora = [
        pad(agora.getHours()),
        pad(agora.getMinutes()),
        pad(agora.getSeconds())
    ].join("-");

    return `${data}_${hora}`;

}

/**
 * Garante que não existam nomes de arquivo repetidos,
 * adicionando um sufixo "(n)" quando necessário.
 * Ex.: pedido.pdf, pedido(1).pdf, pedido(2).pdf...
 */
export function criarGeradorDeNomesUnicos() {

    const nomesUsados = {};

    return function nomeUnico(nomeBase) {

        if (nomesUsados[nomeBase] === undefined) {

            nomesUsados[nomeBase] = 0;

            return nomeBase;

        }

        nomesUsados[nomeBase]++;

        return `${nomeBase}(${nomesUsados[nomeBase]})`;

    };

}
