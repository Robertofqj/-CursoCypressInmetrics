import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import RestRequest from "../../support/RestRequest.js"

const restRequest = new RestRequest();
const urlCadastroUsuario = "https://thinking-tester-contact-list.herokuapp.com/users"


Given("que eu queira criar um usuário novo", function (){

    cy.gerarPrimeiroNome().then(nome => { 
        cy.gerarSobrenome().then(sobrenome => {
            cy.gerarEmail(nome).then(email => {
                
                const jsonRequestUsuario = {
                    "firstName": nome,
                    "lastName": sobrenome,
                    "email": email,
                    "password": "senhafixa123"
                }

                cy.writeFile('cypress/fixtures/cadastroUsuarioJson/bodyRequestUsuario.json', jsonRequestUsuario)

            });
        });
    });
});

When ("preencho os dados do usuario e disparo um post", () => {
    cy.readFile('cypress/fixtures/cadastroUsuarioJson/bodyRequestUsuario.json').then((requestJsonCriarUsuario) => {
        const requestStringCrirUsuario = JSON.stringify(requestJsonCriarUsuario);   
        restRequest.requestPostJson(requestStringCrirUsuario, urlCadastroUsuario).then(response => {
           
            cy.writeFile('cypress/fixtures/cadastroUsuarioJson/responseUsuario.json', JSON.stringify(response));

    });
})  
})


//Steps abaixo são para o SEGUNDO cenário -------------------------------------------------

Given("que eu queira cadastrar um usuario que já possui cadastro", function (){

    cy.gerarPrimeiroNome().then(nome => { 
        cy.gerarSobrenome().then(sobrenome => {
            cy.gerarEmail(nome).then(email => {
                
                const jsonRequestUsuario = {
                    "firstName": nome,
                    "lastName": sobrenome,
                    "email": email,
                    "password": "senhafixa123"
                }

                cy.writeFile('cypress/fixtures/cadastroUsuarioJson/bodyRequestUsuario.json', jsonRequestUsuario)

            });
        });
    });
});

When ("preencho os dados do usuario pela primeira vez e disparo um post", () => {
    cy.readFile("cypress/fixtures/cadastroUsuarioJson/bodyRequestUsuario.json").then((requestJsonCriarUsuario) => {
        const requestStringCrirUsuario = JSON.stringify(requestJsonCriarUsuario);   
        restRequest.requestPostJson(requestStringCrirUsuario, urlCadastroUsuario).then(response => {
           
            cy.writeFile('cypress/fixtures/cadastroUsuarioJson/responseUsuario.json', JSON.stringify(response));

    });
})  
})

When ("preencho os mesmos dados do usuario e disparo um post", () => {
    cy.readFile("cypress/fixtures/cadastroUsuarioJson/bodyRequestUsuario.json").then((requestJsonCriarUsuario) => {
        const requestStringCrirUsuario = JSON.stringify(requestJsonCriarUsuario);   
        restRequest.requestPostJson(requestStringCrirUsuario, urlCadastroUsuario).then(response => {
           
            cy.writeFile('cypress/fixtures/cadastroUsuarioJson/responseUsuario.json', JSON.stringify(response));

    });
})  
})
