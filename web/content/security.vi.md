+++
title = "Bảo mật và niềm tin"
description = "Cách GPU Goblin bảo vệ máy của người đóng góp và kết quả của nhà nghiên cứu: không có mã lạ, tác vụ chạy trong sandbox, kết quả được kiểm chứng, và những gì nó không bảo vệ."
template = "page.html"
[extra]
lead = "Cách GPU Goblin bảo vệ máy của bạn và kiểm tra kết quả, cũng như những gì không được bảo vệ."
toc = true
+++

## Trên máy tính của bạn

- **Không có mã lạ.** Phần mềm chỉ chạy mã tính toán của chính GPU Goblin. Một tác vụ là một *mô tả*
  (các lớp của một mô hình, một lô dữ liệu, một kích thước).
- **Một sandbox cho mỗi tác vụ.** {{ <os k="sec_sandbox" lang={lang} win={config.extra.windows_available} /> }}
- **Dữ liệu được kiểm soát.** Trước khi tính toán, phần mềm kiểm tra chữ ký của máy chủ khi nhận dữ liệu. Nếu một dữ liệu đã bị thay đổi, phép tính sẽ bị từ chối.
- **Điều khiển cục bộ.** Phần mềm chỉ có thể được điều khiển từ chính máy của bạn.

## Về kết quả

- **Kiểm tra phép tính.** Mỗi kết quả hoặc được một trình kiểm chứng độc lập
  tính lại, hoặc được hai người đóng góp khác nhau tính hai lần và so sánh trong một mức sai số cho
  phép đã được đo.
- **Kiểm tra ngẫu nhiên.** Một phần kết quả được tính lại lần thứ ba, một cách ngẫu nhiên, ngay cả
  khi hai người đóng góp cho ra kết quả khớp nhau.

## Những gì không được bảo vệ

- **Người đóng góp nhận các mảnh của dữ liệu họ tính toán**: các mảng số không có tên hay mô tả, chỉ
  những gì mỗi tác vụ cần. Dữ liệu không được mã hóa trong quá trình tính toán: đừng gửi dữ liệu bí mật lên mạng lưới mở.
- **Địa chỉ công khai của bạn có thể bị nhìn thấy** bởi những máy khác được cấp quyền trên cùng dữ
  liệu khi tính năng chia sẻ giữa những người đóng góp bật (mặc định là bật, và có thể tắt).

## Báo cáo sự cố

Bạn phát hiện một vấn đề bảo mật? Hãy viết cho [contact@gpugoblin.com](mailto:contact@gpugoblin.com)
trước khi công bố.
