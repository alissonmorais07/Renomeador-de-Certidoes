// =========================================
// ZIP-GENERATOR.JS
// Responsável por empacotar os PDFs renomeados
// em um único arquivo .zip para download.
// =========================================

import { baixarBlob, criarGeradorDeNomesUnicos, obterDataHoraParaNomeArquivo } from "./utils.js";

/**
 * Gera um ZIP com todos os arquivos renomeados e inicia o download.
 * O nome do arquivo já inclui a data e hora do momento do download.
 * @param {Array<{nome: string, arquivo: File}>} arquivosRenomeados
 * @param {string} [prefixoNome] - Prefixo do nome do .zip (a data/hora é adicionada automaticamente).
 */
export async function baixarTodosComoZip(arquivosRenomeados, prefixoNome = "Certidoes_Renomeadas") {

    const nomeZip = `${prefixoNome}_${obterDataHoraParaNomeArquivo()}.zip`;

    const zip = new JSZip();

    const nomeUnico = criarGeradorDeNomesUnicos();

    for (const item of arquivosRenomeados) {

        const nomeBase = item.nome.replace(".pdf", "");

        const nomeFinal = nomeUnico(nomeBase);

        const conteudo = await item.arquivo.arrayBuffer();

        zip.file(`${nomeFinal}.pdf`, conteudo);

    }

    const blob = await zip.generateAsync({
        type: "blob"
    });

    baixarBlob(blob, nomeZip);

}
