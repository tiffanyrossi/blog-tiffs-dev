---
title: 'API REST - fundamentos'
author: 'Tiffany Rossi'
date: '2023-09-04'
theme: 'REST APIs'
sourcetype: curso
sourcename: REST API's RESTFul do 0 à AWS, com Spring Boot, Java e Docker
sourceauthor: Leandro Costa
sourceURL: HTTPs://www.udemy.com/course/restful-apis-do-0-a-nuvem-com-springboot-e-docker/
tags:
    - api rest
    - estudos
---
## o que são APIs
- **definição**: APIs, ou **a**pp **p**rogramming **i**nterfaces, representam aplicações cliente-servidor que facilitam a  a comunicação entre serviços, sejam eles internos ou externos, sem exigir o conhecimento detalhado de suas implementações.
- **segurança**: garantem um ambiente seguro ao controlar o acesso às informações, expondo apenas o necessário para o serviço específico em questão.
- **tipos de APIs**:
  - **REST**: representa um estilo arquitetural mais leve e baseado em recursos web.
  - **SOAP**: envolve trocas de mensagens em XML, onde os dados são encapsulados para a comunicação entre os sistemas.

## o que é REST
- **r**epresentational **s**tate **t**ransfer (REST): é um estilo de arquitetura de software para sistemas de hipermídia distribuídos (como a world wide web).
- **constraints (princípios)**:
   - **client-server**: as interações entre cliente e servidor devem ser desenvolvidas sem dependências.
   - **stateless server**: o servidor não deve armazenar o estado das requisições do cliente. cada requisição é tratada como nova, sem sessões ou históricos.
   - **cacheable**: o uso do cache melhora a performance e a escalabilidade. deve ser aplicado quando possível, e os recursos devem indicar quando são cacheáveis.
   - **interface uniforme**: utilizar a mesma abordagem de identificação de recursos (URI), manipulação de recursos a partir de suas representações, mensagens autodescritivas, HATEOAS etc, em todas as APIs.
   - **sistema em camadas**: a arquitetura deve suportar camadas intermediárias entre o cliente e o servidor, como balenceamento de carga, proxies e firewalls.
   - **código sob demanda** (opcional): se necessário, a API pode retornar código executável para suportar parte da aplicação.
- **formatos suportados pelo REST**:
  - XML, JSON, CSV, texto, imagens, HTML, PDF, binário, entre outros.

## request & response
![Client enviando o HTTP Request para o server, server retornando o HTTP Response](/images/apirest_requestresponse.png)
- **request**: o cliente envia solicitações para a API hospedada no servidor. essas solicitações contêm dados (*body/payload*) ou instruções específicas sobre a ação desejada (*método HTTP*), como recuperar informações ou realizar uma operação.
- **processamento**: o servidor processa as solicitações recebidas, executando as operações necessárias, criando, alterando ou recuperando os recursos solicitados.
- **response**: após o processamento, o servidor envia uma resposta de volta ao cliente, que contém os resultados da solicitação ou outras informações relevantes.

### arquitetura do request e response
- **endpoint**: é a URL onde o servidor rest está executando as solicitações. é para onde o cliente deve apontar sua chamada para interagir com o servidor.
- **método**: refere-se ao tipo de operação a ser realizada (*método HTTP*), como GET, POST, PUT, DELETE, entre outros. esse método indica a ação a ser executada no recurso identificado pelo endpoint.
- **header**: contém parâmetros adicionais fornecidos para a comunicação entre cliente e servidor. os headers podem incluirinformações como autenticação, tipo de conteúdo, e outros metadados relevantes para a requisição ou resposta.
- **body**: contém as informações enviadas ou recebidas (*payload*) durante a comunicação entre cliente e servidor. estas informações podem ser estruturadas em formatos como JSON, XML, texto simples, entre outros. o body da mensagem geralmente contém os dados a serem processados pelo servidor.

---

# parâmetros
## path parameters
- variáveis que são passadas pela URL
- usadas para apontar para um recurso específico em uma coleção (como um ```{id}```)
- uma URL poder ter vários path parameters
- caso um endpoint possua path parameters, eles são obrigatórios na chamada, porque fazem parte da URL daquele endpoint
- exemplo: ```/api/produtos/{id}```

## query parameters
- são variáveis que ficam no final da URL, após uma ```?``` e separadas por ```&```
- são opcionais
- normalmente usados como delimitadores de busca
- exemplo: ```/api/produtos?categoria=hortifruti&subcategoria=frutas```

## header parameters
- variáveis adicionais, que podem ser passadas pelo request ou response
  - *request headers*: contêm informações sobre o recurso que está sendo chamado ou sobre o cliente que está fazendo a requisição
  - *response headers*: contêm informações adicionais sobre o response ou sobre o servidor
- parâmetros de header mais utilizados: ```Accept```, ```Content-Type```, ```Authorization``` entre outros.
- não podem ser enviados diretamente pelo browser, apenas via cliente.
- além dos parâmetros default, podem ser implementados header parameters customizados.

## body parameters
- usado com frequência nos métodos POST, PUT e PATCH
- carrega os dados que serão enviados pelo cliente no request ou retornados pelo servidor via response
- formatos mais utilizados: JSON, XML, YAML (a API precisa suportar o formato)

---
# HTTP status codes
## 1XX: informacionais
- muito pouco usados
  
## 2xx: sucesso
- 200 Ok
- 201 Created
- 202 Accepted
- 204 No Content

## 3xx: redirecionamento
- pouco usado em REST
- 301 Redirected: comum em websites

## 4xx: erro de client
- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 405 Method Not Allowed

## 5xx: erro de server
- 500 Internal Server Error
- 501 Not Implemented
- 502 Bad Gateway
- 504 Gateway Timeout

---

# HTTP verbs
## POST
- cria uma nova entidade no banco de dados.
- em caso de sucesso, deve retornar 200 Ok ou 201 Created.
- parâmetros suportados: path, query, header e body (preferencial).

## GET
- lê ou recupera uma representação de uma entidade no banco.
- deve retornar um XML ou JSON e status 200 Ok.
- erros mais comuns: 404 Not Found ou 400 Bad Request.
- parâmetros suportados: path, query e header.

## PUT
- atualiza informações de uma entidade já existente no banco, incluindo no body o payload da entidade a ser alterada e na URL seu identificador (por path parameter).
- deve retornar 200 Ok, com o body persistido de volta, ou 204 No Content.
- parâmetros suportados: path, query, header e body (preferencial).

## DELETE
- remove um recurso do banco.
- deve retornar 200 Ok com uma mensagem de confirmação personalizada, ou 204 No Content.
- parâmetros suportados: path, query e header.

## verbos menos comuns
### PATCH
- realiza updates parciais de uma entidade.
- vantagens: economia de banda e maior performance.
- desvantagem: pode acontecer colisão de patches simultâneos.

### HEAD
- similar ao GET, porém retorna apenas response line e os response headers.
- não devolve body.

### TRACE
- recupera o conteúdo de uma requisição HTTP de volta.
- pode ser usado como recurso de debug em desenvolvimento.

### OPTIONS
- encontra operações HTTP e outras opções suportadas pelo servidor.
- o cliente pode especificar uma URL para o verbo OPTIONS, ou um ```*``` para buscar por todo o servidor.

### CONNECT
- usado pelo cliente para estabelecer uma conexão de rede com o servidor via HTTP

---

# níveis de maturidade REST
## nível 0: pântano de POX (plain old XML)
- utiliza o HTTP como sistema de transporte para interações remotas, mas sem adotar qualquer mecanismo adicional.
- possui apenas um único endpoint.
- trafega dados em JSON ou XML.

## nível 1: recursos
- as informações são organizadas por recursos.
- não usa variedade de verbos HTTP, todas as operações são realizadas com GET ou POST.

## nível 2: verbos
- utiliza corretamente todos os verbos HTTP disponíveis.

## nível 3: RESTful (hypermedia controls)
- utiliza HATEOAS:
  - **h**ypertext **a**s **t**he **e**ngine **o**f **a**pplication **s**tate.
  - é uma constraint arquitetural de aplicações REST.
  - as APIs HATEOAS oferecem informações que permitem a navegação dinâmica entre seus endpoints (incluindo links para os outros endpoints da mesma entidade no response, como PUT, GET, POST, DELETE etc).
- se o mecanismo do estado do aplicativo não estiver orientado a hipertexto, a aplicação não poderá ser considerada RESTful.

---

# swagger
- **o que é**: um dos frameworks mais utilizados para documentação de API REST, permite ao cliente que irá consumir a API conhecer seus endpoints, recursos, modelos, requests e responses, entre outros detalhes.
- **funcionalidades**:
  - **documentação abrangente**: detalha todos os aspectos da API, incluindo sua estrutura, funcionalidades e requisitos de uso.
  - **interface interativa**: oferece uma interface que permite aos desenvolvedores explorar e entender facilmente a API.
  - **padrão de documentação**: atualmente, é um padrão de documentação amplamente aceito, especialmente com a iniciativa OpenAPI.
- **benefícios**:
  - **comunicação**: facilita a comunicação entre equipes de desenvolvimento, clientes e stakeholders, fornecendo uma visão clara e unificada da API.
  - **facilidade de integração**: permite aos desenvolvedores do cliente compreender rapidamente como integrar e interagir com a API, reduzindo o tempo de desenvolvimento e os erros de implementação.
  - **transparência**: torna os detalhes da API transparentes e acessíveis, promovendo uma compreensão compartilhada entre todos os envolvidos.

---

# autenticação por JWT
- JWT, que significa JSON Web Token, é um padrão de autenticação amplamente utilizado em APIs. sendo um modelo flexível e seguro, o JWT é uma escolha popular para a implementação de autenticação em APIs, oferecendo segurança e eficiência na transmissão de dados sensíveis.
- **processo de autenticação**:
  - antes de fazer a request para a API, o cliente precisa enviar uma request de autenticação, passando as credenciais (login, por exemplo) via POST no body da request.
  - a API valida e processa as credenciais. Se estiverem corretas, gera um token JWT e o retorna no body de uma response com status 200 OK.
- **armazenamento do token**: após concluir o processo de autenticação, o cliente armazena o JWT (stored token) e, nas próximas requests, irá enviá-lo via header, por authorization parameterss.
- **validação do token**: se o token estiver correto, a request é concluída. caso contrário, a API retorna erro 401 Unauthorized.
- **expiração e refresh token**:
  - como medida de segurança, o token expira depois de um determinado tempo.
  - é possível implementar um refresh token, que solicita um novo token quando o atual expira, evitando a necessidade de enviar as credenciais novamente.
- **anatomia de um JWT**:
  - um JWT é composto por três partes: HEADER, PAYLOAD e VERIFY SIGNATURE.
    - *HEADER*: contém metadados sobre o token, como o tipo e o algoritmo de criptografia.
    - *PAYLOAD*: contém as informações sobre o usuário e quaisquer metadados adicionais necessários.
    - *VERIFY SIGNATURE*: é uma assinatura digital que garante a integridade do token e verifica se ele foi alterado durante a transmissão.

---

# versionamento
- o versionamento é a capacidade de adicionar, remover e alterar funcionalidades em uma API, sem afetar a interface existente e sem quebrar a aplicação para os clientes que já a consomem. é uma prática essencial para garantir a evolução controlada e a compatibilidade das APIs ao longo do tempo.
- **métodos de versionamento**:
  - **versionamento por URL**:
    - *por subdomínio*:
      - especifica a versão logo no início da URL, usando subdomínios.
      - exemplo: HTTPs://v1.host/api/...
    - *por path param*:
      - abordagem mais utilizada, permite fácil navegação entre as versões.
      - especifica a versão após a base URL da API.
      - exemplo: HTTPs://host/api/v1/...
    - *por query param*:
      - padrão que foi muito utilizado antigamente, mas pode prejudicar a elegibilidade da URL e a navegação para outras versões.
      - exemplo: HTTPs://host/api/recurso/.../1?version=1.0
  - **versionamento por header param**:
    - *por accept*:
      - define a versão no cabeçalho Accept da requisição.
    - *por custom header param*: 
      - permite definir um cabeçalho personalizado para especificar a versão.
      - a URL permanece intacta, mas é necessário cuidado ao realizar a requisição para incluir o cabeçalho customizado.
  
---

# boas práticas de API REST
- **paginação do response**: permita a navegação eficiente em conjuntos grandes de dados, retornando apenas uma parte do resultado por vez.
- **utilizar filtros**: permita que o cliente consulte dados de forma mais específica, utilizando parâmetros de consulta para filtrar resultados.
- **definir recursos lógicos**: especifique claramente cada entidade da API e suas relações, garantindo consistência e compreensão.
- **ser tolerante a falhas**: capacidade de se recuperar de erros e sempre retornar alguma resposta, mesmo em situações inesperadas.
- **manter informações em cache**: achce de dados frequentemente solicitados para melhorar a performance da API.
- **facilitar a conectivdade**: tornar fácil para o cliente se conectar e interagir com a API.
- **definir timeouts**: estabelecer limites de tempo para as requisições, evitando tempos de resposta excessivamente longos.
- **ser bem documentada**: documentar claramente todos os aspectos da API, incluindo endpoints, parâmetros e exemplos de uso.
- **usar SSL**: utilizar SSL para criptografar e proteger as comunicações entre o cliente e o servidor.
- **possuir versionamento conciso**: manter um versionamento claro e conciso para facilitar a evolução da API sem impactar os clientes existentes.
- **automatizar testes e validações**: implementar testes automatizados para garantir a qualidade e a consistência da API.
- **ser self-service**: permitir ao cliente acessar, descobrir recursos e escolher o que precisa para consumir a API (utilizando swagger ou HATEOAS).
- *exportar consultas**: permitir que o cliente exporte os resultados das consultas em diferentes formatos, como XLS, CSV, PDF etc.
- **implementar i18n/globalization**: oferecer suporte a internacionalização e globalização para atender a diferentes idiomas e culturas.
- **utilizar notificações para solicitações longas**: utilizar notificações para informar os clientes sobre o status de solicitações longas, em vez de mantê-los esperando indefinidamente. devolver 201 Created, informando que a solicitação será executada e haverá uma notificação quando ela estiver pronta.
- **possuir limite de campos**: limitar o número de campos retornados em cada resposta, para evitar sobrecarga de dados.
- **realizar monitoramento da API em produção**: monitorar ativamente a performance e a disponibilidade da API em ambiente de produção, identificando e corrigindo gargalos rapidamente.
- **selecionar a tecnologia mais adequada**: escolher as tecnologias mais adequadas para cada requisito específico da API, levando em consideração escalabilidade, segurança e eficiência.