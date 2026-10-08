+++
title = "Segurança e confiança"
description = "Como o GPU Goblin protege as máquinas dos colaboradores e os resultados dos pesquisadores: nenhum código de terceiros, tarefas em ambiente isolado, resultados verificados, e o que ele não protege."
template = "page.html"
[extra]
lead = "Como o GPU Goblin protege a sua máquina e verifica os resultados, e o que não é protegido."
toc = true
+++

## No seu computador

- **Nenhum código de terceiros.** O software só roda o código de cálculo próprio do GPU Goblin. Uma
  tarefa é uma *descrição* (as camadas de um modelo, um lote de dados, um tamanho).
- **Um ambiente isolado para cada tarefa.** {{ <os k="sec_sandbox" lang={lang} win={config.extra.windows_available} /> }}
- **Dados controlados.** Antes de calcular, o software verifica a assinatura do servidor ao receber os dados. Se um dado foi modificado, o cálculo é rejeitado.
- **Controle local.** O software só pode ser controlado a partir da sua própria máquina.

## Nos resultados

- **Verificação dos cálculos.** Cada resultado é recalculado por um validador independente ou
  calculado duas vezes por dois colaboradores diferentes e comparado dentro de uma tolerância
  medida.
- **Verificações por amostragem.** Uma parte dos resultados é recalculada uma terceira vez, ao
  acaso, mesmo quando dois colaboradores concordam.

## O que não é protegido

- **Os colaboradores recebem pedaços dos dados que calculam**: tabelas de números sem nome nem
  descrição, apenas aquilo de que cada tarefa precisa. Os dados não são criptografados durante o cálculo: não envie dados
  confidenciais à rede aberta.
- **Seu endereço público fica visível** para as outras máquinas autorizadas nos mesmos dados quando
  o compartilhamento entre colaboradores está ativado (ele está, por padrão, e pode ser desativado).

## Relatar um problema

Encontrou um problema de segurança? Escreva para [contact@gpugoblin.com](mailto:contact@gpugoblin.com)
antes de publicá-lo.
