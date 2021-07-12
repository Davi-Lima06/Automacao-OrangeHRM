$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Admin.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Admin",
  "description": "",
  "id": "admin",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@Admin"
    },
    {
      "line": 2,
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Pesquisar Usuario",
  "description": "",
  "id": "admin;pesquisar-usuario",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@PesquisarUsuario"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "acionar o menu Admin",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "informar o campo de busca Username como \"\u003cusuario\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "informar o campo de busca User Role como \"\u003cperfil\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "informar o campo de busca Employee Name como \"\u003cnomeFuncionario\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "informar o campo de busca Status como \"\u003csituacao\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "clicar no botao Search",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "o sistema devera apresentar lista com o resultado da busca de acordo com os filtros",
  "keyword": "Entao "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "admin;pesquisar-usuario;",
  "rows": [
    {
      "cells": [
        "usuario",
        "perfil",
        "nomeFuncionario",
        "situacao"
      ],
      "line": 20,
      "id": "admin;pesquisar-usuario;;1"
    },
    {
      "cells": [
        "Admin",
        "Admin",
        "Christine Tarabay",
        "Enabled"
      ],
      "line": 21,
      "id": "admin;pesquisar-usuario;;2"
    },
    {
      "cells": [
        "Alice.Duval",
        "ESS",
        "Alice Duval",
        "Enabled"
      ],
      "line": 22,
      "id": "admin;pesquisar-usuario;;3"
    },
    {
      "cells": [
        "Joe.Root",
        "ESS",
        "Joe Root",
        "Enabled"
      ],
      "line": 23,
      "id": "admin;pesquisar-usuario;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 2087561200,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "que usuario esteja logado",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 2674956200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.que_usuario_esteja_logado()"
});
formatter.result({
  "duration": 2989669800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Pesquisar Usuario",
  "description": "",
  "id": "admin;pesquisar-usuario;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 9,
      "name": "@PesquisarUsuario"
    },
    {
      "line": 2,
      "name": "@Admin"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "acionar o menu Admin",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "informar o campo de busca Username como \"Admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "informar o campo de busca User Role como \"Admin\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "informar o campo de busca Employee Name como \"Christine Tarabay\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "informar o campo de busca Status como \"Enabled\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "clicar no botao Search",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "o sistema devera apresentar lista com o resultado da busca de acordo com os filtros",
  "keyword": "Entao "
});
formatter.match({
  "location": "AdminSteps.acionar_o_menu_Admin()"
});
formatter.result({
  "duration": 984533800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 41
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Username_como(String)"
});
formatter.result({
  "duration": 136074200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 42
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_User_Role_como(String)"
});
formatter.result({
  "duration": 157538000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Christine Tarabay",
      "offset": 46
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Employee_Name_como(String)"
});
formatter.result({
  "duration": 140922800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 39
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Status_como(String)"
});
formatter.result({
  "duration": 135676700,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.clicar_no_botao_Search()"
});
formatter.result({
  "duration": 407539900,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.o_sistema_devera_apresentar_lista_com_o_resultado_da_busca_de_acordo_com_os_filtros()"
});
formatter.result({
  "duration": 53549900,
  "status": "passed"
});
formatter.after({
  "duration": 643723500,
  "status": "passed"
});
formatter.before({
  "duration": 1179255900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "que usuario esteja logado",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 2807315700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.que_usuario_esteja_logado()"
});
formatter.result({
  "duration": 3188862800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Pesquisar Usuario",
  "description": "",
  "id": "admin;pesquisar-usuario;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 9,
      "name": "@PesquisarUsuario"
    },
    {
      "line": 2,
      "name": "@Admin"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "acionar o menu Admin",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "informar o campo de busca Username como \"Alice.Duval\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "informar o campo de busca User Role como \"ESS\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "informar o campo de busca Employee Name como \"Alice Duval\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "informar o campo de busca Status como \"Enabled\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "clicar no botao Search",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "o sistema devera apresentar lista com o resultado da busca de acordo com os filtros",
  "keyword": "Entao "
});
formatter.match({
  "location": "AdminSteps.acionar_o_menu_Admin()"
});
formatter.result({
  "duration": 1047450400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alice.Duval",
      "offset": 41
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Username_como(String)"
});
formatter.result({
  "duration": 139583600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ESS",
      "offset": 42
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_User_Role_como(String)"
});
formatter.result({
  "duration": 187751600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alice Duval",
      "offset": 46
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Employee_Name_como(String)"
});
formatter.result({
  "duration": 201185000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 39
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Status_como(String)"
});
formatter.result({
  "duration": 202077400,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.clicar_no_botao_Search()"
});
formatter.result({
  "duration": 447070000,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.o_sistema_devera_apresentar_lista_com_o_resultado_da_busca_de_acordo_com_os_filtros()"
});
formatter.result({
  "duration": 60109500,
  "status": "passed"
});
formatter.after({
  "duration": 651982500,
  "status": "passed"
});
formatter.before({
  "duration": 1181978700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "que usuario esteja logado",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 2516396400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.que_usuario_esteja_logado()"
});
formatter.result({
  "duration": 2883188200,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Pesquisar Usuario",
  "description": "",
  "id": "admin;pesquisar-usuario;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 9,
      "name": "@PesquisarUsuario"
    },
    {
      "line": 2,
      "name": "@Admin"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "acionar o menu Admin",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "informar o campo de busca Username como \"Joe.Root\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "informar o campo de busca User Role como \"ESS\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "informar o campo de busca Employee Name como \"Joe Root\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "informar o campo de busca Status como \"Enabled\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "clicar no botao Search",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "o sistema devera apresentar lista com o resultado da busca de acordo com os filtros",
  "keyword": "Entao "
});
formatter.match({
  "location": "AdminSteps.acionar_o_menu_Admin()"
});
formatter.result({
  "duration": 1075010200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joe.Root",
      "offset": 41
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Username_como(String)"
});
formatter.result({
  "duration": 133327600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ESS",
      "offset": 42
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_User_Role_como(String)"
});
formatter.result({
  "duration": 155806800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joe Root",
      "offset": 46
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Employee_Name_como(String)"
});
formatter.result({
  "duration": 156635400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 39
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Status_como(String)"
});
formatter.result({
  "duration": 138322400,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.clicar_no_botao_Search()"
});
formatter.result({
  "duration": 415100600,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.o_sistema_devera_apresentar_lista_com_o_resultado_da_busca_de_acordo_com_os_filtros()"
});
formatter.result({
  "duration": 60882900,
  "status": "passed"
});
formatter.after({
  "duration": 620788100,
  "status": "passed"
});
formatter.uri("Features/Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Realizar Login com Sucesso",
  "description": "",
  "id": "login;realizar-login-com-sucesso",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@RealizarLogin"
    },
    {
      "line": 8,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "informar o campo Username como \"\u003cusuario\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "informar o campo Password como \"\u003csenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema devera autorizar o login, exibindo pagina contendo o Dashboard",
  "keyword": "Entao "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login;realizar-login-com-sucesso;",
  "rows": [
    {
      "cells": [
        "usuario",
        "senha"
      ],
      "line": 16,
      "id": "login;realizar-login-com-sucesso;;1"
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 17,
      "id": "login;realizar-login-com-sucesso;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 1204843700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 2350312500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Realizar Login com Sucesso",
  "description": "",
  "id": "login;realizar-login-com-sucesso;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 8,
      "name": "@RealizarLogin"
    },
    {
      "line": 8,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "informar o campo Username como \"Admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "informar o campo Password como \"admin123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema devera autorizar o login, exibindo pagina contendo o Dashboard",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 32
    }
  ],
  "location": "LoginSteps.informar_o_campo_Username_como(String)"
});
formatter.result({
  "duration": 89719400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 32
    }
  ],
  "location": "LoginSteps.informar_o_campo_Password_como(String)"
});
formatter.result({
  "duration": 91034800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicar_no_botao_Login()"
});
formatter.result({
  "duration": 2573455600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.o_sistema_devera_autorizar_o_login_exibindo_pagina_contendo_o_Dashboard()"
});
formatter.result({
  "duration": 51413400,
  "status": "passed"
});
formatter.after({
  "duration": 629477600,
  "status": "passed"
});
});