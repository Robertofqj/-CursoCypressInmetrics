Feature: Cadastro de Usuario

    Scenario Outline: Cadastro de usuario com sucesso
    Given que eu queira criar um novo usuario
    When preencho os dados do usuario e disparo um post
    Then devo receber o response "cadastroUsuarioJson/responseUsuario.json" com a mensagem '"statusText":"Created"'
    And o response "cadastroUsuarioJson/responseUsuario.json" deve retornar com status code 201


    Scenario Outline: Cadastro de usuario já cadastrado
    Given que eu queira cadastrar um usuario que já possui cadastro
    When preencho os dados do usuario pela primeira vez e disparo um post
    And preencho os mesmos dados do usuario e disparo um post
    Then devo receber o response "cadastroUsuarioJson/responseUsuario.json" com a mensagem '"Email address is already in use"'
    And o response "cadastroUsuarioJson/responseUsuario.json" deve retornar com status code 400
