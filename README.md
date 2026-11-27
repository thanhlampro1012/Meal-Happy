# Meal Happy — Hẹn Sài Gòn

Sổ địa điểm, món muốn thử, món yêu thích và lịch hẹn riêng tư cho hai người tại TP.HCM. Giao diện tiếng Việt, dùng trên điện thoại và máy tính, có chế độ sáng và tối.

Đây là bản mã nguồn cho repository **`Meal-Happy`**. Repository chứa ứng dụng, danh mục địa điểm công khai, migration và kiểm thử; dữ liệu D1 của người dùng được lưu riêng trong môi trường chạy. Bản v3 có **142 địa điểm, 21 khu vực và 35 nhóm món**. Xem [ghi chú v3](docs/release-v3.md) để biết các cải tiến, nguồn đối chiếu và phạm vi đã kiểm tra.

Địa chỉ đích khi triển khai qua **Sites**: https://hen-saigon-cua-hai-dua.workspace-qu-1719.chatgpt.site. URL này là cấu hình đích; trạng thái phát hành cần được xác nhận bằng kết quả triển khai của Sites.

## Tính năng đã triển khai

- Khám phá **142 địa điểm**, gồm 16 quán gốc và 126 quán bổ sung, từ lựa chọn bình dân đến nhà hàng cho dịp đặc biệt.
- Lọc theo **35 nhóm món**, khu vực, loại quán, không khí, trạng thái đã ghé và ngân sách cho **1 hoặc 2 người**; có các mức 30.000đ, 50.000đ, 70.000đ và 100.000đ.
- Tìm không dấu, hỗ trợ đổi thứ tự từ khóa, hiểu cách viết `q3`/`q.3`; chọn nhiều món để tìm quán bán một trong các món đó.
- Sắp xếp theo tên, điểm cộng đồng hoặc ngân sách; chuyển lưới/danh sách; chọn ngẫu nhiên trong kết quả đang lọc và xem thêm 24 địa điểm mỗi lượt.
- Chọn **2–3 quán để so sánh** ngân sách, món, địa chỉ tham khảo, không khí và nguồn điểm; lưu quán hoặc lên lịch ngay từ bảng so sánh.
- Lưu quán; tự thêm, sửa và xóa địa điểm với liên kết Google Maps, phân loại món, mô tả, món gợi ý, nhãn và khoảng chi dự kiến.
- Sổ món muốn thử, giá dự kiến, ghi chú, liên kết quán và đánh dấu đã thử.
- Tab món yêu thích / hay ăn riêng: tự thêm, xem, sửa và xóa món; phân loại, ghi chú, liên kết quán tùy chọn, đánh dấu hay ăn, tìm kiếm và lọc danh sách.
- Vòng quay chọn món từ danh sách yêu thích; bật/tắt từng món tham gia, chọn tất cả hoặc bỏ chọn. Mỗi món đang tham gia có xác suất được chọn bằng nhau; nhãn hay ăn không làm tăng xác suất.
- Lịch hẹn có ngày, giờ, ngân sách, ghi chú và 1–5 điểm dừng; đổi thứ tự quán giữ nguyên các khung giờ. Giờ dừng sau phải muộn hơn giờ dừng trước. Có thể mở tuyến Google Maps khi đủ thông tin, sao chép lịch trình hoặc tải tệp lịch `.ics`.
- Nhật ký đã ghé, ngày đi, ghi chú và hai điểm đánh giá riêng: của bạn và của người ấy.
- Đánh dấu cuộc hẹn đã đi để cập nhật nhật ký; mở lại lịch hẹn vẫn giữ nhật ký đã ghi.
- Đổi tên sổ hẹn, ngân sách mặc định; xuất và khôi phục bản sao lưu JSON.
- Chọn giao diện **Sáng**, **Tối** hoặc **Theo thiết bị**; ghi nhớ lựa chọn trên thiết bị đang dùng.
- Các trang quyền riêng tư và điều khoản tại `/privacy`, `/terms`.

Xóa một quán tự thêm sẽ gỡ các món muốn thử, ghi chú quán và điểm dừng liên quan; cuộc hẹn không còn điểm dừng cũng được xóa sau xác nhận. Các món yêu thích vẫn được giữ nguyên, chỉ bỏ liên kết tới quán đã xóa.

## Khám phá theo món và ngân sách

Danh mục v3 gồm **100 quán ăn, 19 quán cà phê, 16 điểm tráng miệng và 7 điểm đồ uống**, phân bố trong 21 khu vực của bộ lọc. Các nhóm món gồm cơm tấm, cơm, xôi, bánh bao/bánh giò, bún, bún bò, phở, hủ tiếu, bánh mì, mì, lẩu, nướng, ốc, món chay và các nhóm ẩm thực khác. Chọn **Cơm** bao gồm cơm tấm; chọn **Bún** bao gồm bún bò. Quán tự thêm từ phiên bản cũ vẫn được phân loại từ tên, menu và nhãn khi chưa có nhóm món do người dùng chọn.

Số lựa chọn theo mức chi tham khảo của bản dữ liệu ngày 27/11/2026:

| Ngân sách tối đa cho một người | Số địa điểm phù hợp |
| --- | ---: |
| 30.000đ | 6 |
| 50.000đ | 22 |
| 70.000đ | 53 |
| 100.000đ | 86 |

Các ngưỡng **cộng dồn**, tính bằng giá tối đa trong khoảng dự trù của mỗi quán. **Những lựa chọn đến 30.000đ áp dụng cho phần/món cơ bản được mô tả và dẫn nguồn**, không áp dụng cho toàn bộ thực đơn, món thêm hoặc tổng hóa đơn của mọi cách gọi món. Phần chi tiết và so sánh hiển thị ghi chú phạm vi mức chi khi có.

Bộ lọc dùng `budgetMax × số người ≤ ngân sách đã chọn`. Ví dụ, quán có khoảng chi tối đa 50.000đ/người phù hợp mức 100.000đ cho hai người. Các món được chọn kết hợp bằng **OR**; khu vực, loại quán, ngân sách, không khí và trạng thái kết hợp bằng **AND**. Quán tự thêm chưa ghi giá được giữ trong danh sách mọi mức chi, nhưng không xuất hiện khi giới hạn ngân sách. Khi không có kết quả, app gợi ý điều chỉnh và cho phép xóa bộ lọc.

## Món yêu thích và vòng quay

Danh sách món yêu thích độc lập với sổ món muốn thử. Mỗi món có tên, một trong năm nhóm **Món chính**, **Ăn vặt**, **Đồ uống**, **Tráng miệng**, **Khác**, ghi chú và quán liên kết tùy chọn. Bạn có thể đánh dấu **Hay ăn** để dễ tìm lại. Tối đa 500 món, tên tối đa 180 ký tự và ghi chú tối đa 3.000 ký tự, cùng giới hạn với món muốn thử để giữ nguyên nội dung khi thêm sang danh sách yêu thích. Tên trùng nhau sau khi bỏ dấu, đổi về chữ thường và chuẩn hóa khoảng trắng bị từ chối; hãy sửa món có sẵn hoặc đặt tên để phân biệt.

Ô chọn của từng món quyết định món đó có tham gia vòng quay hay không. Bỏ chọn vẫn giữ món trong danh sách; tìm kiếm, lọc nhóm hoặc lọc **Hay ăn** chỉ thay đổi danh sách đang xem, không tự thay đổi các món tham gia vòng quay. Khi có `n` món được bật, mỗi món có xác suất `1/n` trong một lượt quay. Nhãn **Hay ăn** không có trọng số và một món có thể được chọn lại ở lượt tiếp theo. Cần ít nhất một món đang bật để quay; nếu chỉ có một món thì kết quả luôn là món đó.

## Giao diện sáng và tối

Trong Cài đặt, chọn **Sáng**, **Tối** hoặc **Theo thiết bị**. Chế độ theo thiết bị thay đổi theo tùy chọn màu của hệ điều hành. Nút đổi giao diện nhanh chuyển giữa sáng và tối.

Lựa chọn được lưu trong `localStorage` của trình duyệt trên thiết bị này, không đồng bộ vào notebook và không nằm trong bản sao lưu. Nếu trình duyệt không cho phép lưu tùy chọn, giao diện vẫn đổi trong phiên đang mở.

## Dữ liệu và nguồn tham khảo

Danh sách nằm trong `app/lib/places.ts` và `app/lib/places-extra.ts`; ghi chú nghiên cứu nguồn tại [docs/venue-research-v3.json](docs/venue-research-v3.json). Mỗi quán có liên kết nguồn, ngày kiểm chứng, phân loại món và nguồn ảnh khi có. 16 ID gốc được giữ lại để các quán đã lưu, món liên kết và lịch hẹn tiếp tục tham chiếu đúng.

- Điểm cộng đồng gồm các hồ sơ **Tripadvisor** của danh sách cũ và **3 hồ sơ beFood** bổ sung trong v3. Nguồn, số lượt đánh giá và ngày tra cứu được lưu theo từng quán; dữ liệu tra cứu ngày 27/11/2026 có thể lấy từ bản lưu của công cụ tìm kiếm và không tự cập nhật. Đây là điểm của nguồn được ghi tên, không phải số sao Google Maps.
- Nhiều địa điểm có nguồn tham khảo nhưng chưa ghi nhận số sao. App hiển thị trạng thái này rõ ràng và dẫn nguồn để người dùng xem thêm.
- Địa chỉ lưu sẵn được tổng hợp độc lập từ website quán hoặc hồ sơ công khai có ghi nguồn, gồm các trang Foody, beFood và hướng dẫn ẩm thực. Chúng không được trình bày như địa chỉ đã lấy trực tiếp từ Google.
- Liên kết Google Maps giúp mở địa điểm và kiểm tra đúng chi nhánh. Liên kết tìm kiếm không chứng minh địa chỉ đã được Google xác thực trong app.
- Khoảng giá là **ước lượng bằng VNĐ/người**; mức cho hai người là quy đổi tham khảo, không phải báo giá, giá thực đơn hoặc cam kết tổng hóa đơn.
- Nhãn không khí và mô tả phù hợp buổi hẹn là lựa chọn biên tập. Giờ mở cửa, khả năng đặt bàn, giá và tình trạng hoạt động cần kiểm tra trước khi đi.
- Ảnh địa điểm được lấy từ nguồn quán có ghi trong phần chi tiết; có thể là ảnh lưu trữ.

## Kiến trúc, đăng nhập và lưu trữ

Ứng dụng React/Vinext chạy trên Cloudflare Workers thông qua Sites. `.openai/hosting.json` khai báo D1 binding `DB`; không dùng R2.

**GitHub lưu bản mã nguồn; ứng dụng đầy đủ cần runtime có Sites authentication và D1.** GitHub Pages chỉ phục vụ tệp tĩnh, nên không tự chạy các API notebook, xác thực và cơ sở dữ liệu của dự án này. Để dùng đầy đủ luồng lưu dữ liệu, cần triển khai vào môi trường đã cấu hình những thành phần tương ứng. Clone repository không sao chép notebook cá nhân từ Site.

Sites quản lý đăng nhập và quyền truy cập. API yêu cầu cả `oai-authenticated-user-id` và `oai-authenticated-user-email` do nền tảng cung cấp; không có đường ghi dữ liệu ẩn danh hoặc cơ chế bỏ qua đăng nhập trong môi trường managed.

D1 có hai bảng:

| Bảng | Mục đích |
| --- | --- |
| `notebooks` | Một bản JSON cho mỗi ID người dùng, kèm revision và thời điểm cập nhật |
| `maps_rate_limits` | Đếm lượt tra cứu Places của từng người dùng theo giờ |

Dữ liệu đồng bộ theo cùng tài khoản trên cùng Site. Mỗi lần lưu dùng revision để tránh ghi đè thay đổi từ thiết bị khác; khi xung đột, app tải lại bản mới và yêu cầu thực hiện lại thay đổi. Không có đồng bộ cộng tác tức thời hoặc chế độ chỉnh sửa ngoại tuyến.

Notebook cũ chưa có `favoriteDishes` được đọc với danh sách món yêu thích rỗng, giữ nguyên các bản ghi khác và revision. Việc bổ sung trường này không cần migration D1 vì nội dung notebook nằm trong cột JSON. Nếu client cũ gửi bản cập nhật thiếu trường này trong khi server đã có món yêu thích, API trả `409 UPGRADE_REQUIRED` và yêu cầu tải lại trang, tránh làm mất danh sách đã lưu.

Trường phân loại `cuisineTags` của quán tự thêm là tùy chọn để nhận bản sao lưu cũ. Schema từ chối nhóm món lạ, nhóm bị trùng và lịch có hai điểm dừng cùng giờ. Việc thêm phân loại này và mở rộng danh mục v3 không thay đổi bảng D1.

Site được tạo riêng tư. **Chia sẻ quyền mở Site không tự tạo sổ hẹn dùng chung:** tài khoản khác có notebook riêng. Hai điểm đánh giá là hai trường do người đang dùng sổ nhập, không phải hai tài khoản liên kết. Không dùng email làm khóa dữ liệu bền vững.

## Kết nối Google Maps / Places API

Hiện chưa có khóa Places được cấu hình và chưa kiểm chứng gọi Google thật. Mở Google Maps và chỉ đường vẫn hoạt động qua liên kết; tra cứu địa chỉ/số sao trực tiếp chỉ hoạt động sau khi cấu hình.

1. Tạo/chọn dự án Google Cloud, bật **Places API (New)** và tạo credential theo hướng dẫn Google.
2. Thêm secret máy chủ `GOOGLE_MAPS_API_KEY` vào biến môi trường của Site, rồi triển khai lại để áp dụng.
3. Giới hạn khóa cho API cần dùng; kiểm tra quota và thiết lập quản lý chi phí trên Google Cloud. Không đưa khóa vào mã nguồn, trình duyệt, ghi chú hoặc tệp sao lưu.
4. Tùy chọn đặt `GOOGLE_MAPS_HOURLY_LIMIT` từ `1` đến `100`; mặc định là `20` lượt/người dùng/giờ.
5. Kiểm tra phần Cài đặt, tìm một quán và chọn đúng chi nhánh, rồi thử lấy địa chỉ cùng điểm Google trong chi tiết quán.

Tài khoản sản xuất thường cần bật thanh toán và có thể phát sinh phí theo SKU/trường được yêu cầu. Tài liệu Google cũng có lựa chọn Demo Key cho prototype đủ điều kiện, với giới hạn riêng; không coi đó là cấu hình sản xuất mặc định. Trường `rating` và `userRatingCount` thuộc mức tính phí Enterprise. App chỉ tra cứu khi người dùng chủ động thao tác, không gọi theo từng phím gõ.

Máy chủ gọi Text Search hoặc Place Details qua endpoint Google cố định, có giới hạn đầu vào, thời gian chờ 10 giây, kiểm tra nguồn yêu cầu và quota từng người dùng. Không tải hay phân tích HTML Google Maps; không theo liên kết tùy ý để lấy địa chỉ.

**Chỉ Place ID được lưu bền vững từ kết quả tra cứu Google.** Tên Google, địa chỉ, tọa độ, điểm sao, số lượt đánh giá và attribution được giữ trong bộ nhớ trang, hiển thị có nhãn Google Maps, không đưa vào D1, localStorage hay bản sao lưu. Tên riêng, địa chỉ tham khảo do người dùng tự nhập và ghi chú là dữ liệu độc lập.

Tài liệu chính thức:

- [Thiết lập credential](https://developers.google.com/maps/documentation/places/web-service/get-api-key)
- [Text Search](https://developers.google.com/maps/documentation/places/web-service/text-search) và [Place Details](https://developers.google.com/maps/documentation/places/web-service/place-details)
- [Chính sách lưu trữ và attribution](https://developers.google.com/maps/documentation/places/web-service/policies)
- [Chi phí theo trường](https://developers.google.com/maps/documentation/places/web-service/usage-and-billing)
- [Maps URLs không cần API key](https://developers.google.com/maps/documentation/urls/get-started)

## API

Mọi phản hồi API dùng `Cache-Control: private, no-store`. Các lỗi có dạng `{ "error": "Thông báo tiếng Việt", "code": "MÃ_LỖI" }`.

| Endpoint | Đầu vào | Thành công |
| --- | --- | --- |
| `GET /api/config` | Không có | `{ authenticated, googleMapsConfigured, displayName?, storage: "cloud" }` |
| `GET /api/notebook` | Đăng nhập | `{ state, revision }`; sổ mới có revision `0` |
| `PUT /api/notebook` | `{ state, revision }` | `{ state, revision, updatedAt }`; `state` là dữ liệu đã chuẩn hóa |
| `POST /api/maps` | `{ query }` | `{ places, fetchedAt }` |
| `POST /api/maps` | `{ placeId }` | `{ place, fetchedAt }` |

Mã trạng thái đáng chú ý: `401 AUTH_REQUIRED`, `409 STALE_REVISION`, `409 UPGRADE_REQUIRED`, `413 TOO_LARGE`, `429 MAPS_RATE_LIMIT`, `503 GOOGLE_MAPS_NOT_CONFIGURED`. Yêu cầu ghi từ origin khác bị từ chối. Payload notebook tối đa 250 KiB; schema kiểm tra giới hạn nội dung, liên kết, ngày giờ, ID, khoảng giá và toàn vẹn liên kết giữa quán/món/lịch hẹn. Danh sách món yêu thích được kiểm tra thêm về loại món, tên trùng sau chuẩn hóa và các cờ hay ăn/tham gia vòng quay.

## Sao lưu và khôi phục

Trong **Cài đặt & dữ liệu**, chọn **Tải bản sao lưu** để tải JSON gồm `schemaVersion: 2`, thời điểm xuất và notebook cá nhân: quán tự thêm, danh sách đã lưu, món muốn thử, món yêu thích cùng trạng thái hay ăn/tham gia vòng quay, lịch hẹn, nhật ký và cài đặt sổ hẹn. Danh sách quán gợi ý được cung cấp từ mã nguồn; dữ liệu Google trực tiếp và tùy chọn giao diện trên thiết bị không nằm trong tệp.

Chọn **Khôi phục từ tệp**, kiểm tra nội dung tóm tắt và xác nhận để **thay thế toàn bộ notebook hiện tại**. Nên xuất bản sao hiện tại trước. Máy chủ kiểm tra lại tệp, từ chối ID trùng, liên kết quán bị thiếu, lịch trống hoặc điểm dừng lặp; không nhập một phần tệp không hợp lệ. Tệp chứa ghi chú cá nhân, cần giữ ở nơi riêng tư.

App nhận cả bản sao lưu v1 và v2. Bản v1 chưa có `favoriteDishes` được bổ sung danh sách rỗng trước khi xác nhận khôi phục. Vì khôi phục thay thế toàn bộ notebook, **xác nhận khôi phục bản v1 không có món yêu thích sẽ làm rỗng danh sách món yêu thích hiện tại**. Đây là thao tác khôi phục có xác nhận, khác với việc client cũ vô tình bỏ thiếu trường khi lưu và bị API chặn.

## Phát triển và kiểm tra

Yêu cầu Node.js `>=22.13.0` và các dependency trong lockfile. Khi dùng Sites, ưu tiên helper cài đặt/đóng gói của plugin. Các lệnh dự án chạy tại thư mục gốc:

```bash
npm run install:ci
npm test
npm run lint
node node_modules/typescript/bin/tsc --noEmit
npm run build
```

`npm test` chạy sáu tệp kiểm tra bằng Node test runner. Có thể chạy từng bộ độc lập:

```bash
node tests/backend.test.mjs
node tests/calendar.test.mjs
node tests/planning.test.mjs
node tests/discovery.test.mjs
node tests/wheel.test.mjs
node tests/catalog.test.mjs
```

Bộ kiểm tra hiện có **66 nhóm trong 6 tệp**; số nhóm là các ca được ghi nhận bên trong từng tệp:

| Bộ kiểm tra | Số nhóm | Nội dung chính |
| --- | ---: | --- |
| Backend | 25 | Đăng nhập, cô lập người dùng, lưu/đọc, revision, origin, validation, sao lưu, giới hạn payload, Maps mock/quota, món yêu thích và `cuisineTags` cũ/mới |
| Calendar | 9 | Múi giờ Việt Nam, ICS, Unicode, điểm dừng, link Maps trực tiếp và trường hợp không đủ dữ liệu tạo tuyến |
| Planning | 5 | Đổi thứ tự quán giữ giờ, mốc cuối ngày, giờ tăng nghiêm ngặt và cuộc hẹn sắp tới theo giờ Việt Nam |
| Discovery | 11 | Nhóm món rộng/hẹp, tổ hợp bộ lọc, ngân sách/số người, tìm kiếm không dấu, số quận, Phở/Phố/phô mai, dữ liệu cũ và sắp xếp không sửa mảng nguồn |
| Wheel | 9 | Trường hợp một món, ngẫu nhiên đều, nguồn ngẫu nhiên không hợp lệ, góc dừng cho 1–500 món, quay liên tiếp và nhãn tiếng Việt/emoji |
| Catalog | 7 | Số lượng tối thiểu, ID gốc, bản ghi trùng, giá, nguồn/ngày kiểm chứng, nhóm món, URL và metadata |

Backend sử dụng SQLite trong bộ nhớ với migration thật và phản hồi Google giả lập. Catalog test tự in thống kê ngân sách, loại quán và khu vực; kiểm tra số lượng tối thiểu thay vì cố định đúng 142, nên có thể bổ sung quán tiếp.

Các lượt kiểm tra giao diện đã bao gồm desktop ở chế độ tối, mobile rộng 360/390px ở chế độ sáng, bộ lọc, so sánh hai quán, thêm món yêu thích/hay ăn, vòng quay rỗng/một món, phân loại quán tự thêm, đổi thứ tự lịch hẹn và báo lỗi tên món chỉ có khoảng trắng. [Ghi chú v3](docs/release-v3.md) mô tả phạm vi này. Kết quả kiểm tra áp dụng cho phiên bản đã chạy; xác nhận build và triển khai cuối được ghi nhận riêng. Các bài test không gọi Google Places thật.

Sau khi đổi schema, tạo migration mới và kiểm tra SQL:

```bash
npm run db:generate
```

Sau build, áp dụng migration đầu tiên vào D1 **local** khi chưa áp dụng:

```bash
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_medical_leader.sql
```

Không sửa hoặc chạy lại migration đã áp dụng. Các migration tiếp theo phải nối thêm; D1 local và production tách biệt. Sites áp dụng migration production khi triển khai. Môi trường managed xem trước bằng `sites-preview start <đường-dẫn-checkout>`; môi trường portable dùng `npm run dev`. Không tự triển khai bằng Wrangler ngoài quy trình Sites.

## Bản đồ mã nguồn

| Đường dẫn | Nội dung |
| --- | --- |
| `app/datebook.tsx`, `app/globals.css` | Giao diện, biểu mẫu, điều hướng, trạng thái lưu |
| `app/components/DiscoveryPanel.tsx`, `app/components/PlaceCard.tsx` | Khám phá, bộ lọc, xem thêm, so sánh và thẻ quán |
| `app/components/PlanEditor.tsx` | Biểu mẫu lịch hẹn, khung giờ và thứ tự điểm dừng |
| `app/components/FavoritesPanel.tsx`, `app/components/FavoriteWheel.tsx` | Danh sách món yêu thích, chỉnh sửa và vòng quay |
| `app/components/ThemeProvider.tsx` | Chế độ sáng/tối/theo thiết bị và lưu tùy chọn trên trình duyệt |
| `app/lib/types.ts` | Kiểu dữ liệu, formatter và liên kết bản đồ |
| `app/lib/notebook.ts` | Chuẩn hóa notebook cũ và tên món yêu thích |
| `app/lib/wheel.ts` | Chọn ngẫu nhiên đều xác suất, góc dừng và nhãn vòng quay |
| `app/lib/places.ts`, `app/lib/places-extra.ts` | Danh mục 142 quán, nguồn cộng đồng và nguồn địa chỉ độc lập |
| `app/lib/cuisines.ts`, `app/lib/discovery.ts` | 35 nhóm món, tương thích quán cũ, tìm kiếm và bộ lọc |
| `app/lib/calendar.ts` | Ngày giờ Việt Nam, lịch trình, tuyến đường và tệp ICS |
| `app/lib/planning.ts` | Đổi thứ tự, giờ dừng kế tiếp và cuộc hẹn sắp tới |
| `app/lib/validation.ts` | Schema Zod, kiểm tra liên kết và tính toàn vẹn notebook |
| `app/api/` | API notebook, cấu hình, Google Places và xác thực chung |
| `db/schema.ts`, `drizzle/` | Schema D1 và lịch sử migration |
| `public/venues/` | Ảnh quán; nguồn tương ứng trong dataset |
| `public/fonts/` | Phông chữ tự lưu trữ để hiển thị tiếng Việt |
| `tests/backend.test.mjs` | Kiểm tra API và dữ liệu |
| `tests/calendar.test.mjs`, `tests/wheel.test.mjs` | Kiểm tra lịch/chỉ đường và thuật toán vòng quay |
| `tests/planning.test.mjs`, `tests/discovery.test.mjs`, `tests/catalog.test.mjs` | Kiểm tra lịch hẹn, bộ lọc và tính toàn vẹn danh mục |
| `docs/release-v3.md`, `docs/venue-research-v3.json` | Phạm vi v3, đối chiếu sản phẩm và dữ liệu nghiên cứu nguồn |
| `.openai/hosting.json` | ID Site và khai báo binding; không chứa secret |

## Giới hạn hiện tại

Không có đặt bàn/thanh toán trong app, push notification, lịch hẹn qua đêm, khoảng cách hoặc thời gian di chuyển trực tiếp, lịch đồng bộ hai chiều hay notebook dùng chung nhiều tài khoản. Tệp ICS là tệp để nhập thủ công vào ứng dụng lịch. Lịch trình tối đa 5 điểm dừng trong cùng ngày; tuyến đường được xử lý ở Google Maps. Với quán chỉ có link Maps mà thiếu địa chỉ/Place ID, app mở link của quán và hướng dẫn mở riêng từng điểm khi chưa thể tạo tuyến nhiều điểm. Thời lượng kết thúc ICS là ước lượng từ thời điểm bắt đầu và điểm dừng cuối, không phải giờ đặt bàn.

Địa chỉ và điểm Google trực tiếp cần khóa hợp lệ; luồng này chưa được xác minh với tài khoản Google thật. Dữ liệu cộng đồng, địa chỉ tham khảo và ngân sách ban đầu có thể thay đổi theo thời gian.
