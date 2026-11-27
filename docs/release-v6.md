# Happy Meal v6 — Kiểm tra, hoàn thiện GitHub Pages

Ngày 27/11/2026. Đã rà lại trải nghiệm GitHub Pages tại `https://thanhlampro1012.github.io/Meal-Happy/`:

- 184 địa điểm đúng Quận 1, Quận 3, Quận 5, Gò Vấp và Tân Bình theo địa giới cũ; lọc riêng ăn uống/cà phê/tráng miệng/đồ uống và theo mức chi cho một/hai người.
- So sánh tối đa 3 địa điểm (ngân sách, địa chỉ, món, Google Maps) và tạo lịch hẹn từ nhóm so sánh.
- Thêm món gợi ý từ chi tiết quán trực tiếp vào món yêu thích và vòng quay; vòng quay công bằng, các phần màu khớp món trúng, chuyển tab không kẹt trạng thái.
- Cải thiện điều khiển hộp thoại (Escape/Tab/focus); thêm ảnh cá nhân cho quán từ thiết bị, nén ảnh và lưu vào IndexedDB; sao lưu JSON kèm ảnh và nhập JSON cũ tương thích.
- Chặn URL không an toàn trong dữ liệu nhập, tăng kiểm tra cấu trúc sao lưu; ảnh/địa chỉ chưa được xác minh theo nguồn đều có liên kết Google Maps để tự kiểm chứng.
- GitHub Actions tự chạy unit test các tác vụ trên, kiểm tra catalog, Firebase mô phỏng, cú pháp JS, các kích thước icon PWA và chạy thử tài nguyên thực tế sau triển khai.

**Chưa thể hoàn tất không cần chủ tài khoản:** Firebase Auth/Firestore production chưa được cung cấp. `docs/firebase-config.json` mặc định `{}`; quy tắc `firebase/firestore.rules` đã chuẩn bị nhưng chưa triển khai vào dự án của chủ. Google Place Photos API chưa cấu hình, nên không tự lấy ảnh Google Maps hay sao Google rating mới nhất. Các địa chỉ mới là nguồn tham khảo công khai, không có cam kết giờ hoạt động hoặc giá chính xác.

Giữ repository `Meal-Happy` để URL và bản lưu `localStorage` cũ không thay đổi dù sản phẩm hiển thị **Happy Meal**.
