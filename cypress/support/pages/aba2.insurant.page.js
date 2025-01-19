//Aba Insurant Data

//Constantes declaradas para serem usadas nos comandos de preenchimento desta aba
const INPUT_NOME = '#firstname'
const INPUT_SOBRENOME = '#lastname'
const INPUT_NASC = '#birthdate'
const SELECT_PAÍS = '#country'
const INPUT_CEP = '#zipcode'
const SELECT_OCUP = '#occupation'
const OPÇ_4 = ':nth-child(3) > .ideal-check'
const BTN_NEXT2 = '#nextenterproductdata'

//Comando para preencher dados obrigatórios da aba Insurant Data e clicar em botão de avanço
Cypress.Commands.add('preencherAbaInsurant', () => {
  
  //Parte do código onde foi aplicado o conhecimento sobre proteção de dados sensíveis
    cy.get(INPUT_NOME).type(Cypress.env('nome'))
    cy.get(INPUT_SOBRENOME).type(Cypress.env('sobrenome'))
    cy.get(INPUT_NASC).type(Cypress.env('data de nascimento'))
    cy.get(SELECT_PAÍS).select(Cypress.env('país'))
    cy.get(INPUT_CEP).type(Cypress.env('cep'))

    cy.get(SELECT_OCUP).select('Employee')
    cy.get(OPÇ_4).click()

    cy.get(BTN_NEXT2).click()
})