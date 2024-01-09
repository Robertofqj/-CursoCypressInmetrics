Cypress.Commands.add('gerarPrimeiroNome', () => {
    cy.readFile('cypress/fixtures/cadastroUsuarioJson/listaPrimeiroNome.json').then((jsonListaNomes) => {
        const listaNomes = jsonListaNomes.nomes;
        const posicaoComPonto = Math.random() * listaNomes.length;
        const posicaoCorreta = Math.floor(posicaoComPonto);

        return listaNomes[posicaoCorreta];
    })
});

Cypress.Commands.add('gerarSobrenome', () => {
    cy.readFile('cypress/fixtures/cadastroUsuarioJson/listaSobrenome.json').then((jsonListaSobrenomes) => {
        const listaSobrenomes = jsonListaSobrenomes.sobrenomes;
        const posicaoSobrenomeComPonto = Math.random() * listaSobrenomes.length;
        const posicaoSobrenomeCorreta = Math.floor(posicaoSobrenomeComPonto);
    
        return listaSobrenomes[posicaoSobrenomeCorreta];
    });
});


Cypress.Commands.add('gerarEmail', (nome) => {
    const numeroAleatorio = Math.floor(Math.random() * 1000000);

    return nome + numeroAleatorio + "@gmail.com";
});

