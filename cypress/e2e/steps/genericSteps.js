import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"


Then ('devo receber o response {string} com a mensagem {string}', (caminhoNomeJson, statusText) => {
    cy.readFile('cypress/fixtures/'+ caminhoNomeJson).then((responseJson) => {
        expect(JSON.stringify(responseJson)).contains(statusText);
    })

})

Then ('o response {string} deve retornar com status code {int}', (caminhoNomeJson, statusCode) => {
    cy.readFile('cypress/fixtures/' + caminhoNomeJson).then((responseJson) => {
        expect(responseJson.status).to.equal(statusCode);
    })

})