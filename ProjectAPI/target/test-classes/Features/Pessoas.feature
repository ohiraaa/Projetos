@All
Feature: Validacao de Cadastro de Pessoas

  @All @Teste1
  Scenario Outline: Deve ser possivel procurar pessoa pelo DDD e telefone
    Given que acesso a api de pessoa
    When buscar pessoa por <ddd> <telefone>
    Then validarei o <statuscode> de retorno da api

    Examples: 
      | ddd | telefone  | statuscode |
      |  11 | 985388877 |        200 |

  @All @Teste2
  Scenario Outline: Deve retornar erro quando buscar pessoa por telefone inexistente
    Given que acesso a api de pessoa
    When buscar pessoa por <ddd> <telefone>
    Then validarei o <statuscode> de retorno da api

    Examples: 
      | ddd | telefone  | statuscode |
      |  11 | 985399999 |        404 |

  @All @Teste3
  Scenario Outline: Deve salvar nova pessoa no sistema
    Given que acesso a api de pessoa
    When cadastrar <dados> da nova pessoa
    Then validarei o <statuscode> de retorno da api

    Examples: 
      | dados                    | statuscode |
      | Rommel_NovoCadastro.json |        201 |

  @All @Teste4
  Scenario Outline: Nao deve ser possivel salvar duas pessoas com o mesmo CPF
    Given que acesso a api de pessoa
    When cadastrar <dados> da nova pessoa
    Then validarei a <mensagem> de retorno da api
    And validarei o <statuscode> de retorno da api

    Examples: 
      | dados                                  | mensagem                                          | statuscode |
      | Rommel_IgualCPF_DiferenteTelefone.json | Já existe pessoa cadastrada com o CPF 16422244444 |        400 |

  @All @Teste5
  Scenario Outline: Nao deve ser possivel salvar duas pessoas com o mesmo telefone
    Given que acesso a api de pessoa
    When cadastrar <dados> da nova pessoa
    Then validarei a <mensagem> de retorno da api
    And validarei o <statuscode> de retorno da api

    Examples: 
      | dados                                  | mensagem                                                 | statuscode |
      | Rommel_DiferenteCPF_IgualTelefone.json | Já existe pessoa cadastrada com o Telefone (11)942224444 |        400 |
