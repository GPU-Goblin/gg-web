+++
title = "Perguntas frequentes"
description = "Respostas sobre o GPU Goblin: custo, créditos, segurança do seu computador, eletricidade e calor, hardware compatível, dados e como os pesquisadores obtêm acesso."
template = "faq.html"
[extra]
lead = "Faltou algo? Escreva para contact@gpugoblin.com."
groups = [
  { id = "general", title = "O projeto", items = [
    { q = "O que é o GPU Goblin?", a = "Uma rede de computação para a pesquisa, formada por computadores que as pessoas emprestam. Os pesquisadores podem usá-la em pesquisas que precisam de muito poder de computação; os colaboradores emprestam sua placa de vídeo ou seu processador quando não precisam deles." },
    { q = "Quem faz o GPU Goblin?", a = "O GPU Goblin é concebido e desenvolvido por Nicolas Michel, membro do LAAS-CNRS, um laboratório de pesquisa em Toulouse, na França. É um projeto pessoal, não um serviço oficial do CNRS." },
    { q = "É gratuito?", a = "Sim, para pesquisa e qualquer uso não comercial. Emprestar não custa nada além de eletricidade, e calcular na rede é gratuito para pesquisa. O software tem o código-fonte disponível sob a licença PolyForm Noncommercial." },
    { q = "É código aberto?", a = "O código-fonte é publicado, mas sob a licença PolyForm Noncommercial: gratuito para pesquisa e uso não comercial, não é código aberto no sentido da OSI. O uso comercial exige o acordo do autor." },
    { q = "Em que pé está o projeto?", a = "Em preparação da beta: a rede funciona e está sendo testada antes de uma abertura mais ampla. Hoje funciona no Linux; uma versão para Windows chega muito em breve, e uma versão para Android está prevista.", a_win = "Em preparação da beta: a rede funciona e está sendo testada antes de uma abertura mais ampla. Funciona no Windows e no Linux; uma versão para Android está prevista." },
  ] },
  { id = "contributors", title = "Emprestar seu computador", items = [
    { q = "Vou ser pago?", a = "Não. Você ganha créditos que contam sua contribuição, mas os créditos não têm nenhum valor monetário e nenhum é prometido." },
    { q = "É seguro para o meu computador?", a = "Sua máquina só roda o código de cálculo próprio do GPU Goblin, nunca um programa enviado por um pesquisador, e cada tarefa roda em um ambiente isolado sem acesso à rede, longe dos seus arquivos, com limites de memória e de disco." },
    { q = "Vai deixar meu computador ou meus jogos mais lentos?", a = "Você decide: empreste só quando não estiver, nos horários escolhidos, nunca enquanto um jogo usa a placa, nunca acima de uma temperatura. Pause na hora pelo ícone da bandeja quando quiser." },
    { q = "Quanta eletricidade consome?", a = "O quanto sua placa de vídeo consome sob carga, e só enquanto calcula. Limitar os horários e a temperatura limita o consumo." },
    { q = "Que hardware funciona?", a = "Um computador Linux x86-64 (uma versão para Windows chega muito em breve). Placas de vídeo NVIDIA, AMD ou Intel via Vulkan; as placas NVIDIA também podem usar o motor CUDA nativo, mais rápido. Processadores também funcionam, mais devagar.", a_win = "Um computador com Windows 10 ou 11 ou Linux x86-64. Placas de vídeo NVIDIA, AMD ou Intel via Vulkan; as placas NVIDIA também podem usar o motor CUDA nativo, mais rápido. Processadores também funcionam, mais devagar." },
    { q = "Posso emprestar um servidor sem tela, ou uma máquina com várias placas de vídeo?", a = "Sim. O aplicativo tem um modo console para servidores, e, em uma máquina com várias placas, cada placa calcula separadamente, todas vinculadas à sua conta." },
    { q = "Meu computador vê os dados dos pesquisadores?", a = "Ele recebe apenas pedaços dos dados de que suas tarefas precisam: tabelas de números, sem nome de arquivo nem descrição do que representam (o texto chega como tokens numéricos). Os pesquisadores são orientados a não enviar dados sensíveis à rede aberta." },
    { q = "Meu endereço IP fica visível?", a = "Para poupar a banda do servidor, as máquinas compartilham dados entre si; enquanto isso está ativado, as outras máquinas autorizadas nos mesmos dados podem ver seu endereço público. Você pode desativar isso." },
  ] },
  { id = "researchers", title = "Para pesquisadores", items = [
    { q = "O que posso calcular?", a = "Hoje: grandes produtos de matrizes, cálculos descritos como grafos de operações com tensores (mais de 45 operadores, capturados do PyTorch, por exemplo) e treinamento de modelos de aprendizado de máquina (redes convolucionais, transformers, modelos de linguagem). Cálculos maiores do que qualquer máquina sozinha são divididos automaticamente. As máquinas dos colaboradores só rodam os tipos de cálculo do catálogo da plataforma, nunca código arbitrário: outros tipos são adicionados ao catálogo com o tempo, então diga-nos do que você precisa." },
    { q = "Como os resultados são verificados?", a = "Cada resultado é recalculado por um validador independente ou comparado com o mesmo cálculo feito por outro colaborador, dentro de uma tolerância medida, antes de ser usado." },
    { q = "Onde ficam meus dados?", a = "Por padrão, no nó do seu laboratório, um serviço instalado no seu laboratório. Ele nunca envia os seus conjuntos de dados tal como estão: envia às máquinas que calculam operações a calcular, com apenas os números de que cada tarefa precisa. O servidor não armazena nenhum dado de pesquisa." },
    { q = "Como obtenho acesso?", a = "Pela sua conta: entre com o seu endereço de e-mail e preencha o pedido de acesso de pesquisador." },
  ] },
]
+++
