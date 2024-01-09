import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import RestRequest from "../../support/RestRequest.js"

const restRequest = new RestRequest();
const urlCadastroUsuario = "https://thinking-tester-contact-list.herokuapp.com/users"
const urlConsultaUsuario = "https://thinking-tester-contact-list.herokuapp.com/users/me"


Given("que eu queira criar um novo usuario", function (){

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


When ("preencho os dados do usuario e em seguida disparo um post", () => {
    cy.readFile('cypress/fixtures/cadastroUsuarioJson/bodyRequestUsuario.json').then((requestJsonCriarUsuario) => {
        const requestStringCrirUsuario = JSON.stringify(requestJsonCriarUsuario);   
        restRequest.requestPostJson(requestStringCrirUsuario, urlCadastroUsuario).then(response => {
           
            cy.writeFile('cypress/fixtures/cadastroUsuarioJson/responseUsuario.json', JSON.stringify(response));

    });
})  
})


When ("efetuo a consulta do usuario cadastrado", () => {
    cy.readFile("cypress/fixtures/cadastroUsuarioJson/responseUsuario.json").then((responseJsonUsuario) => {
        const requestStringConsultarUsuario = JSON.stringify(responseJsonUsuario);   
        restRequest.requisicaoGetHeader(requestStringConsultarUsuario, requestStringConsultarUsuario.token ,urlCadastroUsuario).then(response => {
           
            cy.writeFile('cypress/fixtures/cadastroUsuarioJson/responseUsuario.json', JSON.stringify(response));

    });
})  
}) //VERIFICAR A VARIAVEL PARA PUXAR O TOKEN DO RESPONSE