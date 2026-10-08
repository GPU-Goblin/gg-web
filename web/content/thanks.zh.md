+++
title = "致谢"
description = "让 GPU Goblin 得以运转的人们：出借电脑的人、科学家、最早的测试者，以及它所依赖的开源项目。"
template = "page.html"
[extra]
lead = "计算网格的存在，要归功于参与其中的人们，以及它所依赖的开源项目。"
+++

## 参与其中的人们

- **出借电脑的人**：他们的机器计算的每一项任务都服务于一个科研项目。
- **科学家**：他们把自己的计算托付给这个网格。
- **最早的测试者**：他们比任何人都更早试用了 GPU Goblin。

账户不会公开任何姓名。如希望出现在本页，请写信至 [contact@gpugoblin.com](mailto:contact@gpugoblin.com)，并注明要显示的名字。

## 开源项目

GPU Goblin 建立在众多开源项目的成果之上，特别是：

- **Rust**：编写所有部分所用的语言
- **Tokio, reqwest, Axum**：服务器和应用程序中的网络通信
- **Burn, wgpu**：通过 Vulkan 在显卡上进行计算
- **PyTorch, LibTorch**：使用 CUDA 进行计算，以及科学家的模型
- **PostgreSQL, SQLx**：服务器的数据，包括积分
- **egui, eframe**：应用程序的窗口
- **bubblewrap, Landlock, seccomp**：隔离每一项任务
- **ksni, tray-icon**：通知区域的图标
- **Inter, Noto**：字体（SIL Open Font License）
- **Phosphor**：应用程序的图标（MIT）
- **Zola**：本网站

以及许多其他项目。
