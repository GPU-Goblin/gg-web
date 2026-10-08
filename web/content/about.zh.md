+++
title = "关于 GPU Goblin"
description = "GPU Goblin 由 Nicolas Michel（LAAS-CNRS）设计与开发。了解项目的由来、原则、许可证以及联系方式。"
template = "page.html"
[extra]
lead = "科学需要算力，但显卡正面临前所未有的短缺。与此同时，家庭和办公室里强大的显卡每晚都在闲置。GPU Goblin 把两者连接起来。"
+++

## 原则

- **您的机器上不运行外部代码。** 贡献者只运行平台自身的代码，且在沙箱中运行。
- **结果经过验证。** 每个结果在使用之前都会经过重新计算或比对。
- **由机器主人决定。** 机器只在主人允许的时间、以主人允许的方式出借。
- **不涉及金钱。** 积分用于记录贡献，不是货币。

## 关于作者

GPU Goblin 由 **Nicolas Michel** 设计与开发。他是 [LAAS-CNRS](https://www.laas.fr) 的成员，该实验室是法国国家科学研究中心（CNRS）位于图卢兹的研究实验室。这是一个个人项目，并非 CNRS 或 LAAS-CNRS 的官方服务。

- [Nicolas Michel 的 LinkedIn](https://www.linkedin.com/in/nicolas-michel-3161532b4/)
- 联系方式：[contact@gpugoblin.com](mailto:contact@gpugoblin.com)

## 致谢

感谢每一位出借电脑的人，感谢把研究工作托付给这个网格的科学家，感谢最早参与测试的朋友，也感谢本项目所依赖的开源项目：Rust、Tokio、Axum、PostgreSQL、Burn、wgpu、PyTorch 和 LibTorch、egui、bubblewrap 等等。

## 许可证

GPU Goblin 以 [PolyForm Noncommercial 1.0.0](https://polyformproject.org/licenses/noncommercial/1.0.0/) 许可证发布：科研及任何非商业用途免费，源代码公开。商业用途需获得作者同意。
