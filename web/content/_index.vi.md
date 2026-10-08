+++
title = "GPU Goblin"
description = "Cho điện toán khoa học mượn card đồ họa của máy tính bạn, hoặc sử dụng mạng lưới tính toán của GPU Goblin cho nghiên cứu của bạn. Miễn phí cho nghiên cứu, kết quả được kiểm chứng, bạn luôn nắm quyền kiểm soát."
template = "index.html"

[extra]
hero_title = "Card đồ họa đang nhàn rỗi của bạn có thể tiếp sức cho khoa học của tương lai"
hero_lead = "GPU Goblin kết nối máy tính của những người đóng góp thành một mạng lưới tính toán duy nhất dành cho nghiên cứu. Nhờ sự giúp đỡ của bạn, các nhà nghiên cứu có thể chạy các phép tính của họ và thúc đẩy tri thức khoa học tiến lên."

steps_title = "Cách hoạt động"
steps = [
  { title = "Cài đặt ứng dụng", text = "Đăng nhập bằng địa chỉ email và chọn thứ bạn cho mượn: bộ xử lý hoặc card đồ họa." },
  { title = "Bạn chọn thời điểm", text = "Chỉ khi bạn vắng mặt, vào ban đêm, dưới một nhiệt độ nhất định: máy tính của bạn giúp sức khi bạn thấy tiện, và bạn có thể dừng lại bất cứ lúc nào." },
  { title = "Các nhà nghiên cứu tính toán", text = "Các nhà khoa học dùng những card đồ họa được cho mượn cho các phép tính phục vụ nghiên cứu của họ." },
]

sides = [
  { title = "Bạn có một chiếc máy tính", text = "Một PC chơi game, một máy trạm, một máy chủ phòng thí nghiệm: card đồ họa của nó nhàn rỗi gần như cả ngày. Hãy cho nghiên cứu mượn khoảng thời gian đó.", points = ["Chỉ mã của chính nền tảng được chạy, trong sandbox", "Bạn quyết định khi nào: lúc vắng mặt, giờ giấc, nhiệt độ, bộ nhớ", "Dừng ngay bất cứ khi nào bạn cần dùng máy"], page = "contribute", cta = "Cho mượn GPU" },
  { title = "Bạn là nhà nghiên cứu", text = "Sử dụng mạng lưới tính toán của GPU Goblin cho các phép tính khoa học của bạn từ Python: chỉ cần import thư viện gpugoblin.", points = ["Phép tính lớn tự động được chia thành nhiều phần", "Theo mặc định, dữ liệu của bạn nằm trên node của phòng thí nghiệm", "Kết quả được kiểm chứng trước khi đến tay bạn"], page = "research", cta = "Dành cho nhà nghiên cứu" },
]

trust_title = "Được xây dựng để bạn có thể tin tưởng"
trust_lead = "Máy tính của bạn luôn được bảo vệ, và các nhà nghiên cứu có thể tin cậy mọi kết quả."
trust = [
  { title = "Không có mã lạ", text = "Máy của bạn chạy mã tính toán đã công bố của chính GPU Goblin, không bao giờ chạy chương trình do nhà nghiên cứu gửi tới." },
  { title = "Trong sandbox", text = "Mỗi tác vụ chạy tách biệt khỏi tệp và mạng của bạn, với giới hạn về bộ nhớ, ổ đĩa và bộ xử lý." },
  { title = "Kết quả được kiểm chứng", text = "Một kết quả chỉ được tính sau khi được tính lại một cách độc lập hoặc khớp với kết quả của một người đóng góp khác." },
  { title = "Bạn luôn nắm quyền kiểm soát", text = "Tạm dừng, giờ giấc, chỉ khi bạn vắng mặt, giới hạn nhiệt độ và bộ nhớ: chiếc máy trước hết là của bạn." },
]

status_title = "Dự án hiện đang ở đâu"
faq_title = "Những câu hỏi thường gặp đầu tiên"
faq = [
  { q = "GPU Goblin có miễn phí không?", a = "Có, cho nghiên cứu và mọi mục đích phi thương mại. Cho mượn máy tính không tốn gì ngoài tiền điện, và sử dụng mạng lưới cho nghiên cứu là miễn phí. Mã nguồn của phần mềm được công bố theo giấy phép PolyForm Noncommercial." },
  { q = "Tôi có được trả tiền khi cho mượn máy tính không?", a = "Không. Người đóng góp nhận được điểm tín dụng ghi nhận đóng góp của họ, nhưng điểm tín dụng không có giá trị tiền tệ và không có giá trị tiền tệ nào được hứa hẹn. GPU Goblin là điện toán tình nguyện vì khoa học." },
  { q = "Nhà nghiên cứu có thể chạy bất cứ thứ gì trên máy tôi không?", a = "Không. Máy của bạn chỉ chạy mã tính toán của chính GPU Goblin (phép nhân ma trận, phép toán trên tensor, các bước huấn luyện mô hình), trong sandbox. Nhà nghiên cứu mô tả mô hình và dữ liệu; họ không bao giờ gửi chương trình." },
]

final_title = "Trao cho khoa học sức mạnh mà nó đang thiếu"
final_text = "Đăng ký trong một phút bằng địa chỉ e-mail, cài đặt ứng dụng, và chọn khi nào máy của bạn giúp đỡ nghiên cứu."
+++

GPU Goblin **đang chuẩn bị bản beta**: mạng lưới đang được thử nghiệm trước khi người đóng góp và
nhà nghiên cứu tham gia với số lượng lớn hơn. Những gì đã hoạt động:

- các phép tính ma trận lớn, và các phép tính được mô tả dưới dạng đồ thị các phép toán tensor
  (ví dụ viết bằng PyTorch), kể cả những phép tính lớn hơn bất kỳ máy tính đơn lẻ nào, được chia
  thành nhiều phần;
- huấn luyện các mô hình học máy, kể cả những mô hình lớn hơn bất kỳ máy tính đơn lẻ nào, được chia
  thành các giai đoạn và các khối;
- tính toán trên bộ xử lý, trên card đồ họa qua Vulkan (NVIDIA, AMD, Intel) và trực tiếp trên card
  NVIDIA với CUDA;
- kiểm tra mọi kết quả, bằng cách tính lại một cách độc lập hoặc so sánh với kết quả của một người
  đóng góp khác;
- {{ <os k="home_app" lang={lang} win={config.extra.windows_available} /> }}

{{ <os k="home_plans" lang={lang} win={config.extra.windows_available} /> }}
