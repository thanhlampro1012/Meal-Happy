# Ảnh địa điểm

Bản GitHub Pages sử dụng 6 ảnh thực đã có trong nguồn dự án, được gắn đúng tên quán và ghi nguồn:

- **Pizza 4P’s Bến Thành** — [nguồn ảnh](https://pizza4ps.com/vn/location/933/), tệp `/venues/pizza-4ps-ben-thanh.jpg`
- **Cục Gạch Quán** — [nguồn ảnh](https://cucgachquan.com/), tệp `/venues/cuc-gach-quan.jpg`
- **Chay Garden · Võ Văn Tần** — [nguồn ảnh](https://chaygarden.vn/mo-loi-vuon-chay/), tệp `/venues/chay-garden-vo-van-tan.jpg`
- **Anan Saigon** — [nguồn ảnh](https://anansaigon.com/), tệp `/venues/anan-saigon.jpg`
- **Quán Bụi Original** — [nguồn ảnh](https://quan-bui.com/original/), tệp `/venues/quan-bui-original.jpg`
- **Maison Marou · Calmette** — [nguồn ảnh](https://maisonmarou.com/vi/pages/stores), tệp `/venues/maison-marou-calmette.jpg`

Quán chưa có ảnh hiện một khung thông báo và nút mở Google Maps để kiểm tra ảnh thực tế. Không lấy ảnh từ quán khác làm ảnh đại diện. Google Place Photos cần API key và attribution theo [tài liệu chính thức](https://developers.google.com/maps/documentation/places/web-service/place-photos), nên chưa sử dụng trực tiếp.

Người dùng cũng có thể tự chụp ảnh quán và chọn **Chi tiết → Thêm hoặc đổi ảnh quán**. Ảnh được nén, lưu riêng trên thiết bị trong IndexedDB và xuất kèm JSON; ảnh cá nhân không tải lên GitHub hoặc tự đồng bộ Firebase. Không được tự tải ảnh của Google Maps hoặc trang bên thứ ba để sử dụng nếu chưa có quyền phù hợp.
