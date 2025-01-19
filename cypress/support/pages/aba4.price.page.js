//Aba Price Option

//Constantes declaradas para serem usadas na conclusão das informações desta aba
const CHECK_PREÇO = '#selectplatinum'
const BTN_NEXT4 = '#nextsendquote'

//Comando para selecionar preço anual e clicar em botão de avanço
Cypress.Commands.add('selecionarPreçoAnual', () => {
cy.get(CHECK_PREÇO).click({force: true})
cy.get(BTN_NEXT4).click({force: true})
})