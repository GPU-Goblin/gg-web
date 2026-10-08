+++
title = "GPU Goblin"
description = "Empreste a placa de vídeo do seu computador à computação científica, ou use a rede de computação do GPU Goblin para a sua pesquisa. Gratuito para pesquisa, resultados verificados, você mantém o controle."
template = "index.html"

[extra]
hero_title = "Sua placa de vídeo ociosa pode impulsionar a ciência de amanhã"
hero_lead = "O GPU Goblin reúne os computadores dos colaboradores em uma única rede de computação dedicada à pesquisa. Com a sua ajuda, os pesquisadores podem rodar seus cálculos e fazer o conhecimento científico avançar."

steps_title = "Como funciona"
steps = [
  { title = "Instale o aplicativo", text = "Entre com seu e-mail e escolha o que emprestar: processador ou placa de vídeo." },
  { title = "Você escolhe quando", text = "Só quando você está ausente, à noite, abaixo de uma temperatura: seu computador empresta quando for conveniente, e você pode pará-lo a qualquer momento." },
  { title = "Os pesquisadores calculam", text = "Os cientistas usam as placas de vídeo emprestadas para cálculos ligados às suas pesquisas." },
]

sides = [
  { title = "Você tem um computador", text = "Um PC gamer, uma estação de trabalho, um servidor de laboratório: a placa de vídeo dele fica ociosa a maior parte do dia. Empreste esse tempo à pesquisa.", points = ["Só roda o código da própria plataforma, em um ambiente isolado", "Você decide quando: ausência, horários, temperatura, memória", "Pare na hora sempre que precisar da máquina"], page = "contribute", cta = "Empreste sua GPU" },
  { title = "Você é pesquisador", text = "Use a rede de computação do GPU Goblin para os seus cálculos científicos a partir do Python: basta importar a biblioteca gpugoblin.", points = ["Cálculos grandes divididos em pedaços automaticamente", "Seus dados ficam, por padrão, no nó do seu laboratório", "Resultados verificados antes de você recebê-los"], page = "research", cta = "Para pesquisadores" },
]

trust_title = "Feito para que você possa confiar"
trust_lead = "Seu computador continua protegido, e os pesquisadores podem confiar em cada resultado."
trust = [
  { title = "Nenhum código de terceiros", text = "Sua máquina roda o código de cálculo publicado pelo próprio GPU Goblin, nunca um programa enviado por um pesquisador." },
  { title = "Em ambiente isolado", text = "Cada tarefa roda isolada dos seus arquivos e da sua rede, com limites de memória, disco e processador." },
  { title = "Resultados verificados", text = "Um resultado só conta depois de um recálculo independente ou de uma coincidência com o de outro colaborador." },
  { title = "Você mantém o controle", text = "Pausa, horários, só quando você não está, limites de temperatura e de memória: a máquina é sua antes de tudo." },
]

status_title = "Em que pé está o projeto"
faq_title = "As primeiras perguntas que as pessoas fazem"
faq = [
  { q = "O GPU Goblin é gratuito?", a = "Sim, para pesquisa e qualquer uso não comercial. Emprestar seu computador não custa nada além de eletricidade, e usar a rede para pesquisa é gratuito. O software tem o código-fonte disponível sob a licença PolyForm Noncommercial." },
  { q = "Vou ser pago por emprestar meu computador?", a = "Não. Os colaboradores ganham créditos que contam sua contribuição, mas os créditos não têm nenhum valor monetário e nenhum é prometido. O GPU Goblin é computação voluntária para a ciência." },
  { q = "Um pesquisador pode rodar o que quiser na minha máquina?", a = "Não. Sua máquina só roda o código de cálculo próprio do GPU Goblin (produtos de matrizes, operações com tensores, passos de treinamento de modelos), dentro de um ambiente isolado. Os pesquisadores descrevem modelos e dados; nunca enviam programas." },
]

final_title = "Dê à ciência a potência que falta"
final_text = "Cadastre-se em um minuto com seu endereço de e-mail, instale o aplicativo e escolha quando sua máquina ajuda a pesquisa."
+++

O GPU Goblin está **em preparação da beta**: a rede está sendo testada antes que colaboradores e
pesquisadores entrem em maior número. O que já funciona:

- grandes cálculos matriciais, e cálculos descritos como grafos de operações com tensores (escritos
  com PyTorch, por exemplo), incluindo cálculos maiores do que qualquer computador sozinho, divididos
  em pedaços;
- treinar modelos de aprendizado de máquina, incluindo modelos maiores do que qualquer computador
  sozinho, divididos em etapas e blocos;
- calcular em processadores, em placas de vídeo via Vulkan (NVIDIA, AMD, Intel) e de forma nativa em
  placas NVIDIA com CUDA;
- verificar cada resultado, seja por um recálculo independente, seja comparando-o com o resultado de
  outro colaborador;
- {{ <os k="home_app" lang={lang} win={config.extra.windows_available} /> }}

{{ <os k="home_plans" lang={lang} win={config.extra.windows_available} /> }}
