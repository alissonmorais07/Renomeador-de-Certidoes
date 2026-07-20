// Configuração do PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";


// Componentes da tela

const btnBaixarTodos = document.getElementById("btnBaixarTodos");

const inputArquivos = document.getElementById("pdfFiles");
const btnProcessar = document.getElementById("btnProcessar");
const resultado = document.getElementById("resultado");

// Arquivos que irão para o ZIP
const arquivosRenomeados = [];

// Quando clicar no botão
btnProcessar.addEventListener("click", processarArquivos);

// =========================================
// PROCESSAR TODOS OS PDFS
// =========================================

async function processarArquivos() {

    resultado.innerHTML = "";

    const arquivos = inputArquivos.files;

    if (arquivos.length === 0) {

        alert("Selecione pelo menos um PDF.");

        return;
    }

    resultado.innerHTML = "<div class='loading'>Processando PDFs...</div>";

    // Limpa a tela
    resultado.innerHTML = "";

    for (const arquivo of arquivos) {

        await processarPDF(arquivo);

    }

    if (arquivosRenomeados.length > 0) {
    btnBaixarTodos.style.display = "inline-block";
}

}

// =========================================
// PROCESSAR UM PDF
// =========================================

async function processarPDF(file) {

    try {

        // Transformar em ArrayBuffer

        const buffer = await file.arrayBuffer();

        // Abrir PDF

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

        // Procurar número do pedido

        const pedido = encontrarPedido(textoCompleto);

        // Mostrar na tela

        mostrarResultado(file, pedido);

    }

    catch (erro) {

        console.error(erro);

        mostrarErro(file.name);

    }

}

// =========================================
// ENCONTRAR PEDIDO
// =========================================

function encontrarPedido(texto) {

    /*
        Formato do pedido

        26 = ano
        01-12 = mês
        01-31 = dia
        00000 = sequencial

        Exemplo:
        26071800022
    */

    const regex = /\b26(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])\d{5}\b/g;

    const pedidos = texto.match(regex);

    if (!pedidos)
        return null;

    return pedidos[0];

}

function mostrarResultado(file, pedido) {

    const card = document.createElement("div");

    card.className = "card";

    if (!pedido) {

        card.innerHTML = `
            <h3>${file.name}</h3>

            <p class="erro">
                Nenhum número de pedido encontrado.
            </p>
        `;

        resultado.appendChild(card);

        return;
    }

    const novoNome = pedido + ".pdf";

    arquivosRenomeados.push({
    nome: novoNome,
    arquivo: file
});

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

        baixarArquivo(file, nome);

    });

    resultado.appendChild(card);

}

function baixarArquivo(file, nome) {

    const link = document.createElement("a");

    link.href = URL.createObjectURL(file);

    link.download = nome + ".pdf";

    link.click();

    URL.revokeObjectURL(link.href);

}

function mostrarErro(nomeArquivo) {

    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `
        <h3>${nomeArquivo}</h3>

        <p class="erro">
            Erro ao ler este PDF.
        </p>
    `;

    resultado.appendChild(card);

}

btnBaixarTodos.addEventListener("click", baixarTodos);

async function baixarTodos() {

    const zip = new JSZip();

    // Controla nomes repetidos
    const nomes = {};

    for (const item of arquivosRenomeados) {

        let nome = item.nome.replace(".pdf", "");

        if (nomes[nome] === undefined) {

            nomes[nome] = 0;

        } else {

            nomes[nome]++;

            nome = `${nome}(${nomes[nome]})`;

        }

        const conteudo = await item.arquivo.arrayBuffer();

        zip.file(`${nome}.pdf`, conteudo);

    }

    const blob = await zip.generateAsync({
        type: "blob"
    });

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = "Certidoes_Renomeadas.zip";

    link.click();

    URL.revokeObjectURL(link.href);

}