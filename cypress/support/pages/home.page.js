//Home Page

//Constante que guarda mapeamento do botão "Get a Quote"
const BTN_GET_QUOTE = 'a[id^="get_"]'

//Comando para clicar no botão "Get a quote" para acessar página de preenchimento das informações de seguro
Cypress.Commands.add('clicarGetAQuote', () => {
    cy.get(BTN_GET_QUOTE).contains('Get a quote').click();
})

//Constante declarada para guardar mapeamento do botão "Automobile"
const BTN_AUTOM = '#nav_automobile'

//Comando para clicar em opção de preencher informações de seguro para um veículo
Cypress.Commands.add('escolherOpçãoAutomobile', () => {
    cy.get(BTN_AUTOM).click()
})
