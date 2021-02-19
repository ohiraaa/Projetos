$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Pessoas.feature");
formatter.feature({
  "name": "Validacao de Cadastro de Pessoas",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@All"
    }
  ]
});
formatter.scenario({
  "name": "Deve ser possivel procurar pessoa pelo DDD e telefone",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@All"
    },
    {
      "name": "@Teste1"
    }
  ]
});
formatter.step({
  "name": "que acesso a api de pessoa",
  "keyword": "Dado "
});
formatter.match({
  "location": "ValidaPessoas.que_acessei_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buscar pessoa por 11 985388877",
  "keyword": "Quando "
});
formatter.match({
  "location": "ValidaPessoas.cadastrar_dados_nova_pessoa(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validarei o statuscode 200 de retorno da api",
  "keyword": "Entao "
});
formatter.match({
  "location": "ValidaPessoas.statusCode_de_retorno(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve retornar erro quando buscar pessoa por telefone inexistente",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@All"
    },
    {
      "name": "@Teste2"
    }
  ]
});
formatter.step({
  "name": "que acesso a api de pessoa",
  "keyword": "Dado "
});
formatter.match({
  "location": "ValidaPessoas.que_acessei_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buscar pessoa por 11 985399999",
  "keyword": "Quando "
});
formatter.match({
  "location": "ValidaPessoas.cadastrar_dados_nova_pessoa(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validarei o statuscode 404 de retorno da api",
  "keyword": "Entao "
});
formatter.match({
  "location": "ValidaPessoas.statusCode_de_retorno(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve salvar nova pessoa no sistema",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@All"
    },
    {
      "name": "@Teste3"
    }
  ]
});
formatter.step({
  "name": "que acesso a api de pessoa",
  "keyword": "Dado "
});
formatter.match({
  "location": "ValidaPessoas.que_acessei_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "cadastrar Rommel_NovoCadastro.json da nova pessoa",
  "keyword": "Quando "
});
formatter.match({
  "location": "ValidaPessoas.cadastrar_dados_nova_pessoa(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validarei o statuscode 201 de retorno da api",
  "keyword": "Entao "
});
formatter.match({
  "location": "ValidaPessoas.statusCode_de_retorno(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Nao deve ser possivel salvar duas pessoas com o mesmo CPF",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@All"
    },
    {
      "name": "@Teste4"
    }
  ]
});
formatter.step({
  "name": "que acesso a api de pessoa",
  "keyword": "Dado "
});
formatter.match({
  "location": "ValidaPessoas.que_acessei_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "cadastrar Rommel_IgualCPF_DiferenteTelefone.json da nova pessoa",
  "keyword": "Quando "
});
formatter.match({
  "location": "ValidaPessoas.cadastrar_dados_nova_pessoa(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validarei a mensagem Já existe pessoa cadastrada com o CPF 16422244444 de retorno da api",
  "keyword": "Entao "
});
formatter.match({
  "location": "ValidaPessoas.mensagem_de_retorno(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validarei o statuscode 400 de retorno da api",
  "keyword": "E "
});
formatter.match({
  "location": "ValidaPessoas.statusCode_de_retorno(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Nao deve ser possivel salvar duas pessoas com o mesmo telefone",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@All"
    },
    {
      "name": "@Teste5"
    }
  ]
});
formatter.step({
  "name": "que acesso a api de pessoa",
  "keyword": "Dado "
});
formatter.match({
  "location": "ValidaPessoas.que_acessei_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "cadastrar Rommel_DiferenteCPF_IgualTelefone.json da nova pessoa",
  "keyword": "Quando "
});
formatter.match({
  "location": "ValidaPessoas.cadastrar_dados_nova_pessoa(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validarei a mensagem Já existe pessoa cadastrada com o Telefone (11)985388877 de retorno da api",
  "keyword": "Entao "
});
formatter.match({
  "location": "ValidaPessoas.mensagem_de_retorno(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validarei o statuscode 400 de retorno da api",
  "keyword": "E "
});
formatter.match({
  "location": "ValidaPessoas.statusCode_de_retorno(Integer)"
});
formatter.result({
  "status": "passed"
});
});