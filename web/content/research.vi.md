+++
title = "Dành cho nhà nghiên cứu: những phép tính khoa học lớn hơn"
description = "Sử dụng mạng lưới máy tính cho mượn của GPU Goblin cho các phép tính khoa học của bạn: phép nhân ma trận lớn, đồ thị phép toán tensor, huấn luyện mô hình. Phép tính lớn được chia tự động, kết quả được kiểm chứng."
template = "page.html"
[extra]
lead = "Sử dụng mạng lưới tính toán của GPU Goblin để chạy các phép tính của bạn từ Python. Phép tính lớn được tự động chia cho những máy tính do tình nguyện viên cho mượn, và mọi kết quả đều được kiểm tra."
cta = "Yêu cầu quyền truy cập"
cta_page = "account"
cta2 = "Đọc phần hỏi đáp"
cta2_page = "faq"
toc = true
+++

## Bạn có thể tính toán gì

GPU Goblin tính toán những loại phép tính khoa học có trong danh mục của mình, trên bộ xử lý và
card đồ họa:

- **Phép nhân ma trận lớn**, cốt lõi của phần lớn điện toán khoa học, được chia thành nhiều phần khi
  quá lớn cho một máy.
- **Phép tính trên đồ thị các phép toán tensor**: một phép tính được mô tả dưới dạng đồ thị gồm hơn
  45 toán tử (số học, phép rút gọn, tensor số nguyên, công thức tùy chỉnh…), ví dụ được gói Python
  ghi lại từ một chương trình PyTorch.
- **Huấn luyện mô hình học máy**: mạng tích chập, transformer, mô hình ngôn ngữ. Một mô hình lớn hơn
  máy của bất kỳ người đóng góp nào được tự động chia thành các giai đoạn (nhóm các lớp được tính
  lần lượt), các khối (ma trận lớn được cắt thành nhiều phần) và các micro-batch.

Bạn mô tả phép tính, và mạng lưới tính toán nó bằng các phép toán đã được kiểm chứng của chính mình. Các loại phép tính khác được bổ sung
vào danh mục theo thời gian: hãy cho chúng tôi biết nghiên cứu của bạn cần gì.

## Một phép tính diễn ra thế nào

1. **Node** của phòng thí nghiệm bạn, một dịch vụ nhỏ được cài đặt tại phòng thí nghiệm, giữ dữ liệu
   và chia phép tính thành các tác vụ.
2. Máy của những người đóng góp lấy dữ liệu đầu vào, tính toán, và gửi lại kết quả.
3. Mỗi kết quả đều **được kiểm chứng** — được một trình kiểm chứng độc lập tính lại, hoặc được so
   sánh với cùng phép tính do một người đóng góp khác thực hiện — trước khi được sử dụng.
4. Các kết quả được chấp nhận được tổng hợp thành kết quả của bạn. Với một mô hình đang được huấn
   luyện, đây là một vòng: các gradient được tổng hợp, bộ tối ưu hóa thực hiện bước của nó, và vòng
   tiếp theo bắt đầu.

## Dữ liệu của bạn

- Theo mặc định, máy chủ **không lưu trữ bất kỳ dữ liệu nghiên cứu nào**, và nút tại phòng thí nghiệm của bạn không bao giờ gửi nguyên các bộ dữ liệu của bạn: nó gửi cho các máy **những phép toán cần tính**, kèm theo chỉ những con số mà mỗi tác vụ cần.
- Những con số này đến mà không có tên tệp và không có mô tả về nội dung chúng biểu diễn (văn bản
  được gửi dưới dạng token số). Dữ liệu không được mã hóa trong quá trình tính toán: một mảng điểm ảnh vẫn có thể hiển thị thành hình ảnh, và token có
  thể được chuyển ngược lại thành văn bản. Đừng gửi dữ liệu cần giữ bí mật (ví dụ dữ liệu cá nhân
  hoặc y tế) lên mạng lưới mở.

## Quyền truy cập

[Yêu cầu quyền truy cập từ tài khoản của bạn](../account): đăng nhập bằng địa chỉ email và điền yêu cầu truy cập dành cho nhà nghiên cứu. Câu hỏi: [contact@gpugoblin.com](mailto:contact@gpugoblin.com).

## Chi phí

Sử dụng mạng lưới cho nghiên cứu là **miễn phí**. Phần mềm được cung cấp theo giấy phép PolyForm
Noncommercial: miễn phí cho nghiên cứu và mọi mục đích phi thương mại. Việc sử dụng cho mục đích
thương mại cần có thỏa thuận với tác giả.
