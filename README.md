<<<<<<< HEAD
# 📄 Renomeador de Certidões PDF

Uma aplicação web desenvolvida em **HTML, CSS e JavaScript** para automatizar a organização de certidões de imóveis em PDF.

O sistema extrai automaticamente o número do pedido presente no documento, renomeia virtualmente os arquivos e gera um único arquivo **ZIP** contendo todos os PDFs com os nomes corretos.

---

## ✨ Funcionalidades

* 📂 Seleção de múltiplos arquivos PDF.
* 📖 Extração de texto utilizando **PDF.js**.
* 🔍 Identificação automática do número do pedido.
* 📝 Renomeação dos arquivos com base no número encontrado.
* 📦 Geração de um único arquivo ZIP com todos os PDFs renomeados.
* 🔄 Tratamento automático de nomes duplicados (`(1)`, `(2)`, etc.).
* 💻 Interface simples e intuitiva.
* 🌐 Execução diretamente no navegador, sem necessidade de instalação.

---

## 🛠️ Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript (ES6+)
* PDF.js
* JSZip

---

## 📁 Estrutura do Projeto

```text
renomeador-certidoes/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🚀 Como Executar

1. Clone este repositório:

```bash
git clone https://github.com/alissonmorais07/Renomeador-de-Certidoes.git
```

2. Acesse a pasta do projeto.

3. Abra o arquivo **index.html** em um navegador compatível (Google Chrome, Microsoft Edge ou Firefox).

4. Selecione um ou mais arquivos PDF.

5. Clique em **Processar PDFs**.

6. Após o processamento, clique em **📦 Baixar Todos** para fazer o download do arquivo ZIP contendo os documentos renomeados.

---

## 📋 Como Funciona

O sistema realiza as seguintes etapas:

1. Recebe um ou mais arquivos PDF.
2. Extrai o texto de cada documento utilizando a biblioteca **PDF.js**.
3. Localiza automaticamente o número do pedido através de uma expressão regular baseada no padrão:

```text
AAMMDDSSSSS
```

Exemplo:

```text
26071900256
```

4. Cria um novo nome para cada PDF.
5. Caso existam documentos com o mesmo número de pedido, adiciona um índice ao nome:

```text
26071900256.pdf
26071900256(1).pdf
26071900256(2).pdf
```

6. Agrupa todos os arquivos em um único arquivo ZIP utilizando **JSZip**.

---

## 🎯 Objetivo

Este projeto foi desenvolvido para automatizar a organização de certidões de imóveis, reduzindo o tempo gasto com renomeação manual de arquivos e minimizando erros durante o processo.

---

## 🔮 Melhorias Futuras

* Barra de progresso durante o processamento.
* Área para arrastar e soltar arquivos (Drag & Drop).
* Relatório de processamento em PDF ou TXT.
* Filtros e pesquisa por número do pedido.
* Suporte a outros padrões de documentos.

---

## 📄 Licença

Este projeto está disponível sob a licença **MIT**. Sinta-se à vontade para utilizá-lo, modificá-lo e contribuir com melhorias.

---

## 👨‍💻 Autor

Desenvolvido por **Alisson Morais** como uma solução para automatizar a organização de certidões de imóveis em PDF, utilizando tecnologias web e bibliotecas JavaScript para extração de texto e geração de arquivos ZIP.
=======
# 📄 Renomeador de Certidões PDF

Uma aplicação web desenvolvida em **HTML, CSS e JavaScript** para automatizar a organização de certidões de imóveis em PDF.

O sistema extrai automaticamente o número do pedido presente no documento, renomeia virtualmente os arquivos e gera um único arquivo **ZIP** contendo todos os PDFs com os nomes corretos.

---

## ✨ Funcionalidades

* 📂 Seleção de múltiplos arquivos PDF.
* 📖 Extração de texto utilizando **PDF.js**.
* 🔍 Identificação automática do número do pedido.
* 📝 Renomeação dos arquivos com base no número encontrado.
* 📦 Geração de um único arquivo ZIP com todos os PDFs renomeados.
* 🔄 Tratamento automático de nomes duplicados (`(1)`, `(2)`, etc.).
* 💻 Interface simples e intuitiva.
* 🌐 Execução diretamente no navegador, sem necessidade de instalação.

---

## 🛠️ Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript (ES6+)
* PDF.js
* JSZip

---

## 📁 Estrutura do Projeto

```text
renomeador-certidoes/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🚀 Como Executar

1. Clone este repositório:

```bash
git clone https://github.com/alissonmorais07/Renomeador-de-Certidoes.git
```

2. Acesse a pasta do projeto.

3. Abra o arquivo **index.html** em um navegador compatível (Google Chrome, Microsoft Edge ou Firefox).

4. Selecione um ou mais arquivos PDF.

5. Clique em **Processar PDFs**.

6. Após o processamento, clique em **📦 Baixar Todos** para fazer o download do arquivo ZIP contendo os documentos renomeados.

---

## 📋 Como Funciona

O sistema realiza as seguintes etapas:

1. Recebe um ou mais arquivos PDF.
2. Extrai o texto de cada documento utilizando a biblioteca **PDF.js**.
3. Localiza automaticamente o número do pedido através de uma expressão regular baseada no padrão:

```text
AAMMDDSSSSS
```

Exemplo:

```text
26071900256
```

4. Cria um novo nome para cada PDF.
5. Caso existam documentos com o mesmo número de pedido, adiciona um índice ao nome:

```text
26071900256.pdf
26071900256(1).pdf
26071900256(2).pdf
```

6. Agrupa todos os arquivos em um único arquivo ZIP utilizando **JSZip**.

---

## 🎯 Objetivo

Este projeto foi desenvolvido para automatizar a organização de certidões de imóveis, reduzindo o tempo gasto com renomeação manual de arquivos e minimizando erros durante o processo.

---

## 🔮 Melhorias Futuras

* Barra de progresso durante o processamento.
* Área para arrastar e soltar arquivos (Drag & Drop).
* Relatório de processamento em PDF ou TXT.
* Filtros e pesquisa por número do pedido.
* Suporte a outros padrões de documentos.

---

## 📄 Licença

Este projeto está disponível sob a licença **MIT**. Sinta-se à vontade para utilizá-lo, modificá-lo e contribuir com melhorias.

---

## 👨‍💻 Autor

Desenvolvido por **Alisson Morais** como uma solução para automatizar a organização de certidões de imóveis em PDF, utilizando tecnologias web e bibliotecas JavaScript para extração de texto e geração de arquivos ZIP.
>>>>>>> 96139467b76a2cd2d801fc0310a1cf67fc51bed2
