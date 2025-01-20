# Projeto de Automação de Testes com Cypress - Academia Accenture 2025

Este projeto foi desenvolvido como parte de um treinamento em automação de testes para iniciantes na área. Ele utiliza o site de testes Tricentis como base para criar cenários de validação de pedidos de seguro de veículos.

## Descrição Geral

O objetivo do projeto foi desenvolver dois cenários de teste (um positivo e um negativo) que envolvem o preenchimento de formulários em diferentes abas e a submissão do pedido de seguro.

### Cenário 1: Teste Positivo

- **Objetivo**: Validar que o usuário consegue enviar um pedido de seguro de carro ao preencher corretamente todas as informações obrigatórias.
- **Etapas**:
  1. Preenchimento de todos os campos obrigatórios nas abas do formulário.
  2. Submissão do pedido.
  3. Validação de que o envio foi realizado com sucesso.
 
![Cenário Positivo](Print_Cypress_Cenario_Positive.png)

### Cenário 2: Teste Negativo

- **Objetivo**: Verificar se o site impede o envio do pedido de seguro quando o campo de confirmação de senha não coincide com o campo de senha.
- **Etapas**:
  1. Preenchimento incorreto do campo de confirmação de senha.
  2. Validação de que o sistema exibe uma mensagem de erro.
  3. Verificação de que o pedido não foi enviado enquanto o erro persistir.
 
![Cenário Negativo](Print_Cypress_Cenario_Negative.png)

## Estrutura do Projeto

O projeto foi implementado seguindo o padrão **Page Object Model (POM)**, com separação dos comandos de teste em diferentes arquivos, organizados por página do site.

### Principais Tecnologias e Ferramentas Utilizadas

- **Cypress**: Framework para automação de testes.
- **Linguagem Gherkin**: Para definir cenários de teste de forma legível.
- **JavaScript**: Linguagem principal utilizada nos testes.
- **HTML e CSS**: Conhecimentos aplicados na inspeção e mapeamento de elementos.
- **Cypress.env.json**: Para proteger dados sensíveis, como informações do usuário.

## Reflexões

Como iniciante na área de automação de testes, este projeto foi um marco importante no aprendizado de boas práticas, ferramentas e padrões. Cumprir este desafio me ajudou aprender sobre:

- Mapeamento  de elementos HTML.
- Uso da linguagem JavaScript para automação de testes.
- Uso do Cypress para interagir com sites.
- Gerenciamento de dados sensíveis.
- Identificação e validação de cenários de teste.

Ainda há muito a explorar, mas este foi um projeto motivador para dar os primeiros passos no universo da automação de testes!

git add README.md
git commit -m "Adicionando imagens ao README"
git push origin master  # Ou 'git push origin main'


