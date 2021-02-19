# language: pt
@All
Funcionalidade: Validacao de Cadastro de Pessoas

  @Teste1
  Cenario: Deve ser possivel procurar pessoa pelo DDD e telefone
    Dado que acesso a api de pessoa
    Quando buscar pessoa por 11 985388877
    Entao validarei o statuscode 200 de retorno da api

  @Teste2
  Cenario: Deve retornar erro quando buscar pessoa por telefone inexistente
    Dado que acesso a api de pessoa
    Quando buscar pessoa por 11 985399999
    Entao validarei o statuscode 404 de retorno da api

  @Teste3
  Cenario: Deve salvar nova pessoa no sistema
    Dado que acesso a api de pessoa
    Quando cadastrar Rommel_NovoCadastro.json da nova pessoa
    Entao validarei o statuscode 201 de retorno da api

  @Teste4
  Cenario: Nao deve ser possivel salvar duas pessoas com o mesmo CPF
    Dado que acesso a api de pessoa
    Quando cadastrar Rommel_IgualCPF_DiferenteTelefone.json da nova pessoa
    Entao validarei a mensagem Já existe pessoa cadastrada com o CPF 16422244444 de retorno da api
    E validarei o statuscode 400 de retorno da api

  @Teste5
  Cenario: Nao deve ser possivel salvar duas pessoas com o mesmo telefone
    Dado que acesso a api de pessoa
    Quando cadastrar Rommel_DiferenteCPF_IgualTelefone.json da nova pessoa
    Entao validarei a mensagem Já existe pessoa cadastrada com o Telefone (11)985388877 de retorno da api
    E validarei o statuscode 400 de retorno da api
