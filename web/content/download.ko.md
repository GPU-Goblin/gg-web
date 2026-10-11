+++
title = "GPU Goblin 다운로드"
description = "컴퓨터를 연구에 빌려주는 GPU Goblin 애플리케이션을 다운로드하세요. 시스템 트레이가 있는 Linux 데스크톱 앱, 서버용 콘솔 모드."
template = "download.html"
[extra]
lead = "컴퓨터를 빌려주는 애플리케이션 하나로 로그인하고, 일시 중지하고, 시간대와 한도를 정할 수 있습니다."
items = [
  { name = "Linux 데스크톱", platform = "Linux x86-64", status = "ready", file = "install.sh", text = "시스템 트레이 아이콘이 있는 애플리케이션: 로그인하고, 무엇을 언제 빌려줄지 고르고, 머신이 하는 일을 확인하세요. Ubuntu, Debian, Fedora 및 systemd를 사용하는 기타 배포판." },
  { name = "Linux 서버(콘솔)", platform = "Linux x86-64", status = "ready", file = "install.sh", text = "서버와 원격 머신을 위한 같은 애플리케이션의 터미널 버전: 상태, 일시 중지, 일정, 한도를 명령줄에서 관리하며, 각 그래픽카드가 따로 계산합니다." },
  { name = "Windows", platform = "Windows 10/11", status = "windows", file = "GPUGoblinSetup.exe", when = "곧 출시됩니다.", text = "Windows 10과 11을 위한 같은 애플리케이션으로, 같은 보호 기능을 갖추고 있습니다.", text_win = "Windows 10과 11(64비트)용 시스템 트레이 아이콘이 있는 애플리케이션: 로그인하고, 무엇을 언제 빌려줄지 고르고, 머신이 하는 일을 확인하세요." },
  { name = "Android", platform = "Android 12+", status = "planned", when = "계획됨: 먼저 휴대폰에서 측정합니다.", text = "Wi-Fi에 연결해 충전 중이고 화면이 꺼져 있을 때 휴대폰의 그래픽 프로세서를 빌려줍니다." },
]
+++

{{ <notify lang={lang} win={config.extra.windows_available} /> }}

## 다운로드한 파일 확인하기

{{ <os k="dl_verify" lang={lang} win={config.extra.windows_available} /> }}

릴리스를 직접 확인하려면:

```sh
curl -fsSLO https://grid.gpugoblin.com/releases/latest/SHA256SUMS
curl -fsSLO https://grid.gpugoblin.com/releases/latest/SHA256SUMS.sshsig
ssh-keygen -Y verify -f allowed_signers -I release@gpu-goblin -n gg-release \
  -s SHA256SUMS.sshsig < SHA256SUMS
sha256sum --ignore-missing -c SHA256SUMS
```

릴리스 공개 키인 이 줄을 `allowed_signers`라는 이름의 파일에 저장하세요.

```
release@gpu-goblin namespaces="gg-release" ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIEVp1adRtKn6v2iU8hG/jSMsIALjae/LkpY3AODuih9v
```

그 지문은 `SHA256:673XukOsx9kY85im+4qIA2IRxZU3+bEFVaD2VZwyBcM`입니다. 다른 경로로 받은 지문과 비교해 보세요.

## 요구 사항

- {{ <os k="dl_req_os" lang={lang} win={config.extra.windows_available} /> }}
- 그래픽카드를 쓰려면: Vulkan 드라이버(NVIDIA, AMD, Intel) 또는 CUDA용 NVIDIA 드라이버;
- 몇 GB의 여유 디스크 공간.

소스 코드는 PolyForm Noncommercial 라이선스로 [GitHub](https://github.com/GPU-Goblin)에서 볼 수 있습니다.
