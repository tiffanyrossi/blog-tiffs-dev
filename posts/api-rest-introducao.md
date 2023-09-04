---
title: 'API REST - Introdução'
author: 'Tiffany Rossi'
date: '2023-09-04'
tags:
    - api rest
---
# API REST - introdução

## o que é REST
- **r**epresentational **s**tate **t**ransfer
- REST é um estilo de arquitetura de software para sistemas de hipermídia distribuídos (como a world wide web).
- baseado em um conjunto de *constraints*:
   - **client-server**: as interações-servidor devem ser desenvolvidas sem dependências.
   - **stateless server**: o servidor não deve guardar nada das requests do cliente. cada requested é tratada como nova, sem sessões ou históricos.
   - **cacheable**: cache melhora a performance e a escalabilidade. deve ser aplicado quando possível, e os recursos precisam informar que são cacheable.
   - **interface uniforme**: usar a mesma abordagem de identificação de recursos (URI), manipulação de recursos a partir das suas representações, mensagens autodescritivas, HATEOAS etc em todas as APIs.
   - **sistema em camadas**: utilizar camadas intermediárias entre cliente e servidor, como balenceamento de carga, proxies e firewalls.
   - **código sob demanda** (opcional): se for necessário, é possível que a API retorne código executável para suportar parte da aplicação.
- formatos suportados pelo REST: xml, json, csv, texto, imagens, html, pdf, binário etc.

## arquitetura do request/response
- **endpoint**: url onde o server rest está executando as solicitações, para onde o cliente deverá apontar a chamada.
- **método**: tipo de operação a ser feita (*método http).
- **header**: contém parâmetros adicionais fornecidos para a comunicação.
- **body**: contém as informações enviadas ou recebidas (*payload*)