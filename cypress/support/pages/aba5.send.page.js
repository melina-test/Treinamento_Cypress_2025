//Aba Send Quote

//Constantes declaradas para serem usadas no preenchimento das informações desta aba
const INPUT_EMAIL = '#email'
const INPUT_USER = '#username'
const INPUT_PASSW = '#password'
const INPUT_CONF = '#confirmpassword'
const BTN_SEND = 'button#sendemail'

//Comando para preencher dados obrigatórios da aba Send Quote e clicar em botão de enviar
Cypress.Commands.add('preencherAbaSendQuote', () => {
    cy.get(INPUT_EMAIL).clear().type('teste.academia@email.com')
    cy.get(INPUT_USER).type('Fulaninha')
    cy.get(INPUT_PASSW).type('!Senha1234') 
    cy.get(INPUT_CONF).type('!Senha1234')

    cy.get(BTN_SEND).click()
})

//Comando para validar envio bem-sucedido de pedido de cotação de seguro para veículo
Cypress.Commands.add('validarEnvioCotação', () => {

//Comando que aguarda 6 segundos para mensagem de sucesso aparecer
    cy.wait(6000)

//Comando para verificar mensagem de sucesso no envio do pedido de seguro
    cy.contains('Sending e-mail success!').should('be.visible')
})
//---------------------------------------------------------------------------------------------
//Comando para preencher campos obrigatórios corretamente, exceto o de confirmação do password
Cypress.Commands.add('preencherAbaSendQuoteErradoConfirm', () => {
  cy.get(INPUT_EMAIL).clear().type('teste.academia@email.com')
    cy.get(INPUT_USER).type('Fulaninha')
    cy.get(INPUT_PASSW).type('!Senha1234') 
    cy.get(INPUT_CONF).type('*Senha1234')
})

//Comando para validar mensagem de erro de preenchimento do campo "Confirm Password"
Cypress.Commands.add('validarMensagemErroConfirmPassword', () => {
    cy.contains('Must have the same value as the Password field').should('be.visible')
})

// Comando para tentar enviar pedido de seguro de veículo e para validar mensagem indicando campos faltando corrigir
Cypress.Commands.add('validarBloqueioPedido', () => {
    cy.get(BTN_SEND).click()
    cy.contains('Not finished yet...').should('be.visible')
})