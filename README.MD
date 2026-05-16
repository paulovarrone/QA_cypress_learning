# Testes Automatizados - Cypress

Projeto de automação de testes E2E usando Cypress no site Automation Exercise.

## Como instalar

Crie o arquivo de manifesto package.json utilizando a configuração padrão
(parâmetro -y):


`npm init -y`


Instale o framework como uma dependência de desenvolvimento no escopo do
projeto:


`npm install cypress --save-dev`


Após a conclusão do download, abra o arquivo package.json gerado na raiz do
projeto e adicione a instrução de inicialização dentro do objeto "scripts":

  "scripts": {
    "cypress:open": "cypress open"
  },

## Como rodar os testes


`npm run cypress:open`


## Estrutura

- `cypress/e2e/` — Arquivos de teste
- `cypress/support/` — Comandos customizados
- `cypress/fixtures/` — Dados de teste

Após a configuração inicial realizada pelo assistente gráfico, o framework criará
uma estrutura de diretórios na raiz do projeto contendo as seguintes pastas
principais:

1. fixtures/: Armazena dados estáticos e arquivos JSON estruturados para
simular respostas de APIs ou dados de entrada (mocks).
2. e2e/ (ou integration/ em versões legadas): Diretório dedicado ao
armazenamento dos arquivos de teste estruturados (ex: login.cy.js).
3. plugins/: Permite estender ou modificar comportamentos internos do
framework de maneira dinâmica.
4. support/: Destinado à criação de comandos personalizados
(commands.js) e configurações globais que serão executadas antes dos
arquivos de teste.

Para validar a instalação, utilizaremos o site de testes Sauce Demo
(https://www.saucedemo.com/) para criar um script básico de verificação de
login.

1. Dentro da pasta do projeto, navegue até o diretório de testes ponta a
ponta (cypress/e2e/).
2. Crie um arquivo com a extensão .cy.js, por exemplo: login.cy.js.
3. Insira a estrutura de código abaixo para testar o carregamento da página
inicial e o preenchimento de credenciais:

Executando o cenário criado:

1. Com a interface gráfica do Cypress aberta (npm run cypress:open),
selecione a opção E2E Testing.
2. Escolha o navegador de sua preferência (ex: Chrome ou Electron) e
clique em Start E2E Testing.
3. Na lista de especificações (specs), clique sobre o arquivo login.cy.js.
4. O navegador controlado exibirá os comandos sendo executados no
painel lateral esquerdo em tempo real, validando o comportamento na
interface do Sauce Demo.

