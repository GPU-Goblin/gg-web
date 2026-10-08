+++
title = "GPU Goblin について"
description = "GPU Goblin は Nicolas Michel（LAAS-CNRS）が設計・開発しています。プロジェクトが生まれた理由、基本方針、ライセンス、連絡先をご紹介します。"
template = "page.html"
[extra]
lead = "科学には計算能力が必要ですが、グラフィックカードはかつてない品不足に直面しています。その一方で、家庭やオフィスでは高性能なグラフィックカードが毎晩使われずに眠っています。GPU Goblin はその両者をつなぎます。"
+++

## 基本方針

- **あなたのマシンで外部のコードは動かしません。** 協力者が実行するのはプラットフォーム自身のコードだけで、しかもサンドボックス内です。
- **検証済みの結果。** すべての結果は、使われる前に再計算または照合されます。
- **決めるのは持ち主です。** マシンは、持ち主が許可したときに、許可したやり方でのみ貸し出されます。
- **お金は関わりません。** クレジットは貢献を記録するもので、通貨ではありません。

## 運営者

GPU Goblin は **Nicolas Michel** が設計・開発しています。彼は、トゥールーズにあるフランス国立科学研究センター（CNRS）の研究所 [LAAS-CNRS](https://www.laas.fr) のメンバーです。これは個人プロジェクトであり、CNRS や LAAS-CNRS の公式サービスではありません。

- [Nicolas Michel の LinkedIn](https://www.linkedin.com/in/nicolas-michel-3161532b4/)
- 連絡先：[contact@gpugoblin.com](mailto:contact@gpugoblin.com)

## 謝辞

コンピューターを貸してくださるすべての方、研究をこのグリッドに託してくださる科学者の方々、最初にテストしてくださった方々、そしてこのプロジェクトを支えるオープンソースプロジェクトに感謝します。Rust、Tokio、Axum、PostgreSQL、Burn、wgpu、PyTorch と LibTorch、egui、bubblewrap、その他多くのプロジェクトです。

## ライセンス

GPU Goblin は [PolyForm Noncommercial 1.0.0](https://polyformproject.org/licenses/noncommercial/1.0.0/) ライセンスで公開されています。研究およびあらゆる非営利目的での利用は無料で、ソースコードも公開されています。商用利用には作者の同意が必要です。
