+++
title = "Thanks"
description = "The people who make GPU Goblin work: contributors who lend their computer, scientists, the first testers, and the open-source projects it is built on."
template = "page.html"
[extra]
lead = "The computing grid exists thanks to the people who take part in it, and to the open-source projects it is built on."
+++

## The people who take part

- **Contributors**, who lend their computer: every task their machine computes serves a research
  project.
- **Scientists**, who trust the grid with their computations.
- **The first testers**, who tried GPU Goblin before anyone else.

Accounts publish no names. To appear on this page, write to
[contact@gpugoblin.com](mailto:contact@gpugoblin.com) with the name to show.

## Open-source projects

GPU Goblin is built on the work of many open-source projects, in particular:

- **Rust**: the language every part is written in
- **Tokio, reqwest, Axum**: network exchanges, on the server and in the application
- **Burn, wgpu**: computing on graphics cards through Vulkan
- **PyTorch, LibTorch**: computing with CUDA, and the scientists' models
- **PostgreSQL, SQLx**: the server's data, credits included
- **egui, eframe**: the application's window
- **bubblewrap, Landlock, seccomp**: the sandbox that isolates each task
- **ksni, tray-icon**: the icon in the notification area
- **Inter, Noto**: the typefaces (SIL Open Font License)
- **Phosphor**: the application's icons (MIT)
- **Zola**: this site

And many others.
