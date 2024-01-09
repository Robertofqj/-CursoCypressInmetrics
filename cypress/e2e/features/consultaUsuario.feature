 Feature: Consulta de Usuario
 
    Scenario Outline: Consulta de usuario cadastrado
    Given que eu queira criar um usuário novo
    When preencho os dados do usuario e em seguida disparo um post
    And efetuo a consulta do usuario cadastrado
    #Then devo receber o response "cadastroUsuarioJson/responseUsuario.json" com a mensagem 'token:'
    #And o response "cadastroUsuarioJson/responseUsuario.json" deve retornar com status code 201

