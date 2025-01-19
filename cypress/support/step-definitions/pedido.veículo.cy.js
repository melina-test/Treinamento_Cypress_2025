Given('que o usuário acessa página de obter cotação do site Tricentis', () => {
    cy.visit('/')
    cy.clicarGetAQuote()
})
And('o usuário seleciona a opção Automobile', () => {
    cy.escolherOpçãoAutomobile()
})
When('o usuário preenche corretamente todos os campos obrigatórios para enviar o pedido de cotação', () => {
    cy.preencherAbaVehicle()
    cy.preencherAbaInsurant()
    cy.preencherAbaProduct()
    cy.selecionarPreçoAnual()
    cy.preencherAbaSendQuote()
})
Then('o usuário deve ter seu envio concluído com sucesso', () => {
    cy.validarEnvioCotação()
})