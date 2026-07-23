// =========================================
// UI.JS
// Responsável por toda a manipulação do DOM:
// criar cards, mostrar erros, exibir botões etc.
// =========================================

import { baixarBlob } from "./utils.js";

/**
 * Limpa a área de resultados na tela.
 * @param {HTMLElement} containerResultado
 */
export function limparResultado(containerResultado) {

    containerResultado.innerHTML = "";

}

/**
 * Renderiza o card de um PDF processado com sucesso (pedido encontrado)
 * ou com erro (pedido não encontrado).
 *
 * @param {HTMLElement} containerResultado
 * @param {File} file - Arquivo original.
 * @param {string|null} pedido - Número do pedido encontrado (ou null).
 * @param {(nomeFinal: string) => void} onBaixar - Callback chamado ao clicar em "Baixar PDF".
 */
export function mostrarResultado(containerResultado, file, pedido, onBaixar) {

    const card = document.createElement("div");

    card.className = "card";

    if (!pedido) {

        card.innerHTML = `
            <h3>${file.name}</h3>

            <p class="erro">
                Nenhum número de pedido encontrado.
            </p>
        `;

        containerResultado.appendChild(card);

        return;

    }

    card.innerHTML = `
        <h3>${file.name}</h3>

        <p><strong>Novo nome:</strong></p>

        <input
            type="text"
            value="${pedido}"
            class="nomePedido"
        >

        <br><br>

        <button class="download">
            ⬇ Baixar PDF
        </button>
    `;

    const botao = card.querySelector(".download");

    const input = card.querySelector(".nomePedido");

    botao.addEventListener("click", () => {

        const nome = input.value.trim();

        onBaixar(nome);

    });

    containerResultado.appendChild(card);

}

/**
 * Renderiza um card de erro de leitura para um arquivo específico.
 * @param {HTMLElement} containerResultado
 * @param {string} nomeArquivo
 */
export function mostrarErro(containerResultado, nomeArquivo) {

    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `
        <h3>${nomeArquivo}</h3>

        <p class="erro">
            Erro ao ler este PDF.
        </p>
    `;

    containerResultado.appendChild(card);

}

/**
 * Baixa um único arquivo PDF com o nome informado.
 * @param {File} file
 * @param {string} nome - Nome sem extensão.
 */
export function baixarArquivo(file, nome) {

    baixarBlob(file, nome + ".pdf");

}

/**
 * Exibe/esconde o botão de "Baixar todos".
 * @param {HTMLElement} botao
 * @param {boolean} mostrar
 */
export function exibirBotaoBaixarTodos(botao, mostrar) {

    botao.style.display = mostrar ? "inline-block" : "none";

}
