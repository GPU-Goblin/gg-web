+++
title = "Frequently asked questions"
description = "Answers about GPU Goblin: cost, credits, safety of your computer, electricity and heat, supported hardware, data, and how researchers get access."
template = "faq.html"
[extra]
lead = "Something missing? Write to contact@gpugoblin.com."
groups = [
  { id = "general", title = "The project", items = [
    { q = "What is GPU Goblin?", a = "A computing network for research, made of computers that people lend. Researchers can use it for research that needs a lot of computing power; contributors lend their graphics card or processor when they do not need it." },
    { q = "Who makes GPU Goblin?", a = "GPU Goblin is designed and developed by Nicolas Michel, a member of LAAS-CNRS, a research laboratory in Toulouse, France. It is a personal project, not an official CNRS service." },
    { q = "Is it free?", a = "Yes, for research and any noncommercial use. Lending costs nothing but electricity, and computing on the grid is free for research. The software is source-available under the PolyForm Noncommercial license." },
    { q = "Is it open source?", a = "The source code is published, but under the PolyForm Noncommercial license: free for research and noncommercial use, not open source in the OSI sense. Commercial use needs the author's agreement." },
    { q = "Where does the project stand?", a = "In beta preparation: the grid works and is being tested before a wider opening. It runs on Linux today; a Windows version is coming very soon, and an Android version is planned.", a_win = "In beta preparation: the grid works and is being tested before a wider opening. It runs on Windows and Linux; an Android version is planned." },
  ] },
  { id = "contributors", title = "Lending your computer", items = [
    { q = "Will I be paid?", a = "No. You earn credits that count your contribution, but credits have no monetary value and none is promised." },
    { q = "Is it safe for my computer?", a = "Your machine only runs GPU Goblin's own computation code, never a program sent by a researcher, and each task runs in a sandbox without network access, away from your files, with limits on memory and disk." },
    { q = "Will it slow down my computer or my games?", a = "You decide: lend only while you are away, at chosen hours, never while a game uses the card, never above a temperature. Pause at once from the tray icon whenever you want." },
    { q = "How much electricity does it use?", a = "As much as your graphics card uses under load, only while it computes. Limiting the hours and the temperature limits the consumption." },
    { q = "Which hardware works?", a = "A Linux x86-64 computer (a Windows version is coming very soon). Graphics cards from NVIDIA, AMD or Intel through Vulkan; NVIDIA cards can also use the faster native CUDA engine. Processors work too, more slowly.", a_win = "A Windows 10 or 11 or Linux x86-64 computer. Graphics cards from NVIDIA, AMD or Intel through Vulkan; NVIDIA cards can also use the faster native CUDA engine. Processors work too, more slowly." },
    { q = "Can I lend a server without a screen, or a machine with several graphics cards?", a = "Yes. The application has a console mode for servers, and on a machine with several cards each card computes separately, all attached to your account." },
    { q = "Does my computer see the researchers' data?", a = "It receives only pieces of the data its tasks need: arrays of numbers, with no file name or description of what they represent (text arrives as numeric tokens). Researchers are told not to send sensitive data to the open grid." },
    { q = "Is my IP address visible?", a = "To spare the server's bandwidth, machines share data between them; while this is on, the other machines authorized on the same data can see your public address. You can turn it off." },
  ] },
  { id = "researchers", title = "For researchers", items = [
    { q = "What can I compute?", a = "Today: large matrix products, computations described as graphs of tensor operations (more than 45 operators, captured from PyTorch for example), and training of machine-learning models (convolutional networks, transformers, language models). Computations larger than any single machine are cut automatically. Contributors' machines only run the kinds of computation in the platform's catalog, never arbitrary code: other kinds are added to the catalog over time, so tell us what you need." },
    { q = "How are results checked?", a = "Every result is recomputed by an independent validator or compared with the same computation made by another contributor, within a measured tolerance, before it is used." },
    { q = "Where is my data?", a = "By default on your lab's node, a service installed at your lab. It never sends out your datasets as they are: it sends the computing machines operations to compute, with only the numbers each task needs. The server stores no research data." },
    { q = "How do I get access?", a = "From your account: sign in with your e-mail address and fill in the researcher access request." },
  ] },
]
+++
