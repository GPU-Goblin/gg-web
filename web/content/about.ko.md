+++
title = "GPU Goblin 소개"
description = "GPU Goblin은 Nicolas Michel(LAAS-CNRS)이 설계하고 개발했습니다. 프로젝트를 시작한 이유, 원칙, 라이선스, 연락 방법을 소개합니다."
template = "page.html"
[extra]
lead = "과학에는 연산 능력이 필요하지만, 그래픽 카드는 전례 없는 품귀를 겪고 있습니다. 한편 가정과 사무실의 강력한 그래픽 카드는 매일 밤 쉬고 있습니다. GPU Goblin은 이 둘을 연결합니다."
+++

## 원칙

- **여러분의 머신에서 외부 코드를 실행하지 않습니다.** 기여자는 플랫폼 자체 코드만 샌드박스 안에서 실행합니다.
- **검증된 결과.** 모든 결과는 사용되기 전에 다시 계산되거나 비교됩니다.
- **결정은 소유자가 합니다.** 머신은 소유자가 허락한 때에, 허락한 방식으로만 빌려줍니다.
- **돈은 오가지 않습니다.** 크레딧은 기여를 기록할 뿐, 화폐가 아닙니다.

## 만든 사람

GPU Goblin은 **Nicolas Michel**이 설계하고 개발했습니다. 그는 툴루즈에 있는 프랑스 국립과학연구센터(CNRS)의 연구소인 [LAAS-CNRS](https://www.laas.fr)의 구성원입니다. 이 프로젝트는 개인 프로젝트이며, CNRS나 LAAS-CNRS의 공식 서비스가 아닙니다.

- [Nicolas Michel의 LinkedIn](https://www.linkedin.com/in/nicolas-michel-3161532b4/)
- 연락처: [contact@gpugoblin.com](mailto:contact@gpugoblin.com)

## 감사의 말

컴퓨터를 빌려주는 모든 분, 자신의 연구를 이 그리드에 맡겨 주신 과학자분들, 처음으로 테스트해 주신 분들, 그리고 이 프로젝트의 기반이 된 오픈 소스 프로젝트에 감사드립니다. Rust, Tokio, Axum, PostgreSQL, Burn, wgpu, PyTorch와 LibTorch, egui, bubblewrap 외에도 많은 프로젝트가 있습니다.

## 라이선스

GPU Goblin은 [PolyForm Noncommercial 1.0.0](https://polyformproject.org/licenses/noncommercial/1.0.0/) 라이선스로 배포됩니다. 연구 및 모든 비상업적 용도에는 무료이며, 소스가 공개되어 있습니다. 상업적 이용에는 저작자의 동의가 필요합니다.
