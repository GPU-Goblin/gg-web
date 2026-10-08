+++
title = "Para pesquisadores: cálculos científicos maiores"
description = "Use a rede de computadores emprestados do GPU Goblin para os seus cálculos científicos: grandes produtos de matrizes, grafos de operações com tensores, treinamento de modelos. Cálculos grandes divididos automaticamente, resultados verificados."
template = "page.html"
[extra]
lead = "Use a rede de computação do GPU Goblin para rodar seus cálculos a partir do Python. Cálculos grandes são divididos automaticamente entre computadores emprestados por voluntários, e cada resultado é verificado."
cta = "Solicitar acesso"
cta_page = "account"
cta2 = "Ler as perguntas frequentes"
cta2_page = "faq"
toc = true
+++

## O que você pode calcular

O GPU Goblin calcula os tipos de cálculo científico do seu catálogo, em processadores e placas de
vídeo:

- **Grandes produtos de matrizes**, o núcleo de boa parte da computação científica, divididos em
  pedaços quando são grandes demais para uma única máquina.
- **Cálculos sobre grafos de operações com tensores**: um cálculo descrito como um grafo de mais de
  45 operadores (aritmética, reduções, tensores de inteiros, fórmulas personalizadas…), por exemplo
  capturado de um programa PyTorch pelo pacote Python.
- **Treinamento de modelos de aprendizado de máquina**: redes convolucionais, transformers, modelos
  de linguagem. Um modelo maior do que a máquina de qualquer colaborador é dividido automaticamente
  em etapas (grupos de camadas calculados um após o outro), blocos (matrizes grandes partidas em
  pedaços) e microlotes.

Você descreve o cálculo, e a rede o calcula com suas próprias operações verificadas. Outros tipos de cálculo são adicionados ao catálogo com o
tempo: diga-nos do que a sua pesquisa precisa.

## Como um cálculo é executado

1. O **nó** do seu laboratório, um pequeno serviço instalado no seu laboratório, guarda os dados e
   divide o cálculo em tarefas.
2. As máquinas dos colaboradores buscam suas entradas, calculam e devolvem seus resultados.
3. Cada resultado é **verificado** — recalculado por um validador independente, ou comparado com o
   mesmo cálculo feito por outro colaborador — antes de ser usado.
4. Os resultados aceitos são combinados no seu. Para um modelo em treinamento, isso é uma rodada:
   os gradientes são combinados, o otimizador dá seu passo e a próxima rodada começa.

## Seus dados

- Por padrão, o servidor não armazena **nenhum dado de pesquisa**, e o nó do seu laboratório nunca envia os seus conjuntos de dados tal como estão: ele envia às máquinas **operações a calcular**, com apenas os números de que cada tarefa precisa.
- Esses números chegam sem nome de arquivo nem descrição do que representam (o texto chega como
  tokens numéricos). Os dados não são criptografados durante o cálculo: uma tabela de pixels ainda pode ser exibida
  como imagem, e tokens podem ser convertidos de volta em texto. Não envie à rede aberta dados que
  precisam permanecer confidenciais (dados pessoais ou médicos, por exemplo).

## Acesso

[Solicite acesso pela sua conta](../account): entre com o seu endereço de e-mail e preencha o pedido de acesso de pesquisador. Dúvidas: [contact@gpugoblin.com](mailto:contact@gpugoblin.com).

## Custo

Usar a rede para pesquisa é **gratuito**. O software está disponível sob a licença PolyForm
Noncommercial: gratuito para pesquisa e qualquer uso não comercial. O uso comercial exige um acordo
com o autor.
