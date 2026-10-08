+++
title = "Cho nghiên cứu mượn GPU của bạn"
description = "Cách cho nghiên cứu khoa học mượn card đồ họa hoặc bộ xử lý của máy tính bạn với GPU Goblin: những gì chạy trên máy của bạn, cách bạn giữ quyền kiểm soát, những gì bạn cần."
template = "page.html"
[extra]
lead = "Card đồ họa của bạn nhàn rỗi gần như cả ngày. Với GPU Goblin, khoảng thời gian đó được dùng để tính toán cho khoa học, chỉ khi bạn cho phép, và không có gì ngoài mã của chính nền tảng chạy trên máy của bạn."
cta = "Tạo tài khoản"
cta_page = "account"
cta2 = "Tải xuống"
cta2_page = "download"
toc = true
+++

## Máy tính của bạn làm gì

Khi bạn cho mượn máy, ứng dụng xin mạng lưới một tác vụ, tính toán nó,
gửi lại kết quả, rồi xin tác vụ tiếp theo. Một tác vụ là một phần của một phép tính khoa học: một
phần của một phép nhân ma trận lớn, một phép toán trên dữ liệu của một mô hình, một bước huấn luyện
mạng nơ-ron, hoặc việc kiểm tra kết quả của một người đóng góp khác.

Phần mềm chỉ chạy **mã tính toán của chính GPU Goblin**. Nhà nghiên cứu mô tả phép tính (các phép toán, kích
thước) và dữ liệu của họ, và phần mềm tính toán chúng bằng mã của nền tảng.

## Bạn luôn nắm quyền kiểm soát

Ứng dụng GPU Goblin nằm trong khay hệ thống và cho biết máy đang làm gì. Từ đó, hoặc từ terminal
trên máy chủ:

- **Tạm dừng** — sau tác vụ hiện tại, hoặc ngay lập tức (tác vụ được trả lại mạng lưới, không bị phạt);
- **Chỉ khi tôi vắng mặt** — khi phiên của bạn bị khóa, hoặc sau vài phút không có bạn;
- **Giờ giấc** — chỉ cho mượn trong những khung giờ đã chọn, theo từng ngày, kể cả qua đêm;
- **Nhường cho game** — không nhận tác vụ mới khi một game hoặc chương trình khác đang dùng card;
- **Giữ mát** — không nhận tác vụ mới khi vượt quá nhiệt độ bạn chọn;
- **Bộ nhớ** — một tác vụ được dùng bao nhiêu bộ nhớ của máy tính và của card.

## Bạn cần gì

- {{ <os k="req_os" lang={lang} win={config.extra.windows_available} /> }}
- Với card đồ họa: một card NVIDIA, AMD hoặc Intel có driver Vulkan hoạt động tốt. Card NVIDIA cũng
  có thể dùng engine CUDA gốc, nhanh hơn vài lần với một số mô hình (tải xuống 4 GB).
- Một kết nối internet gia đình; cáp quang là lý tưởng, nhưng bất kỳ kết nối ổn định nào cũng được.
- Vài gigabyte dung lượng trống trên ổ đĩa cho công việc đang thực hiện.

{{ <notify lang={lang} win={config.extra.windows_available} /> }}

Trên máy có nhiều card đồ họa, mỗi card tính toán riêng, tất cả đều liên kết với tài khoản của bạn.
Trên máy chủ không có màn hình, cùng ứng dụng đó chạy trong terminal.

## Trước khi bắt đầu: những điều bạn nên biết

- **Máy của bạn nhận các mảnh dữ liệu nghiên cứu** để tính toán: các mảng số, không có tên hay mô
  tả, chỉ những gì tác vụ của nó cần.
- **Máy của bạn chia sẻ dữ liệu với những người đóng góp khác** để tiết kiệm băng thông của máy
  chủ: những máy khác được cấp quyền trên cùng dữ liệu có thể thấy địa chỉ công khai của bạn. Bạn
  có thể tắt tính năng này.
- **Điểm tín dụng không có giá trị tiền tệ.** Chúng ghi nhận đóng góp của bạn; không có gì được trả tiền.
- Cho mượn máy tiêu tốn điện và làm máy nóng lên. Các giới hạn ở trên có để chi phí không bao giờ
  vượt quá mức bạn đã quyết định.

Hãy đọc [trang bảo mật](../security) để biết sandbox và các bước kiểm tra hoạt động ra sao.

## Cách bắt đầu

1. [Tạo tài khoản](../account) bằng địa chỉ e-mail của bạn (không cần mật khẩu: một mã sẽ được gửi cho bạn).
2. [Tải ứng dụng](../download) và đăng nhập bằng cùng địa chỉ đó.
3. Chọn cho mượn gì và khi nào. Máy sẽ tự liên kết với tài khoản của bạn và bắt đầu.
