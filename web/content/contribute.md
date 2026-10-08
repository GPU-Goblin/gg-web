+++
title = "Lend your GPU to research"
description = "How to lend your computer's graphics card or processor to scientific research with GPU Goblin: what runs on your machine, how you stay in control, what you need."
template = "page.html"
[extra]
lead = "Your graphics card is idle most of the day. With GPU Goblin, that time computes for science, only when you allow it, and nothing but the platform's own code runs on your machine."
cta = "Create my account"
cta_page = "account"
cta2 = "Download"
cta2_page = "download"
toc = true
+++

## What your computer does

When you lend your machine, the application asks the grid for a task,
computes it, sends back the result, and asks for the next one. A task is a piece of a scientific
computation: a piece of a large matrix product, an operation on a model's data, a training step
of a neural network, or the check of another contributor's result.

The software only runs **GPU Goblin's own computation code**. Researchers describe their computation (the
operations, the sizes) and their data, and the software computes them with the platform's code.

## You stay in control

The GPU Goblin application sits in your system tray and shows what the machine is doing. From it,
or from a terminal on a server:

- **Pause** — after the current task, or at once (the task goes back to the grid, no penalty);
- **Only when I'm away** — while your session is locked, or after a few minutes without you;
- **Hours** — lend only within chosen windows, by day, even through the night;
- **Give way to games** — no new task while a game or another program uses the card;
- **Keep it cool** — no new task above a temperature you choose;
- **Memory** — how much of the computer's and the card's memory a task may use.

## What you need

- {{ <os k="req_os" lang={lang} win={config.extra.windows_available} /> }}
- For the graphics card: an NVIDIA, AMD or Intel card with a working Vulkan driver. NVIDIA cards
  can also use the native CUDA engine, several times faster on some models (a 4 GB download).
- A home internet connection; fibre is ideal, but any stable connection works.
- A few gigabytes of free disk for the work in progress.

{{ <notify lang={lang} win={config.extra.windows_available} /> }}

On machines with several graphics cards, each card computes separately, all attached to your account. On a
server without a screen, the same application runs in the terminal.

## Before you start: what you should know

- **Your machine receives pieces of research data** to compute: arrays of numbers, with no name or
  description, only what its task needs.
- **Your machine shares data with other contributors** to spare the server's bandwidth: other
  machines authorized on the same data can see your public address. You can turn this off.
- **Credits have no monetary value.** They count your contribution; nothing is paid.
- Lending uses electricity and warms the machine. The limits above are there so that it never
  costs you more than you decided.

Read the [security page](../security) for how the sandbox and the checks work.

## How to start

1. [Create your account](../account) with your e-mail address (no password: a code is sent to you).
2. [Download the application](../download) and sign in with the same address.
3. Choose what to lend and when. The machine attaches itself to your account and starts.
