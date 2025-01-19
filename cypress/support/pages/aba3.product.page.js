//Aba Procuct Data

//Constantes declaradas para serem usadas nos comandos de preenchimento desta aba
const INPUT_INIC_DATA = '#startdate'
const SELECT_SEG_VAL = '#insurancesum'
const SELECT_CLASSIF = '#meritrating'
const SELECT_COB_SEG = '#damageinsurance'
const CHECK_EURO = '#EuroProtection'
const SELECT_COURT = '#courtesycar'
const BTN_NEXT3 = '#nextselectpriceoption'

//Comando para preencher dados obrigatórios da aba Procuct Data e clicar em botão de avanço
Cypress.Commands.add('preencherAbaProduct', () => {
cy.get(INPUT_INIC_DATA).type('03/02/2025')
cy.get(SELECT_SEG_VAL).select('3.000.000,00')
cy.get(SELECT_CLASSIF).select('Bonus 2')
cy.get(SELECT_COB_SEG).select('Partial Coverage')
cy.get(CHECK_EURO).click({force: true})
cy.get(SELECT_COURT).select('No')
  
cy.get(BTN_NEXT3).click()
})