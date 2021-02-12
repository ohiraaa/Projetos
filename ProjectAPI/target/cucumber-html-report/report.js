$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Pessoas.feature");
formatter.feature({
  "name": "Validacao de Cadastro de Pessoas",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@All"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Deve ser possivel procurar pessoa pelo DDD e telefone",
  "description": "",
  "keyword": "Scenario Outline",
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
  "keyword": "Given "
});
formatter.step({
  "name": "buscar pessoa por \u003cddd\u003e \u003ctelefone\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "validarei o \u003cstatuscode\u003e de retorno da api",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ddd",
        "telefone",
        "statuscode"
      ]
    },
    {
      "cells": [
        "11",
        "985388877",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Deve ser possivel procurar pessoa pelo DDD e telefone",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@All"
    },
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
  "keyword": "Given "
});
formatter.match({
  "location": "ValidaPessoas.que_acessei_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buscar pessoa por 11 985388877",
  "keyword": "When "
});
formatter.match({
  "location": "ValidaPessoas.cadastrar_dados_nova_pessoa(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validarei o 200 de retorno da api",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidaPessoas.statusCode_de_retorno(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Deve retornar erro quando buscar pessoa por telefone inexistente",
  "description": "",
  "keyword": "Scenario Outline",
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
  "keyword": "Given "
});
formatter.step({
  "name": "buscar pessoa por \u003cddd\u003e \u003ctelefone\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "validarei o \u003cstatuscode\u003e de retorno da api",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ddd",
        "telefone",
        "statuscode"
      ]
    },
    {
      "cells": [
        "11",
        "985399999",
        "404"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Deve retornar erro quando buscar pessoa por telefone inexistente",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@All"
    },
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
  "keyword": "Given "
});
formatter.match({
  "location": "ValidaPessoas.que_acessei_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buscar pessoa por 11 985399999",
  "keyword": "When "
});
formatter.match({
  "location": "ValidaPessoas.cadastrar_dados_nova_pessoa(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validarei o 404 de retorno da api",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidaPessoas.statusCode_de_retorno(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Deve salvar nova pessoa no sistema",
  "description": "",
  "keyword": "Scenario Outline",
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
  "keyword": "Given "
});
formatter.step({
  "name": "cadastrar \u003cdados\u003e da nova pessoa",
  "keyword": "When "
});
formatter.step({
  "name": "validarei o \u003cstatuscode\u003e de retorno da api",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "dados",
        "statuscode"
      ]
    },
    {
      "cells": [
        "Rommel_NovoCadastro.json",
        "201"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Deve salvar nova pessoa no sistema",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@All"
    },
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
  "keyword": "Given "
});
formatter.match({
  "location": "ValidaPessoas.que_acessei_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "cadastrar Rommel_NovoCadastro.json da nova pessoa",
  "keyword": "When "
});
formatter.match({
  "location": "ValidaPessoas.cadastrar_dados_nova_pessoa(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validarei o 201 de retorno da api",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidaPessoas.statusCode_de_retorno(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Nao deve ser possivel salvar duas pessoas com o mesmo CPF",
  "description": "",
  "keyword": "Scenario Outline",
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
  "keyword": "Given "
});
formatter.step({
  "name": "cadastrar \u003cdados\u003e da nova pessoa",
  "keyword": "When "
});
formatter.step({
  "name": "validarei a \u003cmensagem\u003e de retorno da api",
  "keyword": "Then "
});
formatter.step({
  "name": "validarei o \u003cstatuscode\u003e de retorno da api",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "dados",
        "mensagem",
        "statuscode"
      ]
    },
    {
      "cells": [
        "Rommel_IgualCPF_DiferenteTelefone.json",
        "Já existe pessoa cadastrada com o CPF 16422244444",
        "400"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Nao deve ser possivel salvar duas pessoas com o mesmo CPF",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@All"
    },
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
  "keyword": "Given "
});
formatter.match({
  "location": "ValidaPessoas.que_acessei_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "cadastrar Rommel_IgualCPF_DiferenteTelefone.json da nova pessoa",
  "keyword": "When "
});
formatter.match({
  "location": "ValidaPessoas.cadastrar_dados_nova_pessoa(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validarei a Já existe pessoa cadastrada com o CPF 16422244444 de retorno da api",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidaPessoas.mensagem_de_retorno(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validarei o 400 de retorno da api",
  "keyword": "And "
});
formatter.match({
  "location": "ValidaPessoas.statusCode_de_retorno(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Nao deve ser possivel salvar duas pessoas com o mesmo telefone",
  "description": "",
  "keyword": "Scenario Outline",
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
  "keyword": "Given "
});
formatter.step({
  "name": "cadastrar \u003cdados\u003e da nova pessoa",
  "keyword": "When "
});
formatter.step({
  "name": "validarei a \u003cmensagem\u003e de retorno da api",
  "keyword": "Then "
});
formatter.step({
  "name": "validarei o \u003cstatuscode\u003e de retorno da api",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "dados",
        "mensagem",
        "statuscode"
      ]
    },
    {
      "cells": [
        "Rommel_DiferenteCPF_IgualTelefone.json",
        "Já existe pessoa cadastrada com o Telefone (11)942224444",
        "400"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Nao deve ser possivel salvar duas pessoas com o mesmo telefone",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@All"
    },
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
  "keyword": "Given "
});
formatter.match({
  "location": "ValidaPessoas.que_acessei_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "cadastrar Rommel_DiferenteCPF_IgualTelefone.json da nova pessoa",
  "keyword": "When "
});
formatter.match({
  "location": "ValidaPessoas.cadastrar_dados_nova_pessoa(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validarei a Já existe pessoa cadastrada com o Telefone (11)942224444 de retorno da api",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidaPessoas.mensagem_de_retorno(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validarei o 400 de retorno da api",
  "keyword": "And "
});
formatter.match({
  "location": "ValidaPessoas.statusCode_de_retorno(Integer)"
});
formatter.result({
  "status": "passed"
});
});