// =========================================
// APP.JS
// Ponto de entrada da aplicação.
// Conecta os componentes da tela aos módulos
// de leitura de PDF, extração de pedido, UI e ZIP.
// =========================================

import { extrairTextoPDF } from "./pdf-reader.js";
import { encontrarPedido } from "./pedido-extractor.js";
import { baixarTodosComoZip } from "./zip-generator.js";
import {
    limparResultado,
    mostrarResultado,
    mostrarErro,
    baixarArquivo,
    exibirBotaoBaixarTodos
} from "./ui.js";

// =========================================
// COMPONENTES DA TELA
// =========================================

const btnBaixarTodos = document.getElementById("btnBaixarTodos");
const inputArquivos = document.getElementById("pdfFiles");
const btnProcessar = document.getElementById("btnProcessar");
const resultado = document.getElementById("resultado");

// Arquivos que irão para o ZIP
const arquivosRenomeados = [];

// =========================================
// EVENTOS
// =========================================

btnProcessar.addEventListener("click", processarArquivos);
btnBaixarTodos.addEventListener("click", () => baixarTodosComoZip(arquivosRenomeados));

// =========================================
// PROCESSAR TODOS OS PDFS
// =========================================

async function processarArquivos() {

    const arquivos = inputArquivos.files;

    if (arquivos.length === 0) {

        alert("Selecione pelo menos um PDF.");

        return;

    }

    limparResultado(resultado);

    arquivosRenomeados.length = 0;

    exibirBotaoBaixarTodos(btnBaixarTodos, false);

    for (const arquivo of arquivos) {

        await processarPDF(arquivo);

    }

    if (arquivosRenomeados.length > 0) {

        exibirBotaoBaixarTodos(btnBaixarTodos, true);

    }

}

// =========================================
// PROCESSAR UM PDF
// =========================================

async function processarPDF(file) {

    try {

        const textoCompleto = await extrairTextoPDF(file);

        const pedido = encontrarPedido(textoCompleto);

        if (pedido) {

            arquivosRenomeados.push({
                nome: pedido + ".pdf",
                arquivo: file
            });

        }

        mostrarResultado(resultado, file, pedido, (nomeFinal) => {

            baixarArquivo(file, nomeFinal);

        });

    }

    catch (erro) {

        console.error(erro);

        mostrarErro(resultado, file.name);

    }

}
