+++
title = "Empreste sua GPU à pesquisa"
description = "Como emprestar a placa de vídeo ou o processador do seu computador à pesquisa científica com o GPU Goblin: o que roda na sua máquina, como você mantém o controle, do que você precisa."
template = "page.html"
[extra]
lead = "Sua placa de vídeo fica ociosa a maior parte do dia. Com o GPU Goblin, esse tempo calcula para a ciência, só quando você permite, e nada além do código da própria plataforma roda na sua máquina."
cta = "Criar minha conta"
cta_page = "account"
cta2 = "Baixar"
cta2_page = "download"
toc = true
+++

## O que seu computador faz

Quando você empresta sua máquina, o aplicativo pede uma tarefa
à rede, calcula, devolve o resultado e pede a próxima. Uma tarefa é um pedaço de um cálculo
científico: um pedaço de um grande produto de matrizes, uma operação sobre os dados de um modelo,
um passo de treinamento de uma rede neural ou a verificação do resultado de outro colaborador.

O software só roda **o código de cálculo próprio do GPU Goblin**. Os pesquisadores descrevem seu
cálculo (as operações, os tamanhos) e seus dados, e o software os calcula com o código da plataforma.

## Você mantém o controle

O aplicativo GPU Goblin fica na bandeja do sistema e mostra o que a máquina está fazendo. A partir
dele, ou de um terminal em um servidor:

- **Pausa** — depois da tarefa em andamento, ou na hora (a tarefa volta para a rede, sem penalidade);
- **Só quando eu não estiver** — enquanto sua sessão está bloqueada, ou após alguns minutos sem você;
- **Horários** — empreste só dentro das faixas escolhidas, por dia, inclusive durante a noite;
- **Dar a vez aos jogos** — nenhuma tarefa nova enquanto um jogo ou outro programa usa a placa;
- **Manter fresca** — nenhuma tarefa nova acima de uma temperatura que você escolhe;
- **Memória** — quanto da memória do computador e da placa uma tarefa pode usar.

## Do que você precisa

- {{ <os k="req_os" lang={lang} win={config.extra.windows_available} /> }}
- Para a placa de vídeo: uma placa NVIDIA, AMD ou Intel com um driver Vulkan funcionando. As placas
  NVIDIA também podem usar o motor CUDA nativo, várias vezes mais rápido em alguns modelos (um
  download de 4 GB).
- Uma conexão de internet doméstica; fibra é o ideal, mas qualquer conexão estável serve.
- Alguns gigabytes livres em disco para o trabalho em andamento.

{{ <notify lang={lang} win={config.extra.windows_available} /> }}

Em máquinas com várias placas de vídeo, cada placa calcula separadamente, todas vinculadas à sua conta. Em um
servidor sem tela, o mesmo aplicativo roda no terminal.

## Antes de começar: o que você deve saber

- **Sua máquina recebe pedaços de dados de pesquisa** para calcular: tabelas de números, sem nome
  nem descrição, apenas aquilo de que sua tarefa precisa.
- **Sua máquina compartilha dados com outros colaboradores** para poupar a banda do servidor: outras
  máquinas autorizadas nos mesmos dados podem ver seu endereço público. Você pode desativar isso.
- **Os créditos não têm nenhum valor monetário.** Eles contam sua contribuição; nada é pago.
- Emprestar consome eletricidade e esquenta a máquina. Os limites acima existem para que isso nunca
  custe mais do que você decidiu.

Leia a [página de segurança](../security) para saber como funcionam o ambiente isolado e as
verificações.

## Como começar

1. [Crie sua conta](../account) com seu endereço de e-mail (sem senha: um código é enviado a você).
2. [Baixe o aplicativo](../download) e entre com o mesmo endereço.
3. Escolha o que emprestar e quando. A máquina se vincula sozinha à sua conta e começa.
