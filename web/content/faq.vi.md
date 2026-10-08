+++
title = "Câu hỏi thường gặp"
description = "Giải đáp về GPU Goblin: chi phí, điểm tín dụng, an toàn cho máy tính của bạn, điện năng và nhiệt, phần cứng được hỗ trợ, dữ liệu, và cách nhà nghiên cứu được cấp quyền truy cập."
template = "faq.html"
[extra]
lead = "Còn thiếu điều gì? Hãy viết cho contact@gpugoblin.com."
groups = [
  { id = "general", title = "Dự án", items = [
    { q = "GPU Goblin là gì?", a = "Một mạng lưới tính toán dành cho nghiên cứu, gồm những máy tính do mọi người cho mượn. Các nhà nghiên cứu có thể dùng nó cho những nghiên cứu cần sức mạnh tính toán lớn; người đóng góp cho mượn card đồ họa hoặc bộ xử lý khi họ không cần đến." },
    { q = "Ai làm ra GPU Goblin?", a = "GPU Goblin được thiết kế và phát triển bởi Nicolas Michel, thành viên của LAAS-CNRS, một phòng thí nghiệm nghiên cứu tại Toulouse, Pháp. Đây là một dự án cá nhân, không phải dịch vụ chính thức của CNRS." },
    { q = "Có miễn phí không?", a = "Có, cho nghiên cứu và mọi mục đích phi thương mại. Cho mượn máy không tốn gì ngoài tiền điện, và tính toán trên mạng lưới là miễn phí cho nghiên cứu. Mã nguồn của phần mềm được công bố theo giấy phép PolyForm Noncommercial." },
    { q = "Đây có phải là mã nguồn mở không?", a = "Mã nguồn được công bố, nhưng theo giấy phép PolyForm Noncommercial: miễn phí cho nghiên cứu và mục đích phi thương mại, không phải mã nguồn mở theo định nghĩa của OSI. Việc sử dụng cho mục đích thương mại cần có sự đồng ý của tác giả." },
    { q = "Dự án hiện đang ở đâu?", a = "Đang chuẩn bị bản beta: mạng lưới đã hoạt động và đang được thử nghiệm trước khi mở rộng hơn. Hiện chạy trên Linux; phiên bản Windows sắp ra mắt, và phiên bản Android đã được lên kế hoạch.", a_win = "Đang chuẩn bị bản beta: mạng lưới đã hoạt động và đang được thử nghiệm trước khi mở rộng hơn. Chạy trên Windows và Linux; phiên bản Android đã được lên kế hoạch." },
  ] },
  { id = "contributors", title = "Cho mượn máy tính của bạn", items = [
    { q = "Tôi có được trả tiền không?", a = "Không. Bạn nhận được điểm tín dụng ghi nhận đóng góp của mình, nhưng điểm tín dụng không có giá trị tiền tệ và không có giá trị tiền tệ nào được hứa hẹn." },
    { q = "Có an toàn cho máy tính của tôi không?", a = "Máy của bạn chỉ chạy mã tính toán của chính GPU Goblin, không bao giờ chạy chương trình do nhà nghiên cứu gửi tới, và mỗi tác vụ chạy trong sandbox không có quyền truy cập mạng, tách biệt khỏi các tệp của bạn, với giới hạn về bộ nhớ và ổ đĩa." },
    { q = "Nó có làm chậm máy tính hay game của tôi không?", a = "Bạn quyết định: chỉ cho mượn khi bạn vắng mặt, vào những giờ đã chọn, không bao giờ khi một game đang dùng card, không bao giờ khi vượt quá một mức nhiệt độ. Tạm dừng ngay từ biểu tượng ở khay hệ thống bất cứ khi nào bạn muốn." },
    { q = "Nó tiêu thụ bao nhiêu điện?", a = "Bằng mức card đồ họa của bạn tiêu thụ khi chạy tải, và chỉ trong lúc nó tính toán. Giới hạn giờ giấc và nhiệt độ sẽ giới hạn mức tiêu thụ." },
    { q = "Phần cứng nào dùng được?", a = "Một máy tính Linux x86-64 (phiên bản Windows sắp ra mắt). Card đồ họa NVIDIA, AMD hoặc Intel qua Vulkan; card NVIDIA cũng có thể dùng engine CUDA gốc nhanh hơn. Bộ xử lý cũng dùng được, nhưng chậm hơn.", a_win = "Một máy tính Windows 10 hoặc 11, hoặc Linux x86-64. Card đồ họa NVIDIA, AMD hoặc Intel qua Vulkan; card NVIDIA cũng có thể dùng engine CUDA gốc nhanh hơn. Bộ xử lý cũng dùng được, nhưng chậm hơn." },
    { q = "Tôi có thể cho mượn máy chủ không có màn hình, hoặc máy có nhiều card đồ họa không?", a = "Có. Ứng dụng có chế độ dòng lệnh cho máy chủ, và trên máy có nhiều card, mỗi card tính toán riêng, tất cả đều liên kết với tài khoản của bạn." },
    { q = "Máy tính của tôi có thấy dữ liệu của nhà nghiên cứu không?", a = "Máy chỉ nhận các mảnh dữ liệu mà tác vụ của nó cần: các mảng số, không có tên tệp hay mô tả về nội dung chúng biểu diễn (văn bản được gửi dưới dạng token số). Nhà nghiên cứu được yêu cầu không gửi dữ liệu nhạy cảm lên mạng lưới mở." },
    { q = "Địa chỉ IP của tôi có bị nhìn thấy không?", a = "Để tiết kiệm băng thông của máy chủ, các máy chia sẻ dữ liệu với nhau; khi tính năng này bật, những máy khác được cấp quyền trên cùng dữ liệu có thể thấy địa chỉ công khai của bạn. Bạn có thể tắt nó." },
  ] },
  { id = "researchers", title = "Dành cho nhà nghiên cứu", items = [
    { q = "Tôi có thể tính toán gì?", a = "Hiện nay: phép nhân ma trận lớn, các phép tính được mô tả dưới dạng đồ thị các phép toán tensor (hơn 45 toán tử, ví dụ ghi lại từ PyTorch), và huấn luyện mô hình học máy (mạng tích chập, transformer, mô hình ngôn ngữ). Những phép tính lớn hơn bất kỳ máy đơn lẻ nào được tự động chia nhỏ. Máy của người đóng góp chỉ chạy những loại phép tính có trong danh mục của nền tảng, không bao giờ chạy mã tùy ý: các loại khác được bổ sung vào danh mục theo thời gian, vì vậy hãy cho chúng tôi biết bạn cần gì." },
    { q = "Kết quả được kiểm tra thế nào?", a = "Mỗi kết quả được một trình kiểm chứng độc lập tính lại hoặc được so sánh với cùng phép tính do một người đóng góp khác thực hiện, trong một mức sai số cho phép đã được đo, trước khi được sử dụng." },
    { q = "Dữ liệu của tôi nằm ở đâu?", a = "Theo mặc định là trên nút của phòng thí nghiệm bạn, một dịch vụ được cài đặt tại phòng thí nghiệm. Nút không bao giờ gửi nguyên các bộ dữ liệu của bạn: nó gửi cho các máy tính toán những phép toán cần tính, kèm theo chỉ những con số mà mỗi tác vụ cần. Máy chủ không lưu trữ bất kỳ dữ liệu nghiên cứu nào." },
    { q = "Làm sao để được cấp quyền truy cập?", a = "Từ tài khoản của bạn: đăng nhập bằng địa chỉ email và điền yêu cầu truy cập dành cho nhà nghiên cứu." },
  ] },
]
+++
