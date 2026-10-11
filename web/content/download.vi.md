+++
title = "Tải xuống GPU Goblin"
description = "Tải ứng dụng GPU Goblin để cho nghiên cứu mượn máy tính của bạn: ứng dụng máy tính để bàn Linux với biểu tượng ở khay hệ thống, chế độ dòng lệnh cho máy chủ."
template = "download.html"
[extra]
lead = "Một ứng dụng để cho mượn máy tính: nó đăng nhập cho bạn và cho phép bạn tạm dừng, chọn giờ giấc và các giới hạn."
items = [
  { name = "Linux máy tính để bàn", platform = "Linux x86-64", status = "ready", file = "install.sh", text = "Ứng dụng với biểu tượng ở khay hệ thống: đăng nhập, chọn cho mượn gì và khi nào, xem máy của bạn đang làm gì. Ubuntu, Debian, Fedora và các bản phân phối khác có systemd." },
  { name = "Linux máy chủ (dòng lệnh)", platform = "Linux x86-64", status = "ready", file = "install.sh", text = "Cùng ứng dụng đó trong terminal cho máy chủ và máy từ xa: trạng thái, tạm dừng, lịch và giới hạn từ dòng lệnh, mỗi card đồ họa tính toán riêng." },
  { name = "Windows", platform = "Windows 10/11", status = "windows", file = "GPUGoblinSetup.exe", when = "Sắp ra mắt.", text = "Cùng ứng dụng đó cho Windows 10 và 11, với cùng các biện pháp bảo vệ.", text_win = "Ứng dụng với biểu tượng ở khay hệ thống cho Windows 10 và 11 (64-bit): đăng nhập, chọn cho mượn gì và khi nào, xem máy của bạn đang làm gì." },
  { name = "Android", platform = "Android 12+", status = "planned", when = "Đã lên kế hoạch: đo đạc trên điện thoại trước.", text = "Cho mượn bộ xử lý đồ họa của điện thoại khi đang sạc, kết nối Wi-Fi và tắt màn hình." },
]
+++

{{ <notify lang={lang} win={config.extra.windows_available} /> }}

## Kiểm tra những gì bạn tải xuống

{{ <os k="dl_verify" lang={lang} win={config.extra.windows_available} /> }}

Để kiểm tra một bản phát hành thủ công:

```sh
curl -fsSLO https://grid.gpugoblin.com/releases/latest/SHA256SUMS
curl -fsSLO https://grid.gpugoblin.com/releases/latest/SHA256SUMS.sshsig
ssh-keygen -Y verify -f allowed_signers -I release@gpu-goblin -n gg-release \
  -s SHA256SUMS.sshsig < SHA256SUMS
sha256sum --ignore-missing -c SHA256SUMS
```

Lưu dòng này, tức khóa công khai của bản phát hành, vào một tệp tên là `allowed_signers`:

```
release@gpu-goblin namespaces="gg-release" ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIEVp1adRtKn6v2iU8hG/jSMsIALjae/LkpY3AODuih9v
```

Dấu vân tay của nó là `SHA256:673XukOsx9kY85im+4qIA2IRxZU3+bEFVaD2VZwyBcM`; hãy so sánh với dấu vân
tay bạn nhận được qua một kênh khác.

## Yêu cầu

- {{ <os k="dl_req_os" lang={lang} win={config.extra.windows_available} /> }}
- với card đồ họa: một driver Vulkan (NVIDIA, AMD, Intel), hoặc driver NVIDIA cho CUDA;
- vài gigabyte dung lượng trống trên ổ đĩa.

Mã nguồn có trên [GitHub](https://github.com/GPU-Goblin) theo giấy phép PolyForm Noncommercial.
