// =========================================
// PDF-READER.JS
// Responsável por configurar o PDF.js e extrair
// o texto completo de um arquivo PDF.
// =========================================

// Configuração do worker do PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

/**
 * Extrai todo o texto de um arquivo PDF, página por página.
 * @param {File} file - Arquivo PDF selecionado pelo usuário.
 * @returns {Promise<string>} Texto completo do PDF.
 */
export async function extrairTextoPDF(file) {

    const buffer = await file.arrayBuffer();

    const pdf = await pdfjsLib.getDocument({
        data: buffer
    }).promise;

    let textoCompleto = "";

    // Percorre todas as páginas
    for (let pagina = 1; pagina <= pdf.numPages; pagina++) {

        const page = await pdf.getPage(pagina);

        const content = await page.getTextContent();

        const textoPagina = content.items
            .map(item => item.str)
            .join(" ");

        textoCompleto += textoPagina + " ";

    }

    return textoCompleto;

}
