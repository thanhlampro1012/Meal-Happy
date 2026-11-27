# Happy Meal — đồng bộ Firebase với Gmail

Hiện ứng dụng hoạt động và lưu dữ liệu cục bộ. Để sử dụng Google Sign-In và đồng bộ Firestore, trước hết bạn cần có một dự án Firebase dưới tài khoản Google của mình.

1. Mở https://console.firebase.google.com/ và tạo dự án tên tùy ý. Trong Project settings > Your apps, thêm ứng dụng Web để lấy web app config.
2. Trong Authentication > Sign-in method, bật Google. Trong Authentication > Settings > Authorized domains, thêm: thanhlampro1012.github.io.
3. Trong Firestore Database, tạo cơ sở dữ liệu ở khu vực phù hợp. Tại Rules, dán đầy đủ nội dung file firebase/firestore.rules trong repo, chọn Publish. KHÔNG dùng allow read, write: if true.
4. Truy cập https://thanhlampro1012.github.io/Meal-Happy/, chọn tab Đồng bộ và nhập 4 thông tin công khai: apiKey, authDomain, projectId, appId. Không bao giờ nhập mật khẩu Gmail, private key hay service account vào app.
5. Đăng nhập bằng Google. Trên điện thoại và máy tính, dùng cùng một Gmail và cùng web app config. Khi dữ liệu khác nhau, ứng dụng yêu cầu chọn bản muốn giữ; hãy xuất sao lưu JSON trước khi ghi đè.

Cấu hình Firebase web là dữ liệu công khai theo thiết kế, nhưng quyền đọc/ghi Firestore phải được giới hạn theo UID bởi Rules.

Bạn có thể đặt cấu hình đã xác nhận vào docs/firebase-config.json (chỉ các trường config web nêu trên) trong repo để các thiết bị dùng chung cấu hình mà không cần nhập lại. Bản mặc định là tệp rỗng.

Ảnh cá nhân lưu trong trình duyệt không nằm trong dữ liệu Firestore. Trình duyệt ngoại tuyến giữ thay đổi cục bộ; chờ trạng thái Đã lưu trước khi đóng tab. Nếu popup Google bị chặn trên iOS PWA, dùng Safari/Chrome để đăng nhập.

Tên repo Meal-Happy giữ nguyên để link github.io không đổi dù giao diện đổi thành Happy Meal.

Tham khảo tài liệu: https://firebase.google.com/docs/auth/web/google-signin ; https://firebase.google.com/docs/projects/api-keys ; https://firebase.google.com/docs/firestore/security/rules-conditions

## Kiểm tra an toàn đồng bộ

Repository chạy `node --test tests/firebase-sync.test.mjs` trên mỗi bản deploy để mô phỏng: tải dữ liệu lên Google lần đầu, máy khác tải về, hai máy sửa đồng thời, mất mạng rồi nối lại và xác nhận trước khi đăng xuất. Đây là kiểm thử bằng Firestore giả lập; cần kết nối Firebase thật để kiểm tra end-to-end trên tài khoản Google của bạn.
