Given('que o usuário está na aba Send Quote do site Tricentis', () => {
    cy.visit('/')
    cy.escolherOpçãoAutomobile()
})
And('os demais campos obrigatórios foram preenchidos corretamente', () => {
    cy.preencherAbaVehicle()
    cy.preencherAbaInsurant()
    cy.preencherAbaProduct()
    cy.selecionarPreçoAnual()
})
When('o campo de Confirm Password fica diferente do campo de Password', () => {
    cy.preencherAbaSendQuoteErradoConfirm()
})
Then('deve aparecer uma mensagem informando o erro', () => {
    cy.validarMensagemErroConfirmPassword()
})
And('o usuário não deve conseguir concluir o pedido', () => {
    cy.validarBloqueioPedido()
})