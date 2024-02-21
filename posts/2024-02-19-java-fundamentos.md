---
title: 'java - fundamentos'
author: 'Tiffany Rossi'
date: '2024-02-19'
sourcetype: livro
sourcename: 'Java - Guia do Programador'
sourceauthor: 'Peter Jandl Junior'
sourceurl: 
tags:
    - java
    - estudos
---
"java é uma linguagem de programação de propósito geral, concorrente, baseada em classes e orientada a objetos. projetada para ser simples o bastante para que a maioria dos programadores se torne fluente na linguagem"

- *java SE (standard edition)*: 
  - integra os elementos padrão da plataforma
  - utilizada no desenvolvimento de aplicações de pequeno e médio porte
  - inclui todas as APIs de base, além da JVM
- *java EE (enterprise edition)*:
  - utilizada em aplicações corporativas complexas
  - adiciona APIs específicas aos elementos padrão

# características principais
- *orientação a objetos*: abstração, encapsulamento e hereditariedade. praticamente tudo são classes, exceto os tipos primitivos de dados
- *independência de plataforma*: programas são compilados como bytecodes, uma forma intermediária de código que funciona como linguagem de máquina para a JVM, que é um interpretador de bytecodes para a plataforma na qual a JVM é executada
- *concorrência*: suporte para criação e usod e múltiplas threads, além do uso mais efetivo dos processadores multinúcleo
- *segurança*: possui mecanismos de segurança para evitar a alteração indesejada do código, que são flexíveis e capazes de minimizar riscos
- *sem ponteiros*: não permite manipular endereços de memória, nem exige que os objetos criados sejam explicitamente destruídos. a JVM inclui um automatic garbage collector
- *performance*: a JVM tem um compilador JIT (just in time), que converte os bytecodes em código nativo durante a carga do programa
- é uma linguagem *robusta*
- incentiva o *controle de erros*
- usa tipos inteiros e ponto flutuante com *aritmética compatível com o padrão IEEE 754*
- suporte a *UNICODE*
- possui *mecanismos de reflexão*, que determinam os tipos e informações dos objetos em uso em tempo de execução
- *tipos genéricos*
- *anotações*
- *expressões lambda*
- *extensível dinamicamente*
- naturalmente voltada para a construção de aplicações em *rede ou distribuídas*