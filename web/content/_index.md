+++
title = "GPU Goblin"
description = "Lend your computer's graphics card to scientific computing, or use GPU Goblin's computing network for your research. Free for research, verified results, you stay in control."
template = "index.html"

[extra]
hero_title = "Your idle graphics card can power tomorrow's science"
hero_lead = "GPU Goblin brings contributors' computers together into a single computing network dedicated to research. With your help, researchers can run their computations and push scientific knowledge forward."

steps_title = "How it works"
steps = [
  { title = "Install the application", text = "Sign in with your e-mail address and choose what to lend: processor or graphics card." },
  { title = "You choose when", text = "Only while you are away, at night, below a temperature: your machine lends when it suits you, and you can stop it at any time." },
  { title = "Researchers compute", text = "Scientists use the lent graphics cards for computations tied to their research." },
]

sides = [
  { title = "You have a computer", text = "A gaming PC, a workstation, a lab server: its graphics card sits idle most of the day. Lend that time to research.", points = ["Only the platform's own code runs, in a sandbox", "You decide when: away, hours, temperature, memory", "Stop at once whenever you need the machine"], page = "contribute", cta = "Lend your GPU" },
  { title = "You are a researcher", text = "Use GPU Goblin's computing network for your scientific computations from Python: just import the gpugoblin library.", points = ["Large computations cut into pieces automatically", "Your data stays on your lab's node by default", "Results verified before you receive them"], page = "research", cta = "For researchers" },
]

trust_title = "Built so that you can trust it"
trust_lead = "Your machine stays protected, and researchers can rely on every result."
trust = [
  { title = "No foreign code", text = "Your machine runs GPU Goblin's own published computation code, never a program sent by a researcher." },
  { title = "Sandboxed", text = "Each task runs isolated from your files and network, with limits on memory, disk and processor." },
  { title = "Verified results", text = "A result counts only after an independent recomputation or a match with another contributor's." },
  { title = "You stay in control", text = "Pause, hours, only when you are away, temperature and memory limits: the machine is yours first." },
]

status_title = "Where the project stands"
faq_title = "Questions people ask first"
faq = [
  { q = "Is GPU Goblin free?", a = "Yes, for research and any noncommercial use. Lending your computer costs nothing but electricity, and using the grid for research is free. The software is source-available under the PolyForm Noncommercial license." },
  { q = "Will I be paid for lending my computer?", a = "No. Contributors earn credits that count their contribution, but credits have no monetary value and none is promised. GPU Goblin is volunteer computing for science." },
  { q = "Can a researcher run anything they want on my machine?", a = "No. Your machine only runs GPU Goblin's own computation code (matrix products, operations on tensors, training steps of models), inside a sandbox. Researchers describe models and data; they never send programs." },
]

final_title = "Give science the power it lacks"
final_text = "Sign up in a minute with your e-mail address, install the application, and choose when your machine helps research."
+++

GPU Goblin is **in beta preparation**: the grid is being tested before contributors and researchers
join in larger numbers. What already works:

- large matrix computations, and computations described as graphs of tensor operations (written
  with PyTorch, for example), including ones larger than any single computer, cut into pieces;
- training machine-learning models, including models larger than any single computer, cut into
  stages and tiles;
- computing on processors, on graphics cards through Vulkan (NVIDIA, AMD, Intel) and natively on
  NVIDIA cards with CUDA;
- checking every result, either by an independent recomputation or by comparing it with the result
  of another contributor;
- {{ <os k="home_app" lang={lang} win={config.extra.windows_available} /> }}

{{ <os k="home_plans" lang={lang} win={config.extra.windows_available} /> }}
