//Aba Vehicle Data

//Constante declarada para guardar mapeamento do botão "Automobile"
const BTN_AUTOM = '#nav_automobile'

//Comando para clicar em opção de preencher informações de seguro para um veículo
Cypress.Commands.add('escolherOpçãoAutomobile', () => {
    cy.get(BTN_AUTOM).click()
})

//Constantes declaradas para serem usadas nos comandos de preenchimento desta aba
const SELECT_MARCA = '#make'
const INPUT_MOTOR = '#engineperformance'
const INPUT_FAB_DATA = '#dateofmanufacture'
const SELECT_ASSENT = 'select[id^="numberofseats"]'
const SELECT_COMB = '#fuel'
const INPUT_PREÇO = '#listprice'
const INPUT_MILHAS = '#annualmileage'
const BTN_NEXT1 = '#nextenterinsurantdata'

//Comando para preencher dados obrigatórios da aba Vehicle Data e clicar em botão de avanço
Cypress.Commands.add('preencherAbaVehicle', () => {
    cy.get(SELECT_MARCA).select('Toyota')
    cy.get(INPUT_MOTOR).type('30')
    cy.get(INPUT_FAB_DATA).type('10/10/2022')
    cy.get(SELECT_ASSENT).select('2')
    cy.get(SELECT_COMB).select('Diesel')
    cy.get(INPUT_PREÇO).type('80000')
    cy.get(INPUT_MILHAS).type('20000')

    cy.get(BTN_NEXT1).click()
});
