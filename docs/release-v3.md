# Meal Happy — Ghi chú v3

Ngày cập nhật: **27/11/2026**. Tên ứng dụng trong giao diện: **Hẹn Sài Gòn**. Repository mã nguồn dự kiến: **`Meal-Happy`**.

Tài liệu ghi nhận phạm vi dữ liệu, tính năng, sửa lỗi và kiểm tra của v3. Mỗi lần phát hành cần qua kiểm tra TypeScript, ESLint, bộ test và build; kết quả triển khai được xác nhận bằng phiên bản Sites và commit GitHub tương ứng.

## 1. Danh mục rộng hơn, ưu tiên ngân sách sinh viên

Danh mục có **142 địa điểm**, gồm **16 địa điểm gốc và 126 địa điểm mới**, trong **21 khu vực của bộ lọc**. Mã định danh của 16 quán gốc được giữ nguyên để danh sách đã lưu, món liên kết và lịch hẹn hiện có tiếp tục hoạt động. Thứ tự hiển thị ưu tiên một số lựa chọn sinh viên ở đầu danh sách.

| Loại địa điểm | Số lượng |
| --- | ---: |
| Quán ăn | 100 |
| Cà phê | 19 |
| Tráng miệng | 16 |
| Đồ uống | 7 |
| **Tổng** | **142** |

| Ngân sách tối đa cho một người | Số địa điểm |
| --- | ---: |
| 30.000đ | 6 |
| 50.000đ | 22 |
| 70.000đ | 53 |
| 100.000đ | 86 |

Các ngưỡng trên **cộng dồn**, sử dụng `budgetMax` trong dữ liệu. Sáu lựa chọn đến 30.000đ được mô tả theo **một phần/món cơ bản có nguồn tham khảo**. Mức này không đại diện cho toàn bộ thực đơn hoặc hóa đơn có món thêm, đồ uống, giao hàng hay phụ phí. Ghi chú phạm vi mức chi được hiển thị trong chi tiết quán và khi so sánh, giúp người dùng biết mức dự trù đang áp dụng cho lựa chọn nào.

Địa chỉ và thông tin quán lấy từ website chính thức hoặc các hồ sơ công khai được ghi nguồn. Mỗi bản ghi có `addressSource`, `sources` và `checkedAt`. Liên kết Google Maps gồm link địa điểm do nguồn cung cấp hoặc truy vấn theo tên và địa chỉ tham khảo. Các liên kết truy vấn hỗ trợ mở Maps; chúng không xác nhận rằng app đã lấy địa chỉ trực tiếp từ Google.

Điểm cộng đồng giữ các hồ sơ **Tripadvisor** của danh sách gốc và bổ sung **3 hồ sơ beFood**. Nguồn, số lượt đánh giá và ngày tra cứu được ghi riêng theo từng quán. Những địa điểm còn lại có thể có nguồn giới thiệu mà chưa có số sao được lưu. Giá và điểm là dữ liệu tại thời điểm tổng hợp, có thể lấy từ bản lưu của công cụ tìm kiếm; app không tự cập nhật chúng.

Các tệp dữ liệu:

- [`app/lib/places.ts`](../app/lib/places.ts): danh mục kết hợp, 16 quán gốc và thứ tự gợi ý.
- [`app/lib/places-extra.ts`](../app/lib/places-extra.ts): 126 quán bổ sung, menu gợi ý, nguồn, nhóm món và khoảng giá.
- [`docs/venue-research-v3.json`](venue-research-v3.json): dữ liệu nghiên cứu nguồn tham khảo của đợt mở rộng.

## 2. Bộ lọc và so sánh giúp chọn quán cụ thể hơn

### 35 nhóm món

Phân loại mới bao gồm các món quen thuộc như cơm tấm, cơm, **xôi**, **bánh bao/bánh giò**, bún, bún bò, phở, hủ tiếu, bánh mì, mì, bánh canh, lẩu, đồ nướng, ốc và món chay; đồng thời có các nhóm ẩm thực Nhật, Hàn, Thái, Hoa, Âu cùng cà phê, trà sữa, đồ uống và tráng miệng.

Người dùng có thể chọn nhiều nhóm. Một quán phù hợp nếu bán **ít nhất một** món được chọn; các điều kiện khu vực, loại quán, ngân sách, không khí và trạng thái vẫn phải đồng thời thỏa mãn. Nhóm **Cơm** bao gồm **Cơm tấm**; nhóm **Bún** bao gồm **Bún bò**. Form tự thêm quán cho chọn nhóm món, còn quán cũ chưa có trường này được suy luận từ tên, món gợi ý và nhãn.

### Ngân sách theo số người

Bộ lọc có các mức 30.000đ, 50.000đ, 70.000đ, 100.000đ và các mức cao hơn, cùng nút chuyển **1 người / 2 người**. Điều kiện lọc dùng:

```text
giá tối đa dự kiến của một người × số người ≤ ngân sách chọn
```

Ví dụ, mức tối đa 50.000đ/người phù hợp ngân sách 100.000đ cho hai người. Quán chưa ghi giá không được coi là miễn phí: khi có giới hạn ngân sách, quán đó được loại khỏi kết quả; khi sắp xếp theo giá, quán chưa có giá đứng sau các giá đã biết.

### Tìm kiếm, xem thêm và so sánh

Tìm kiếm hỗ trợ tiếng Việt không dấu, khoảng trắng thừa, thay đổi thứ tự từ và viết tắt `q3`/`q.3`. Cụm quận được đối chiếu với khu vực để tránh khớp nhầm số nhà. Tìm món phở cũng được tách khỏi các từ “phố”, “thành phố” và “phô mai”.

Danh sách hiển thị theo từng đợt **24 quán** với nút xem thêm, có số lượng kết quả và thông báo cụ thể khi không có quán phù hợp. Người dùng có thể chọn **2–3 quán** để đặt cạnh nhau: khoảng chi theo số người, món, địa chỉ tham khảo, không khí, điểm có ghi nhận và phạm vi giá. Từ bảng này có thể lưu quán, mở Maps, xem nguồn hoặc lên lịch ghé.

## 3. Đối chiếu sản phẩm và quyết định thiết kế

Đối chiếu tập trung vào bốn sản phẩm có tài liệu hoặc trang tính năng chính chủ. Cột cuối là quyết định thiết kế cho nhu cầu hẹn hò của một sinh viên ở TP.HCM; không phải mô tả chức năng của sản phẩm được tham khảo.

| Sản phẩm | Điểm quan sát từ nguồn chính chủ | Cách áp dụng trong v3 |
| --- | --- | --- |
| **Foody** | Phân loại theo món, mục đích, loại hình, giá và loại ẩm thực; hướng dẫn tìm theo khu vực kết hợp món. Nguồn: [giới thiệu](https://www.foody.vn/gioi-thieu), [hướng dẫn tìm kiếm](https://www.foody.vn/bai-viet/huong-dan-tim-kiem-dia-diem-nha-hang-quan-an-tren-foody-578). | Tách 35 nhóm món khỏi loại quán; kết hợp nhiều tiêu chí; có các mức ngân sách nhỏ để chọn được bữa ăn hằng ngày. |
| **Google Maps** | Tìm địa điểm, lọc giá/giờ hoạt động, xem địa chỉ và đánh giá; lưu địa điểm thành danh sách. Nguồn: [tìm địa điểm](https://support.google.com/maps/answer/3092445?hl=en), [danh sách đã lưu](https://support.google.com/maps/answer/7280933). | Giữ luồng khám phá → lưu → mở đúng link Maps → lên lịch. Ghi rõ địa chỉ tham khảo và nguồn; bảo toàn link Maps khi quán được người dùng đặt tên riêng. |
| **Tripadvisor** | Trang nhà hàng TP.HCM có bộ lọc loại địa điểm, món, loại ẩm thực, giá, đánh giá, chế độ ăn và hoàn cảnh sử dụng. Nguồn: [danh sách nhà hàng tại TP.HCM](https://www.tripadvisor.com/Restaurants-g293925-zfz10665-Ho_Chi_Minh_City.html). | Bổ sung nhóm món, món chay, giá và không khí; hiển thị nguồn đánh giá; thêm bảng so sánh vài quán để hỗ trợ quyết định. |
| **Wanderlog** | Trang chính thức mô tả lịch trình, bản đồ, ngân sách, theo dõi/chia chi phí và xuất địa điểm sang Google Maps; một số chức năng nâng cao thuộc Pro. Nguồn: [trang sản phẩm](https://wanderlog.com/en). | Củng cố lịch hẹn nhiều điểm, thứ tự thời gian, ngân sách theo số người, xuất ICS và mở Maps khi đủ dữ liệu vị trí. |

Trang Tripadvisor được công cụ tìm kiếm cung cấp từ bản lưu; ở đây chỉ dùng để đối chiếu cấu trúc bộ lọc, không dùng các con số trên trang làm số liệu nhà hàng hiện tại. Các nguồn được xem trong đợt 27/11/2026, nên chức năng và cách trình bày của sản phẩm có thể thay đổi.

Phạm vi v3 tập trung vào chọn quán, quản lý món và chuẩn bị buổi hẹn. Giờ mở cửa trực tiếp, khoảng cách, thời gian di chuyển, thanh toán, đặt bàn trong app, chia chi phí thực tế và cộng tác nhiều tài khoản cần dữ liệu/tích hợp riêng; chúng chưa thuộc bản này.

## 4. Những lỗi đã sửa trong đợt rà soát

| Vấn đề | Hành vi sau khi sửa |
| --- | --- |
| Tìm `quận 1` khớp số nhà `12` của quán ở Quận 3 | Cụm quận được đối chiếu với khu vực; có ca kiểm tra riêng cho Quận 1/12 và số nhà. |
| Món “Phở” hoặc “Mì” độc lập của quán cũ không được nhận đúng nhóm | Xét từng trường menu/nhãn; giữ phân biệt Phở với Phố, mì với bánh mì gà; nhận xôi và bánh bao/bánh giò. |
| Tìm `pho` khớp “thành phố” trong địa chỉ hoặc “phô mai” trong menu | Khi truy vấn mang nghĩa món phở, kết quả phải thuộc nhóm phở. Truy vấn phô mai vẫn dùng tìm kiếm phù hợp. |
| Ngân sách `0` của quán tự thêm bị hiểu như giá rẻ | Xem là chưa ghi giá; loại khỏi bộ lọc có giới hạn và xếp sau khi sắp theo giá. |
| Đổi thứ tự quán mang cả giờ theo, tạo lịch ngược giờ | Chuyển quán và ghi chú giữa các vị trí, giữ các khung giờ. Form và API cùng yêu cầu giờ sau tăng nghiêm ngặt. |
| Thêm điểm cuối ngày có thể tạo giờ không còn hợp lệ | Gợi ý giờ kế tiếp tối đa 23:59; khi hết khung giờ, dừng thêm điểm và giải thích trong form. |
| Cuộc hẹn đã bắt đầu trong ngày vẫn được coi là sắp tới | So cả ngày và giờ theo `Asia/Ho_Chi_Minh`, bỏ cuộc hẹn đã hoàn tất. |
| Quán chỉ có tên riêng và link Maps có thể bị chỉ đường theo tên sai | Giữ nguyên link cho một điểm; với tuyến nhiều điểm thiếu địa chỉ/Place ID, hướng dẫn mở riêng từng địa điểm. |
| Tên món chỉ có khoảng trắng không lưu nhưng thiếu phản hồi rõ | Hiển thị lỗi ngay trong form để người dùng sửa tên món. |
| Reload sau khi mất đăng nhập có thể để lại dữ liệu/form cũ trên màn hình | Dọn trạng thái sổ, revision và form liên quan khi không còn phiên xác thực hợp lệ. |

Việc mở rộng danh mục giữ nguyên 16 ID cũ. `cuisineTags` là trường tùy chọn khi đọc/lưu quán cũ; API kiểm tra nhóm món lạ, nhóm trùng và số lượng cho phép. Dữ liệu `favoriteDishes` cũ tiếp tục được chuẩn hóa theo cơ chế v2. Không cần migration D1 mới chỉ để thêm phân loại món hoặc tăng số quán gợi ý.

## 5. Phạm vi kiểm tra

### Kiểm tra tự động

Có **66 nhóm kiểm tra trong 6 tệp**:

| Tệp | Số nhóm | Phạm vi |
| --- | ---: | --- |
| `tests/backend.test.mjs` | 25 | Xác thực, cô lập dữ liệu, revision, lưu/đọc, validation, bản sao lưu, món yêu thích, phân loại món và Google mock/quota |
| `tests/calendar.test.mjs` | 9 | Múi giờ, ICS, Unicode, Maps và điểm dừng chưa đủ dữ liệu |
| `tests/planning.test.mjs` | 5 | Giữ giờ khi đổi thứ tự, cuối ngày, thứ tự giờ và cuộc hẹn sắp tới |
| `tests/discovery.test.mjs` | 11 | Nhóm món, tổ hợp bộ lọc, ngân sách, tìm kiếm, tương thích quán cũ và sắp xếp |
| `tests/wheel.test.mjs` | 9 | Chọn ngẫu nhiên, một món, góc dừng, quay liên tiếp, Unicode và nguồn ngẫu nhiên |
| `tests/catalog.test.mjs` | 7 | Số lượng tối thiểu, ID cũ, trùng quán, giá, nguồn, ngày, phân loại và URL |
| **Tổng** | **66** | |

Chạy toàn bộ bằng `npm test`. Backend dùng SQLite trong bộ nhớ và phản hồi Google giả lập. Catalog test in thống kê ngân sách/khu vực từ dữ liệu đang chạy, kiểm tra tổng tối thiểu thay vì bắt buộc đúng 142 quán. Hướng dẫn chạy riêng từng tệp và build nằm trong [README](../README.md#phát-triển-và-kiểm-tra).

### Kiểm tra giao diện đã thực hiện

| Bối cảnh | Phần đã kiểm tra |
| --- | --- |
| Desktop, chế độ tối | Hiển thị ứng dụng và các tương tác trong đợt rà soát |
| Mobile rộng 360px và 390px, chế độ sáng | Bố cục ở hai chiều rộng và thao tác các luồng được kiểm tra |
| Khám phá | Bộ lọc và so sánh hai quán |
| Món yêu thích | Thêm món, đánh dấu hay ăn; vòng quay khi rỗng và khi có một món |
| Quán tự thêm | Chọn nhóm món trong form địa điểm |
| Lịch hẹn | Đổi thứ tự điểm dừng và giữ khung giờ |
| Validation form | Phản hồi khi tên món chỉ gồm khoảng trắng |

Các kiểm tra trên ghi nhận những tình huống đã chạy, không phải cam kết mọi thiết bị và mọi tình huống đều không có lỗi. Bước kiểm tra cuối, typecheck/build và xác nhận phiên bản đã triển khai được thực hiện riêng trước khi báo phát hành thành công.

## 6. Google Places, runtime và dữ liệu người dùng

**Chưa cấu hình `GOOGLE_MAPS_API_KEY`; luồng gọi Google Places thật chưa được kiểm chứng.** Liên kết mở Google Maps hoạt động độc lập với Places API. Để tìm địa chỉ/số sao trực tiếp trong app, cần cấu hình khóa máy chủ và kiểm tra thực tế; trạng thái thiếu khóa được API trả rõ bằng `503 GOOGLE_MAPS_NOT_CONFIGURED`.

Proxy chỉ gọi các endpoint Google cố định, có giới hạn đầu vào, quota và thời gian chờ. Dữ liệu Google lấy trong phiên được hiển thị có nguồn; app chỉ lưu bền vững Place ID từ kết quả Google. Các giới hạn và hướng dẫn cấu hình nằm trong [README](../README.md#kết-nối-google-maps--places-api).

Ứng dụng chạy với **Sites authentication + Cloudflare Workers + D1**. Repository `Meal-Happy` là bản mã nguồn và dữ liệu danh mục công khai; kho D1 chứa notebook cá nhân được lưu riêng. Các bản sao lưu cá nhân, khóa API và dữ liệu người dùng không thuộc nội dung phát hành mã nguồn.

GitHub Pages phục vụ tệp tĩnh, nên không cung cấp đầy đủ API notebook, danh tính do Sites cấp và D1 của ứng dụng. Chạy đủ tính năng cần môi trường đã cấu hình các thành phần đó. Notebook hiện thuộc từng tài khoản; quyền mở cùng Site không tự tạo sổ chung cho nhiều người.

## 7. Bước xác nhận phát hành còn lại

Hoàn tất kiểm tra cuối trên bản mã nguồn kết hợp, chạy typecheck và build, rồi xác nhận phiên bản Site sau triển khai. Khi thao tác GitHub hoàn tất, ghi nhận URL repository và commit thực tế. Tài liệu này được chuẩn bị trước các xác nhận đó; kết quả phát hành sẽ căn cứ vào công cụ triển khai và repository thực tế.

## Hoàn thiện vòng đời giao diện

Vòng quay giữ snapshot bằng state và dùng callback của lần render đã commit. Kết quả cũ được xóa khi nhóm món tham gia thay đổi, kể cả khi chọn lại đúng nhóm trước đó. Hộp thoại giữ focus, khóa cuộn nền và phục hồi focus khi đóng bằng Escape. Giao diện dùng external store để đồng bộ lựa chọn sáng/tối/theo thiết bị, kể cả thay đổi từ tab khác; script khởi tạo trong head được giữ để tránh nháy màu sáng.

Các luồng quay hai món, khóa thao tác khi đang quay, đổi nhóm A → B → A, Tab/Escape và ghi nhớ chế độ tối sau tải lại đã được kiểm tra trên trình duyệt trong đợt này.
