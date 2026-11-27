import type { Place } from './types';

// Historical districts: 1, 3, 5, Go Vap, Tan Binh. Budgets are approximate VND/person.
export const EXTRA_PLACES: Place[] = [
  {
    "id": "com-tam-bui-sai-gon-thach-thi-thanh",
    "name": "Cơm Tấm Bụi Sài Gòn — Thạch Thị Thanh",
    "kind": "food",
    "area": "Quận 1",
    "address": "100 Thạch Thị Thanh, Quận 1, TP.HCM",
    "addressSource": "Foody — địa chỉ được công bố; chưa xác minh qua Google Places",
    "description": "Thêm một lựa chọn cơm tấm ở khu Tân Định để hẹn ăn no rồi đi dạo. Nên hỏi giá phần kết hợp nhiều món trước khi chọn.",
    "budgetMin": 45000,
    "budgetMax": 85000,
    "dishes": [
      "Cơm tấm sườn",
      "Cơm tấm bì chả"
    ],
    "tags": [
      "Hợp túi tiền sinh viên",
      "Ăn no",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "com-tam",
      "com"
    ],
    "sources": [
      {
        "label": "Foody: địa chỉ, món và thông tin tham khảo",
        "url": "https://www.foody.vn/ho-chi-minh/com-tam-bui-sai-gon"
      }
    ],
    "checkedAt": "2026-11-27",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20T%E1%BA%A5m%20B%E1%BB%A5i%20S%C3%A0i%20G%C3%B2n%20%E2%80%94%20Th%E1%BA%A1ch%20Th%E1%BB%8B%20Thanh%20100%20Th%E1%BA%A1ch%20Th%E1%BB%8B%20Thanh%2C%20Qu%E1%BA%ADn%201%20TP.HCM",
    "curated": true,
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "bun-thit-nuong-kieu-bao-de-tham",
    "name": "Bún Thịt Nướng Kiều Bảo — Đề Thám",
    "kind": "food",
    "area": "Quận 1",
    "address": "139 Đề Thám, Quận 1, TP.HCM",
    "addressSource": "Foody — địa chỉ được công bố; chưa xác minh qua Google Places",
    "description": "Bún thịt nướng cho một bữa ăn gọn ở trung tâm. Có thể chọn thêm chả giò nếu đói; ghi lại khẩu vị nước mắm để lần sau dễ đặt.",
    "budgetMin": 30000,
    "budgetMax": 55000,
    "dishes": [
      "Bún thịt nướng",
      "Bún thịt nướng chả giò"
    ],
    "tags": [
      "Hợp túi tiền sinh viên",
      "Ăn no",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "bun",
      "nuong"
    ],
    "sources": [
      {
        "label": "Foody: địa chỉ, món và thông tin tham khảo",
        "url": "https://www.foody.vn/ho-chi-minh/bun-thit-nuong-kieu-bao-de-tham"
      }
    ],
    "checkedAt": "2026-11-27",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Th%E1%BB%8Bt%20N%C6%B0%E1%BB%9Bng%20Ki%E1%BB%81u%20B%E1%BA%A3o%20%E2%80%94%20%C4%90%E1%BB%81%20Th%C3%A1m%20139%20%C4%90%E1%BB%81%20Th%C3%A1m%2C%20Qu%E1%BA%ADn%201%20TP.HCM",
    "curated": true,
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "bun-thit-nuong-chi-tuyen",
    "name": "Bún Thịt Nướng Chị Tuyền",
    "kind": "food",
    "area": "Quận 1",
    "address": "175C Cô Giang, Quận 1, TP.HCM",
    "addressSource": "Foody — địa chỉ được công bố; chưa xác minh qua Google Places",
    "description": "Một điểm bún thịt nướng trên đường Cô Giang để thử khi muốn đổi bữa cơm. Dự trù thêm nếu gọi phần nhiều thịt hoặc món ăn kèm.",
    "budgetMin": 55000,
    "budgetMax": 85000,
    "dishes": [
      "Bún thịt nướng",
      "Bún thịt nướng chả giò"
    ],
    "tags": [
      "Hợp túi tiền sinh viên",
      "Ăn no",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "bun",
      "nuong"
    ],
    "sources": [
      {
        "label": "Foody: địa chỉ, món và thông tin tham khảo",
        "url": "https://www.foody.vn/ho-chi-minh/chi-tuyen-bun-thit-nuong"
      }
    ],
    "checkedAt": "2026-11-27",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Th%E1%BB%8Bt%20N%C6%B0%E1%BB%9Bng%20Ch%E1%BB%8B%20Tuy%E1%BB%81n%20175C%20C%C3%B4%20Giang%2C%20Qu%E1%BA%ADn%201%20TP.HCM",
    "curated": true,
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "bun-rieu-ganh-ben-thanh-le-thanh-ton",
    "name": "Bún Riêu Gánh Bến Thành — Lê Thánh Tôn",
    "kind": "food",
    "area": "Quận 1",
    "address": "163 Lê Thánh Tôn, Quận 1, TP.HCM",
    "addressSource": "Foody — địa chỉ được công bố; chưa xác minh qua Google Places",
    "description": "Ghé ăn bún riêu khi hai bạn đang đi chơi khu Bến Thành. Phù hợp một điểm ăn no trong lịch trình dạo phố; hỏi giá phần thường trước khi gọi.",
    "budgetMin": 45000,
    "budgetMax": 70000,
    "dishes": [
      "Bún riêu"
    ],
    "tags": [
      "Hợp túi tiền sinh viên",
      "Ăn no",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "bun"
    ],
    "sources": [
      {
        "label": "Foody: địa chỉ, món và thông tin tham khảo",
        "url": "https://www.foody.vn/ho-chi-minh/bun-rieu-ganh-ben-thanh-le-thanh-ton"
      }
    ],
    "checkedAt": "2026-11-27",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Ri%C3%AAu%20G%C3%A1nh%20B%E1%BA%BFn%20Th%C3%A0nh%20%E2%80%94%20L%C3%AA%20Th%C3%A1nh%20T%C3%B4n%20163%20L%C3%AA%20Th%C3%A1nh%20T%C3%B4n%2C%20Qu%E1%BA%ADn%201%20TP.HCM",
    "curated": true,
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "bun-bo-hue-hanh-banh-van-tran",
    "name": "Bún Bò Huế Hạnh — Bành Văn Trân",
    "kind": "food",
    "area": "Tân Bình",
    "address": "135 Bành Văn Trân, Tân Bình, TP.HCM",
    "addressSource": "Foody — địa chỉ được công bố; chưa xác minh qua Google Places",
    "description": "Bún bò cho buổi hẹn ăn sáng hoặc ăn no ở Tân Bình. Hai bạn có thể ghi lại phần thịt yêu thích và mức cay để quay lại dễ hơn.",
    "budgetMin": 40000,
    "budgetMax": 70000,
    "dishes": [
      "Bún bò Huế"
    ],
    "tags": [
      "Hợp túi tiền sinh viên",
      "Ăn no",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "bun-bo",
      "bun"
    ],
    "sources": [
      {
        "label": "Foody: địa chỉ, món và thông tin tham khảo",
        "url": "https://www.foody.vn/ho-chi-minh/bun-bo-hue-hanh"
      }
    ],
    "checkedAt": "2026-11-27",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20B%C3%B2%20Hu%E1%BA%BF%20H%E1%BA%A1nh%20%E2%80%94%20B%C3%A0nh%20V%C4%83n%20Tr%C3%A2n%20135%20B%C3%A0nh%20V%C4%83n%20Tr%C3%A2n%2C%20T%C3%A2n%20B%C3%ACnh%20TP.HCM",
    "curated": true,
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "bun-bo-hue-dong-ba-ni-su-huynh-lien",
    "name": "Bún Bò Huế Đông Ba — Ni Sư Huỳnh Liên",
    "kind": "food",
    "area": "Tân Bình",
    "address": "39 Ni Sư Huỳnh Liên, Tân Bình, TP.HCM",
    "addressSource": "Foody — địa chỉ được công bố; chưa xác minh qua Google Places",
    "description": "Một địa chỉ bún bò bình dân ở khu Bảy Hiền cho ngày muốn ăn đơn giản. Chọn tô cơ bản rồi hỏi giá nếu thêm giò hoặc thịt.",
    "budgetMin": 35000,
    "budgetMax": 60000,
    "dishes": [
      "Bún bò Huế"
    ],
    "tags": [
      "Hợp túi tiền sinh viên",
      "Ăn no",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "bun-bo",
      "bun"
    ],
    "sources": [
      {
        "label": "Foody: địa chỉ, món và thông tin tham khảo",
        "url": "https://www.foody.vn/ho-chi-minh/bun-bo-hue-dong-ba"
      }
    ],
    "checkedAt": "2026-11-27",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20B%C3%B2%20Hu%E1%BA%BF%20%C4%90%C3%B4ng%20Ba%20%E2%80%94%20Ni%20S%C6%B0%20Hu%E1%BB%B3nh%20Li%C3%AAn%2039%20Ni%20S%C6%B0%20Hu%E1%BB%B3nh%20Li%C3%AAn%2C%20T%C3%A2n%20B%C3%ACnh%20TP.HCM",
    "curated": true,
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "bun-bo-chu-ha-vo-van-tan",
    "name": "Bún Bò Chú Há — Võ Văn Tần",
    "kind": "food",
    "area": "Quận 3",
    "address": "300 Võ Văn Tần, Quận 3, TP.HCM",
    "addressSource": "Restaurant Guru — địa chỉ được công bố; chưa xác minh qua Google Places",
    "description": "Thử một bữa bún bò trên tuyến Võ Văn Tần rồi nối lịch hẹn với quán chè gần đó. Phần nhiều thịt sẽ cần ngân sách cao hơn phần thường.",
    "budgetMin": 55000,
    "budgetMax": 90000,
    "dishes": [
      "Bún bò Huế"
    ],
    "tags": [
      "Hợp túi tiền sinh viên",
      "Ăn no",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "bun-bo",
      "bun"
    ],
    "sources": [
      {
        "label": "Restaurant Guru: địa chỉ, món và thông tin tham khảo",
        "url": "https://restaurantguru.com/Bun-Bo-Hue-Chu-Ha-Ho-Chi-Minh-City"
      }
    ],
    "checkedAt": "2026-11-27",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20B%C3%B2%20Ch%C3%BA%20H%C3%A1%20%E2%80%94%20V%C3%B5%20V%C4%83n%20T%E1%BA%A7n%20300%20V%C3%B5%20V%C4%83n%20T%E1%BA%A7n%2C%20Qu%E1%BA%ADn%203%20TP.HCM",
    "curated": true,
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "bun-rieu-ganh-chau-doc-duong-so-3",
    "name": "Bún Riêu Gánh Châu Đốc — Đường Số 3",
    "kind": "food",
    "area": "Gò Vấp",
    "address": "129A Đường Số 3, Gò Vấp, TP.HCM",
    "addressSource": "Foody — địa chỉ được công bố; chưa xác minh qua Google Places",
    "description": "Bổ sung một quán bún riêu ở Gò Vấp cho những ngày muốn ăn gần khu mình ở. Nên kiểm tra menu và thời gian bán trước khi đến.",
    "budgetMin": 30000,
    "budgetMax": 55000,
    "dishes": [
      "Bún riêu"
    ],
    "tags": [
      "Hợp túi tiền sinh viên",
      "Ăn no",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "bun"
    ],
    "sources": [
      {
        "label": "Foody: địa chỉ, món và thông tin tham khảo",
        "url": "https://www.foody.vn/ho-chi-minh/bun-rieu-ganh-chau-doc"
      }
    ],
    "checkedAt": "2026-11-27",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Ri%C3%AAu%20G%C3%A1nh%20Ch%C3%A2u%20%C4%90%E1%BB%91c%20%E2%80%94%20%C4%90%C6%B0%E1%BB%9Dng%20S%E1%BB%91%203%20129A%20%C4%90%C6%B0%E1%BB%9Dng%20S%E1%BB%91%203%2C%20G%C3%B2%20V%E1%BA%A5p%20TP.HCM",
    "curated": true,
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "pho-le-nguyen-trai",
    "name": "Phở Lệ — Nguyễn Trãi",
    "kind": "food",
    "area": "Quận 5",
    "address": "413–415 Nguyễn Trãi, phường An Đông, TP.HCM",
    "addressSource": "MICHELIN Guide — địa chỉ được công bố; chưa xác minh qua Google Places",
    "description": "Địa chỉ phở bò được MICHELIN giới thiệu để dành cho một bữa ăn đổi vị ở Chợ Lớn. Dự trù cao hơn nhóm phở bình dân.",
    "budgetMin": 80000,
    "budgetMax": 120000,
    "dishes": [
      "Phở bò"
    ],
    "tags": [
      "Hợp túi tiền sinh viên",
      "Ăn no",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "pho"
    ],
    "sources": [
      {
        "label": "MICHELIN Guide: địa chỉ, món và thông tin tham khảo",
        "url": "https://guide.michelin.com/us/en/ho-chi-minh/ho-chi-minh_2978179/restaurant/pho-le-district-5"
      },
      {
        "label": "Thanh Niên: thông tin giá và đợt sửa chữa tháng 6/2025",
        "url": "https://thanhnien.vn/pho-le-tphcm-bat-ngo-dong-cua-sau-khi-duoc-michelin-vinh-danh-ly-do-la-gi-185250611212045022.htm"
      }
    ],
    "checkedAt": "2026-11-27",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20L%E1%BB%87%20%E2%80%94%20Nguy%E1%BB%85n%20Tr%C3%A3i%20413%E2%80%93415%20Nguy%E1%BB%85n%20Tr%C3%A3i%2C%20ph%C6%B0%E1%BB%9Dng%20An%20%C4%90%C3%B4ng%20TP.HCM",
    "curated": true,
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "pho-minh-pasteur",
    "name": "Phở Minh — Pasteur",
    "kind": "food",
    "area": "Quận 1",
    "address": "63/6 Pasteur, phường Sài Gòn, TP.HCM",
    "addressSource": "MICHELIN Guide — địa chỉ được công bố; chưa xác minh qua Google Places",
    "description": "Một bữa phở trong hẻm Pasteur cho lịch hẹn ở trung tâm. Mở bản đồ theo đúng số 63/6 và kiểm tra giờ bán trước khi ghé.",
    "budgetMin": 50000,
    "budgetMax": 80000,
    "dishes": [
      "Phở bò"
    ],
    "tags": [
      "Hợp túi tiền sinh viên",
      "Ăn no",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "pho"
    ],
    "sources": [
      {
        "label": "MICHELIN Guide: địa chỉ, món và thông tin tham khảo",
        "url": "https://guide.michelin.com/vn/en/ho-chi-minh/ho-chi-minh_2978179/restaurant/pho-minh"
      }
    ],
    "checkedAt": "2026-11-27",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Minh%20%E2%80%94%20Pasteur%2063/6%20Pasteur%2C%20ph%C6%B0%E1%BB%9Dng%20S%C3%A0i%20G%C3%B2n%20TP.HCM",
    "curated": true,
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "pho-phu-vuong-le-van-sy",
    "name": "Phở Phú Vương — Lê Văn Sỹ",
    "kind": "food",
    "area": "Tân Bình",
    "address": "339 Lê Văn Sỹ, Tân Bình, TP.HCM",
    "addressSource": "Foody — địa chỉ được công bố; chưa xác minh qua Google Places",
    "description": "Một lựa chọn phở trên đường Lê Văn Sỹ để hẹn ăn sáng hoặc ăn no. Chọn phần vừa sức và hỏi giá khi thêm thịt, trứng hay nước uống.",
    "budgetMin": 55000,
    "budgetMax": 95000,
    "dishes": [
      "Phở bò"
    ],
    "tags": [
      "Hợp túi tiền sinh viên",
      "Ăn no",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "pho"
    ],
    "sources": [
      {
        "label": "Foody: địa chỉ, món và thông tin tham khảo",
        "url": "https://www.foody.vn/ho-chi-minh/pho-phu-vuong"
      }
    ],
    "checkedAt": "2026-11-27",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Ph%C3%BA%20V%C6%B0%C6%A1ng%20%E2%80%94%20L%C3%AA%20V%C4%83n%20S%E1%BB%B9%20339%20L%C3%AA%20V%C4%83n%20S%E1%BB%B9%2C%20T%C3%A2n%20B%C3%ACnh%20TP.HCM",
    "curated": true,
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "hu-tieu-nam-vang-thanh-dat-co-bac",
    "name": "Hủ Tiếu Nam Vang Thành Đạt — Cô Bắc",
    "kind": "food",
    "area": "Quận 1",
    "address": "34 Cô Bắc, Quận 1, TP.HCM",
    "addressSource": "Foody — địa chỉ được công bố; chưa xác minh qua Google Places",
    "description": "Hai người có thể thử một tô khô và một tô nước để tìm kiểu mình thích. Đây là điểm ăn no để nối với một món chè hoặc đi dạo khu Cô Giang.",
    "budgetMin": 50000,
    "budgetMax": 80000,
    "dishes": [
      "Hủ tiếu Nam Vang khô",
      "Hủ tiếu Nam Vang nước"
    ],
    "tags": [
      "Hợp túi tiền sinh viên",
      "Ăn no",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "hu-tieu"
    ],
    "sources": [
      {
        "label": "Foody: địa chỉ, món và thông tin tham khảo",
        "url": "https://www.foody.vn/ho-chi-minh/thanh-dat-hu-tiu-nam-vang-co-bac"
      }
    ],
    "checkedAt": "2026-11-27",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20Ti%E1%BA%BFu%20Nam%20Vang%20Th%C3%A0nh%20%C4%90%E1%BA%A1t%20%E2%80%94%20C%C3%B4%20B%E1%BA%AFc%2034%20C%C3%B4%20B%E1%BA%AFc%2C%20Qu%E1%BA%ADn%201%20TP.HCM",
    "curated": true,
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "hu-tieu-hong-phat-vo-van-tan",
    "name": "Hủ Tiếu Hồng Phát — Võ Văn Tần",
    "kind": "food",
    "area": "Quận 3",
    "address": "389 Võ Văn Tần, Quận 3, TP.HCM",
    "addressSource": "Foody — địa chỉ được công bố; chưa xác minh qua Google Places",
    "description": "Thêm một bữa hủ tiếu vào danh sách khám phá Quận 3. Đây là lựa chọn giá cao hơn quán hủ tiếu vỉa hè, nên xem menu trước để giữ kế hoạch chi tiêu.",
    "budgetMin": 70000,
    "budgetMax": 120000,
    "dishes": [
      "Hủ tiếu khô",
      "Hủ tiếu nước"
    ],
    "tags": [
      "Hợp túi tiền sinh viên",
      "Ăn no",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "hu-tieu",
      "mi"
    ],
    "sources": [
      {
        "label": "Foody: địa chỉ, món và thông tin tham khảo",
        "url": "https://www.foody.vn/ho-chi-minh/hu-tieu-hong-phat"
      }
    ],
    "checkedAt": "2026-11-27",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20Ti%E1%BA%BFu%20H%E1%BB%93ng%20Ph%C3%A1t%20%E2%80%94%20V%C3%B5%20V%C4%83n%20T%E1%BA%A7n%20389%20V%C3%B5%20V%C4%83n%20T%E1%BA%A7n%2C%20Qu%E1%BA%ADn%203%20TP.HCM",
    "curated": true,
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "hu-tieu-thanh-xuan-ton-that-thiep",
    "name": "Hủ Tiếu Thanh Xuân — Tôn Thất Thiệp",
    "kind": "food",
    "area": "Quận 1",
    "address": "62 Tôn Thất Thiệp, Quận 1, TP.HCM",
    "addressSource": "Foody — địa chỉ được công bố; chưa xác minh qua Google Places",
    "description": "Một điểm hủ tiếu để thử khi hai bạn hẹn nhau ở trung tâm. Hỏi rõ phần thường và phần có cua vì ngân sách có thể khác nhau.",
    "budgetMin": 45000,
    "budgetMax": 75000,
    "dishes": [
      "Hủ tiếu Mỹ Tho",
      "Hủ tiếu cua"
    ],
    "tags": [
      "Hợp túi tiền sinh viên",
      "Ăn no",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "hu-tieu"
    ],
    "sources": [
      {
        "label": "Foody: địa chỉ, món và thông tin tham khảo",
        "url": "https://www.foody.vn/ho-chi-minh/thanh-xuan-hu-tieu-my-tho"
      }
    ],
    "checkedAt": "2026-11-27",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20Ti%E1%BA%BFu%20Thanh%20Xu%C3%A2n%20%E2%80%94%20T%C3%B4n%20Th%E1%BA%A5t%20Thi%E1%BB%87p%2062%20T%C3%B4n%20Th%E1%BA%A5t%20Thi%E1%BB%87p%2C%20Qu%E1%BA%ADn%201%20TP.HCM",
    "curated": true,
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "thiem-huy-mi-gia-nguyen-trai",
    "name": "Thiêm Huy Mì Gia — Nguyễn Trãi",
    "kind": "food",
    "area": "Quận 5",
    "address": "455 Nguyễn Trãi, Quận 5, TP.HCM",
    "addressSource": "Tripadvisor — địa chỉ được công bố; chưa xác minh qua Google Places",
    "description": "Một bữa mì kiểu Hoa cho dịp muốn đổi món ở Chợ Lớn. Giá mì vịt tiềm có thể cao hơn các loại mì cơ bản, nên xem menu trước khi chọn.",
    "budgetMin": 65000,
    "budgetMax": 150000,
    "dishes": [
      "Mì vịt tiềm",
      "Mì kiểu Hoa"
    ],
    "tags": [
      "Hợp túi tiền sinh viên",
      "Ăn no",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "mi",
      "hoa"
    ],
    "sources": [
      {
        "label": "Tripadvisor: địa chỉ, món và thông tin tham khảo",
        "url": "https://www.tripadvisor.com.vn/Restaurant_Review-g293925-d6116640-Reviews-Thiem_Huy_Mi_Gia-Ho_Chi_Minh_City.html"
      }
    ],
    "checkedAt": "2026-11-27",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Thi%C3%AAm%20Huy%20M%C3%AC%20Gia%20%E2%80%94%20Nguy%E1%BB%85n%20Tr%C3%A3i%20455%20Nguy%E1%BB%85n%20Tr%C3%A3i%2C%20Qu%E1%BA%ADn%205%20TP.HCM",
    "curated": true,
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "hai-ky-mi-gia-nguyen-trai",
    "name": "Hải Ký Mì Gia — Nguyễn Trãi",
    "kind": "food",
    "area": "Quận 5",
    "address": "349–351 Nguyễn Trãi, Quận 5, TP.HCM",
    "addressSource": "Foody — địa chỉ được công bố; chưa xác minh qua Google Places",
    "description": "Lưu cho một bữa mì ở Chợ Lớn khi muốn ăn khác các món quen hằng ngày. Hỏi giá từng loại và phần vịt trước khi gọi để tránh vượt ngân sách.",
    "budgetMin": 60000,
    "budgetMax": 140000,
    "dishes": [
      "Mì vịt tiềm",
      "Hủ tiếu mì"
    ],
    "tags": [
      "Hợp túi tiền sinh viên",
      "Ăn no",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "mi",
      "hu-tieu",
      "hoa"
    ],
    "sources": [
      {
        "label": "Foody: địa chỉ, món và thông tin tham khảo",
        "url": "https://www.foody.vn/ho-chi-minh/hai-ky-mi-gia-nguyen-trai"
      }
    ],
    "checkedAt": "2026-11-27",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20K%C3%BD%20M%C3%AC%20Gia%20%E2%80%94%20Nguy%E1%BB%85n%20Tr%C3%A3i%20349%E2%80%93351%20Nguy%E1%BB%85n%20Tr%C3%A3i%2C%20Qu%E1%BA%ADn%205%20TP.HCM",
    "curated": true,
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "banh-mi-bay-ho-huynh-khuong-ninh",
    "name": "Bánh Mì Bảy Hổ — Huỳnh Khương Ninh",
    "kind": "food",
    "area": "Quận 1",
    "address": "25 Huỳnh Khương Ninh, Quận 1, TP.HCM",
    "addressSource": "Foody — địa chỉ được công bố; chưa xác minh qua Google Places",
    "description": "Gợi ý bánh mì mang đi cho buổi hẹn ngắn, nhẹ ví. Hai bạn có thể mua mỗi người một ổ rồi chọn nơi được phép ngồi ăn gần đó. Dự trù cho một ổ bánh mì/người.",
    "budgetMin": 25000,
    "budgetMax": 40000,
    "dishes": [
      "Bánh mì thịt"
    ],
    "tags": [
      "Hợp túi tiền sinh viên",
      "Ăn nhẹ",
      "Đi cùng nhau"
    ],
    "cuisineTags": [
      "banh-mi",
      "an-vat"
    ],
    "sources": [
      {
        "label": "Foody: địa chỉ, món và thông tin tham khảo",
        "url": "https://www.foody.vn/ho-chi-minh/banh-mi-bay-ho"
      }
    ],
    "checkedAt": "2026-11-27",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20M%C3%AC%20B%E1%BA%A3y%20H%E1%BB%95%20%E2%80%94%20Hu%E1%BB%B3nh%20Kh%C6%B0%C6%A1ng%20Ninh%2025%20Hu%E1%BB%B3nh%20Kh%C6%B0%C6%A1ng%20Ninh%2C%20Qu%E1%BA%ADn%201%20TP.HCM",
    "curated": true,
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "banh-mi-hong-hoa-nguyen-van-trang",
    "name": "Bánh Mì Hồng Hoa — Nguyễn Văn Tráng",
    "kind": "food",
    "area": "Quận 1",
    "address": "52–54 Nguyễn Văn Tráng, phường Bến Thành, TP.HCM",
    "addressSource": "Website Bánh Mì Hồng Hoa — địa chỉ được công bố; chưa xác minh qua Google Places",
    "description": "Bánh mì cho lịch hẹn gọn ở trung tâm, thuận tiện chọn phần mang đi. Giá tùy nhân và phần thêm, nên đối chiếu menu hiện tại của tiệm. Dự trù cho một ổ bánh mì/người.",
    "budgetMin": 30000,
    "budgetMax": 55000,
    "dishes": [
      "Bánh mì thịt"
    ],
    "tags": [
      "Hợp túi tiền sinh viên",
      "Ăn nhẹ",
      "Đi cùng nhau"
    ],
    "cuisineTags": [
      "banh-mi",
      "an-vat"
    ],
    "sources": [
      {
        "label": "Website Bánh Mì Hồng Hoa: địa chỉ, món và thông tin tham khảo",
        "url": "https://banhmihonghoa.com/"
      }
    ],
    "checkedAt": "2026-11-27",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20M%C3%AC%20H%E1%BB%93ng%20Hoa%20%E2%80%94%20Nguy%E1%BB%85n%20V%C4%83n%20Tr%C3%A1ng%2052%E2%80%9354%20Nguy%E1%BB%85n%20V%C4%83n%20Tr%C3%A1ng%2C%20ph%C6%B0%E1%BB%9Dng%20B%E1%BA%BFn%20Th%C3%A0nh%20TP.HCM",
    "curated": true,
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "banh-mi-hoa-ma-cao-thang",
    "name": "Bánh Mì Hòa Mã — Cao Thắng",
    "kind": "food",
    "area": "Quận 3",
    "address": "53 Cao Thắng, Quận 3, TP.HCM",
    "addressSource": "Foody — địa chỉ được công bố; chưa xác minh qua Google Places",
    "description": "Một bữa bánh mì chảo để hai bạn đổi kiểu ăn sáng. Dự trù thêm cho thức uống và món gọi riêng ngoài phần chảo cơ bản.",
    "budgetMin": 60000,
    "budgetMax": 95000,
    "dishes": [
      "Bánh mì chảo"
    ],
    "tags": [
      "Hợp túi tiền sinh viên",
      "Ăn no",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "banh-mi"
    ],
    "sources": [
      {
        "label": "Foody: địa chỉ, món và thông tin tham khảo",
        "url": "https://www.foody.vn/ho-chi-minh/banh-mi-hoa-ma"
      }
    ],
    "checkedAt": "2026-11-27",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20M%C3%AC%20H%C3%B2a%20M%C3%A3%20%E2%80%94%20Cao%20Th%E1%BA%AFng%2053%20Cao%20Th%E1%BA%AFng%2C%20Qu%E1%BA%ADn%203%20TP.HCM",
    "curated": true,
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "banh-mi-chao-co-3-hau",
    "name": "Bánh Mì Chảo Cô 3 Hậu",
    "kind": "food",
    "area": "Gò Vấp",
    "address": "36 Đường Số 18, Gò Vấp, TP.HCM",
    "addressSource": "Foody — địa chỉ được công bố; chưa xác minh qua Google Places",
    "description": "Lựa chọn bánh mì chảo ở Gò Vấp cho buổi hẹn giản dị. Xem số món trong từng phần trước khi gọi để chọn vừa sức ăn và túi tiền.",
    "budgetMin": 30000,
    "budgetMax": 60000,
    "dishes": [
      "Bánh mì chảo"
    ],
    "tags": [
      "Hợp túi tiền sinh viên",
      "Ăn no",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "banh-mi"
    ],
    "sources": [
      {
        "label": "Foody: địa chỉ, món và thông tin tham khảo",
        "url": "https://www.foody.vn/ho-chi-minh/banh-mi-chao-co-3-hau"
      }
    ],
    "checkedAt": "2026-11-27",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20M%C3%AC%20Ch%E1%BA%A3o%20C%C3%B4%203%20H%E1%BA%ADu%2036%20%C4%90%C6%B0%E1%BB%9Dng%20S%E1%BB%91%2018%2C%20G%C3%B2%20V%E1%BA%A5p%20TP.HCM",
    "curated": true,
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "banh-cuon-tay-ho-dinh-tien-hoang",
    "name": "Bánh Cuốn Tây Hồ — Đinh Tiên Hoàng",
    "kind": "food",
    "area": "Quận 1",
    "address": "127 Đinh Tiên Hoàng, Quận 1, TP.HCM",
    "addressSource": "Foody — địa chỉ được công bố; chưa xác minh qua Google Places",
    "description": "Lưu một bữa bánh cuốn cho lịch hẹn ăn sáng hoặc ăn nhẹ ở Đa Kao. Gọi phần vừa sức trước, rồi thêm chả hoặc món khác nếu cần.",
    "budgetMin": 50000,
    "budgetMax": 80000,
    "dishes": [
      "Bánh cuốn"
    ],
    "tags": [
      "Hợp túi tiền sinh viên",
      "Ăn no",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "banh-cuon"
    ],
    "sources": [
      {
        "label": "Foody: địa chỉ, món và thông tin tham khảo",
        "url": "https://www.foody.vn/ho-chi-minh/banh-cuon-tay-ho-dinh-tien-hoang"
      }
    ],
    "checkedAt": "2026-11-27",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20Cu%E1%BB%91n%20T%C3%A2y%20H%E1%BB%93%20%E2%80%94%20%C4%90inh%20Ti%C3%AAn%20Ho%C3%A0ng%20127%20%C4%90inh%20Ti%C3%AAn%20Ho%C3%A0ng%2C%20Qu%E1%BA%ADn%201%20TP.HCM",
    "curated": true,
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "banh-cuon-thien-huong-hoang-hoa-tham",
    "name": "Bánh Cuốn Thiên Hương — Hoàng Hoa Thám",
    "kind": "food",
    "area": "Tân Bình",
    "address": "154 Hoàng Hoa Thám, Tân Bình, TP.HCM",
    "addressSource": "Foody — địa chỉ được công bố; chưa xác minh qua Google Places",
    "description": "Một lựa chọn bánh cuốn, bánh ướt ở Tân Bình để ăn cùng nhau sau giờ học. Giá cần kiểm tra tại chi nhánh vì nguồn danh bạ chưa có bảng giá rõ.",
    "budgetMin": 30000,
    "budgetMax": 55000,
    "dishes": [
      "Bánh cuốn",
      "Bánh ướt"
    ],
    "tags": [
      "Hợp túi tiền sinh viên",
      "Ăn no",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "banh-cuon"
    ],
    "sources": [
      {
        "label": "Foody: địa chỉ, món và thông tin tham khảo",
        "url": "https://www.foody.vn/ho-chi-minh/banh-cuon-thien-huong-hoang-hoa-tham"
      },
      {
        "label": "Đối chiếu địa chỉ và phản hồi khách hàng",
        "url": "https://shopeefood.vn/ho-chi-minh/banh-cuon-thien-huong-hoang-hoa-tham"
      }
    ],
    "checkedAt": "2026-11-27",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20Cu%E1%BB%91n%20Thi%C3%AAn%20H%C6%B0%C6%A1ng%20%E2%80%94%20Ho%C3%A0ng%20Hoa%20Th%C3%A1m%20154%20Ho%C3%A0ng%20Hoa%20Th%C3%A1m%2C%20T%C3%A2n%20B%C3%ACnh%20TP.HCM",
    "curated": true,
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "banh-cuon-hong-hanh-nguyen-thi-minh-khai",
    "name": "Bánh Cuốn Hồng Hạnh — Nguyễn Thị Minh Khai",
    "kind": "food",
    "area": "Quận 1",
    "address": "17A Nguyễn Thị Minh Khai, Quận 1, TP.HCM",
    "addressSource": "Foody — địa chỉ được công bố; chưa xác minh qua Google Places",
    "description": "Phù hợp cho hai người thích gọi hai món khác nhau: bánh cuốn và một món bánh Huế. Dự trù trong thẻ dành cho phần cơ bản; gọi thêm sẽ tăng chi phí.",
    "budgetMin": 35000,
    "budgetMax": 60000,
    "dishes": [
      "Bánh cuốn",
      "Bánh cuốn trứng",
      "Bánh Huế"
    ],
    "tags": [
      "Hợp túi tiền sinh viên",
      "Ăn nhẹ",
      "Đi cùng nhau"
    ],
    "cuisineTags": [
      "banh-cuon",
      "an-vat"
    ],
    "sources": [
      {
        "label": "Foody: địa chỉ, món và thông tin tham khảo",
        "url": "https://www.foody.vn/ho-chi-minh/hong-hanh-banh-cuon-mon-hue"
      }
    ],
    "checkedAt": "2026-11-27",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20Cu%E1%BB%91n%20H%E1%BB%93ng%20H%E1%BA%A1nh%20%E2%80%94%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Minh%20Khai%2017A%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Minh%20Khai%2C%20Qu%E1%BA%ADn%201%20TP.HCM",
    "curated": true,
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "banh-xeo-an-la-ghien-tu-xuong",
    "name": "Bánh Xèo Ăn Là Ghiền — Tú Xương",
    "kind": "food",
    "area": "Quận 3",
    "address": "11A Tú Xương, Quận 3, TP.HCM",
    "addressSource": "Foody — địa chỉ được công bố; chưa xác minh qua Google Places",
    "description": "Để dành cho bữa hẹn muốn ngồi ăn bánh xèo và cuốn rau cùng nhau. Hai người nên hỏi kích thước bánh và giá nhân trước khi quyết định số lượng.",
    "budgetMin": 80000,
    "budgetMax": 140000,
    "dishes": [
      "Bánh xèo"
    ],
    "tags": [
      "Hợp túi tiền sinh viên",
      "Ăn no",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "banh-xeo"
    ],
    "sources": [
      {
        "label": "Foody: địa chỉ, món và thông tin tham khảo",
        "url": "https://www.foody.vn/ho-chi-minh/banh-xeo-an-la-ghien-tu-xuong"
      }
    ],
    "checkedAt": "2026-11-27",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20X%C3%A8o%20%C4%82n%20L%C3%A0%20Ghi%E1%BB%81n%20%E2%80%94%20T%C3%BA%20X%C6%B0%C6%A1ng%2011A%20T%C3%BA%20X%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%203%20TP.HCM",
    "curated": true,
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "bot-chien-dat-thanh-dia-chi-moi",
    "name": "Bột Chiên Đạt Thành — địa chỉ mới",
    "kind": "food",
    "area": "Quận 3",
    "address": "Hẻm 258/34 Võ Văn Tần, phường Bàn Cờ, TP.HCM",
    "addressSource": "Báo Thanh Niên — địa chỉ được công bố; chưa xác minh qua Google Places",
    "description": "Địa chỉ mới được báo ghi nhận tháng 10/2026, chủ yếu bán mang đi. Hợp mua phần bột chiên cho một buổi hẹn ăn vặt giản dị. Dự trù cho một phần ăn nhẹ/người.",
    "budgetMin": 35000,
    "budgetMax": 60000,
    "dishes": [
      "Bột chiên",
      "Nui chiên",
      "Bánh hẹ"
    ],
    "tags": [
      "Hợp túi tiền sinh viên",
      "Ăn nhẹ",
      "Đi cùng nhau"
    ],
    "cuisineTags": [
      "an-vat"
    ],
    "sources": [
      {
        "label": "Báo Thanh Niên: địa chỉ, món và thông tin tham khảo",
        "url": "https://thanhnien.vn/co-phai-quan-bot-chien-dat-thanh-o-tphcm-da-tro-lai-sau-thong-bao-dong-cua-185261027132338787.htm"
      }
    ],
    "checkedAt": "2026-11-27",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=B%E1%BB%99t%20Chi%C3%AAn%20%C4%90%E1%BA%A1t%20Th%C3%A0nh%20%E2%80%94%20%C4%91%E1%BB%8Ba%20ch%E1%BB%89%20m%E1%BB%9Bi%20H%E1%BA%BBm%20258/34%20V%C3%B5%20V%C4%83n%20T%E1%BA%A7n%2C%20ph%C6%B0%E1%BB%9Dng%20B%C3%A0n%20C%E1%BB%9D%20TP.HCM",
    "curated": true,
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "banh-trang-tron-chu-vien",
    "name": "Bánh Tráng Trộn Chú Viên",
    "kind": "food",
    "area": "Quận 3",
    "address": "38 Nguyễn Thượng Hiền, Quận 3, TP.HCM",
    "addressSource": "Foody — địa chỉ được công bố; chưa xác minh qua Google Places",
    "description": "Gợi ý mua bánh tráng trộn để chia nhau trong buổi hẹn ăn vặt. Chọn phần cơ bản trước; phần đặc biệt và topping sẽ làm tăng chi phí. Dự trù cho một phần ăn nhẹ/người.",
    "budgetMin": 30000,
    "budgetMax": 55000,
    "dishes": [
      "Bánh tráng trộn"
    ],
    "tags": [
      "Hợp túi tiền sinh viên",
      "Ăn nhẹ",
      "Đi cùng nhau"
    ],
    "cuisineTags": [
      "banh-trang",
      "an-vat"
    ],
    "sources": [
      {
        "label": "Foody: địa chỉ, món và thông tin tham khảo",
        "url": "https://www.foody.vn/ho-chi-minh/banh-trang-tron-chu-vien"
      }
    ],
    "checkedAt": "2026-11-27",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20Tr%C3%A1ng%20Tr%E1%BB%99n%20Ch%C3%BA%20Vi%C3%AAn%2038%20Nguy%E1%BB%85n%20Th%C6%B0%E1%BB%A3ng%20Hi%E1%BB%81n%2C%20Qu%E1%BA%ADn%203%20TP.HCM",
    "curated": true,
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "goi-kho-bo-cong-vien-le-van-tam",
    "name": "Gỏi Khô Bò — Công Viên Lê Văn Tám",
    "kind": "food",
    "area": "Quận 3",
    "address": "Vỉa hè 259A Hai Bà Trưng, đối diện công viên Lê Văn Tám, Quận 3, TP.HCM",
    "addressSource": "Foody — địa chỉ được công bố; chưa xác minh qua Google Places",
    "description": "Gợi ý một đĩa gỏi ăn nhẹ khi hai bạn hẹn đi dạo khu Lê Văn Tám. Đây là điểm vỉa hè; chỗ ngồi và cách phục vụ cần xem tại thời điểm đến. Dự trù cho một phần ăn nhẹ/người.",
    "budgetMin": 25000,
    "budgetMax": 45000,
    "dishes": [
      "Gỏi khô bò"
    ],
    "tags": [
      "Hợp túi tiền sinh viên",
      "Ăn nhẹ",
      "Đi cùng nhau"
    ],
    "cuisineTags": [
      "an-vat"
    ],
    "sources": [
      {
        "label": "Foody: địa chỉ, món và thông tin tham khảo",
        "url": "https://www.foody.vn/ho-chi-minh/goi-bo-kho"
      }
    ],
    "checkedAt": "2026-11-27",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=G%E1%BB%8Fi%20Kh%C3%B4%20B%C3%B2%20%E2%80%94%20C%C3%B4ng%20Vi%C3%AAn%20L%C3%AA%20V%C4%83n%20T%C3%A1m%20V%E1%BB%89a%20h%C3%A8%20259A%20Hai%20B%C3%A0%20Tr%C6%B0ng%2C%20%C4%91%E1%BB%91i%20di%E1%BB%87n%20c%C3%B4ng%20vi%C3%AAn%20L%C3%AA%20V%C4%83n%20T%C3%A1m%2C%20Qu%E1%BA%ADn%203%20TP.HCM",
    "curated": true,
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "che-ha-ky-chau-van-liem",
    "name": "Chè Hà Ký — Châu Văn Liêm",
    "kind": "dessert",
    "area": "Quận 5",
    "address": "138 Châu Văn Liêm, Quận 5, TP.HCM",
    "addressSource": "Báo VTC News — địa chỉ được công bố; chưa xác minh qua Google Places",
    "description": "Chọn mỗi người một món chè kiểu Hoa để thử và ghi lại món hợp khẩu vị. Dễ ghép với một buổi đi chơi Chợ Lớn. Dự trù cho một phần chè/người.",
    "budgetMin": 30000,
    "budgetMax": 60000,
    "dishes": [
      "Chè mè đen",
      "Chè hột gà",
      "Chè đậu"
    ],
    "tags": [
      "Hợp túi tiền sinh viên",
      "Tráng miệng",
      "Hẹn nhẹ nhàng"
    ],
    "cuisineTags": [
      "che",
      "hoa"
    ],
    "sources": [
      {
        "label": "Báo VTC News: địa chỉ, món và thông tin tham khảo",
        "url": "https://vtcnews.vn/kham-pha-quan-che-cua-nguoi-hoa-ngon-nuc-tieng-o-tp-hcm-ar872130.html"
      }
    ],
    "checkedAt": "2026-11-27",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20H%C3%A0%20K%C3%BD%20%E2%80%94%20Ch%C3%A2u%20V%C4%83n%20Li%C3%AAm%20138%20Ch%C3%A2u%20V%C4%83n%20Li%C3%AAm%2C%20Qu%E1%BA%ADn%205%20TP.HCM",
    "curated": true,
    "budgetNote": "Dự trù một đồ uống hoặc một phần ăn nhẹ/người; không phải chi phí một bữa ăn."
  },
  {
    "id": "che-tuong-phong-an-diem",
    "name": "Chè Tường Phong — An Điềm",
    "kind": "dessert",
    "area": "Quận 5",
    "address": "83 An Điềm, Quận 5, TP.HCM",
    "addressSource": "Báo VTC News — địa chỉ được công bố; chưa xác minh qua Google Places",
    "description": "Một điểm tráng miệng kiểu Hoa để hai người chia sẻ vài món mới. Chọn một phần mỗi người trước khi gọi thêm để buổi hẹn nhẹ bụng. Dự trù cho một phần chè/người.",
    "budgetMin": 25000,
    "budgetMax": 50000,
    "dishes": [
      "Chè bạch quả",
      "Chè đu đủ tiềm"
    ],
    "tags": [
      "Hợp túi tiền sinh viên",
      "Tráng miệng",
      "Hẹn nhẹ nhàng"
    ],
    "cuisineTags": [
      "che",
      "hoa"
    ],
    "sources": [
      {
        "label": "Báo VTC News: địa chỉ, món và thông tin tham khảo",
        "url": "https://vtcnews.vn/kham-pha-quan-che-cua-nguoi-hoa-ngon-nuc-tieng-o-tp-hcm-ar872130.html"
      }
    ],
    "checkedAt": "2026-11-27",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20T%C6%B0%E1%BB%9Dng%20Phong%20%E2%80%94%20An%20%C4%90i%E1%BB%81m%2083%20An%20%C4%90i%E1%BB%81m%2C%20Qu%E1%BA%ADn%205%20TP.HCM",
    "curated": true,
    "budgetNote": "Dự trù một đồ uống hoặc một phần ăn nhẹ/người; không phải chi phí một bữa ăn."
  },
  {
    "id": "che-chau-giang-che-cot-dien",
    "name": "Chè Châu Giang — Chè Cột Điện",
    "kind": "dessert",
    "area": "Quận 5",
    "address": "476 Trần Hưng Đạo B, Quận 5, TP.HCM",
    "addressSource": "Báo VTC News — địa chỉ được công bố; chưa xác minh qua Google Places",
    "description": "Ghé một hàng chè ở khu Chợ Lớn để kết thúc buổi hẹn bằng món ngọt. Hỏi món nóng hoặc lạnh đang có rồi chọn theo khẩu vị của hai người. Dự trù cho một phần chè/người.",
    "budgetMin": 25000,
    "budgetMax": 50000,
    "dishes": [
      "Chè hột gà trà",
      "Chè mè đen"
    ],
    "tags": [
      "Hợp túi tiền sinh viên",
      "Tráng miệng",
      "Hẹn nhẹ nhàng"
    ],
    "cuisineTags": [
      "che",
      "hoa"
    ],
    "sources": [
      {
        "label": "Báo VTC News: địa chỉ, món và thông tin tham khảo",
        "url": "https://vtcnews.vn/kham-pha-quan-che-cua-nguoi-hoa-ngon-nuc-tieng-o-tp-hcm-ar872130.html"
      }
    ],
    "checkedAt": "2026-11-27",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Ch%C3%A2u%20Giang%20%E2%80%94%20Ch%C3%A8%20C%E1%BB%99t%20%C4%90i%E1%BB%87n%20476%20Tr%E1%BA%A7n%20H%C6%B0ng%20%C4%90%E1%BA%A1o%20B%2C%20Qu%E1%BA%ADn%205%20TP.HCM",
    "curated": true,
    "budgetNote": "Dự trù một đồ uống hoặc một phần ăn nhẹ/người; không phải chi phí một bữa ăn."
  },
  {
    "id": "che-ky-dong",
    "name": "Chè Kỳ Đồng",
    "kind": "dessert",
    "area": "Quận 3",
    "address": "16C Kỳ Đồng, Quận 3, TP.HCM",
    "addressSource": "Foody — địa chỉ được công bố; chưa xác minh qua Google Places",
    "description": "Một buổi hẹn nhẹ với chè trên đường Kỳ Đồng. Chọn một phần vừa đủ, rồi ghi lại mức ngọt và món yêu thích cho lần gặp tiếp theo. Dự trù cho một phần chè/người.",
    "budgetMin": 25000,
    "budgetMax": 50000,
    "dishes": [
      "Chè",
      "Sương sáo",
      "Nhãn củ năng"
    ],
    "tags": [
      "Hợp túi tiền sinh viên",
      "Tráng miệng",
      "Hẹn nhẹ nhàng"
    ],
    "cuisineTags": [
      "che"
    ],
    "sources": [
      {
        "label": "Foody: địa chỉ, món và thông tin tham khảo",
        "url": "https://www.foody.vn/ho-chi-minh/che-ky-dong"
      }
    ],
    "checkedAt": "2026-11-27",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20K%E1%BB%B3%20%C4%90%E1%BB%93ng%2016C%20K%E1%BB%B3%20%C4%90%E1%BB%93ng%2C%20Qu%E1%BA%ADn%203%20TP.HCM",
    "curated": true,
    "budgetNote": "Dự trù một đồ uống hoặc một phần ăn nhẹ/người; không phải chi phí một bữa ăn."
  },
  {
    "id": "che-hien-khanh",
    "name": "Chè Hiển Khánh",
    "kind": "dessert",
    "area": "Quận 3",
    "address": "718 Nguyễn Đình Chiểu, Quận 3, TP.HCM",
    "addressSource": "Foody — địa chỉ được công bố; chưa xác minh qua Google Places",
    "description": "Gợi ý món ngọt để kết thúc buổi đi chơi Quận 3. Có thể hỏi món chè và bánh ăn kèm đang bán trước khi gọi. Dự trù cho một phần chè/người.",
    "budgetMin": 25000,
    "budgetMax": 50000,
    "dishes": [
      "Chè thạch trắng",
      "Chè đậu",
      "Chè hạt sen"
    ],
    "tags": [
      "Hợp túi tiền sinh viên",
      "Tráng miệng",
      "Hẹn nhẹ nhàng"
    ],
    "cuisineTags": [
      "che"
    ],
    "sources": [
      {
        "label": "Foody: địa chỉ, món và thông tin tham khảo",
        "url": "https://www.foody.vn/ho-chi-minh/che-hien-khanh"
      }
    ],
    "checkedAt": "2026-11-27",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Hi%E1%BB%83n%20Kh%C3%A1nh%20718%20Nguy%E1%BB%85n%20%C4%90%C3%ACnh%20Chi%E1%BB%83u%2C%20Qu%E1%BA%ADn%203%20TP.HCM",
    "curated": true,
    "budgetNote": "Dự trù một đồ uống hoặc một phần ăn nhẹ/người; không phải chi phí một bữa ăn."
  },
  {
    "id": "che-thanh-tam-phan-van-tri",
    "name": "Chè Thanh Tâm — Phan Văn Trị",
    "kind": "dessert",
    "area": "Quận 5",
    "address": "528 Phan Văn Trị, Quận 5, TP.HCM",
    "addressSource": "Foody — địa chỉ được công bố; chưa xác minh qua Google Places",
    "description": "Thêm một điểm chè kiểu Hoa để tự tìm món hợp khẩu vị trong khu Quận 5. Dễ ghép làm món tráng miệng sau bữa mì hoặc sủi cảo. Dự trù cho một phần chè/người.",
    "budgetMin": 30000,
    "budgetMax": 60000,
    "dishes": [
      "Chè kiểu Hoa"
    ],
    "tags": [
      "Hợp túi tiền sinh viên",
      "Tráng miệng",
      "Hẹn nhẹ nhàng"
    ],
    "cuisineTags": [
      "che",
      "hoa"
    ],
    "sources": [
      {
        "label": "Foody: địa chỉ, món và thông tin tham khảo",
        "url": "https://www.foody.vn/ho-chi-minh/che-thanh-tam"
      }
    ],
    "checkedAt": "2026-11-27",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Thanh%20T%C3%A2m%20%E2%80%94%20Phan%20V%C4%83n%20Tr%E1%BB%8B%20528%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20Qu%E1%BA%ADn%205%20TP.HCM",
    "curated": true,
    "budgetNote": "Dự trù một đồ uống hoặc một phần ăn nhẹ/người; không phải chi phí một bữa ăn."
  },
  {
    "id": "cheo-leo-cafe",
    "name": "Cheo Leo Cafe",
    "kind": "coffee",
    "area": "Quận 3",
    "address": "109/36 Nguyễn Thiện Thuật, Phường 2, Quận 3, TP.HCM",
    "addressSource": "Foody · Cheo Leo Cafe · chưa xác minh trực tiếp bằng Google Places",
    "description": "Cà phê vợt trong con hẻm Nguyễn Thiện Thuật, dễ ghép với một bữa ăn bình dân ở Quận 3. Chọn một ly mỗi người để giữ buổi hẹn gọn chi phí.",
    "budgetMin": 20000,
    "budgetMax": 40000,
    "dishes": [
      "Cà phê vợt",
      "Cà phê sữa"
    ],
    "tags": [
      "Sinh viên",
      "Trong hẻm",
      "Cà phê truyền thống"
    ],
    "cuisineTags": [
      "ca-phe"
    ],
    "sources": [
      {
        "label": "Foody · Cheo Leo Cafe",
        "url": "https://www.foody.vn/ho-chi-minh/cheo-leo-cafe"
      }
    ],
    "checkedAt": "2026-11-27",
    "curated": true,
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Cheo%20Leo%20Cafe%20109/36%20Nguy%E1%BB%85n%20Thi%E1%BB%87n%20Thu%E1%BA%ADt%2C%20Ph%C6%B0%E1%BB%9Dng%202%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM",
    "budgetNote": "Dự trù một đồ uống hoặc một phần ăn nhẹ/người; không phải chi phí một bữa ăn."
  },
  {
    "id": "ca-phe-vot-ba-lu",
    "name": "Cà phê vợt Ba Lù",
    "kind": "coffee",
    "area": "Quận 5",
    "address": "193 Phùng Hưng, Phường 14, Quận 5, TP.HCM",
    "addressSource": "Foody · Cà phê vợt Ba Lù · chưa xác minh trực tiếp bằng Google Places",
    "description": "Ghé uống cà phê kiểu Chợ Lớn trước khi đi dạo hoặc tìm món Hoa quanh khu chợ. Phù hợp buổi hẹn đời thường, ngắn và ít tốn tiền.",
    "budgetMin": 15000,
    "budgetMax": 40000,
    "dishes": [
      "Cà phê vợt",
      "Cà phê sữa"
    ],
    "tags": [
      "Sinh viên",
      "Chợ Lớn",
      "Hẹn nhanh"
    ],
    "cuisineTags": [
      "ca-phe"
    ],
    "sources": [
      {
        "label": "Foody · Cà phê vợt Ba Lù",
        "url": "https://www.foody.vn/ho-chi-minh/ca-phe-vot-ba-lu-193-phung-hung"
      },
      {
        "label": "Dân Trí · quán cà phê pha bằng vợt",
        "url": "https://dantri.com.vn/van-hoa/doc-dao-quan-ca-phe-pha-bang-vot-mo-cua-tu-2-h-sang-o-sai-gon-20210130105312137.htm"
      }
    ],
    "checkedAt": "2026-11-27",
    "curated": true,
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=C%C3%A0%20ph%C3%AA%20v%E1%BB%A3t%20Ba%20L%C3%B9%20193%20Ph%C3%B9ng%20H%C6%B0ng%2C%20Ph%C6%B0%E1%BB%9Dng%2014%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "budgetNote": "Dự trù một đồ uống hoặc một phần ăn nhẹ/người; không phải chi phí một bữa ăn."
  },
  {
    "id": "ca-phe-do-phu-dang-dung",
    "name": "Cà phê Đỗ Phủ · Đặng Dung",
    "kind": "coffee",
    "area": "Quận 1",
    "address": "113A Đặng Dung, phường Tân Định, TP.HCM",
    "addressSource": "VOV · cà phê và chứng tích lịch sử · chưa xác minh trực tiếp bằng Google Places",
    "description": "Một buổi cà phê có thêm câu chuyện về Sài Gòn, hợp hai bạn thích những địa điểm gắn với lịch sử. Có thể kết hợp tham quan và một phần cơm tấm nếu còn ngân sách.",
    "budgetMin": 35000,
    "budgetMax": 85000,
    "dishes": [
      "Cà phê vợt",
      "Cơm tấm"
    ],
    "tags": [
      "Sinh viên",
      "Hoài niệm",
      "Có câu chuyện"
    ],
    "cuisineTags": [
      "ca-phe",
      "com-tam"
    ],
    "sources": [
      {
        "label": "VOV · cà phê và chứng tích lịch sử",
        "url": "https://vov.gov.vn/doc-dao-uong-ca-phe-kham-pha-chung-tich-huyen-thoai-dtnew-1079194?keyDevice=true"
      },
      {
        "label": "Trường Mầm non Cô Giang · chuyến tham quan 2026",
        "url": "https://mncogiang.hcm.edu.vn/tin-tuc-su-kien/chi-bo-truong-mam-non-co-giang-hanh-trinh-ve-dia-chi-do-boi-dap-truyen-thong-ca/ct/15285/902493"
      }
    ],
    "checkedAt": "2026-11-27",
    "curated": true,
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=C%C3%A0%20ph%C3%AA%20%C4%90%E1%BB%97%20Ph%E1%BB%A7%20%C2%B7%20%C4%90%E1%BA%B7ng%20Dung%20113A%20%C4%90%E1%BA%B7ng%20Dung%2C%20ph%C6%B0%E1%BB%9Dng%20T%C3%A2n%20%C4%90%E1%BB%8Bnh%2C%20TP.HCM",
    "budgetNote": "Dự trù một đồ uống hoặc một phần ăn nhẹ/người; không phải chi phí một bữa ăn."
  },
  {
    "id": "phuc-long-ngo-duc-ke",
    "name": "Phúc Long · Ngô Đức Kế",
    "kind": "drinks",
    "area": "Quận 1",
    "address": "42 Ngô Đức Kế, phường Sài Gòn, TP.HCM",
    "addressSource": "Phúc Long · danh sách cửa hàng chính thức · chưa xác minh trực tiếp bằng Google Places",
    "description": "Điểm uống trà tiện ghép với đi bộ Nguyễn Huệ. Một ly mỗi người là cách dễ kiểm soát tiền cho buổi hẹn ở trung tâm; kiểm tra chỗ ngồi khi đến.",
    "budgetMin": 45000,
    "budgetMax": 90000,
    "dishes": [
      "Trà",
      "Trà sữa",
      "Cà phê"
    ],
    "tags": [
      "Sinh viên",
      "Gần phố đi bộ",
      "Một ly mỗi người"
    ],
    "cuisineTags": [
      "tra-sua",
      "ca-phe",
      "do-uong"
    ],
    "sources": [
      {
        "label": "Phúc Long · danh sách cửa hàng chính thức",
        "url": "https://phuclong.com.vn/khuyen-mai/phuc-long-tu-hao-ra-mat-bst-quai-xach-ly-tron-mot-viet-nam-20260421092626"
      }
    ],
    "checkedAt": "2026-11-27",
    "curated": true,
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ph%C3%BAc%20Long%20%C2%B7%20Ng%C3%B4%20%C4%90%E1%BB%A9c%20K%E1%BA%BF%2042%20Ng%C3%B4%20%C4%90%E1%BB%A9c%20K%E1%BA%BF%2C%20ph%C6%B0%E1%BB%9Dng%20S%C3%A0i%20G%C3%B2n%2C%20TP.HCM",
    "budgetNote": "Dự trù một đồ uống hoặc một phần ăn nhẹ/người; không phải chi phí một bữa ăn."
  },
  {
    "id": "katinat-dong-khoi",
    "name": "KATINAT · Đồng Khởi",
    "kind": "drinks",
    "area": "Quận 1",
    "address": "91 Đồng Khởi, Phường Bến Nghé, Quận 1, TP.HCM",
    "addressSource": "ShopeeFood · KATINAT Đồng Khởi · chưa xác minh trực tiếp bằng Google Places",
    "description": "Một điểm trà và cà phê cho buổi hẹn quanh Đồng Khởi. Dễ thêm vào lịch đi dạo trung tâm; chọn đồ uống trước để không vượt ngân sách vì món thêm.",
    "budgetMin": 50000,
    "budgetMax": 100000,
    "dishes": [
      "Trà",
      "Trà sữa",
      "Cà phê"
    ],
    "tags": [
      "Trung tâm",
      "Gần phố đi bộ",
      "Một ly mỗi người"
    ],
    "cuisineTags": [
      "tra-sua",
      "ca-phe",
      "do-uong"
    ],
    "sources": [
      {
        "label": "ShopeeFood · KATINAT Đồng Khởi",
        "url": "https://shopeefood.vn/ho-chi-minh/katinat-dong-khoi"
      }
    ],
    "checkedAt": "2026-11-27",
    "curated": true,
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=KATINAT%20%C2%B7%20%C4%90%E1%BB%93ng%20Kh%E1%BB%9Fi%2091%20%C4%90%E1%BB%93ng%20Kh%E1%BB%9Fi%2C%20Ph%C6%B0%E1%BB%9Dng%20B%E1%BA%BFn%20Ngh%C3%A9%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM",
    "budgetNote": "Dự trù một đồ uống hoặc một phần ăn nhẹ/người; không phải chi phí một bữa ăn."
  },
  {
    "id": "phe-la-dong-den",
    "name": "Phê La · Đồng Đen",
    "kind": "drinks",
    "area": "Tân Bình",
    "address": "103 Đồng Đen, Phường 12, Tân Bình, TP.HCM",
    "addressSource": "ShopeeFood · danh sách chi nhánh Phê La · chưa xác minh trực tiếp bằng Google Places",
    "description": "Lựa chọn trà ở Tân Bình cho hôm hai bạn muốn hẹn gần nhà. Gọi một ly trà hoặc trà sữa rồi ghép với bữa ăn quanh khu Bàu Cát.",
    "budgetMin": 45000,
    "budgetMax": 85000,
    "dishes": [
      "Trà ô long",
      "Trà sữa"
    ],
    "tags": [
      "Sinh viên",
      "Hẹn gần nhà",
      "Trà"
    ],
    "cuisineTags": [
      "tra-sua",
      "do-uong"
    ],
    "sources": [
      {
        "label": "ShopeeFood · danh sách chi nhánh Phê La",
        "url": "https://shopeefood.vn/thuong-hieu/phe-la"
      },
      {
        "label": "beFood · Phê La",
        "url": "https://food.be.com.vn/ho-chi-minh/brand/phe-la-382"
      }
    ],
    "checkedAt": "2026-11-27",
    "curated": true,
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ph%C3%AA%20La%20%C2%B7%20%C4%90%E1%BB%93ng%20%C4%90en%20103%20%C4%90%E1%BB%93ng%20%C4%90en%2C%20Ph%C6%B0%E1%BB%9Dng%2012%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM",
    "budgetNote": "Dự trù một đồ uống hoặc một phần ăn nhẹ/người; không phải chi phí một bữa ăn."
  },
  {
    "id": "cong-ca-phe-ly-tu-trong",
    "name": "Cộng Cà Phê · Lý Tự Trọng",
    "kind": "coffee",
    "area": "Quận 1",
    "address": "Tầng 1, chung cư 26 Lý Tự Trọng, Phường Bến Nghé, Quận 1, TP.HCM",
    "addressSource": "ShopeeFood · Cộng Cà Phê Lý Tự Trọng · chưa xác minh trực tiếp bằng Google Places",
    "description": "Cà phê trong chung cư cũ, thích hợp một điểm nghỉ giữa lịch đi bộ trung tâm. Nhớ xem lối lên tầng trước khi hẹn để hai người dễ tìm nhau.",
    "budgetMin": 45000,
    "budgetMax": 90000,
    "dishes": [
      "Cà phê",
      "Đồ uống"
    ],
    "tags": [
      "Chung cư",
      "Hoài niệm",
      "Hẹn nhanh"
    ],
    "cuisineTags": [
      "ca-phe",
      "do-uong"
    ],
    "sources": [
      {
        "label": "ShopeeFood · Cộng Cà Phê Lý Tự Trọng",
        "url": "https://shopeefood.vn/ho-chi-minh/cong-ca-phe-saigon-ly-tu-trong"
      }
    ],
    "checkedAt": "2026-11-27",
    "curated": true,
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=C%E1%BB%99ng%20C%C3%A0%20Ph%C3%AA%20%C2%B7%20L%C3%BD%20T%E1%BB%B1%20Tr%E1%BB%8Dng%20T%E1%BA%A7ng%201%2C%20chung%20c%C6%B0%2026%20L%C3%BD%20T%E1%BB%B1%20Tr%E1%BB%8Dng%2C%20Ph%C6%B0%E1%BB%9Dng%20B%E1%BA%BFn%20Ngh%C3%A9%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM",
    "budgetNote": "Dự trù một đồ uống hoặc một phần ăn nhẹ/người; không phải chi phí một bữa ăn."
  },
  {
    "id": "du-mien-garden",
    "name": "Du Miên Garden Cafe",
    "kind": "coffee",
    "area": "Gò Vấp",
    "address": "7 Phan Văn Trị, Phường 10, Gò Vấp, TP.HCM",
    "addressSource": "Báo Công Thương · Du Miên Garden · chưa xác minh trực tiếp bằng Google Places",
    "description": "Một buổi hẹn cà phê sân vườn ở Gò Vấp cho hai bạn thích cây xanh và nhiều góc ngắm. Mức dự trù dành cho đồ uống; gọi thêm đồ ăn cần tính riêng.",
    "budgetMin": 50000,
    "budgetMax": 100000,
    "dishes": [
      "Cà phê",
      "Đồ uống"
    ],
    "tags": [
      "Sân vườn",
      "Gò Vấp",
      "Đi chơi ban ngày"
    ],
    "cuisineTags": [
      "ca-phe",
      "do-uong"
    ],
    "sources": [
      {
        "label": "Báo Công Thương · Du Miên Garden",
        "url": "https://congthuong.vn/kham-pha-du-mien-garden-quan-ca-phe-san-vuon-dep-bac-nhat-tp-ho-chi-minh-289196.html"
      }
    ],
    "checkedAt": "2026-11-27",
    "curated": true,
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Du%20Mi%C3%AAn%20Garden%20Cafe%207%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20Ph%C6%B0%E1%BB%9Dng%2010%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM",
    "budgetNote": "Dự trù một đồ uống hoặc một phần ăn nhẹ/người; không phải chi phí một bữa ăn."
  },
  {
    "id": "country-houses-cafe",
    "name": "Country Houses Cafe",
    "kind": "coffee",
    "area": "Gò Vấp",
    "address": "18C Phan Văn Trị, Phường 10, Gò Vấp, TP.HCM",
    "addressSource": "Tripadvisor · Country Houses Cafe · chưa xác minh trực tiếp bằng Google Places",
    "description": "Quán cà phê ở Phan Văn Trị để hẹn cuối tuần tại Gò Vấp. Hợp lịch một đồ uống rồi đi ăn gần đó, giúp hai bạn chia ngân sách thành từng chặng.",
    "budgetMin": 50000,
    "budgetMax": 100000,
    "dishes": [
      "Cà phê",
      "Đồ uống"
    ],
    "tags": [
      "Hẹn gần nhà",
      "Gò Vấp",
      "Một ly mỗi người"
    ],
    "cuisineTags": [
      "ca-phe",
      "do-uong"
    ],
    "sources": [
      {
        "label": "Tripadvisor · Country Houses Cafe",
        "url": "https://www.tripadvisor.com.vn/Restaurant_Review-g293925-d9702145-Reviews-Country_Houses_Cafe-Ho_Chi_Minh_City.html"
      }
    ],
    "checkedAt": "2026-11-27",
    "curated": true,
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Country%20Houses%20Cafe%2018C%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20Ph%C6%B0%E1%BB%9Dng%2010%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM",
    "budgetNote": "Dự trù một đồ uống hoặc một phần ăn nhẹ/người; không phải chi phí một bữa ăn."
  },
  {
    "id": "soi-da-cafe-ngo-thoi-nhiem",
    "name": "Sỏi Đá Cafe · Ngô Thời Nhiệm",
    "kind": "coffee",
    "area": "Quận 3",
    "address": "6B Ngô Thời Nhiệm, Quận 3, TP.HCM",
    "addressSource": "Riviu · Sỏi Đá Cafe · chưa xác minh trực tiếp bằng Google Places",
    "description": "Một điểm cà phê phong cách mộc ở Quận 3. Có thể xếp sau bữa trưa để hai bạn ngồi nói chuyện, với dự trù vừa phải nếu chỉ gọi nước.",
    "budgetMin": 45000,
    "budgetMax": 95000,
    "dishes": [
      "Cà phê",
      "Trà",
      "Nước ép"
    ],
    "tags": [
      "Phong cách mộc",
      "Hẹn ban ngày",
      "Một ly mỗi người"
    ],
    "cuisineTags": [
      "ca-phe",
      "do-uong"
    ],
    "sources": [
      {
        "label": "Riviu · Sỏi Đá Cafe",
        "url": "https://riviu.vn/soi-da-cafe-ngo-thoi-nhiem"
      },
      {
        "label": "Trang Vàng · Quán Cà Phê Sỏi Đá",
        "url": "https://www.trangvangvietnam.com/listings/1117467/quan-ca-phe-soi-da.html"
      },
      {
        "label": "Foody · Sỏi Đá Ngô Thời Nhiệm",
        "url": "https://www.foody.vn/ho-chi-minh/soi-da-cafe-ngo-thoi-nhiem"
      }
    ],
    "checkedAt": "2026-11-27",
    "curated": true,
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=S%E1%BB%8Fi%20%C4%90%C3%A1%20Cafe%20%C2%B7%20Ng%C3%B4%20Th%E1%BB%9Di%20Nhi%E1%BB%87m%206B%20Ng%C3%B4%20Th%E1%BB%9Di%20Nhi%E1%BB%87m%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM",
    "budgetNote": "Dự trù một đồ uống hoặc một phần ăn nhẹ/người; không phải chi phí một bữa ăn."
  },
  {
    "id": "sai-gon-oi-cafe",
    "name": "Sài Gòn Ơi Cafe",
    "kind": "coffee",
    "area": "Quận 1",
    "address": "Lầu 5, chung cư 42 Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP.HCM",
    "addressSource": "Sài Gòn Ơi · website chính thức · chưa xác minh trực tiếp bằng Google Places",
    "description": "Cà phê trên chung cư Nguyễn Huệ, hợp buổi hẹn đi bộ rồi ngồi nghỉ. Hai bạn có thể dành ngân sách cho một ly và cùng ngắm nhịp phố từ trên cao.",
    "budgetMin": 55000,
    "budgetMax": 100000,
    "dishes": [
      "Cà phê",
      "Bánh ngọt"
    ],
    "tags": [
      "Chung cư",
      "Gần phố đi bộ",
      "Hẹn nhẹ nhàng"
    ],
    "cuisineTags": [
      "ca-phe",
      "banh-ngot"
    ],
    "sources": [
      {
        "label": "Sài Gòn Ơi · website chính thức",
        "url": "https://saigonoicafe.com/vi/"
      }
    ],
    "checkedAt": "2026-11-27",
    "curated": true,
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=S%C3%A0i%20G%C3%B2n%20%C6%A0i%20Cafe%20L%E1%BA%A7u%205%2C%20chung%20c%C6%B0%2042%20Nguy%E1%BB%85n%20Hu%E1%BB%87%2C%20Ph%C6%B0%E1%BB%9Dng%20B%E1%BA%BFn%20Ngh%C3%A9%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM",
    "budgetNote": "Dự trù một đồ uống hoặc một phần ăn nhẹ/người; không phải chi phí một bữa ăn."
  },
  {
    "id": "little-hanoi-egg-coffee-yersin",
    "name": "Little HaNoi Egg Coffee · Yersin",
    "kind": "coffee",
    "area": "Quận 1",
    "address": "119/5 Yersin, Phường Phạm Ngũ Lão, Quận 1, TP.HCM",
    "addressSource": "RMIT · cẩm nang cho sinh viên quốc tế · chưa xác minh trực tiếp bằng Google Places",
    "description": "Thử cà phê trứng trong một buổi hẹn ngắn ở trung tâm. Nếu hai bạn muốn ăn sáng kèm theo, nên xem thực đơn trước để tách tiền ăn và tiền cà phê.",
    "budgetMin": 50000,
    "budgetMax": 100000,
    "dishes": [
      "Cà phê trứng",
      "Cà phê"
    ],
    "tags": [
      "Cà phê trứng",
      "Trong hẻm",
      "Hẹn ban ngày"
    ],
    "cuisineTags": [
      "ca-phe"
    ],
    "sources": [
      {
        "label": "RMIT · cẩm nang cho sinh viên quốc tế",
        "url": "https://www.rmit.edu.vn/content/dam/rmit/vn/en/assets-for-production/documents/pdfs/study-at-rmit/international-students/pre-departure-guide-for-study-abroad-students.pdf"
      }
    ],
    "checkedAt": "2026-11-27",
    "curated": true,
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Little%20HaNoi%20Egg%20Coffee%20%C2%B7%20Yersin%20119/5%20Yersin%2C%20Ph%C6%B0%E1%BB%9Dng%20Ph%E1%BA%A1m%20Ng%C5%A9%20L%C3%A3o%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM",
    "budgetNote": "Dự trù một đồ uống hoặc một phần ăn nhẹ/người; không phải chi phí một bữa ăn."
  },
  {
    "id": "la-viet-hai-ba-trung",
    "name": "Là Việt Coffee · Hai Bà Trưng",
    "kind": "coffee",
    "area": "Quận 3",
    "address": "193/7 Hai Bà Trưng, phường Xuân Hòa, TP.HCM",
    "addressSource": "Là Việt · hệ thống quán chính thức · chưa xác minh trực tiếp bằng Google Places",
    "description": "Một lựa chọn cho hai bạn muốn tập trung vào cà phê và trò chuyện. Quán nằm trong hẻm; lưu đúng số 193/7 để đến đúng điểm hẹn.",
    "budgetMin": 50000,
    "budgetMax": 100000,
    "dishes": [
      "Cà phê"
    ],
    "tags": [
      "Trong hẻm",
      "Thử cà phê",
      "Hẹn nhẹ nhàng"
    ],
    "cuisineTags": [
      "ca-phe"
    ],
    "sources": [
      {
        "label": "Là Việt · hệ thống quán chính thức",
        "url": "https://laviet.coffee/tu-chung-toi/"
      }
    ],
    "checkedAt": "2026-11-27",
    "curated": true,
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=L%C3%A0%20Vi%E1%BB%87t%20Coffee%20%C2%B7%20Hai%20B%C3%A0%20Tr%C6%B0ng%20193/7%20Hai%20B%C3%A0%20Tr%C6%B0ng%2C%20ph%C6%B0%E1%BB%9Dng%20Xu%C3%A2n%20H%C3%B2a%2C%20TP.HCM",
    "budgetNote": "Dự trù một đồ uống hoặc một phần ăn nhẹ/người; không phải chi phí một bữa ăn."
  },
  {
    "id": "kem-nhan-chu-tam",
    "name": "Kem Nhãn Chú Tám",
    "kind": "dessert",
    "area": "Quận 1",
    "address": "2 Trương Hán Siêu, Phường Đa Kao, Quận 1, TP.HCM",
    "addressSource": "Riviu · Kem Nhãn Chú Tám · chưa xác minh trực tiếp bằng Google Places",
    "description": "Thêm một ly kem nhãn vào cuối buổi hẹn mà không cần đặt cả bàn tráng miệng đắt tiền. Hợp lúc hai bạn muốn ăn ngọt và ghé nhanh quanh Đa Kao.",
    "budgetMin": 25000,
    "budgetMax": 70000,
    "dishes": [
      "Kem nhãn",
      "Kem dừa"
    ],
    "tags": [
      "Sinh viên",
      "Tráng miệng",
      "Hẹn nhanh"
    ],
    "cuisineTags": [
      "kem"
    ],
    "sources": [
      {
        "label": "Riviu · Kem Nhãn Chú Tám",
        "url": "https://riviu.vn/kem-nhan-chu-tam-truong-han-sieu"
      },
      {
        "label": "Tuổi Trẻ · ăn gì ở khu chợ Đa Kao",
        "url": "https://tuoitre.vn/dulichtphcm/news-1075717.htm"
      }
    ],
    "checkedAt": "2026-11-27",
    "curated": true,
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Kem%20Nh%C3%A3n%20Ch%C3%BA%20T%C3%A1m%202%20Tr%C6%B0%C6%A1ng%20H%C3%A1n%20Si%C3%AAu%2C%20Ph%C6%B0%E1%BB%9Dng%20%C4%90a%20Kao%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM",
    "budgetNote": "Dự trù một đồ uống hoặc một phần ăn nhẹ/người; không phải chi phí một bữa ăn."
  },
  {
    "id": "oromia-nam-ky-khoi-nghia",
    "name": "Oromia Coffee & Lounge",
    "kind": "coffee",
    "area": "Quận 3",
    "address": "193A/D3 Nam Kỳ Khởi Nghĩa, Quận 3, TP.HCM",
    "addressSource": "Tripadvisor · Oromia Coffee & Lounge · chưa xác minh trực tiếp bằng Google Places",
    "description": "Một quán cà phê trong hẻm để hai bạn tách khỏi nhịp đường lớn và ngồi nói chuyện. Giữ dự trù ở mức một ly; ăn bánh hoặc gọi thêm món cần cộng riêng.",
    "budgetMin": 50000,
    "budgetMax": 100000,
    "dishes": [
      "Cà phê",
      "Bánh ngọt"
    ],
    "tags": [
      "Trong hẻm",
      "Hẹn nhẹ nhàng",
      "Một ly mỗi người"
    ],
    "cuisineTags": [
      "ca-phe",
      "banh-ngot"
    ],
    "sources": [
      {
        "label": "Tripadvisor · Oromia Coffee & Lounge",
        "url": "https://www.tripadvisor.com/Restaurant_Review-g293925-d7593120-Reviews-Oromia_Coffee_Lounge-Ho_Chi_Minh_City.html"
      },
      {
        "label": "Foody · Oromia Nam Kỳ Khởi Nghĩa",
        "url": "https://www.foody.vn/ho-chi-minh/oromia-coffee-nam-ky-khoi-nghia"
      }
    ],
    "checkedAt": "2026-11-27",
    "curated": true,
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Oromia%20Coffee%20%26%20Lounge%20193A/D3%20Nam%20K%E1%BB%B3%20Kh%E1%BB%9Fi%20Ngh%C4%A9a%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM",
    "budgetNote": "Dự trù một đồ uống hoặc một phần ăn nhẹ/người; không phải chi phí một bữa ăn."
  },
  {
    "id": "ba-co-loc-coc",
    "name": "Bà Cô Lốc Cốc",
    "kind": "food",
    "area": "Quận 3",
    "address": "40A Trần Cao Vân, phường Xuân Hòa, TP.HCM",
    "addressSource": "MICHELIN Guide · Bà Cô Lốc Cốc · chưa xác minh trực tiếp bằng Google Places",
    "description": "Hai bạn có thể chia vài món ốc với cách nấu khác nhau để thử được nhiều vị. Nên hỏi giá từng phần trước khi gọi, nhất là các loại hải sản giá cao.",
    "budgetMin": 200000,
    "budgetMax": 400000,
    "dishes": [
      "Ốc nấu nước dừa",
      "Ốc cà ri",
      "Ốc bươu hấp gừng sả"
    ],
    "tags": [
      "Chia món",
      "Ốc và hải sản",
      "Bữa hẹn cuối tuần"
    ],
    "cuisineTags": [
      "oc",
      "hai-san"
    ],
    "sources": [
      {
        "label": "MICHELIN Guide · Bà Cô Lốc Cốc",
        "url": "https://guide.michelin.com/us/en/ho-chi-minh/ho-chi-minh_2978179/restaurant/ba-co-loc-coc"
      }
    ],
    "checkedAt": "2026-11-27",
    "curated": true,
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A0%20C%C3%B4%20L%E1%BB%91c%20C%E1%BB%91c%2040A%20Tr%E1%BA%A7n%20Cao%20V%C3%A2n%2C%20ph%C6%B0%E1%BB%9Dng%20Xu%C3%A2n%20H%C3%B2a%2C%20TP.HCM",
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "lau-ca-dan-ich",
    "name": "Lẩu Cá Dân Ích",
    "kind": "food",
    "area": "Quận 5",
    "address": "99 Châu Văn Liêm, Phường 14, Quận 5, TP.HCM",
    "addressSource": "Tuổi Trẻ · Lẩu Cá Dân Ích · chưa xác minh trực tiếp bằng Google Places",
    "description": "Nồi lẩu cá kiểu Chợ Lớn hợp bữa hẹn muốn ăn chung và ngồi lâu hơn một món nhanh. Hai người nên hỏi cỡ nồi nhỏ, phần thêm và món tính riêng trước khi gọi.",
    "budgetMin": 170000,
    "budgetMax": 320000,
    "dishes": [
      "Lẩu cá",
      "Lẩu cù lao"
    ],
    "tags": [
      "Chợ Lớn",
      "Chia nồi lẩu",
      "Món Hoa"
    ],
    "cuisineTags": [
      "lau",
      "hai-san",
      "hoa"
    ],
    "sources": [
      {
        "label": "Tuổi Trẻ · Lẩu Cá Dân Ích",
        "url": "https://tuoitre.vn/dulichtphcm/yn-gi-o-sai-gon-cuoi-tuan-no-ne-voi-lau-ca-dan-ich-10728016.htm"
      },
      {
        "label": "Foody · Lẩu Cá Dân Ích",
        "url": "https://www.foody.vn/ho-chi-minh/dan-ich-chau-van-liem"
      }
    ],
    "checkedAt": "2026-11-27",
    "curated": true,
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20C%C3%A1%20D%C3%A2n%20%C3%8Dch%2099%20Ch%C3%A2u%20V%C4%83n%20Li%C3%AAm%2C%20Ph%C6%B0%E1%BB%9Dng%2014%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "lau-ca-keo-ba-huyen",
    "name": "Lẩu Cá Kèo Bà Huyện · 87 Bà Huyện Thanh Quan",
    "kind": "food",
    "area": "Quận 3",
    "address": "87 Bà Huyện Thanh Quan, Quận 3, TP.HCM",
    "addressSource": "Foody · Lẩu Cá Kèo Bà Huyện · chưa xác minh trực tiếp bằng Google Places",
    "description": "Chia một nồi lẩu cá kèo chua thanh cho buổi hẹn muốn ăn nóng và no. Hỏi khẩu phần cho hai người để tránh gọi quá nhiều món ăn kèm.",
    "budgetMin": 130000,
    "budgetMax": 260000,
    "dishes": [
      "Lẩu cá kèo",
      "Cá kèo chiên"
    ],
    "tags": [
      "Chia nồi lẩu",
      "Món miền Tây",
      "Bữa tối"
    ],
    "cuisineTags": [
      "lau",
      "hai-san"
    ],
    "sources": [
      {
        "label": "Foody · Lẩu Cá Kèo Bà Huyện",
        "url": "https://www.foody.vn/ho-chi-minh/lau-ca-keo-ba-huyen-87-ba-huyen-thanh-quan"
      }
    ],
    "checkedAt": "2026-11-27",
    "curated": true,
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20C%C3%A1%20K%C3%A8o%20B%C3%A0%20Huy%E1%BB%87n%20%C2%B7%2087%20B%C3%A0%20Huy%E1%BB%87n%20Thanh%20Quan%2087%20B%C3%A0%20Huy%E1%BB%87n%20Thanh%20Quan%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM",
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "lau-de-lam-ky",
    "name": "Lẩu Dê Lâm Ký · Nguyễn Thị Nhỏ",
    "kind": "food",
    "area": "Tân Bình",
    "address": "47 Nguyễn Thị Nhỏ, Phường 9, Tân Bình, TP.HCM",
    "addressSource": "Foody · Lẩu Dê Lâm Ký · chưa xác minh trực tiếp bằng Google Places",
    "description": "Bữa lẩu dê để hai bạn đổi khỏi các món quen, phù hợp khi cả hai đều thích mùi vị thịt dê. Gọi theo khẩu phần nhỏ trước rồi thêm nếu vẫn còn đói.",
    "budgetMin": 150000,
    "budgetMax": 320000,
    "dishes": [
      "Lẩu dê"
    ],
    "tags": [
      "Chia nồi lẩu",
      "Món dê",
      "Bữa tối"
    ],
    "cuisineTags": [
      "lau"
    ],
    "sources": [
      {
        "label": "Foody · Lẩu Dê Lâm Ký",
        "url": "https://www.foody.vn/ho-chi-minh/lau-de-lam-ky-nguyen-thi-nho"
      }
    ],
    "checkedAt": "2026-11-27",
    "curated": true,
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20D%C3%AA%20L%C3%A2m%20K%C3%BD%20%C2%B7%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Nh%E1%BB%8F%2047%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Nh%E1%BB%8F%2C%20Ph%C6%B0%E1%BB%9Dng%209%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM",
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "tokyo-deli-phan-van-tri",
    "name": "Tokyo Deli · Phan Văn Trị",
    "kind": "food",
    "area": "Gò Vấp",
    "address": "366A3 Phan Văn Trị, Phường 5, Gò Vấp, TP.HCM",
    "addressSource": "Foody · Tokyo Deli Phan Văn Trị · chưa xác minh trực tiếp bằng Google Places",
    "description": "Lựa chọn ăn Nhật ở Gò Vấp cho một bữa hẹn có sushi và món nóng. Hai bạn có thể đặt ngân sách cho phần chính trước, rồi mới quyết định có gọi thêm sashimi.",
    "budgetMin": 170000,
    "budgetMax": 350000,
    "dishes": [
      "Sushi",
      "Sashimi"
    ],
    "tags": [
      "Món Nhật",
      "Gò Vấp",
      "Bữa hẹn cuối tuần"
    ],
    "cuisineTags": [
      "nhat"
    ],
    "sources": [
      {
        "label": "Foody · Tokyo Deli Phan Văn Trị",
        "url": "https://www.foody.vn/ho-chi-minh/tokyo-deli-phan-van-tri"
      },
      {
        "label": "Riviu · Tokyo Deli Phan Văn Trị",
        "url": "https://riviu.vn/tokyo-deli-phan-van-tri"
      }
    ],
    "checkedAt": "2026-11-27",
    "curated": true,
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Tokyo%20Deli%20%C2%B7%20Phan%20V%C4%83n%20Tr%E1%BB%8B%20366A3%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20Ph%C6%B0%E1%BB%9Dng%205%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM",
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "bong-sung-nguyen-dinh-chieu",
    "name": "Bông Súng · Nguyễn Đình Chiểu",
    "kind": "food",
    "area": "Quận 3",
    "address": "155 Nguyễn Đình Chiểu, Quận 3, TP.HCM",
    "addressSource": "Bông Súng · địa điểm chính thức · chưa xác minh trực tiếp bằng Google Places",
    "description": "Một bữa chay ở Quận 3 để hai bạn đổi sang các món rau, nấm và đậu. Gọi vài món cùng chia giúp bữa hẹn đa dạng mà vẫn dễ giữ ngân sách.",
    "budgetMin": 150000,
    "budgetMax": 300000,
    "dishes": [
      "Món chay",
      "Món rau nấm"
    ],
    "tags": [
      "Ăn chay",
      "Chia món",
      "Hẹn nhẹ nhàng"
    ],
    "cuisineTags": [
      "chay"
    ],
    "sources": [
      {
        "label": "Bông Súng · địa điểm chính thức",
        "url": "https://bongsung.com.vn/dia-diem/"
      },
      {
        "label": "PasGo · Bông Súng Nguyễn Đình Chiểu",
        "url": "https://www.pasgo.vn/nha-hang/bong-sung-vegetarian-food-and-coffee-nguyen-dinh-chieu-3331"
      }
    ],
    "checkedAt": "2026-11-27",
    "curated": true,
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%B4ng%20S%C3%BAng%20%C2%B7%20Nguy%E1%BB%85n%20%C4%90%C3%ACnh%20Chi%E1%BB%83u%20155%20Nguy%E1%BB%85n%20%C4%90%C3%ACnh%20Chi%E1%BB%83u%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM",
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "bep-xanh-an-duyen",
    "name": "Bếp Xanh An Duyên · Nguyễn Tri Phương",
    "kind": "food",
    "area": "Quận 5",
    "address": "10 Nguyễn Tri Phương, Phường 6, Quận 5, TP.HCM",
    "addressSource": "MoMo · Nhà hàng chay An Duyên · chưa xác minh trực tiếp bằng Google Places",
    "description": "Một địa chỉ ăn chay ở Quận 5 cho bữa hẹn đổi vị với rau, nấm và đậu hũ. Hai bạn nên chọn vài phần chia chung và xác nhận bàn nếu đi vào ngày chay đông.",
    "budgetMin": 140000,
    "budgetMax": 300000,
    "dishes": [
      "Món chay",
      "Món nấm",
      "Đậu hũ"
    ],
    "tags": [
      "Ăn chay",
      "Quận 5",
      "Chia món"
    ],
    "cuisineTags": [
      "chay"
    ],
    "sources": [
      {
        "label": "MoMo · Nhà hàng chay An Duyên",
        "url": "https://www.momo.vn/page/9853426"
      },
      {
        "label": "PasGo · Bếp Xanh An Duyên",
        "url": "https://www.pasgo.vn/nha-hang/nha-hang-chay-bep-xanh-an-duyen-1583"
      }
    ],
    "checkedAt": "2026-11-27",
    "curated": true,
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=B%E1%BA%BFp%20Xanh%20An%20Duy%C3%AAn%20%C2%B7%20Nguy%E1%BB%85n%20Tri%20Ph%C6%B0%C6%A1ng%2010%20Nguy%E1%BB%85n%20Tri%20Ph%C6%B0%C6%A1ng%2C%20Ph%C6%B0%E1%BB%9Dng%206%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "akuna-le-meridien",
    "name": "Akuna",
    "kind": "food",
    "area": "Quận 1",
    "address": "Tầng 9, Le Méridien Saigon, 3C Tôn Đức Thắng, phường Sài Gòn, TP.HCM",
    "addressSource": "MICHELIN Guide · Akuna · chưa xác minh trực tiếp bằng Google Places",
    "description": "Dành cho dịp kỷ niệm khi hai bạn muốn trải nghiệm một thực đơn nếm thử được phục vụ theo trình tự. Nên xem thực đơn, hỏi tổng giá và thời lượng trước khi đặt bàn.",
    "budgetMin": 5700000,
    "budgetMax": 9500000,
    "dishes": [
      "Thực đơn nếm thử",
      "Món Âu sáng tạo"
    ],
    "tags": [
      "Dịp đặc biệt",
      "Thực đơn theo mùa",
      "Nên đặt trước"
    ],
    "cuisineTags": [
      "au"
    ],
    "sources": [
      {
        "label": "MICHELIN Guide · Akuna",
        "url": "https://guide.michelin.com/vn/en/ho-chi-minh/ho-chi-minh_2978179/restaurant/akuna"
      },
      {
        "label": "Akuna · giá thực đơn và điều kiện đặt bàn",
        "url": "https://akunarestaurant.com/reservations-terms/"
      },
      {
        "label": "Akuna · thực đơn 2026",
        "url": "https://akunarestaurant.com/wp-content/uploads/2026/03/AKUNA-MENU-ENG_VIET-1.pdf"
      }
    ],
    "checkedAt": "2026-11-27",
    "booking": "https://akunarestaurant.com/reservations-terms/",
    "curated": true,
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Akuna%20T%E1%BA%A7ng%209%2C%20Le%20M%C3%A9ridien%20Saigon%2C%203C%20T%C3%B4n%20%C4%90%E1%BB%A9c%20Th%E1%BA%AFng%2C%20ph%C6%B0%E1%BB%9Dng%20S%C3%A0i%20G%C3%B2n%2C%20TP.HCM",
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "coco-dining",
    "name": "Coco Dining",
    "kind": "food",
    "area": "Quận 3",
    "address": "143 Nam Kỳ Khởi Nghĩa, phường Xuân Hòa, TP.HCM",
    "addressSource": "MICHELIN Guide · Coco Dining · chưa xác minh trực tiếp bằng Google Places",
    "description": "Một buổi hẹn dành riêng cho trải nghiệm ẩm thực Việt sáng tạo theo thực đơn nếm thử. Hợp dịp cần lên kế hoạch và dành ngân sách từ trước hơn là quyết định sát giờ.",
    "budgetMin": 4000000,
    "budgetMax": 7000000,
    "dishes": [
      "Thực đơn nếm thử",
      "Món Việt sáng tạo"
    ],
    "tags": [
      "Dịp đặc biệt",
      "Nên đặt trước",
      "Thực đơn theo mùa"
    ],
    "cuisineTags": [
      "khac"
    ],
    "sources": [
      {
        "label": "MICHELIN Guide · Coco Dining",
        "url": "https://guide.michelin.com/us/en/ho-chi-minh/ho-chi-minh_2978179/restaurant/coco-dining"
      },
      {
        "label": "CoCo Dining · thực đơn và địa chỉ chính thức",
        "url": "https://cocosgn.com/coco-dining/"
      }
    ],
    "checkedAt": "2026-11-27",
    "booking": "https://cocosgn.com/reservation/",
    "curated": true,
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Coco%20Dining%20143%20Nam%20K%E1%BB%B3%20Kh%E1%BB%9Fi%20Ngh%C4%A9a%2C%20ph%C6%B0%E1%BB%9Dng%20Xu%C3%A2n%20H%C3%B2a%2C%20TP.HCM",
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "long-trieu-reverie",
    "name": "Long Triều",
    "kind": "food",
    "area": "Quận 1",
    "address": "Tầng 4, The Reverie Saigon, Times Square, 22–36 Nguyễn Huệ, phường Sài Gòn, TP.HCM",
    "addressSource": "MICHELIN Guide · Long Triều · chưa xác minh trực tiếp bằng Google Places",
    "description": "Bữa món Quảng Đông trong khách sạn cho dịp kỷ niệm hoặc sinh nhật. Xem cả thực đơn gọi món lẫn set và hỏi phần cho hai người trước khi quyết định.",
    "budgetMin": 800000,
    "budgetMax": 1800000,
    "dishes": [
      "Tôm xốt XO",
      "Súp hoành thánh chua cay",
      "Món Quảng Đông"
    ],
    "tags": [
      "Dịp đặc biệt",
      "Món Hoa",
      "Nên đặt trước"
    ],
    "cuisineTags": [
      "hai-san",
      "hoa"
    ],
    "sources": [
      {
        "label": "MICHELIN Guide · Long Triều",
        "url": "https://guide.michelin.com/vn/en/ho-chi-minh/ho-chi-minh_2978179/restaurant/long-trieu"
      }
    ],
    "checkedAt": "2026-11-27",
    "curated": true,
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Long%20Tri%E1%BB%81u%20T%E1%BA%A7ng%204%2C%20The%20Reverie%20Saigon%2C%20Times%20Square%2C%2022%E2%80%9336%20Nguy%E1%BB%85n%20Hu%E1%BB%87%2C%20ph%C6%B0%E1%BB%9Dng%20S%C3%A0i%20G%C3%B2n%2C%20TP.HCM",
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "square-one-park-hyatt",
    "name": "Square One · Park Hyatt Saigon",
    "kind": "food",
    "area": "Quận 1",
    "address": "2 Công trường Lam Sơn, phường Sài Gòn, TP.HCM",
    "addressSource": "MICHELIN Guide · Square One · chưa xác minh trực tiếp bằng Google Places",
    "description": "Một lựa chọn cho bữa hẹn đặc biệt khi hai bạn thích món Việt hoặc Pháp. Xem thực đơn theo nhóm món và hỏi rõ các phần chia chung để chọn vừa ngân sách.",
    "budgetMin": 800000,
    "budgetMax": 1800000,
    "dishes": [
      "Món Việt",
      "Món Pháp"
    ],
    "tags": [
      "Dịp đặc biệt",
      "Trong khách sạn",
      "Nên đặt trước"
    ],
    "cuisineTags": [
      "au",
      "khac"
    ],
    "sources": [
      {
        "label": "MICHELIN Guide · Square One",
        "url": "https://guide.michelin.com/us/en/ho-chi-minh/ho-chi-minh_2978179/restaurant/square-one"
      }
    ],
    "checkedAt": "2026-11-27",
    "curated": true,
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Square%20One%20%C2%B7%20Park%20Hyatt%20Saigon%202%20C%C3%B4ng%20tr%C6%B0%E1%BB%9Dng%20Lam%20S%C6%A1n%2C%20ph%C6%B0%E1%BB%9Dng%20S%C3%A0i%20G%C3%B2n%2C%20TP.HCM",
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "quince-eatery",
    "name": "Quince Eatery",
    "kind": "food",
    "area": "Quận 1",
    "address": "37Bis Ký Con, phường Bến Thành, TP.HCM",
    "addressSource": "MICHELIN Guide · Quince Eatery · chưa xác minh trực tiếp bằng Google Places",
    "description": "Bữa tối với món nướng và hương vị Địa Trung Hải cho hai bạn thích chia món. Phù hợp kỷ niệm nhỏ; nên hỏi các phần thịt và món ăn kèm cho hai người.",
    "budgetMin": 800000,
    "budgetMax": 1600000,
    "dishes": [
      "Sò điệp",
      "Ức vịt",
      "Món nướng than"
    ],
    "tags": [
      "Dịp đặc biệt",
      "Chia món",
      "Nên đặt trước"
    ],
    "cuisineTags": [
      "au",
      "nuong"
    ],
    "sources": [
      {
        "label": "MICHELIN Guide · Quince Eatery",
        "url": "https://guide.michelin.com/en/ho-chi-minh/ho-chi-minh_2978179/restaurant/quince-eatery"
      }
    ],
    "checkedAt": "2026-11-27",
    "curated": true,
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Quince%20Eatery%2037Bis%20K%C3%BD%20Con%2C%20ph%C6%B0%E1%BB%9Dng%20B%E1%BA%BFn%20Th%C3%A0nh%2C%20TP.HCM",
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "albion-hotel-des-arts",
    "name": "The Albion by Kirk Westaway",
    "kind": "food",
    "area": "Quận 3",
    "address": "Tầng 23, Hôtel des Arts Saigon, 76–78 Nguyễn Thị Minh Khai, phường Xuân Hòa, TP.HCM",
    "addressSource": "MICHELIN Guide · The Albion · chưa xác minh trực tiếp bằng Google Places",
    "description": "Một buổi hẹn trên cao với món Anh đương đại, phù hợp sinh nhật hoặc ngày kỷ niệm. Nên hỏi vị trí bàn và giá thực đơn trước để cân bằng trải nghiệm với ngân sách.",
    "budgetMin": 900000,
    "budgetMax": 1800000,
    "dishes": [
      "Fish and chips",
      "Gà quay",
      "Eton mess"
    ],
    "tags": [
      "Dịp đặc biệt",
      "Ngắm thành phố",
      "Món Âu"
    ],
    "cuisineTags": [
      "au"
    ],
    "sources": [
      {
        "label": "MICHELIN Guide · The Albion",
        "url": "https://guide.michelin.com/en/ho-chi-minh/ho-chi-minh_2978179/restaurant/the-albion-by-kirk-westaway"
      }
    ],
    "checkedAt": "2026-11-27",
    "curated": true,
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=The%20Albion%20by%20Kirk%20Westaway%20T%E1%BA%A7ng%2023%2C%20H%C3%B4tel%20des%20Arts%20Saigon%2C%2076%E2%80%9378%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Minh%20Khai%2C%20ph%C6%B0%E1%BB%9Dng%20Xu%C3%A2n%20H%C3%B2a%2C%20TP.HCM",
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "nen-light",
    "name": "Nén Light",
    "kind": "food",
    "area": "Quận 1",
    "address": "122/2 Trần Đình Xu, Quận 1, TP.HCM",
    "addressSource": "MICHELIN Guide · Nén Light · chưa xác minh trực tiếp bằng Google Places",
    "description": "Buổi hẹn ăn theo trình tự nhiều món, hợp hai bạn thích nghe câu chuyện đằng sau nguyên liệu. Nên đặt trước, báo dị ứng và dành riêng thời gian cho toàn bộ bữa tối.",
    "budgetMin": 2400000,
    "budgetMax": 3600000,
    "dishes": [
      "Thực đơn nếm thử",
      "Món sáng tạo theo mùa"
    ],
    "tags": [
      "Dịp đặc biệt",
      "Thực đơn theo mùa",
      "Nên đặt trước"
    ],
    "cuisineTags": [
      "khac"
    ],
    "sources": [
      {
        "label": "MICHELIN Guide · Nén Light",
        "url": "https://guide.michelin.com/th/en/ho-chi-minh/ho-chi-minh_2978179/restaurant/nen-light"
      },
      {
        "label": "Nén Light · thực đơn hiện hành trên website",
        "url": "https://restaurantnen.com/wp-content/uploads/2026/04/CURRENT-MENU-NEN-LIGHT.pdf"
      }
    ],
    "checkedAt": "2026-11-27",
    "curated": true,
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=N%C3%A9n%20Light%20122/2%20Tr%E1%BA%A7n%20%C4%90%C3%ACnh%20Xu%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM",
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "stoker-mac-thi-buoi",
    "name": "Stoker · Mạc Thị Bưởi",
    "kind": "food",
    "area": "Quận 1",
    "address": "44 Mạc Thị Bưởi, phường Sài Gòn, TP.HCM",
    "addressSource": "MICHELIN Guide · Stoker Saigon · chưa xác minh trực tiếp bằng Google Places",
    "description": "Một bữa steak cho hai bạn muốn dành ngân sách cho thịt nướng và món ăn kèm. Hỏi trọng lượng, mức giá từng phần và độ chín để gọi đúng nhu cầu.",
    "budgetMin": 700000,
    "budgetMax": 1500000,
    "dishes": [
      "Steak",
      "Món nướng"
    ],
    "tags": [
      "Dịp đặc biệt",
      "Steak",
      "Nên đặt trước"
    ],
    "cuisineTags": [
      "au",
      "nuong"
    ],
    "sources": [
      {
        "label": "MICHELIN Guide · Stoker Saigon",
        "url": "https://guide.michelin.com/vn/en/ho-chi-minh/ho-chi-minh_2978179/restaurant/stoker-district-1"
      }
    ],
    "checkedAt": "2026-11-27",
    "curated": true,
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Stoker%20%C2%B7%20M%E1%BA%A1c%20Th%E1%BB%8B%20B%C6%B0%E1%BB%9Fi%2044%20M%E1%BA%A1c%20Th%E1%BB%8B%20B%C6%B0%E1%BB%9Fi%2C%20ph%C6%B0%E1%BB%9Dng%20S%C3%A0i%20G%C3%B2n%2C%20TP.HCM",
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "lai-cantonese",
    "name": "Lai Cantonese Restaurant",
    "kind": "food",
    "area": "Quận 1",
    "address": "Tầng 28, Sedona Suites, 92–94 Nam Kỳ Khởi Nghĩa, phường Sài Gòn, TP.HCM",
    "addressSource": "Lai · website chính thức · chưa xác minh trực tiếp bằng Google Places",
    "description": "Món Quảng Đông trên cao cho buổi hẹn đặc biệt muốn kết hợp ngắm thành phố. Hỏi bàn, thực đơn cho hai người và các khoản phụ thu trước khi xác nhận đặt chỗ.",
    "budgetMin": 600000,
    "budgetMax": 1300000,
    "dishes": [
      "Món Quảng Đông"
    ],
    "tags": [
      "Dịp đặc biệt",
      "Ngắm thành phố",
      "Món Hoa"
    ],
    "cuisineTags": [
      "hoa"
    ],
    "sources": [
      {
        "label": "Lai · website chính thức",
        "url": "https://laivn.com/"
      },
      {
        "label": "LPBank · địa chỉ đối tác ẩm thực",
        "url": "https://lpbank.com.vn/api/content-file/public/file/view/fd74f0f4-03ca-4f2e-8abb-8890dbd98c08"
      }
    ],
    "checkedAt": "2026-11-27",
    "booking": "https://laivn.com/",
    "curated": true,
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Lai%20Cantonese%20Restaurant%20T%E1%BA%A7ng%2028%2C%20Sedona%20Suites%2C%2092%E2%80%9394%20Nam%20K%E1%BB%B3%20Kh%E1%BB%9Fi%20Ngh%C4%A9a%2C%20ph%C6%B0%E1%BB%9Dng%20S%C3%A0i%20G%C3%B2n%2C%20TP.HCM",
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "hoi-an-sense",
    "name": "Hoi An Sense",
    "kind": "food",
    "area": "Quận 1",
    "address": "Tầng 6, 12 Phan Kế Bính, phường Tân Định, TP.HCM",
    "addressSource": "MICHELIN Guide · Hoi An Sense · chưa xác minh trực tiếp bằng Google Places",
    "description": "Bữa món Việt trong không gian gợi Hội An cho hai bạn muốn tổ chức một dịp nhỏ. Chọn món chia và hỏi phần cho hai người để trải nghiệm vừa đủ, không dư nhiều.",
    "budgetMin": 350000,
    "budgetMax": 700000,
    "dishes": [
      "Cuốn kiểu Huế",
      "Cá chẽm nướng cuốn thịt"
    ],
    "tags": [
      "Dịp đặc biệt",
      "Món Việt",
      "Nên đặt trước"
    ],
    "cuisineTags": [
      "hai-san",
      "nuong",
      "khac"
    ],
    "sources": [
      {
        "label": "MICHELIN Guide · Hoi An Sense",
        "url": "https://guide.michelin.com/vn/en/ho-chi-minh/ho-chi-minh_2978179/restaurant/hoi-an-sense"
      }
    ],
    "checkedAt": "2026-11-27",
    "curated": true,
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Hoi%20An%20Sense%20T%E1%BA%A7ng%206%2C%2012%20Phan%20K%E1%BA%BF%20B%C3%ADnh%2C%20ph%C6%B0%E1%BB%9Dng%20T%C3%A2n%20%C4%90%E1%BB%8Bnh%2C%20TP.HCM",
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "st25-by-koto",
    "name": "ST25 by KOTO",
    "kind": "food",
    "area": "Quận 1",
    "address": "Tầng 2, Sofitel Saigon Plaza, 17 Lê Duẩn, phường Sài Gòn, TP.HCM",
    "addressSource": "MICHELIN Guide · ST25 by KOTO · chưa xác minh trực tiếp bằng Google Places",
    "description": "Một bữa Việt đương đại trong khách sạn cho dịp hai bạn muốn ăn chỉn chu hơn ngày thường. Xem thực đơn và hỏi suất cho hai người để chọn món theo ngân sách có sẵn.",
    "budgetMin": 400000,
    "budgetMax": 850000,
    "dishes": [
      "Cơm ST25",
      "Gà chiên KOTO",
      "Món Việt đương đại"
    ],
    "tags": [
      "Dịp đặc biệt",
      "Món Việt",
      "Trong khách sạn"
    ],
    "cuisineTags": [
      "com",
      "khac"
    ],
    "sources": [
      {
        "label": "MICHELIN Guide · ST25 by KOTO",
        "url": "https://guide.michelin.com/sg/en/ho-chi-minh/ho-chi-minh_2978179/restaurant/st25-by-koto"
      },
      {
        "label": "VPBank · thực đơn đối tác tham khảo",
        "url": "https://diamond.vpbank.com.vn/media/secure/landing-page/2025/08/27/Danh-muc-dac-quyen-HNW-202508-ENG-94sjv.pdf"
      }
    ],
    "checkedAt": "2026-11-27",
    "curated": true,
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=ST25%20by%20KOTO%20T%E1%BA%A7ng%202%2C%20Sofitel%20Saigon%20Plaza%2C%2017%20L%C3%AA%20Du%E1%BA%A9n%2C%20ph%C6%B0%E1%BB%9Dng%20S%C3%A0i%20G%C3%B2n%2C%20TP.HCM",
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "sushi-rei",
    "name": "Sushi Rei",
    "kind": "food",
    "area": "Quận 1",
    "address": "10E1–10E Nguyễn Thị Minh Khai, phường Sài Gòn, TP.HCM",
    "addressSource": "Sushi Rei · website chính thức · chưa xác minh trực tiếp bằng Google Places",
    "description": "Trải nghiệm sushi omakase cho dịp kỷ niệm cần chuẩn bị ngân sách riêng. Hỏi giá thực đơn, chỗ tại quầy và yêu cầu ăn uống trước; món thay đổi theo nguyên liệu trong ngày.",
    "budgetMin": 4700000,
    "budgetMax": 6500000,
    "dishes": [
      "Sushi omakase",
      "Món khai vị theo mùa"
    ],
    "tags": [
      "Dịp đặc biệt",
      "Món Nhật",
      "Nên đặt trước"
    ],
    "cuisineTags": [
      "nhat"
    ],
    "sources": [
      {
        "label": "Sushi Rei · website chính thức",
        "url": "https://sushi-rei-vn.com/vn/"
      }
    ],
    "checkedAt": "2026-11-27",
    "booking": "https://sushi-rei-vn.com/vn/",
    "curated": true,
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Sushi%20Rei%2010E1%E2%80%9310E%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Minh%20Khai%2C%20ph%C6%B0%E1%BB%9Dng%20S%C3%A0i%20G%C3%B2n%2C%20TP.HCM",
    "budgetNote": "Dự trù cho một người. Mức thực chi phụ thuộc phần gọi, đồ uống và phụ phí của quán."
  },
  {
    "id": "v4-com-tam-sa-bi-chuong-tran-binh-trong",
    "name": "Cơm Tấm Sà Bì Chưởng — Trần Bình Trọng",
    "kind": "food",
    "area": "Quận 5",
    "address": "179 Trần Bình Trọng, Quận 5, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20T%E1%BA%A5m%20S%C3%A0%20B%C3%AC%20Ch%C6%B0%E1%BB%9Fng%20%E2%80%94%20Tr%E1%BA%A7n%20B%C3%ACnh%20Tr%E1%BB%8Dng%20179%20Tr%E1%BA%A7n%20B%C3%ACnh%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 5, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Cơm tấm sườn",
      "Cơm tấm bì chả"
    ],
    "budgetMin": 50000,
    "budgetMax": 120000,
    "tags": [
      "Dịp đặc biệt",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "com-tam"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20T%E1%BA%A5m%20S%C3%A0%20B%C3%AC%20Ch%C6%B0%E1%BB%9Fng%20%E2%80%94%20Tr%E1%BA%A7n%20B%C3%ACnh%20Tr%E1%BB%8Dng%20179%20Tr%E1%BA%A7n%20B%C3%ACnh%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.foody.vn/ho-chi-minh/an-vat-via-he-tai-quan-5"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-com-tam-phuc-loc-tho-an-duong-vuong",
    "name": "Cơm Tấm Phúc Lộc Thọ — An Dương Vương",
    "kind": "food",
    "area": "Quận 5",
    "address": "301B An Dương Vương, Quận 5, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20T%E1%BA%A5m%20Ph%C3%BAc%20L%E1%BB%99c%20Th%E1%BB%8D%20%E2%80%94%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%20301B%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 5, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Cơm tấm sườn",
      "Cơm tấm bì chả"
    ],
    "budgetMin": 35000,
    "budgetMax": 80000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "com-tam"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20T%E1%BA%A5m%20Ph%C3%BAc%20L%E1%BB%99c%20Th%E1%BB%8D%20%E2%80%94%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%20301B%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.foody.vn/ho-chi-minh/an-vat-via-he-tai-quan-5"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-atispho-pho-atiso-quan-5",
    "name": "Atispho — Phở Atiso Quận 5",
    "kind": "food",
    "area": "Quận 5",
    "address": "245 Trần Bình Trọng, Quận 5, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Atispho%20%E2%80%94%20Ph%E1%BB%9F%20Atiso%20Qu%E1%BA%ADn%205%20245%20Tr%E1%BA%A7n%20B%C3%ACnh%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 5, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Phở bò",
      "Phở đặc biệt"
    ],
    "budgetMin": 40000,
    "budgetMax": 100000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "pho"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Atispho%20%E2%80%94%20Ph%E1%BB%9F%20Atiso%20Qu%E1%BA%ADn%205%20245%20Tr%E1%BA%A7n%20B%C3%ACnh%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.foody.vn/ho-chi-minh/an-vat-via-he-tai-quan-5"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-pho-bo-thanh-canh",
    "name": "Phở Bò Thanh Cảnh",
    "kind": "food",
    "area": "Quận 5",
    "address": "1 Phan Phú Tiên, Quận 5, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20B%C3%B2%20Thanh%20C%E1%BA%A3nh%201%20Phan%20Ph%C3%BA%20Ti%C3%AAn%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 5, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Phở bò",
      "Phở đặc biệt"
    ],
    "budgetMin": 40000,
    "budgetMax": 90000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "pho"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20B%C3%B2%20Thanh%20C%E1%BA%A3nh%201%20Phan%20Ph%C3%BA%20Ti%C3%AAn%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.foody.vn/ho-chi-minh/an-vat-via-he-tai-quan-5"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-pho-hanh-huynh-man-dat",
    "name": "Phở Hạnh — Huỳnh Mẫn Đạt",
    "kind": "food",
    "area": "Quận 5",
    "address": "93 Huỳnh Mẫn Đạt, Quận 5, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20H%E1%BA%A1nh%20%E2%80%94%20Hu%E1%BB%B3nh%20M%E1%BA%ABn%20%C4%90%E1%BA%A1t%2093%20Hu%E1%BB%B3nh%20M%E1%BA%ABn%20%C4%90%E1%BA%A1t%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 5, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Phở bò",
      "Phở đặc biệt"
    ],
    "budgetMin": 40000,
    "budgetMax": 90000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "pho"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20H%E1%BA%A1nh%20%E2%80%94%20Hu%E1%BB%B3nh%20M%E1%BA%ABn%20%C4%90%E1%BA%A1t%2093%20Hu%E1%BB%B3nh%20M%E1%BA%ABn%20%C4%90%E1%BA%A1t%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.foody.vn/ho-chi-minh/an-vat-via-he-tai-quan-5"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-tien-phat-diem-tam-hong-kong",
    "name": "Tiến Phát — Điểm Tâm Hồng Kông",
    "kind": "food",
    "area": "Quận 5",
    "address": "18 Ký Hòa, Quận 5, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ti%E1%BA%BFn%20Ph%C3%A1t%20%E2%80%94%20%C4%90i%E1%BB%83m%20T%C3%A2m%20H%E1%BB%93ng%20K%C3%B4ng%2018%20K%C3%BD%20H%C3%B2a%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 5, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Dimsum",
      "Món Hoa"
    ],
    "budgetMin": 65000,
    "budgetMax": 160000,
    "tags": [
      "Dịp đặc biệt",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "hoa"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Ti%E1%BA%BFn%20Ph%C3%A1t%20%E2%80%94%20%C4%90i%E1%BB%83m%20T%C3%A2m%20H%E1%BB%93ng%20K%C3%B4ng%2018%20K%C3%BD%20H%C3%B2a%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.foody.vn/ho-chi-minh/an-vat-via-he-tai-quan-5"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-baoz-dimsum-nguyen-tri-phuong",
    "name": "Baoz Dimsum — Nguyễn Tri Phương",
    "kind": "food",
    "area": "Quận 5",
    "address": "82–88 Nguyễn Tri Phương, Quận 5, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Baoz%20Dimsum%20%E2%80%94%20Nguy%E1%BB%85n%20Tri%20Ph%C6%B0%C6%A1ng%2082%E2%80%9388%20Nguy%E1%BB%85n%20Tri%20Ph%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 5, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Dimsum",
      "Món Hoa"
    ],
    "budgetMin": 95000,
    "budgetMax": 230000,
    "tags": [
      "Dịp đặc biệt",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "hoa"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Baoz%20Dimsum%20%E2%80%94%20Nguy%E1%BB%85n%20Tri%20Ph%C6%B0%C6%A1ng%2082%E2%80%9388%20Nguy%E1%BB%85n%20Tri%20Ph%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.foody.vn/ho-chi-minh/an-vat-via-he-tai-quan-5"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-shan-dimsum-phu-dong-thien-vuong",
    "name": "Shan Dimsum — Phù Đổng Thiên Vương",
    "kind": "food",
    "area": "Quận 5",
    "address": "57–59 Phù Đổng Thiên Vương, Quận 5, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Shan%20Dimsum%20%E2%80%94%20Ph%C3%B9%20%C4%90%E1%BB%95ng%20Thi%C3%AAn%20V%C6%B0%C6%A1ng%2057%E2%80%9359%20Ph%C3%B9%20%C4%90%E1%BB%95ng%20Thi%C3%AAn%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 5, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Dimsum",
      "Món Hoa"
    ],
    "budgetMin": 75000,
    "budgetMax": 180000,
    "tags": [
      "Dịp đặc biệt",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "hoa"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Shan%20Dimsum%20%E2%80%94%20Ph%C3%B9%20%C4%90%E1%BB%95ng%20Thi%C3%AAn%20V%C6%B0%C6%A1ng%2057%E2%80%9359%20Ph%C3%B9%20%C4%90%E1%BB%95ng%20Thi%C3%AAn%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.foody.vn/ho-chi-minh/an-vat-via-he-tai-quan-5"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-dim-tu-tac-hung-vuong-plaza",
    "name": "Dim Tu Tac — Hùng Vương Plaza",
    "kind": "food",
    "area": "Quận 5",
    "address": "Tầng 3, Hùng Vương Plaza, 126 Hồng Bàng, Quận 5, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Dim%20Tu%20Tac%20%E2%80%94%20H%C3%B9ng%20V%C6%B0%C6%A1ng%20Plaza%20T%E1%BA%A7ng%203%2C%20H%C3%B9ng%20V%C6%B0%C6%A1ng%20Plaza%2C%20126%20H%E1%BB%93ng%20B%C3%A0ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 5, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Dimsum",
      "Món Hoa"
    ],
    "budgetMin": 170000,
    "budgetMax": 400000,
    "tags": [
      "Dịp đặc biệt",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "hoa"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Dim%20Tu%20Tac%20%E2%80%94%20H%C3%B9ng%20V%C6%B0%C6%A1ng%20Plaza%20T%E1%BA%A7ng%203%2C%20H%C3%B9ng%20V%C6%B0%C6%A1ng%20Plaza%2C%20126%20H%E1%BB%93ng%20B%C3%A0ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.foody.vn/ho-chi-minh/an-vat-via-he-tai-quan-5"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-dimsum-mr-hao",
    "name": "Dimsum Mr. Hào",
    "kind": "food",
    "area": "Quận 5",
    "address": "175 Trần Tuấn Khải, Quận 5, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Dimsum%20Mr.%20H%C3%A0o%20175%20Tr%E1%BA%A7n%20Tu%E1%BA%A5n%20Kh%E1%BA%A3i%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 5, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Dimsum",
      "Món Hoa"
    ],
    "budgetMin": 45000,
    "budgetMax": 110000,
    "tags": [
      "Dịp đặc biệt",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "hoa"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Dimsum%20Mr.%20H%C3%A0o%20175%20Tr%E1%BA%A7n%20Tu%E1%BA%A5n%20Kh%E1%BA%A3i%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.foody.vn/ho-chi-minh/an-vat-via-he-tai-quan-5"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-bep-nha-bbq-vo-van-kiet",
    "name": "Bếp Nhà BBQ — Võ Văn Kiệt",
    "kind": "food",
    "area": "Quận 5",
    "address": "844 Võ Văn Kiệt, Quận 5, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=B%E1%BA%BFp%20Nh%C3%A0%20BBQ%20%E2%80%94%20V%C3%B5%20V%C4%83n%20Ki%E1%BB%87t%20844%20V%C3%B5%20V%C4%83n%20Ki%E1%BB%87t%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 5, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Thịt nướng"
    ],
    "budgetMin": 75000,
    "budgetMax": 180000,
    "tags": [
      "Dịp đặc biệt",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "nuong"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=B%E1%BA%BFp%20Nh%C3%A0%20BBQ%20%E2%80%94%20V%C3%B5%20V%C4%83n%20Ki%E1%BB%87t%20844%20V%C3%B5%20V%C4%83n%20Ki%E1%BB%87t%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.foody.vn/ho-chi-minh/an-vat-via-he-tai-quan-5"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-hanoi-ngon-an-binh",
    "name": "Hanoi Ngon — An Bình",
    "kind": "food",
    "area": "Quận 5",
    "address": "143/8 An Bình, Quận 5, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Hanoi%20Ngon%20%E2%80%94%20An%20B%C3%ACnh%20143%2F8%20An%20B%C3%ACnh%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 5, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Ăn vặt",
      "Món ăn nhẹ"
    ],
    "budgetMin": 35000,
    "budgetMax": 85000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "an-vat"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Hanoi%20Ngon%20%E2%80%94%20An%20B%C3%ACnh%20143%2F8%20An%20B%C3%ACnh%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.foody.vn/ho-chi-minh/an-vat-via-he-tai-quan-5"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-banh-mi-tang-nguyen-trai",
    "name": "Bánh Mì Tăng — Nguyễn Trãi",
    "kind": "food",
    "area": "Quận 5",
    "address": "822 Nguyễn Trãi, Quận 5, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20M%C3%AC%20T%C4%83ng%20%E2%80%94%20Nguy%E1%BB%85n%20Tr%C3%A3i%20822%20Nguy%E1%BB%85n%20Tr%C3%A3i%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 5, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Bánh mì thịt"
    ],
    "budgetMin": 25000,
    "budgetMax": 55000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "banh-mi"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20M%C3%AC%20T%C4%83ng%20%E2%80%94%20Nguy%E1%BB%85n%20Tr%C3%A3i%20822%20Nguy%E1%BB%85n%20Tr%C3%A3i%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.foody.vn/ho-chi-minh/an-vat-via-he-tai-quan-5"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-banh-trang-ma-hoc-lac",
    "name": "Bánh Tráng Ma — Học Lạc",
    "kind": "food",
    "area": "Quận 5",
    "address": "25 Học Lạc, Quận 5, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20Tr%C3%A1ng%20Ma%20%E2%80%94%20H%E1%BB%8Dc%20L%E1%BA%A1c%2025%20H%E1%BB%8Dc%20L%E1%BA%A1c%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 5, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Bánh tráng trộn"
    ],
    "budgetMin": 15000,
    "budgetMax": 40000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "banh-trang"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20Tr%C3%A1ng%20Ma%20%E2%80%94%20H%E1%BB%8Dc%20L%E1%BA%A1c%2025%20H%E1%BB%8Dc%20L%E1%BA%A1c%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.foody.vn/ho-chi-minh/an-vat-via-he-tai-quan-5"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-banh-cuon-nam-viet",
    "name": "Bánh Cuốn Nam Việt",
    "kind": "food",
    "area": "Quận 5",
    "address": "152 Nguyễn Biểu, Quận 5, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20Cu%E1%BB%91n%20Nam%20Vi%E1%BB%87t%20152%20Nguy%E1%BB%85n%20Bi%E1%BB%83u%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 5, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Bánh cuốn"
    ],
    "budgetMin": 30000,
    "budgetMax": 70000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "banh-cuon"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20Cu%E1%BB%91n%20Nam%20Vi%E1%BB%87t%20152%20Nguy%E1%BB%85n%20Bi%E1%BB%83u%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.foody.vn/ho-chi-minh/an-vat-via-he-tai-quan-5"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-pho-gia-truyen-an-duong-vuong",
    "name": "Phở Gia Truyền — An Dương Vương",
    "kind": "food",
    "area": "Quận 5",
    "address": "499 An Dương Vương, Quận 5, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Gia%20Truy%E1%BB%81n%20%E2%80%94%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%20499%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 5, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Phở bò",
      "Phở đặc biệt"
    ],
    "budgetMin": 40000,
    "budgetMax": 100000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "pho"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Gia%20Truy%E1%BB%81n%20%E2%80%94%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%20499%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.foody.vn/ho-chi-minh/an-vat-via-he-tai-quan-5"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-banh-tom-chien-tran-tuan-khai",
    "name": "Bánh Tôm Chiên — Trần Tuấn Khải",
    "kind": "food",
    "area": "Quận 5",
    "address": "131–133 Trần Tuấn Khải, Quận 5, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20T%C3%B4m%20Chi%C3%AAn%20%E2%80%94%20Tr%E1%BA%A7n%20Tu%E1%BA%A5n%20Kh%E1%BA%A3i%20131%E2%80%93133%20Tr%E1%BA%A7n%20Tu%E1%BA%A5n%20Kh%E1%BA%A3i%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 5, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Ăn vặt",
      "Món ăn nhẹ"
    ],
    "budgetMin": 25000,
    "budgetMax": 65000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "an-vat"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20T%C3%B4m%20Chi%C3%AAn%20%E2%80%94%20Tr%E1%BA%A7n%20Tu%E1%BA%A5n%20Kh%E1%BA%A3i%20131%E2%80%93133%20Tr%E1%BA%A7n%20Tu%E1%BA%A5n%20Kh%E1%BA%A3i%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.foody.vn/ho-chi-minh/an-vat-via-he-tai-quan-5"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-kem-trang-tien-sai-thanh-nguyen-tri-phuong",
    "name": "Kem Tràng Tiền Sài Thành — Nguyễn Tri Phương",
    "kind": "dessert",
    "area": "Quận 5",
    "address": "205 Nguyễn Tri Phương, Quận 5, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Kem%20Tr%C3%A0ng%20Ti%E1%BB%81n%20S%C3%A0i%20Th%C3%A0nh%20%E2%80%94%20Nguy%E1%BB%85n%20Tri%20Ph%C6%B0%C6%A1ng%20205%20Nguy%E1%BB%85n%20Tri%20Ph%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 5, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Kem",
      "Bingsu"
    ],
    "budgetMin": 25000,
    "budgetMax": 60000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "kem"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Kem%20Tr%C3%A0ng%20Ti%E1%BB%81n%20S%C3%A0i%20Th%C3%A0nh%20%E2%80%94%20Nguy%E1%BB%85n%20Tri%20Ph%C6%B0%C6%A1ng%20205%20Nguy%E1%BB%85n%20Tri%20Ph%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.foody.vn/ho-chi-minh/an-vat-via-he-tai-quan-5"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-banh-canh-tom-bot-gao-le-hong-phong",
    "name": "Bánh Canh Tôm Bột Gạo — Lê Hồng Phong",
    "kind": "food",
    "area": "Quận 5",
    "address": "131 Lê Hồng Phong, Quận 5, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20Canh%20T%C3%B4m%20B%E1%BB%99t%20G%E1%BA%A1o%20%E2%80%94%20L%C3%AA%20H%E1%BB%93ng%20Phong%20131%20L%C3%AA%20H%E1%BB%93ng%20Phong%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 5, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Bánh canh"
    ],
    "budgetMin": 45000,
    "budgetMax": 105000,
    "tags": [
      "Dịp đặc biệt",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "banh-canh"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20Canh%20T%C3%B4m%20B%E1%BB%99t%20G%E1%BA%A1o%20%E2%80%94%20L%C3%AA%20H%E1%BB%93ng%20Phong%20131%20L%C3%AA%20H%E1%BB%93ng%20Phong%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.foody.vn/ho-chi-minh/an-vat-via-he-tai-quan-5"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-xoi-bat-buu-xoi-sau-rieng-an-duong-vuong",
    "name": "Xôi Bát Bửu & Xôi Sầu Riêng — An Dương Vương",
    "kind": "food",
    "area": "Quận 5",
    "address": "447 An Dương Vương, Quận 5, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=X%C3%B4i%20B%C3%A1t%20B%E1%BB%ADu%20%26%20X%C3%B4i%20S%E1%BA%A7u%20Ri%C3%AAng%20%E2%80%94%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%20447%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 5, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Xôi"
    ],
    "budgetMin": 25000,
    "budgetMax": 65000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "xoi"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=X%C3%B4i%20B%C3%A1t%20B%E1%BB%ADu%20%26%20X%C3%B4i%20S%E1%BA%A7u%20Ri%C3%AAng%20%E2%80%94%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%20447%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.foody.vn/ho-chi-minh/an-vat-via-he-tai-quan-5"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-lu-s-corner-hung-vuong",
    "name": "Lu’s Corner — Hùng Vương",
    "kind": "food",
    "area": "Quận 5",
    "address": "319 Hùng Vương, Quận 5, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Lu%E2%80%99s%20Corner%20%E2%80%94%20H%C3%B9ng%20V%C6%B0%C6%A1ng%20319%20H%C3%B9ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 5, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Dimsum",
      "Món Hoa"
    ],
    "budgetMin": 50000,
    "budgetMax": 115000,
    "tags": [
      "Dịp đặc biệt",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "hoa"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Lu%E2%80%99s%20Corner%20%E2%80%94%20H%C3%B9ng%20V%C6%B0%C6%A1ng%20319%20H%C3%B9ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.foody.vn/ho-chi-minh/an-vat-via-he-tai-quan-5"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-com-tam-44-tran-binh-trong",
    "name": "Cơm Tấm 44 — Trần Bình Trọng",
    "kind": "food",
    "area": "Quận 5",
    "address": "185 Trần Bình Trọng, Quận 5, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20T%E1%BA%A5m%2044%20%E2%80%94%20Tr%E1%BA%A7n%20B%C3%ACnh%20Tr%E1%BB%8Dng%20185%20Tr%E1%BA%A7n%20B%C3%ACnh%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 5, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Cơm tấm sườn",
      "Cơm tấm bì chả"
    ],
    "budgetMin": 40000,
    "budgetMax": 90000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "com-tam"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20T%E1%BA%A5m%2044%20%E2%80%94%20Tr%E1%BA%A7n%20B%C3%ACnh%20Tr%E1%BB%8Dng%20185%20Tr%E1%BA%A7n%20B%C3%ACnh%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.foody.vn/ho-chi-minh/an-vat-via-he-tai-quan-5"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-com-tam-cali-nguyen-chi-thanh",
    "name": "Cơm Tấm Cali — Nguyễn Chí Thanh",
    "kind": "food",
    "area": "Quận 5",
    "address": "125 Nguyễn Chí Thanh, Quận 5, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20T%E1%BA%A5m%20Cali%20%E2%80%94%20Nguy%E1%BB%85n%20Ch%C3%AD%20Thanh%20125%20Nguy%E1%BB%85n%20Ch%C3%AD%20Thanh%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 5, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Cơm tấm sườn",
      "Cơm tấm bì chả"
    ],
    "budgetMin": 65000,
    "budgetMax": 150000,
    "tags": [
      "Dịp đặc biệt",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "com-tam"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20T%E1%BA%A5m%20Cali%20%E2%80%94%20Nguy%E1%BB%85n%20Ch%C3%AD%20Thanh%20125%20Nguy%E1%BB%85n%20Ch%C3%AD%20Thanh%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.foody.vn/ho-chi-minh/an-vat-via-he-tai-quan-5"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-dimsum-hoc-lac",
    "name": "Dimsum Học Lạc",
    "kind": "food",
    "area": "Quận 5",
    "address": "38B Học Lạc, Quận 5, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Dimsum%20H%E1%BB%8Dc%20L%E1%BA%A1c%2038B%20H%E1%BB%8Dc%20L%E1%BA%A1c%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 5, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Dimsum",
      "Món Hoa"
    ],
    "budgetMin": 50000,
    "budgetMax": 120000,
    "tags": [
      "Dịp đặc biệt",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "hoa"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Dimsum%20H%E1%BB%8Dc%20L%E1%BA%A1c%2038B%20H%E1%BB%8Dc%20L%E1%BA%A1c%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.foody.vn/ho-chi-minh/an-vat-via-he-tai-quan-5"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-com-tam-tai-nguyen-van-nghi",
    "name": "Cơm Tấm Tài — Nguyễn Văn Nghi",
    "kind": "food",
    "area": "Gò Vấp",
    "address": "100 Nguyễn Văn Nghi, Gò Vấp, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20T%E1%BA%A5m%20T%C3%A0i%20%E2%80%94%20Nguy%E1%BB%85n%20V%C4%83n%20Nghi%20100%20Nguy%E1%BB%85n%20V%C4%83n%20Nghi%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM",
    "description": "Địa điểm thuộc Gò Vấp, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Cơm tấm sườn",
      "Cơm tấm bì chả"
    ],
    "budgetMin": 35000,
    "budgetMax": 85000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "com-tam"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20T%E1%BA%A5m%20T%C3%A0i%20%E2%80%94%20Nguy%E1%BB%85n%20V%C4%83n%20Nghi%20100%20Nguy%E1%BB%85n%20V%C4%83n%20Nghi%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.google.com/maps/"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-pho-kiem-2-nguyen-van-khoi",
    "name": "Phở Kiêm 2 — Nguyễn Văn Khối",
    "kind": "food",
    "area": "Gò Vấp",
    "address": "142 Nguyễn Văn Khối, Gò Vấp, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Ki%C3%AAm%202%20%E2%80%94%20Nguy%E1%BB%85n%20V%C4%83n%20Kh%E1%BB%91i%20142%20Nguy%E1%BB%85n%20V%C4%83n%20Kh%E1%BB%91i%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM",
    "description": "Địa điểm thuộc Gò Vấp, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Phở bò",
      "Phở đặc biệt"
    ],
    "budgetMin": 45000,
    "budgetMax": 105000,
    "tags": [
      "Dịp đặc biệt",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "pho"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Ki%C3%AAm%202%20%E2%80%94%20Nguy%E1%BB%85n%20V%C4%83n%20Kh%E1%BB%91i%20142%20Nguy%E1%BB%85n%20V%C4%83n%20Kh%E1%BB%91i%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.google.com/maps/"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-pho-viet-nam-le-duc-tho",
    "name": "Phở Việt Nam — Lê Đức Thọ",
    "kind": "food",
    "area": "Gò Vấp",
    "address": "125 Lê Đức Thọ, Gò Vấp, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Vi%E1%BB%87t%20Nam%20%E2%80%94%20L%C3%AA%20%C4%90%E1%BB%A9c%20Th%E1%BB%8D%20125%20L%C3%AA%20%C4%90%E1%BB%A9c%20Th%E1%BB%8D%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM",
    "description": "Địa điểm thuộc Gò Vấp, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Phở bò",
      "Phở đặc biệt"
    ],
    "budgetMin": 55000,
    "budgetMax": 125000,
    "tags": [
      "Dịp đặc biệt",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "pho"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Vi%E1%BB%87t%20Nam%20%E2%80%94%20L%C3%AA%20%C4%90%E1%BB%A9c%20Th%E1%BB%8D%20125%20L%C3%AA%20%C4%90%E1%BB%A9c%20Th%E1%BB%8D%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.google.com/maps/"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-bun-bo-tho-da-bep-ong-lap-nguyen-van-luong",
    "name": "Bún Bò Thố Đá Bếp Ông Lập — Nguyễn Văn Lượng",
    "kind": "food",
    "area": "Gò Vấp",
    "address": "301 Nguyễn Văn Lượng, Gò Vấp, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20B%C3%B2%20Th%E1%BB%91%20%C4%90%C3%A1%20B%E1%BA%BFp%20%C3%94ng%20L%E1%BA%ADp%20%E2%80%94%20Nguy%E1%BB%85n%20V%C4%83n%20L%C6%B0%E1%BB%A3ng%20301%20Nguy%E1%BB%85n%20V%C4%83n%20L%C6%B0%E1%BB%A3ng%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM",
    "description": "Địa điểm thuộc Gò Vấp, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Bún bò",
      "Bún bò thố đá"
    ],
    "budgetMin": 55000,
    "budgetMax": 125000,
    "tags": [
      "Dịp đặc biệt",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "bun-bo"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20B%C3%B2%20Th%E1%BB%91%20%C4%90%C3%A1%20B%E1%BA%BFp%20%C3%94ng%20L%E1%BA%ADp%20%E2%80%94%20Nguy%E1%BB%85n%20V%C4%83n%20L%C6%B0%E1%BB%A3ng%20301%20Nguy%E1%BB%85n%20V%C4%83n%20L%C6%B0%E1%BB%A3ng%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.google.com/maps/"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-com-tam-hai-lam-le-thi-hong",
    "name": "Cơm Tấm Hai Lâm — Lê Thị Hồng",
    "kind": "food",
    "area": "Gò Vấp",
    "address": "32/18 Lê Thị Hồng, Gò Vấp, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20T%E1%BA%A5m%20Hai%20L%C3%A2m%20%E2%80%94%20L%C3%AA%20Th%E1%BB%8B%20H%E1%BB%93ng%2032%2F18%20L%C3%AA%20Th%E1%BB%8B%20H%E1%BB%93ng%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM",
    "description": "Địa điểm thuộc Gò Vấp, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Cơm tấm sườn",
      "Cơm tấm bì chả"
    ],
    "budgetMin": 35000,
    "budgetMax": 85000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "com-tam"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20T%E1%BA%A5m%20Hai%20L%C3%A2m%20%E2%80%94%20L%C3%AA%20Th%E1%BB%8B%20H%E1%BB%93ng%2032%2F18%20L%C3%AA%20Th%E1%BB%8B%20H%E1%BB%93ng%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.google.com/maps/"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-katinat-phan-van-tri",
    "name": "KATINAT — Phan Văn Trị",
    "kind": "coffee",
    "area": "Gò Vấp",
    "address": "18A Phan Văn Trị, Gò Vấp, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=KATINAT%20%E2%80%94%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2018A%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM",
    "description": "Địa điểm thuộc Gò Vấp, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Cà phê",
      "Nước ép"
    ],
    "budgetMin": 35000,
    "budgetMax": 85000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "ca-phe"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=KATINAT%20%E2%80%94%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2018A%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.google.com/maps/"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-family-gardens-cafe-phan-van-tri",
    "name": "Family Gardens Cafe — Phan Văn Trị",
    "kind": "coffee",
    "area": "Gò Vấp",
    "address": "438 Phan Văn Trị, Gò Vấp, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Family%20Gardens%20Cafe%20%E2%80%94%20Phan%20V%C4%83n%20Tr%E1%BB%8B%20438%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM",
    "description": "Địa điểm thuộc Gò Vấp, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Cà phê",
      "Nước ép"
    ],
    "budgetMin": 45000,
    "budgetMax": 110000,
    "tags": [
      "Dịp đặc biệt",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "ca-phe"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Family%20Gardens%20Cafe%20%E2%80%94%20Phan%20V%C4%83n%20Tr%E1%BB%8B%20438%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.google.com/maps/"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-pho-ly-quoc-su-nguyen-kiem",
    "name": "Phở Lý Quốc Sư — Nguyễn Kiệm",
    "kind": "food",
    "area": "Gò Vấp",
    "address": "729/9A Nguyễn Kiệm, Gò Vấp, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20L%C3%BD%20Qu%E1%BB%91c%20S%C6%B0%20%E2%80%94%20Nguy%E1%BB%85n%20Ki%E1%BB%87m%20729%2F9A%20Nguy%E1%BB%85n%20Ki%E1%BB%87m%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM",
    "description": "Địa điểm thuộc Gò Vấp, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Phở bò",
      "Phở đặc biệt"
    ],
    "budgetMin": 40000,
    "budgetMax": 100000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "pho"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20L%C3%BD%20Qu%E1%BB%91c%20S%C6%B0%20%E2%80%94%20Nguy%E1%BB%85n%20Ki%E1%BB%87m%20729%2F9A%20Nguy%E1%BB%85n%20Ki%E1%BB%87m%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.google.com/maps/"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-com-nieu-thien-ly-au-co",
    "name": "Cơm Niêu Thiên Lý — Âu Cơ",
    "kind": "food",
    "area": "Tân Bình",
    "address": "786 Âu Cơ, Tân Bình, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Ni%C3%AAu%20Thi%C3%AAn%20L%C3%BD%20%E2%80%94%20%C3%82u%20C%C6%A1%20786%20%C3%82u%20C%C6%A1%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM",
    "description": "Địa điểm thuộc Tân Bình, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Cơm nhà",
      "Cơm niêu"
    ],
    "budgetMin": 90000,
    "budgetMax": 220000,
    "tags": [
      "Dịp đặc biệt",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "com"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Ni%C3%AAu%20Thi%C3%AAn%20L%C3%BD%20%E2%80%94%20%C3%82u%20C%C6%A1%20786%20%C3%82u%20C%C6%A1%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.google.com/maps/"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-izzibing-pho-quang",
    "name": "Izzibing — Phổ Quang",
    "kind": "dessert",
    "area": "Tân Bình",
    "address": "49 Phổ Quang, Tân Bình, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Izzibing%20%E2%80%94%20Ph%E1%BB%95%20Quang%2049%20Ph%E1%BB%95%20Quang%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM",
    "description": "Địa điểm thuộc Tân Bình, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Kem",
      "Bingsu"
    ],
    "budgetMin": 60000,
    "budgetMax": 140000,
    "tags": [
      "Dịp đặc biệt",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "kem"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Izzibing%20%E2%80%94%20Ph%E1%BB%95%20Quang%2049%20Ph%E1%BB%95%20Quang%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.google.com/maps/"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-com-nieu-bep-xua-binh-gia",
    "name": "Cơm Niêu Bếp Xưa — Bình Giã",
    "kind": "food",
    "area": "Tân Bình",
    "address": "61A Bình Giã, Tân Bình, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Ni%C3%AAu%20B%E1%BA%BFp%20X%C6%B0a%20%E2%80%94%20B%C3%ACnh%20Gi%C3%A3%2061A%20B%C3%ACnh%20Gi%C3%A3%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM",
    "description": "Địa điểm thuộc Tân Bình, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Cơm nhà",
      "Cơm niêu"
    ],
    "budgetMin": 70000,
    "budgetMax": 170000,
    "tags": [
      "Dịp đặc biệt",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "com"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Ni%C3%AAu%20B%E1%BA%BFp%20X%C6%B0a%20%E2%80%94%20B%C3%ACnh%20Gi%C3%A3%2061A%20B%C3%ACnh%20Gi%C3%A3%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.google.com/maps/"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-seor-bingsu-hoang-hoa-tham",
    "name": "Seor Bingsu — Hoàng Hoa Thám",
    "kind": "dessert",
    "area": "Tân Bình",
    "address": "107 Hoàng Hoa Thám, Tân Bình, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Seor%20Bingsu%20%E2%80%94%20Ho%C3%A0ng%20Hoa%20Th%C3%A1m%20107%20Ho%C3%A0ng%20Hoa%20Th%C3%A1m%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM",
    "description": "Địa điểm thuộc Tân Bình, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Kem",
      "Bingsu"
    ],
    "budgetMin": 55000,
    "budgetMax": 130000,
    "tags": [
      "Dịp đặc biệt",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "kem"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Seor%20Bingsu%20%E2%80%94%20Ho%C3%A0ng%20Hoa%20Th%C3%A1m%20107%20Ho%C3%A0ng%20Hoa%20Th%C3%A1m%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.google.com/maps/"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-hai-san-giang-ghe-cong-hoa",
    "name": "Hải Sản Giang Ghẹ — Cộng Hòa",
    "kind": "food",
    "area": "Tân Bình",
    "address": "495 Cộng Hòa, Tân Bình, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20S%E1%BA%A3n%20Giang%20Gh%E1%BA%B9%20%E2%80%94%20C%E1%BB%99ng%20H%C3%B2a%20495%20C%E1%BB%99ng%20H%C3%B2a%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM",
    "description": "Địa điểm thuộc Tân Bình, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Hải sản"
    ],
    "budgetMin": 230000,
    "budgetMax": 550000,
    "tags": [
      "Dịp đặc biệt",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "hai-san"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20S%E1%BA%A3n%20Giang%20Gh%E1%BA%B9%20%E2%80%94%20C%E1%BB%99ng%20H%C3%B2a%20495%20C%E1%BB%99ng%20H%C3%B2a%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.google.com/maps/"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-izakaya-unatoto-nguyen-hong-dao",
    "name": "Izakaya Unatoto — Nguyễn Hồng Đào",
    "kind": "food",
    "area": "Tân Bình",
    "address": "248 Nguyễn Hồng Đào, Tân Bình, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Izakaya%20Unatoto%20%E2%80%94%20Nguy%E1%BB%85n%20H%E1%BB%93ng%20%C4%90%C3%A0o%20248%20Nguy%E1%BB%85n%20H%E1%BB%93ng%20%C4%90%C3%A0o%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM",
    "description": "Địa điểm thuộc Tân Bình, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Món Nhật"
    ],
    "budgetMin": 100000,
    "budgetMax": 240000,
    "tags": [
      "Dịp đặc biệt",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "nhat"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Izakaya%20Unatoto%20%E2%80%94%20Nguy%E1%BB%85n%20H%E1%BB%93ng%20%C4%90%C3%A0o%20248%20Nguy%E1%BB%85n%20H%E1%BB%93ng%20%C4%90%C3%A0o%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.google.com/maps/"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-non-que-quan-dong-den",
    "name": "Nón Quê Quán — Đồng Đen",
    "kind": "food",
    "area": "Tân Bình",
    "address": "30 Đồng Đen, Tân Bình, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=N%C3%B3n%20Qu%C3%AA%20Qu%C3%A1n%20%E2%80%94%20%C4%90%E1%BB%93ng%20%C4%90en%2030%20%C4%90%E1%BB%93ng%20%C4%90en%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM",
    "description": "Địa điểm thuộc Tân Bình, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Bún chả",
      "Bún đậu"
    ],
    "budgetMin": 65000,
    "budgetMax": 150000,
    "tags": [
      "Dịp đặc biệt",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "bun"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=N%C3%B3n%20Qu%C3%AA%20Qu%C3%A1n%20%E2%80%94%20%C4%90%E1%BB%93ng%20%C4%90en%2030%20%C4%90%E1%BB%93ng%20%C4%90en%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.google.com/maps/"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-pho-hoa-pasteur-260c",
    "name": "Phở Hòa Pasteur — 260C",
    "kind": "food",
    "area": "Quận 3",
    "address": "260C Pasteur, Quận 3, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20H%C3%B2a%20Pasteur%20%E2%80%94%20260C%20260C%20Pasteur%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 3, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Phở bò",
      "Phở đặc biệt"
    ],
    "budgetMin": 55000,
    "budgetMax": 130000,
    "tags": [
      "Dịp đặc biệt",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "pho"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20H%C3%B2a%20Pasteur%20%E2%80%94%20260C%20260C%20Pasteur%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.vietnambyregion.com/food/where-to-eat-saigon/"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-pho-huong-binh-vo-thi-sau",
    "name": "Phở Hương Bình — Võ Thị Sáu",
    "kind": "food",
    "area": "Quận 3",
    "address": "148 Võ Thị Sáu, Quận 3, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20H%C6%B0%C6%A1ng%20B%C3%ACnh%20%E2%80%94%20V%C3%B5%20Th%E1%BB%8B%20S%C3%A1u%20148%20V%C3%B5%20Th%E1%BB%8B%20S%C3%A1u%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 3, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Phở bò",
      "Phở đặc biệt"
    ],
    "budgetMin": 40000,
    "budgetMax": 95000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "pho"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20H%C6%B0%C6%A1ng%20B%C3%ACnh%20%E2%80%94%20V%C3%B5%20Th%E1%BB%8B%20S%C3%A1u%20148%20V%C3%B5%20Th%E1%BB%8B%20S%C3%A1u%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.vietnambyregion.com/food/where-to-eat-saigon/"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-pho-viet-nam-tran-quoc-toan",
    "name": "Phở Việt Nam — Trần Quốc Toản",
    "kind": "food",
    "area": "Quận 3",
    "address": "66 Trần Quốc Toản, Quận 3, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Vi%E1%BB%87t%20Nam%20%E2%80%94%20Tr%E1%BA%A7n%20Qu%E1%BB%91c%20To%E1%BA%A3n%2066%20Tr%E1%BA%A7n%20Qu%E1%BB%91c%20To%E1%BA%A3n%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 3, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Phở bò",
      "Phở đặc biệt"
    ],
    "budgetMin": 55000,
    "budgetMax": 130000,
    "tags": [
      "Dịp đặc biệt",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "pho"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Vi%E1%BB%87t%20Nam%20%E2%80%94%20Tr%E1%BA%A7n%20Qu%E1%BB%91c%20To%E1%BA%A3n%2066%20Tr%E1%BA%A7n%20Qu%E1%BB%91c%20To%E1%BA%A3n%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.vietnambyregion.com/food/where-to-eat-saigon/"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-pho-nhon-nguyen-thong",
    "name": "Phở NHON — Nguyễn Thông",
    "kind": "food",
    "area": "Quận 3",
    "address": "52 Nguyễn Thông, Quận 3, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20NHON%20%E2%80%94%20Nguy%E1%BB%85n%20Th%C3%B4ng%2052%20Nguy%E1%BB%85n%20Th%C3%B4ng%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 3, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Phở bò",
      "Phở đặc biệt"
    ],
    "budgetMin": 50000,
    "budgetMax": 120000,
    "tags": [
      "Dịp đặc biệt",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "pho"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20NHON%20%E2%80%94%20Nguy%E1%BB%85n%20Th%C3%B4ng%2052%20Nguy%E1%BB%85n%20Th%C3%B4ng%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.vietnambyregion.com/food/where-to-eat-saigon/"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-ha-noi-pho-phu-lai-vo-van-tan",
    "name": "Hà Nội Phở Phú Lai — Võ Văn Tần",
    "kind": "food",
    "area": "Quận 3",
    "address": "116 Võ Văn Tần, Quận 3, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=H%C3%A0%20N%E1%BB%99i%20Ph%E1%BB%9F%20Ph%C3%BA%20Lai%20%E2%80%94%20V%C3%B5%20V%C4%83n%20T%E1%BA%A7n%20116%20V%C3%B5%20V%C4%83n%20T%E1%BA%A7n%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 3, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Phở bò",
      "Phở đặc biệt"
    ],
    "budgetMin": 45000,
    "budgetMax": 110000,
    "tags": [
      "Dịp đặc biệt",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "pho"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=H%C3%A0%20N%E1%BB%99i%20Ph%E1%BB%9F%20Ph%C3%BA%20Lai%20%E2%80%94%20V%C3%B5%20V%C4%83n%20T%E1%BA%A7n%20116%20V%C3%B5%20V%C4%83n%20T%E1%BA%A7n%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.vietnambyregion.com/food/where-to-eat-saigon/"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-bot-s-food-hoang-sa",
    "name": "Bột’s Food — Hoàng Sa",
    "kind": "food",
    "area": "Quận 3",
    "address": "825 Hoàng Sa, Quận 3, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=B%E1%BB%99t%E2%80%99s%20Food%20%E2%80%94%20Ho%C3%A0ng%20Sa%20825%20Ho%C3%A0ng%20Sa%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 3, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Ăn vặt",
      "Món ăn nhẹ"
    ],
    "budgetMin": 40000,
    "budgetMax": 90000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "an-vat"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=B%E1%BB%99t%E2%80%99s%20Food%20%E2%80%94%20Ho%C3%A0ng%20Sa%20825%20Ho%C3%A0ng%20Sa%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.vietnambyregion.com/food/where-to-eat-saigon/"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-atispho-tran-quoc-toan",
    "name": "Atispho — Trần Quốc Toản",
    "kind": "food",
    "area": "Quận 3",
    "address": "72C Trần Quốc Toản, Quận 3, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Atispho%20%E2%80%94%20Tr%E1%BA%A7n%20Qu%E1%BB%91c%20To%E1%BA%A3n%2072C%20Tr%E1%BA%A7n%20Qu%E1%BB%91c%20To%E1%BA%A3n%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 3, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Phở bò",
      "Phở đặc biệt"
    ],
    "budgetMin": 45000,
    "budgetMax": 105000,
    "tags": [
      "Dịp đặc biệt",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "pho"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Atispho%20%E2%80%94%20Tr%E1%BA%A7n%20Qu%E1%BB%91c%20To%E1%BA%A3n%2072C%20Tr%E1%BA%A7n%20Qu%E1%BB%91c%20To%E1%BA%A3n%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.vietnambyregion.com/food/where-to-eat-saigon/"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-chao-long-doi-chien-co-chinh-tran-quang-dieu",
    "name": "Cháo Lòng Dồi Chiên Cô Chính — Trần Quang Diệu",
    "kind": "food",
    "area": "Quận 3",
    "address": "108/22 Trần Quang Diệu, Quận 3, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A1o%20L%C3%B2ng%20D%E1%BB%93i%20Chi%C3%AAn%20C%C3%B4%20Ch%C3%ADnh%20%E2%80%94%20Tr%E1%BA%A7n%20Quang%20Di%E1%BB%87u%20108%2F22%20Tr%E1%BA%A7n%20Quang%20Di%E1%BB%87u%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 3, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Cháo",
      "Súp"
    ],
    "budgetMin": 40000,
    "budgetMax": 90000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "chao-sup"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A1o%20L%C3%B2ng%20D%E1%BB%93i%20Chi%C3%AAn%20C%C3%B4%20Ch%C3%ADnh%20%E2%80%94%20Tr%E1%BA%A7n%20Quang%20Di%E1%BB%87u%20108%2F22%20Tr%E1%BA%A7n%20Quang%20Di%E1%BB%87u%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.vietnambyregion.com/food/where-to-eat-saigon/"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-dimsum-tan-sanh-hoat-nguyen-thi-minh-khai",
    "name": "Dimsum Tân Sanh Hoạt — Nguyễn Thị Minh Khai",
    "kind": "food",
    "area": "Quận 3",
    "address": "322 Nguyễn Thị Minh Khai, Quận 3, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Dimsum%20T%C3%A2n%20Sanh%20Ho%E1%BA%A1t%20%E2%80%94%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Minh%20Khai%20322%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Minh%20Khai%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 3, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Dimsum",
      "Món Hoa"
    ],
    "budgetMin": 60000,
    "budgetMax": 140000,
    "tags": [
      "Dịp đặc biệt",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "hoa"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Dimsum%20T%C3%A2n%20Sanh%20Ho%E1%BA%A1t%20%E2%80%94%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Minh%20Khai%20322%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Minh%20Khai%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://www.vietnambyregion.com/food/where-to-eat-saigon/"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-hanoi-corner-nguyen-thi-minh-khai",
    "name": "Hanoi Corner — Nguyễn Thị Minh Khai",
    "kind": "food",
    "area": "Quận 1",
    "address": "18B/17 Nguyễn Thị Minh Khai, Quận 1, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Hanoi%20Corner%20%E2%80%94%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Minh%20Khai%2018B%2F17%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Minh%20Khai%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 1, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Bún chả",
      "Bún đậu"
    ],
    "budgetMin": 55000,
    "budgetMax": 125000,
    "tags": [
      "Dịp đặc biệt",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "bun"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Hanoi%20Corner%20%E2%80%94%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Minh%20Khai%2018B%2F17%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Minh%20Khai%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://misssaigontours.com/saigon-street-food/"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-shancha-le-loi",
    "name": "Shancha — Lê Lợi",
    "kind": "drinks",
    "area": "Quận 1",
    "address": "38 Lê Lợi, Quận 1, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Shancha%20%E2%80%94%20L%C3%AA%20L%E1%BB%A3i%2038%20L%C3%AA%20L%E1%BB%A3i%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 1, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Trà sữa",
      "Trà trái cây"
    ],
    "budgetMin": 35000,
    "budgetMax": 85000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "tra-sua"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Shancha%20%E2%80%94%20L%C3%AA%20L%E1%BB%A3i%2038%20L%C3%AA%20L%E1%BB%A3i%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://misssaigontours.com/saigon-street-food/"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-pho-hung-nguyen-trai",
    "name": "Phở Hùng — Nguyễn Trãi",
    "kind": "food",
    "area": "Quận 1",
    "address": "241–243 Nguyễn Trãi, Quận 1, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20H%C3%B9ng%20%E2%80%94%20Nguy%E1%BB%85n%20Tr%C3%A3i%20241%E2%80%93243%20Nguy%E1%BB%85n%20Tr%C3%A3i%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 1, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Phở bò",
      "Phở đặc biệt"
    ],
    "budgetMin": 50000,
    "budgetMax": 115000,
    "tags": [
      "Dịp đặc biệt",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "pho"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20H%C3%B9ng%20%E2%80%94%20Nguy%E1%BB%85n%20Tr%C3%A3i%20241%E2%80%93243%20Nguy%E1%BB%85n%20Tr%C3%A3i%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://misssaigontours.com/saigon-street-food/"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-ngoc-thach-quan-quan-1",
    "name": "Ngọc Thạch Quán — Quận 1",
    "kind": "dessert",
    "area": "Quận 1",
    "address": "57 Nguyễn Thái Bình, Quận 1, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ng%E1%BB%8Dc%20Th%E1%BA%A1ch%20Qu%C3%A1n%20%E2%80%94%20Qu%E1%BA%ADn%201%2057%20Nguy%E1%BB%85n%20Th%C3%A1i%20B%C3%ACnh%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 1, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Chè",
      "Khúc bạch"
    ],
    "budgetMin": 30000,
    "budgetMax": 70000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "che"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Ng%E1%BB%8Dc%20Th%E1%BA%A1ch%20Qu%C3%A1n%20%E2%80%94%20Qu%E1%BA%ADn%201%2057%20Nguy%E1%BB%85n%20Th%C3%A1i%20B%C3%ACnh%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://misssaigontours.com/saigon-street-food/"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-quan-bac-le-loi",
    "name": "Quán Bấc — Lê Lợi",
    "kind": "food",
    "area": "Quận 1",
    "address": "36/3 Lê Lợi, Quận 1, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20B%E1%BA%A5c%20%E2%80%94%20L%C3%AA%20L%E1%BB%A3i%2036%2F3%20L%C3%AA%20L%E1%BB%A3i%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 1, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Cơm nhà",
      "Cơm niêu"
    ],
    "budgetMin": 55000,
    "budgetMax": 130000,
    "tags": [
      "Dịp đặc biệt",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "com"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20B%E1%BA%A5c%20%E2%80%94%20L%C3%AA%20L%E1%BB%A3i%2036%2F3%20L%C3%AA%20L%E1%BB%A3i%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://misssaigontours.com/saigon-street-food/"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-futea-dinh-tien-hoang",
    "name": "FUTEA — Đinh Tiên Hoàng",
    "kind": "drinks",
    "area": "Quận 1",
    "address": "56 Đinh Tiên Hoàng, Quận 1, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=FUTEA%20%E2%80%94%20%C4%90inh%20Ti%C3%AAn%20Ho%C3%A0ng%2056%20%C4%90inh%20Ti%C3%AAn%20Ho%C3%A0ng%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 1, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Trà sữa",
      "Trà trái cây"
    ],
    "budgetMin": 30000,
    "budgetMax": 70000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "tra-sua"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=FUTEA%20%E2%80%94%20%C4%90inh%20Ti%C3%AAn%20Ho%C3%A0ng%2056%20%C4%90inh%20Ti%C3%AAn%20Ho%C3%A0ng%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://misssaigontours.com/saigon-street-food/"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-com-tam-2-sai-gon-trinh-van-can",
    "name": "Cơm Tấm @2 Sài Gòn — Trịnh Văn Cấn",
    "kind": "food",
    "area": "Quận 1",
    "address": "48 Trịnh Văn Cấn, Quận 1, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20T%E1%BA%A5m%20%402%20S%C3%A0i%20G%C3%B2n%20%E2%80%94%20Tr%E1%BB%8Bnh%20V%C4%83n%20C%E1%BA%A5n%2048%20Tr%E1%BB%8Bnh%20V%C4%83n%20C%E1%BA%A5n%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 1, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Cơm tấm sườn",
      "Cơm tấm bì chả"
    ],
    "budgetMin": 45000,
    "budgetMax": 110000,
    "tags": [
      "Dịp đặc biệt",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "com-tam"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20T%E1%BA%A5m%20%402%20S%C3%A0i%20G%C3%B2n%20%E2%80%94%20Tr%E1%BB%8Bnh%20V%C4%83n%20C%E1%BA%A5n%2048%20Tr%E1%BB%8Bnh%20V%C4%83n%20C%E1%BA%A5n%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://misssaigontours.com/saigon-street-food/"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-pearl-ly-tu-trong",
    "name": "Pearl — Lý Tự Trọng",
    "kind": "drinks",
    "area": "Quận 1",
    "address": "315 Lý Tự Trọng, Quận 1, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Pearl%20%E2%80%94%20L%C3%BD%20T%E1%BB%B1%20Tr%E1%BB%8Dng%20315%20L%C3%BD%20T%E1%BB%B1%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 1, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Trà sữa",
      "Trà trái cây"
    ],
    "budgetMin": 40000,
    "budgetMax": 100000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "tra-sua"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Pearl%20%E2%80%94%20L%C3%BD%20T%E1%BB%B1%20Tr%E1%BB%8Dng%20315%20L%C3%BD%20T%E1%BB%B1%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://misssaigontours.com/saigon-street-food/"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-banh-mi-huynh-hoa-le-thi-rieng",
    "name": "Bánh Mì Huỳnh Hoa — Lê Thị Riêng",
    "kind": "food",
    "area": "Quận 1",
    "address": "26 Lê Thị Riêng, Quận 1, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20M%C3%AC%20Hu%E1%BB%B3nh%20Hoa%20%E2%80%94%20L%C3%AA%20Th%E1%BB%8B%20Ri%C3%AAng%2026%20L%C3%AA%20Th%E1%BB%8B%20Ri%C3%AAng%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 1, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Bánh mì thịt"
    ],
    "budgetMin": 40000,
    "budgetMax": 100000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "banh-mi"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20M%C3%AC%20Hu%E1%BB%B3nh%20Hoa%20%E2%80%94%20L%C3%AA%20Th%E1%BB%8B%20Ri%C3%AAng%2026%20L%C3%AA%20Th%E1%BB%8B%20Ri%C3%AAng%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://misssaigontours.com/saigon-street-food/"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-nha-hang-ngon-pasteur",
    "name": "Nhà Hàng Ngon — Pasteur",
    "kind": "food",
    "area": "Quận 1",
    "address": "160 Pasteur, Quận 1, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Nh%C3%A0%20H%C3%A0ng%20Ngon%20%E2%80%94%20Pasteur%20160%20Pasteur%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 1, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Cơm nhà",
      "Cơm niêu"
    ],
    "budgetMin": 120000,
    "budgetMax": 280000,
    "tags": [
      "Dịp đặc biệt",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "com"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Nh%C3%A0%20H%C3%A0ng%20Ngon%20%E2%80%94%20Pasteur%20160%20Pasteur%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://misssaigontours.com/saigon-street-food/"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-xoi-ga-number-one-nguyen-trung-truc",
    "name": "Xôi Gà Number One — Nguyễn Trung Trực",
    "kind": "food",
    "area": "Quận 1",
    "address": "15 Nguyễn Trung Trực, Quận 1, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=X%C3%B4i%20G%C3%A0%20Number%20One%20%E2%80%94%20Nguy%E1%BB%85n%20Trung%20Tr%E1%BB%B1c%2015%20Nguy%E1%BB%85n%20Trung%20Tr%E1%BB%B1c%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 1, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Xôi"
    ],
    "budgetMin": 25000,
    "budgetMax": 60000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "xoi"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=X%C3%B4i%20G%C3%A0%20Number%20One%20%E2%80%94%20Nguy%E1%BB%85n%20Trung%20Tr%E1%BB%B1c%2015%20Nguy%E1%BB%85n%20Trung%20Tr%E1%BB%B1c%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://misssaigontours.com/saigon-street-food/"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v4-pho-quynh-pham-ngu-lao",
    "name": "Phở Quỳnh — Phạm Ngũ Lão",
    "kind": "food",
    "area": "Quận 1",
    "address": "323 Phạm Ngũ Lão, Quận 1, TP.HCM",
    "addressSource": "Kết quả tra cứu danh bạ địa điểm công khai; chưa đối chiếu bằng Google Places API",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Qu%E1%BB%B3nh%20%E2%80%94%20Ph%E1%BA%A1m%20Ng%C5%A9%20L%C3%A3o%20323%20Ph%E1%BA%A1m%20Ng%C5%A9%20L%C3%A3o%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM",
    "description": "Địa điểm thuộc Quận 1, phù hợp tham khảo trước buổi đi ăn hoặc hẹn hò. Vui lòng đối chiếu tên chi nhánh, thực đơn, giá và giờ mở cửa trước khi đi.",
    "dishes": [
      "Phở bò",
      "Phở đặc biệt"
    ],
    "budgetMin": 50000,
    "budgetMax": 115000,
    "tags": [
      "Dịp đặc biệt",
      "Hẹn giản dị"
    ],
    "cuisineTags": [
      "pho"
    ],
    "sources": [
      {
        "label": "Tìm vị trí và kiểm tra thực tế trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Qu%E1%BB%B3nh%20%E2%80%94%20Ph%E1%BA%A1m%20Ng%C5%A9%20L%C3%A3o%20323%20Ph%E1%BA%A1m%20Ng%C5%A9%20L%C3%A3o%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM"
      },
      {
        "label": "Nguồn nghiên cứu khu vực (tham khảo)",
        "url": "https://misssaigontours.com/saigon-street-food/"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Ước tính biên tập theo một người, không phải giá niêm yết. Kiểm tra menu, phụ phí và giờ mở cửa trước khi ghé."
  },
  {
    "id": "v5-nantha-xoi-xoai-che-thai",
    "name": "Nantha — Xôi Xoài & Chè Thái",
    "kind": "dessert",
    "area": "Quận 1",
    "address": "21B/5 Nguyễn Đình Chiểu, Quận 1, TP.HCM",
    "addressSource": "Nguồn địa chỉ công khai, kiểm tra lại giờ hoạt động trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Nantha%20%E2%80%94%20X%C3%B4i%20Xo%C3%A0i%20%26%20Ch%C3%A8%20Th%C3%A1i%2021B%2F5%20Nguy%E1%BB%85n%20%C4%90%C3%ACnh%20Chi%E1%BB%83u%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM",
    "description": "Gợi ý tráng miệng dễ ghé sau bữa chính: món ngọt mát, giá dự trù phù hợp đi học và đi chơi.",
    "dishes": [
      "Xôi xoài Thái",
      "Chè Thái"
    ],
    "budgetMin": 30000,
    "budgetMax": 70000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Tráng miệng"
    ],
    "cuisineTags": [
      "xoi-xoai",
      "che"
    ],
    "sources": [
      {
        "label": "Nguồn quán & địa chỉ tham khảo",
        "url": "https://www.foody.vn/ho-chi-minh/tim-kiem/x%C3%B4i-xo%C3%A0i-%E1%BB%9F-qu%E1%BA%ADn-1"
      },
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Nantha%20%E2%80%94%20X%C3%B4i%20Xo%C3%A0i%20%26%20Ch%C3%A8%20Th%C3%A1i%2021B%2F5%20Nguy%E1%BB%85n%20%C4%90%C3%ACnh%20Chi%E1%BB%83u%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-bi-lun-xoi-xoai-cho-ton-that-dam",
    "name": "Bi Lùn — Xôi Xoài Chợ Tôn Thất Đạm",
    "kind": "dessert",
    "area": "Quận 1",
    "address": "Sạp 127B, Chợ Tôn Thất Đạm, Quận 1, TP.HCM",
    "addressSource": "Nguồn địa chỉ công khai, kiểm tra lại giờ hoạt động trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Bi%20L%C3%B9n%20%E2%80%94%20X%C3%B4i%20Xo%C3%A0i%20Ch%E1%BB%A3%20T%C3%B4n%20Th%E1%BA%A5t%20%C4%90%E1%BA%A1m%20S%E1%BA%A1p%20127B%2C%20Ch%E1%BB%A3%20T%C3%B4n%20Th%E1%BA%A5t%20%C4%90%E1%BA%A1m%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM",
    "description": "Gợi ý tráng miệng dễ ghé sau bữa chính: món ngọt mát, giá dự trù phù hợp đi học và đi chơi.",
    "dishes": [
      "Xôi xoài cốt dừa"
    ],
    "budgetMin": 20000,
    "budgetMax": 50000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Tráng miệng"
    ],
    "cuisineTags": [
      "xoi-xoai"
    ],
    "sources": [
      {
        "label": "Nguồn quán & địa chỉ tham khảo",
        "url": "https://www.foody.vn/ho-chi-minh/tim-kiem/x%C3%B4i-xo%C3%A0i-%E1%BB%9F-qu%E1%BA%ADn-1"
      },
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Bi%20L%C3%B9n%20%E2%80%94%20X%C3%B4i%20Xo%C3%A0i%20Ch%E1%BB%A3%20T%C3%B4n%20Th%E1%BA%A5t%20%C4%90%E1%BA%A1m%20S%E1%BA%A1p%20127B%2C%20Ch%E1%BB%A3%20T%C3%B4n%20Th%E1%BA%A5t%20%C4%90%E1%BA%A1m%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-che-me-den-nguyen-thai-binh",
    "name": "Chè Mè Đen — Nguyễn Thái Bình",
    "kind": "dessert",
    "area": "Quận 1",
    "address": "149 Nguyễn Thái Bình, Quận 1, TP.HCM",
    "addressSource": "Danh bạ địa điểm/Google Maps, cần xác minh trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20M%C3%A8%20%C4%90en%20%E2%80%94%20Nguy%E1%BB%85n%20Th%C3%A1i%20B%C3%ACnh%20149%20Nguy%E1%BB%85n%20Th%C3%A1i%20B%C3%ACnh%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM",
    "description": "Gợi ý tráng miệng dễ ghé sau bữa chính: món ngọt mát, giá dự trù phù hợp đi học và đi chơi.",
    "dishes": [
      "Chè mè đen",
      "Flan mè đen"
    ],
    "budgetMin": 20000,
    "budgetMax": 55000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Tráng miệng"
    ],
    "cuisineTags": [
      "che",
      "banh-flan"
    ],
    "sources": [
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20M%C3%A8%20%C4%90en%20%E2%80%94%20Nguy%E1%BB%85n%20Th%C3%A1i%20B%C3%ACnh%20149%20Nguy%E1%BB%85n%20Th%C3%A1i%20B%C3%ACnh%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-che-thai-kim-s-nguyen-van-thu",
    "name": "Chè Thái Kim’s — Nguyễn Văn Thủ",
    "kind": "dessert",
    "area": "Quận 1",
    "address": "82 Nguyễn Văn Thủ, Quận 1, TP.HCM",
    "addressSource": "Danh bạ địa điểm/Google Maps, cần xác minh trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Th%C3%A1i%20Kim%E2%80%99s%20%E2%80%94%20Nguy%E1%BB%85n%20V%C4%83n%20Th%E1%BB%A7%2082%20Nguy%E1%BB%85n%20V%C4%83n%20Th%E1%BB%A7%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM",
    "description": "Gợi ý tráng miệng dễ ghé sau bữa chính: món ngọt mát, giá dự trù phù hợp đi học và đi chơi.",
    "dishes": [
      "Chè Thái",
      "Chè sầu riêng"
    ],
    "budgetMin": 25000,
    "budgetMax": 60000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Tráng miệng"
    ],
    "cuisineTags": [
      "che"
    ],
    "sources": [
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Th%C3%A1i%20Kim%E2%80%99s%20%E2%80%94%20Nguy%E1%BB%85n%20V%C4%83n%20Th%E1%BB%A7%2082%20Nguy%E1%BB%85n%20V%C4%83n%20Th%E1%BB%A7%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-kem-tuoi-vu-dung",
    "name": "Kem Tươi Vũ Dũng",
    "kind": "dessert",
    "area": "Quận 3",
    "address": "31 Trần Quốc Toản, Quận 3, TP.HCM",
    "addressSource": "Nguồn địa chỉ công khai, kiểm tra lại giờ hoạt động trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Kem%20T%C6%B0%C6%A1i%20V%C5%A9%20D%C5%A9ng%2031%20Tr%E1%BA%A7n%20Qu%E1%BB%91c%20To%E1%BA%A3n%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM",
    "description": "Gợi ý tráng miệng dễ ghé sau bữa chính: món ngọt mát, giá dự trù phù hợp đi học và đi chơi.",
    "dishes": [
      "Kem tươi",
      "Kem ốc quế"
    ],
    "budgetMin": 15000,
    "budgetMax": 40000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Tráng miệng"
    ],
    "cuisineTags": [
      "kem"
    ],
    "sources": [
      {
        "label": "Nguồn quán & địa chỉ tham khảo",
        "url": "https://www.greensm.com/vn-vi/news/quan-kem-quan-3"
      },
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Kem%20T%C6%B0%C6%A1i%20V%C5%A9%20D%C5%A9ng%2031%20Tr%E1%BA%A7n%20Qu%E1%BB%91c%20To%E1%BA%A3n%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-ca-rem-kem-dua-thai-cach-mang-thang-tam",
    "name": "Cà-rem Kem Dừa Thái — Cách Mạng Tháng Tám",
    "kind": "dessert",
    "area": "Quận 3",
    "address": "191 Cách Mạng Tháng 8, Quận 3, TP.HCM",
    "addressSource": "Nguồn địa chỉ công khai, kiểm tra lại giờ hoạt động trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=C%C3%A0-rem%20Kem%20D%E1%BB%ABa%20Th%C3%A1i%20%E2%80%94%20C%C3%A1ch%20M%E1%BA%A1ng%20Th%C3%A1ng%20T%C3%A1m%20191%20C%C3%A1ch%20M%E1%BA%A1ng%20Th%C3%A1ng%208%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM",
    "description": "Gợi ý tráng miệng dễ ghé sau bữa chính: món ngọt mát, giá dự trù phù hợp đi học và đi chơi.",
    "dishes": [
      "Kem dừa Thái",
      "Kem xôi dừa"
    ],
    "budgetMin": 30000,
    "budgetMax": 60000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Tráng miệng"
    ],
    "cuisineTags": [
      "kem",
      "kem-dua"
    ],
    "sources": [
      {
        "label": "Nguồn quán & địa chỉ tham khảo",
        "url": "https://www.foody.vn/ho-chi-minh/ca-rem-kem-dua-thai"
      },
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=C%C3%A0-rem%20Kem%20D%E1%BB%ABa%20Th%C3%A1i%20%E2%80%94%20C%C3%A1ch%20M%E1%BA%A1ng%20Th%C3%A1ng%20T%C3%A1m%20191%20C%C3%A1ch%20M%E1%BA%A1ng%20Th%C3%A1ng%208%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-kem-dua-phaya-thai-nguyen-dinh-chieu",
    "name": "Kem Dừa Phaya Thái — Nguyễn Đình Chiểu",
    "kind": "dessert",
    "area": "Quận 3",
    "address": "782 Nguyễn Đình Chiểu, Quận 3, TP.HCM",
    "addressSource": "Danh bạ địa điểm/Google Maps, cần xác minh trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Kem%20D%E1%BB%ABa%20Phaya%20Th%C3%A1i%20%E2%80%94%20Nguy%E1%BB%85n%20%C4%90%C3%ACnh%20Chi%E1%BB%83u%20782%20Nguy%E1%BB%85n%20%C4%90%C3%ACnh%20Chi%E1%BB%83u%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM",
    "description": "Gợi ý tráng miệng dễ ghé sau bữa chính: món ngọt mát, giá dự trù phù hợp đi học và đi chơi.",
    "dishes": [
      "Kem dừa",
      "Kem xôi"
    ],
    "budgetMin": 25000,
    "budgetMax": 55000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Tráng miệng"
    ],
    "cuisineTags": [
      "kem",
      "kem-dua"
    ],
    "sources": [
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Kem%20D%E1%BB%ABa%20Phaya%20Th%C3%A1i%20%E2%80%94%20Nguy%E1%BB%85n%20%C4%90%C3%ACnh%20Chi%E1%BB%83u%20782%20Nguy%E1%BB%85n%20%C4%90%C3%ACnh%20Chi%E1%BB%83u%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-banh-flan-223-tran-binh-trong",
    "name": "Bánh Flan 223 — Trần Bình Trọng",
    "kind": "dessert",
    "area": "Quận 5",
    "address": "223 Trần Bình Trọng, Quận 5, TP.HCM",
    "addressSource": "Danh bạ địa điểm/Google Maps, cần xác minh trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20Flan%20223%20%E2%80%94%20Tr%E1%BA%A7n%20B%C3%ACnh%20Tr%E1%BB%8Dng%20223%20Tr%E1%BA%A7n%20B%C3%ACnh%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "description": "Gợi ý tráng miệng dễ ghé sau bữa chính: món ngọt mát, giá dự trù phù hợp đi học và đi chơi.",
    "dishes": [
      "Bánh flan caramel",
      "Chè"
    ],
    "budgetMin": 15000,
    "budgetMax": 50000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Tráng miệng"
    ],
    "cuisineTags": [
      "banh-flan",
      "che"
    ],
    "sources": [
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20Flan%20223%20%E2%80%94%20Tr%E1%BA%A7n%20B%C3%ACnh%20Tr%E1%BB%8Dng%20223%20Tr%E1%BA%A7n%20B%C3%ACnh%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-che-tam-tam-tran-xuan-hoa",
    "name": "Chè Tâm Tâm — Trần Xuân Hòa",
    "kind": "dessert",
    "area": "Quận 5",
    "address": "14 Trần Xuân Hòa, Quận 5, TP.HCM",
    "addressSource": "Danh bạ địa điểm/Google Maps, cần xác minh trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20T%C3%A2m%20T%C3%A2m%20%E2%80%94%20Tr%E1%BA%A7n%20Xu%C3%A2n%20H%C3%B2a%2014%20Tr%E1%BA%A7n%20Xu%C3%A2n%20H%C3%B2a%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "description": "Gợi ý tráng miệng dễ ghé sau bữa chính: món ngọt mát, giá dự trù phù hợp đi học và đi chơi.",
    "dishes": [
      "Chè khúc bạch",
      "Chè thập cẩm",
      "Flan"
    ],
    "budgetMin": 20000,
    "budgetMax": 55000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Tráng miệng"
    ],
    "cuisineTags": [
      "che",
      "banh-flan"
    ],
    "sources": [
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20T%C3%A2m%20T%C3%A2m%20%E2%80%94%20Tr%E1%BA%A7n%20Xu%C3%A2n%20H%C3%B2a%2014%20Tr%E1%BA%A7n%20Xu%C3%A2n%20H%C3%B2a%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-quan-che-613-nguyen-trai",
    "name": "Quán Chè 613 — Nguyễn Trãi",
    "kind": "dessert",
    "area": "Quận 5",
    "address": "634A Nguyễn Trãi, Quận 5, TP.HCM",
    "addressSource": "Danh bạ địa điểm/Google Maps, cần xác minh trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Ch%C3%A8%20613%20%E2%80%94%20Nguy%E1%BB%85n%20Tr%C3%A3i%20634A%20Nguy%E1%BB%85n%20Tr%C3%A3i%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "description": "Gợi ý tráng miệng dễ ghé sau bữa chính: món ngọt mát, giá dự trù phù hợp đi học và đi chơi.",
    "dishes": [
      "Chè sầu riêng",
      "Chè kiểu Hoa"
    ],
    "budgetMin": 25000,
    "budgetMax": 60000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Tráng miệng"
    ],
    "cuisineTags": [
      "che",
      "banh-flan"
    ],
    "sources": [
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Ch%C3%A8%20613%20%E2%80%94%20Nguy%E1%BB%85n%20Tr%C3%A3i%20634A%20Nguy%E1%BB%85n%20Tr%C3%A3i%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-fruit-crush-trai-cay-tuoi",
    "name": "Fruit Crush — Trái Cây Tươi",
    "kind": "dessert",
    "area": "Quận 5",
    "address": "181/6 Lê Hồng Phong, Quận 5, TP.HCM",
    "addressSource": "Danh bạ địa điểm/Google Maps, cần xác minh trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Fruit%20Crush%20%E2%80%94%20Tr%C3%A1i%20C%C3%A2y%20T%C6%B0%C6%A1i%20181%2F6%20L%C3%AA%20H%E1%BB%93ng%20Phong%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "description": "Gợi ý tráng miệng dễ ghé sau bữa chính: món ngọt mát, giá dự trù phù hợp đi học và đi chơi.",
    "dishes": [
      "Trái cây tô",
      "Trái cây tươi",
      "Sữa chua trái cây"
    ],
    "budgetMin": 25000,
    "budgetMax": 60000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Tráng miệng"
    ],
    "cuisineTags": [
      "trai-cay-to"
    ],
    "sources": [
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Fruit%20Crush%20%E2%80%94%20Tr%C3%A1i%20C%C3%A2y%20T%C6%B0%C6%A1i%20181%2F6%20L%C3%AA%20H%E1%BB%93ng%20Phong%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-trai-cay-to-541-phan-van-tri",
    "name": "Trái Cây Tô 541 — Phan Văn Trị",
    "kind": "dessert",
    "area": "Quận 5",
    "address": "541 Phan Văn Trị, Quận 5, TP.HCM",
    "addressSource": "Danh bạ địa điểm/Google Maps, cần xác minh trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Tr%C3%A1i%20C%C3%A2y%20T%C3%B4%20541%20%E2%80%94%20Phan%20V%C4%83n%20Tr%E1%BB%8B%20541%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "description": "Gợi ý tráng miệng dễ ghé sau bữa chính: món ngọt mát, giá dự trù phù hợp đi học và đi chơi.",
    "dishes": [
      "Trái cây tô",
      "Sinh tố bơ"
    ],
    "budgetMin": 20000,
    "budgetMax": 55000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Tráng miệng"
    ],
    "cuisineTags": [
      "trai-cay-to",
      "sinh-to"
    ],
    "sources": [
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Tr%C3%A1i%20C%C3%A2y%20T%C3%B4%20541%20%E2%80%94%20Phan%20V%C4%83n%20Tr%E1%BB%8B%20541%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-kem-dua-phaya-thai-nguyen-bieu",
    "name": "Kem Dừa Phaya Thai — Nguyễn Biểu",
    "kind": "dessert",
    "area": "Quận 5",
    "address": "146 Nguyễn Biểu, Quận 5, TP.HCM",
    "addressSource": "Danh bạ địa điểm/Google Maps, cần xác minh trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Kem%20D%E1%BB%ABa%20Phaya%20Thai%20%E2%80%94%20Nguy%E1%BB%85n%20Bi%E1%BB%83u%20146%20Nguy%E1%BB%85n%20Bi%E1%BB%83u%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "description": "Gợi ý tráng miệng dễ ghé sau bữa chính: món ngọt mát, giá dự trù phù hợp đi học và đi chơi.",
    "dishes": [
      "Kem dừa trong trái dừa"
    ],
    "budgetMin": 25000,
    "budgetMax": 55000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Tráng miệng"
    ],
    "cuisineTags": [
      "kem",
      "kem-dua"
    ],
    "sources": [
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Kem%20D%E1%BB%ABa%20Phaya%20Thai%20%E2%80%94%20Nguy%E1%BB%85n%20Bi%E1%BB%83u%20146%20Nguy%E1%BB%85n%20Bi%E1%BB%83u%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-banh-flan-tay-ban-nha-duong-so-1",
    "name": "Bánh Flan Tây Ban Nha — Đường Số 1",
    "kind": "dessert",
    "area": "Gò Vấp",
    "address": "119 Đường Số 1, Gò Vấp, TP.HCM",
    "addressSource": "Nguồn địa chỉ công khai, kiểm tra lại giờ hoạt động trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20Flan%20T%C3%A2y%20Ban%20Nha%20%E2%80%94%20%C4%90%C6%B0%E1%BB%9Dng%20S%E1%BB%91%201%20119%20%C4%90%C6%B0%E1%BB%9Dng%20S%E1%BB%91%201%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM",
    "description": "Gợi ý tráng miệng dễ ghé sau bữa chính: món ngọt mát, giá dự trù phù hợp đi học và đi chơi.",
    "dishes": [
      "Bánh flan caramel",
      "Flan phô mai"
    ],
    "budgetMin": 10000,
    "budgetMax": 35000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Tráng miệng"
    ],
    "cuisineTags": [
      "banh-flan"
    ],
    "sources": [
      {
        "label": "Nguồn quán & địa chỉ tham khảo",
        "url": "https://www.foody.vn/ho-chi-minh/tim-kiem/flan"
      },
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20Flan%20T%C3%A2y%20Ban%20Nha%20%E2%80%94%20%C4%90%C6%B0%E1%BB%9Dng%20S%E1%BB%91%201%20119%20%C4%90%C6%B0%E1%BB%9Dng%20S%E1%BB%91%201%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-boobo-s-flan-le-van-tho",
    "name": "Boobo’s Flan — Lê Văn Thọ",
    "kind": "dessert",
    "area": "Gò Vấp",
    "address": "106 Lê Văn Thọ, Gò Vấp, TP.HCM",
    "addressSource": "Danh bạ địa điểm/Google Maps, cần xác minh trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Boobo%E2%80%99s%20Flan%20%E2%80%94%20L%C3%AA%20V%C4%83n%20Th%E1%BB%8D%20106%20L%C3%AA%20V%C4%83n%20Th%E1%BB%8D%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM",
    "description": "Gợi ý tráng miệng dễ ghé sau bữa chính: món ngọt mát, giá dự trù phù hợp đi học và đi chơi.",
    "dishes": [
      "Bánh flan nhiều vị",
      "Flan cà phê"
    ],
    "budgetMin": 15000,
    "budgetMax": 45000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Tráng miệng"
    ],
    "cuisineTags": [
      "banh-flan"
    ],
    "sources": [
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Boobo%E2%80%99s%20Flan%20%E2%80%94%20L%C3%AA%20V%C4%83n%20Th%E1%BB%8D%20106%20L%C3%AA%20V%C4%83n%20Th%E1%BB%8D%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-thanh-phuc-flan-rau-cau",
    "name": "Thành Phúc — Flan & Rau Câu",
    "kind": "dessert",
    "area": "Gò Vấp",
    "address": "42 Đường Số 45, Gò Vấp, TP.HCM",
    "addressSource": "Nguồn địa chỉ công khai, kiểm tra lại giờ hoạt động trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Th%C3%A0nh%20Ph%C3%BAc%20%E2%80%94%20Flan%20%26%20Rau%20C%C3%A2u%2042%20%C4%90%C6%B0%E1%BB%9Dng%20S%E1%BB%91%2045%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM",
    "description": "Gợi ý tráng miệng dễ ghé sau bữa chính: món ngọt mát, giá dự trù phù hợp đi học và đi chơi.",
    "dishes": [
      "Bánh flan",
      "Rau câu",
      "Cao quy linh"
    ],
    "budgetMin": 10000,
    "budgetMax": 30000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Tráng miệng"
    ],
    "cuisineTags": [
      "banh-flan"
    ],
    "sources": [
      {
        "label": "Nguồn quán & địa chỉ tham khảo",
        "url": "https://www.foody.vn/ho-chi-minh/thanh-phuc-banh-flan-rau-cau-cao-quy-linh"
      },
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Th%C3%A0nh%20Ph%C3%BAc%20%E2%80%94%20Flan%20%26%20Rau%20C%C3%A2u%2042%20%C4%90%C6%B0%E1%BB%9Dng%20S%E1%BB%91%2045%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-kem-dua-siam-nguyen-van-bao",
    "name": "Kem Dừa Siam — Nguyễn Văn Bảo",
    "kind": "dessert",
    "area": "Gò Vấp",
    "address": "61 Nguyễn Văn Bảo, Gò Vấp, TP.HCM",
    "addressSource": "Danh bạ địa điểm/Google Maps, cần xác minh trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Kem%20D%E1%BB%ABa%20Siam%20%E2%80%94%20Nguy%E1%BB%85n%20V%C4%83n%20B%E1%BA%A3o%2061%20Nguy%E1%BB%85n%20V%C4%83n%20B%E1%BA%A3o%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM",
    "description": "Gợi ý tráng miệng dễ ghé sau bữa chính: món ngọt mát, giá dự trù phù hợp đi học và đi chơi.",
    "dishes": [
      "Kem dừa Thái",
      "Kem xôi dừa"
    ],
    "budgetMin": 25000,
    "budgetMax": 60000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Tráng miệng"
    ],
    "cuisineTags": [
      "kem",
      "kem-dua"
    ],
    "sources": [
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Kem%20D%E1%BB%ABa%20Siam%20%E2%80%94%20Nguy%E1%BB%85n%20V%C4%83n%20B%E1%BA%A3o%2061%20Nguy%E1%BB%85n%20V%C4%83n%20B%E1%BA%A3o%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-kem-dua-hanh-phuc-cityland",
    "name": "Kem Dừa Hạnh Phúc — Cityland",
    "kind": "dessert",
    "area": "Gò Vấp",
    "address": "14 Đường Số 3, KDC Cityland, Gò Vấp, TP.HCM",
    "addressSource": "Danh bạ địa điểm/Google Maps, cần xác minh trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Kem%20D%E1%BB%ABa%20H%E1%BA%A1nh%20Ph%C3%BAc%20%E2%80%94%20Cityland%2014%20%C4%90%C6%B0%E1%BB%9Dng%20S%E1%BB%91%203%2C%20KDC%20Cityland%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM",
    "description": "Gợi ý tráng miệng dễ ghé sau bữa chính: món ngọt mát, giá dự trù phù hợp đi học và đi chơi.",
    "dishes": [
      "Kem dừa sầu riêng",
      "Kem dừa"
    ],
    "budgetMin": 30000,
    "budgetMax": 65000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Tráng miệng"
    ],
    "cuisineTags": [
      "kem",
      "kem-dua"
    ],
    "sources": [
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Kem%20D%E1%BB%ABa%20H%E1%BA%A1nh%20Ph%C3%BAc%20%E2%80%94%20Cityland%2014%20%C4%90%C6%B0%E1%BB%9Dng%20S%E1%BB%91%203%2C%20KDC%20Cityland%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-trai-cay-to-truong-minh-giang",
    "name": "Trái Cây Tô — Trương Minh Giảng",
    "kind": "dessert",
    "area": "Gò Vấp",
    "address": "26/32 Trương Minh Giảng, Gò Vấp, TP.HCM",
    "addressSource": "Danh bạ địa điểm/Google Maps, cần xác minh trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Tr%C3%A1i%20C%C3%A2y%20T%C3%B4%20%E2%80%94%20Tr%C6%B0%C6%A1ng%20Minh%20Gi%E1%BA%A3ng%2026%2F32%20Tr%C6%B0%C6%A1ng%20Minh%20Gi%E1%BA%A3ng%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM",
    "description": "Gợi ý tráng miệng dễ ghé sau bữa chính: món ngọt mát, giá dự trù phù hợp đi học và đi chơi.",
    "dishes": [
      "Trái cây tô",
      "Sữa chua trái cây"
    ],
    "budgetMin": 20000,
    "budgetMax": 55000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Tráng miệng"
    ],
    "cuisineTags": [
      "trai-cay-to"
    ],
    "sources": [
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Tr%C3%A1i%20C%C3%A2y%20T%C3%B4%20%E2%80%94%20Tr%C6%B0%C6%A1ng%20Minh%20Gi%E1%BA%A3ng%2026%2F32%20Tr%C6%B0%C6%A1ng%20Minh%20Gi%E1%BA%A3ng%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-kem-bo-trai-cay-to-le-thi-hong",
    "name": "Kem Bơ — Trái Cây Tô Lê Thị Hồng",
    "kind": "dessert",
    "area": "Gò Vấp",
    "address": "40/38 Lê Thị Hồng, Gò Vấp, TP.HCM",
    "addressSource": "Danh bạ địa điểm/Google Maps, cần xác minh trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Kem%20B%C6%A1%20%E2%80%94%20Tr%C3%A1i%20C%C3%A2y%20T%C3%B4%20L%C3%AA%20Th%E1%BB%8B%20H%E1%BB%93ng%2040%2F38%20L%C3%AA%20Th%E1%BB%8B%20H%E1%BB%93ng%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM",
    "description": "Gợi ý tráng miệng dễ ghé sau bữa chính: món ngọt mát, giá dự trù phù hợp đi học và đi chơi.",
    "dishes": [
      "Kem bơ",
      "Trái cây tô"
    ],
    "budgetMin": 25000,
    "budgetMax": 60000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Tráng miệng"
    ],
    "cuisineTags": [
      "kem",
      "kem-bo",
      "trai-cay-to"
    ],
    "sources": [
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Kem%20B%C6%A1%20%E2%80%94%20Tr%C3%A1i%20C%C3%A2y%20T%C3%B4%20L%C3%AA%20Th%E1%BB%8B%20H%E1%BB%93ng%2040%2F38%20L%C3%AA%20Th%E1%BB%8B%20H%E1%BB%93ng%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-che-mai-gia-lai-truong-cong-dinh",
    "name": "Chè Mai Gia Lai — Trương Công Định",
    "kind": "dessert",
    "area": "Tân Bình",
    "address": "220 Trương Công Định, Tân Bình, TP.HCM",
    "addressSource": "Danh bạ địa điểm/Google Maps, cần xác minh trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Mai%20Gia%20Lai%20%E2%80%94%20Tr%C6%B0%C6%A1ng%20C%C3%B4ng%20%C4%90%E1%BB%8Bnh%20220%20Tr%C6%B0%C6%A1ng%20C%C3%B4ng%20%C4%90%E1%BB%8Bnh%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM",
    "description": "Gợi ý tráng miệng dễ ghé sau bữa chính: món ngọt mát, giá dự trù phù hợp đi học và đi chơi.",
    "dishes": [
      "Chè Gia Lai",
      "Bánh flan"
    ],
    "budgetMin": 20000,
    "budgetMax": 55000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Tráng miệng"
    ],
    "cuisineTags": [
      "che",
      "banh-flan"
    ],
    "sources": [
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Mai%20Gia%20Lai%20%E2%80%94%20Tr%C6%B0%C6%A1ng%20C%C3%B4ng%20%C4%90%E1%BB%8Bnh%20220%20Tr%C6%B0%C6%A1ng%20C%C3%B4ng%20%C4%90%E1%BB%8Bnh%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-che-chi-tran-nguyen-sy-sach",
    "name": "Chè Chi Trần — Nguyễn Sỹ Sách",
    "kind": "dessert",
    "area": "Tân Bình",
    "address": "143 Nguyễn Sỹ Sách, Tân Bình, TP.HCM",
    "addressSource": "Danh bạ địa điểm/Google Maps, cần xác minh trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Chi%20Tr%E1%BA%A7n%20%E2%80%94%20Nguy%E1%BB%85n%20S%E1%BB%B9%20S%C3%A1ch%20143%20Nguy%E1%BB%85n%20S%E1%BB%B9%20S%C3%A1ch%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM",
    "description": "Gợi ý tráng miệng dễ ghé sau bữa chính: món ngọt mát, giá dự trù phù hợp đi học và đi chơi.",
    "dishes": [
      "Chè xứ Quảng",
      "Trái cây tô",
      "Flan"
    ],
    "budgetMin": 20000,
    "budgetMax": 55000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Tráng miệng"
    ],
    "cuisineTags": [
      "che",
      "trai-cay-to"
    ],
    "sources": [
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Chi%20Tr%E1%BA%A7n%20%E2%80%94%20Nguy%E1%BB%85n%20S%E1%BB%B9%20S%C3%A1ch%20143%20Nguy%E1%BB%85n%20S%E1%BB%B9%20S%C3%A1ch%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-trai-cay-to-241-dong-den",
    "name": "Trái Cây Tô 241 — Đồng Đen",
    "kind": "dessert",
    "area": "Tân Bình",
    "address": "84 Đồng Đen, Tân Bình, TP.HCM",
    "addressSource": "Danh bạ địa điểm/Google Maps, cần xác minh trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Tr%C3%A1i%20C%C3%A2y%20T%C3%B4%20241%20%E2%80%94%20%C4%90%E1%BB%93ng%20%C4%90en%2084%20%C4%90%E1%BB%93ng%20%C4%90en%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM",
    "description": "Gợi ý tráng miệng dễ ghé sau bữa chính: món ngọt mát, giá dự trù phù hợp đi học và đi chơi.",
    "dishes": [
      "Trái cây tô",
      "Nước ép",
      "Sinh tố"
    ],
    "budgetMin": 20000,
    "budgetMax": 60000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Tráng miệng"
    ],
    "cuisineTags": [
      "trai-cay-to",
      "sinh-to"
    ],
    "sources": [
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Tr%C3%A1i%20C%C3%A2y%20T%C3%B4%20241%20%E2%80%94%20%C4%90%E1%BB%93ng%20%C4%90en%2084%20%C4%90%E1%BB%93ng%20%C4%90en%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-i-love-kem-le-van-sy",
    "name": "I Love Kem — Lê Văn Sỹ",
    "kind": "dessert",
    "area": "Tân Bình",
    "address": "355 Lê Văn Sỹ, Tân Bình, TP.HCM",
    "addressSource": "Nguồn địa chỉ công khai, kiểm tra lại giờ hoạt động trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=I%20Love%20Kem%20%E2%80%94%20L%C3%AA%20V%C4%83n%20S%E1%BB%B9%20355%20L%C3%AA%20V%C4%83n%20S%E1%BB%B9%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM",
    "description": "Gợi ý tráng miệng dễ ghé sau bữa chính: món ngọt mát, giá dự trù phù hợp đi học và đi chơi.",
    "dishes": [
      "Kem tự chọn",
      "Kem socola",
      "Kem dâu"
    ],
    "budgetMin": 20000,
    "budgetMax": 65000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Tráng miệng"
    ],
    "cuisineTags": [
      "kem"
    ],
    "sources": [
      {
        "label": "Nguồn quán & địa chỉ tham khảo",
        "url": "https://www.foody.vn/ho-chi-minh/i-love-kem-kem-tu-chon-le-van-sy/thuc-don"
      },
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=I%20Love%20Kem%20%E2%80%94%20L%C3%AA%20V%C4%83n%20S%E1%BB%B9%20355%20L%C3%AA%20V%C4%83n%20S%E1%BB%B9%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-que-phuong-kem-dia",
    "name": "Quế Phương — Kem Dĩa",
    "kind": "dessert",
    "area": "Tân Bình",
    "address": "110 Ca Văn Thỉnh, Tân Bình, TP.HCM",
    "addressSource": "Nguồn địa chỉ công khai, kiểm tra lại giờ hoạt động trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Qu%E1%BA%BF%20Ph%C6%B0%C6%A1ng%20%E2%80%94%20Kem%20D%C4%A9a%20110%20Ca%20V%C4%83n%20Th%E1%BB%89nh%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM",
    "description": "Gợi ý tráng miệng dễ ghé sau bữa chính: món ngọt mát, giá dự trù phù hợp đi học và đi chơi.",
    "dishes": [
      "Kem dĩa",
      "Kem ký",
      "Bánh flan"
    ],
    "budgetMin": 20000,
    "budgetMax": 45000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Tráng miệng"
    ],
    "cuisineTags": [
      "kem",
      "banh-flan"
    ],
    "sources": [
      {
        "label": "Nguồn quán & địa chỉ tham khảo",
        "url": "https://www.foody.vn/ho-chi-minh/que-phuong"
      },
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Qu%E1%BA%BF%20Ph%C6%B0%C6%A1ng%20%E2%80%94%20Kem%20D%C4%A9a%20110%20Ca%20V%C4%83n%20Th%E1%BB%89nh%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-banh-flan-thanh-chau-cho-hoang-hoa-tham",
    "name": "Bánh Flan Thanh Châu — Chợ Hoàng Hoa Thám",
    "kind": "dessert",
    "area": "Tân Bình",
    "address": "B15 Phố Chợ, Hoàng Hoa Thám, Tân Bình, TP.HCM",
    "addressSource": "Danh bạ địa điểm/Google Maps, cần xác minh trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20Flan%20Thanh%20Ch%C3%A2u%20%E2%80%94%20Ch%E1%BB%A3%20Ho%C3%A0ng%20Hoa%20Th%C3%A1m%20B15%20Ph%E1%BB%91%20Ch%E1%BB%A3%2C%20Ho%C3%A0ng%20Hoa%20Th%C3%A1m%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM",
    "description": "Gợi ý tráng miệng dễ ghé sau bữa chính: món ngọt mát, giá dự trù phù hợp đi học và đi chơi.",
    "dishes": [
      "Bánh flan caramel",
      "Rau câu"
    ],
    "budgetMin": 15000,
    "budgetMax": 45000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Tráng miệng"
    ],
    "cuisineTags": [
      "banh-flan"
    ],
    "sources": [
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20Flan%20Thanh%20Ch%C3%A2u%20%E2%80%94%20Ch%E1%BB%A3%20Ho%C3%A0ng%20Hoa%20Th%C3%A1m%20B15%20Ph%E1%BB%91%20Ch%E1%BB%A3%2C%20Ho%C3%A0ng%20Hoa%20Th%C3%A1m%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-vida-cafe-pham-ngoc-thach",
    "name": "ViDa Cafe — Phạm Ngọc Thạch",
    "kind": "coffee",
    "area": "Quận 3",
    "address": "58/11 Phạm Ngọc Thạch, Quận 3, TP.HCM",
    "addressSource": "Danh bạ địa điểm/Google Maps, cần xác minh trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=ViDa%20Cafe%20%E2%80%94%20Ph%E1%BA%A1m%20Ng%E1%BB%8Dc%20Th%E1%BA%A1ch%2058%2F11%20Ph%E1%BA%A1m%20Ng%E1%BB%8Dc%20Th%E1%BA%A1ch%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM",
    "description": "Đi cà phê hoặc học bài, ưu tiên mức giá vừa túi tiền.",
    "dishes": [
      "Cà phê sữa",
      "Bạc xỉu",
      "Cà phê muối"
    ],
    "budgetMin": 30000,
    "budgetMax": 60000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Cà phê"
    ],
    "cuisineTags": [
      "ca-phe"
    ],
    "sources": [
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=ViDa%20Cafe%20%E2%80%94%20Ph%E1%BA%A1m%20Ng%E1%BB%8Dc%20Th%E1%BA%A1ch%2058%2F11%20Ph%E1%BA%A1m%20Ng%E1%BB%8Dc%20Th%E1%BA%A1ch%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-tiem-ca-phe-mo-cao-thang",
    "name": "Tiệm Cà Phê Mơ — Cao Thắng",
    "kind": "coffee",
    "area": "Quận 3",
    "address": "52/13 Cao Thắng, Quận 3, TP.HCM",
    "addressSource": "Danh bạ địa điểm/Google Maps, cần xác minh trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ti%E1%BB%87m%20C%C3%A0%20Ph%C3%AA%20M%C6%A1%20%E2%80%94%20Cao%20Th%E1%BA%AFng%2052%2F13%20Cao%20Th%E1%BA%AFng%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM",
    "description": "Đi cà phê hoặc học bài, ưu tiên mức giá vừa túi tiền.",
    "dishes": [
      "Cà phê nâu",
      "Cold brew",
      "Latte"
    ],
    "budgetMin": 30000,
    "budgetMax": 60000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Cà phê"
    ],
    "cuisineTags": [
      "ca-phe",
      "cold-brew"
    ],
    "sources": [
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Ti%E1%BB%87m%20C%C3%A0%20Ph%C3%AA%20M%C6%A1%20%E2%80%94%20Cao%20Th%E1%BA%AFng%2052%2F13%20Cao%20Th%E1%BA%AFng%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-tran-coffee-tran-binh-trong",
    "name": "TRẦN Coffee — Trần Bình Trọng",
    "kind": "coffee",
    "area": "Quận 5",
    "address": "22/53 Trần Bình Trọng, Quận 5, TP.HCM",
    "addressSource": "Danh bạ địa điểm/Google Maps, cần xác minh trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=TR%E1%BA%A6N%20Coffee%20%E2%80%94%20Tr%E1%BA%A7n%20B%C3%ACnh%20Tr%E1%BB%8Dng%2022%2F53%20Tr%E1%BA%A7n%20B%C3%ACnh%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "description": "Đi cà phê hoặc học bài, ưu tiên mức giá vừa túi tiền.",
    "dishes": [
      "Cà phê sữa",
      "Cà phê đen"
    ],
    "budgetMin": 20000,
    "budgetMax": 50000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Cà phê"
    ],
    "cuisineTags": [
      "ca-phe"
    ],
    "sources": [
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=TR%E1%BA%A6N%20Coffee%20%E2%80%94%20Tr%E1%BA%A7n%20B%C3%ACnh%20Tr%E1%BB%8Dng%2022%2F53%20Tr%E1%BA%A7n%20B%C3%ACnh%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-moda-house-coffee-nguyen-oanh",
    "name": "Moda House Coffee — Nguyễn Oanh",
    "kind": "coffee",
    "area": "Gò Vấp",
    "address": "11 Nguyễn Oanh, Gò Vấp, TP.HCM",
    "addressSource": "Nguồn địa chỉ công khai, kiểm tra lại giờ hoạt động trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Moda%20House%20Coffee%20%E2%80%94%20Nguy%E1%BB%85n%20Oanh%2011%20Nguy%E1%BB%85n%20Oanh%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM",
    "description": "Đi cà phê hoặc học bài, ưu tiên mức giá vừa túi tiền.",
    "dishes": [
      "Cà phê",
      "Trà đào",
      "Trà dưa lưới"
    ],
    "budgetMin": 20000,
    "budgetMax": 50000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Cà phê"
    ],
    "cuisineTags": [
      "ca-phe",
      "tra-trai-cay"
    ],
    "sources": [
      {
        "label": "Nguồn quán & địa chỉ tham khảo",
        "url": "https://www.foody.vn/ho-chi-minh/moda-coffee"
      },
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Moda%20House%20Coffee%20%E2%80%94%20Nguy%E1%BB%85n%20Oanh%2011%20Nguy%E1%BB%85n%20Oanh%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-caffuzzy-cafe-cozy-fuzzy",
    "name": "Caffuzzy — Cafe Cozy Fuzzy",
    "kind": "coffee",
    "area": "Gò Vấp",
    "address": "200 Đường Số 9, Gò Vấp, TP.HCM",
    "addressSource": "Nguồn địa chỉ công khai, kiểm tra lại giờ hoạt động trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Caffuzzy%20%E2%80%94%20Cafe%20Cozy%20Fuzzy%20200%20%C4%90%C6%B0%E1%BB%9Dng%20S%E1%BB%91%209%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM",
    "description": "Đi cà phê hoặc học bài, ưu tiên mức giá vừa túi tiền.",
    "dishes": [
      "Cà phê sữa",
      "Latte",
      "Bạc xỉu"
    ],
    "budgetMin": 20000,
    "budgetMax": 50000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Cà phê"
    ],
    "cuisineTags": [
      "ca-phe"
    ],
    "sources": [
      {
        "label": "Nguồn quán & địa chỉ tham khảo",
        "url": "https://www.yellowmega.com/VN/Ho-Chi-Minh-City/890169540852575/Caffuzzy---Cafe.Cozy.Fuzzy"
      },
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Caffuzzy%20%E2%80%94%20Cafe%20Cozy%20Fuzzy%20200%20%C4%90%C6%B0%E1%BB%9Dng%20S%E1%BB%91%209%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-ha-an-corner-dong-xoai",
    "name": "Hạ An Corner — Đồng Xoài",
    "kind": "coffee",
    "area": "Tân Bình",
    "address": "41/6 Đồng Xoài, Tân Bình, TP.HCM",
    "addressSource": "Nguồn địa chỉ công khai, kiểm tra lại giờ hoạt động trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A1%20An%20Corner%20%E2%80%94%20%C4%90%E1%BB%93ng%20Xo%C3%A0i%2041%2F6%20%C4%90%E1%BB%93ng%20Xo%C3%A0i%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM",
    "description": "Đi cà phê hoặc học bài, ưu tiên mức giá vừa túi tiền.",
    "dishes": [
      "Cà phê",
      "Bạc xỉu",
      "Bánh ngọt"
    ],
    "budgetMin": 25000,
    "budgetMax": 55000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Cà phê"
    ],
    "cuisineTags": [
      "ca-phe",
      "banh-ngot"
    ],
    "sources": [
      {
        "label": "Nguồn quán & địa chỉ tham khảo",
        "url": "https://truecafe.vn/ban-tin/quan-ca-phe-dep-tan-binh/"
      },
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A1%20An%20Corner%20%E2%80%94%20%C4%90%E1%BB%93ng%20Xo%C3%A0i%2041%2F6%20%C4%90%E1%BB%93ng%20Xo%C3%A0i%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-ticos-coffee-bau-cat",
    "name": "Ticos Coffee — Bàu Cát",
    "kind": "coffee",
    "area": "Tân Bình",
    "address": "145–147 Bàu Cát, Tân Bình, TP.HCM",
    "addressSource": "Nguồn địa chỉ công khai, kiểm tra lại giờ hoạt động trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ticos%20Coffee%20%E2%80%94%20B%C3%A0u%20C%C3%A1t%20145%E2%80%93147%20B%C3%A0u%20C%C3%A1t%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM",
    "description": "Đi cà phê hoặc học bài, ưu tiên mức giá vừa túi tiền.",
    "dishes": [
      "Cà phê",
      "Cold brew",
      "Trà"
    ],
    "budgetMin": 28000,
    "budgetMax": 60000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Cà phê"
    ],
    "cuisineTags": [
      "ca-phe",
      "cold-brew"
    ],
    "sources": [
      {
        "label": "Nguồn quán & địa chỉ tham khảo",
        "url": "https://truecafe.vn/ban-tin/quan-ca-phe-dep-tan-binh/"
      },
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Ticos%20Coffee%20%E2%80%94%20B%C3%A0u%20C%C3%A1t%20145%E2%80%93147%20B%C3%A0u%20C%C3%A1t%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-wego-coffee-ut-tich",
    "name": "Wego Coffee — Út Tịch",
    "kind": "coffee",
    "area": "Tân Bình",
    "address": "64 Út Tịch, Tân Bình, TP.HCM",
    "addressSource": "Nguồn địa chỉ công khai, kiểm tra lại giờ hoạt động trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Wego%20Coffee%20%E2%80%94%20%C3%9At%20T%E1%BB%8Bch%2064%20%C3%9At%20T%E1%BB%8Bch%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM",
    "description": "Đi cà phê hoặc học bài, ưu tiên mức giá vừa túi tiền.",
    "dishes": [
      "Cà phê sữa",
      "Latte"
    ],
    "budgetMin": 35000,
    "budgetMax": 55000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Cà phê"
    ],
    "cuisineTags": [
      "ca-phe"
    ],
    "sources": [
      {
        "label": "Nguồn quán & địa chỉ tham khảo",
        "url": "https://truecafe.vn/ban-tin/quan-ca-phe-dep-tan-binh/"
      },
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Wego%20Coffee%20%E2%80%94%20%C3%9At%20T%E1%BB%8Bch%2064%20%C3%9At%20T%E1%BB%8Bch%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-beo-cafe-truong-chinh",
    "name": "béo. cafe — Trường Chinh",
    "kind": "coffee",
    "area": "Tân Bình",
    "address": "291/17 Trường Chinh, Tân Bình, TP.HCM",
    "addressSource": "Danh bạ địa điểm/Google Maps, cần xác minh trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=b%C3%A9o.%20cafe%20%E2%80%94%20Tr%C6%B0%E1%BB%9Dng%20Chinh%20291%2F17%20Tr%C6%B0%E1%BB%9Dng%20Chinh%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM",
    "description": "Đi cà phê hoặc học bài, ưu tiên mức giá vừa túi tiền.",
    "dishes": [
      "Cà phê",
      "Trà mãng cầu",
      "Trà vải"
    ],
    "budgetMin": 30000,
    "budgetMax": 70000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Cà phê"
    ],
    "cuisineTags": [
      "ca-phe",
      "tra-trai-cay"
    ],
    "sources": [
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=b%C3%A9o.%20cafe%20%E2%80%94%20Tr%C6%B0%E1%BB%9Dng%20Chinh%20291%2F17%20Tr%C6%B0%E1%BB%9Dng%20Chinh%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-tiem-tra-sua-tran-chau-le-van-sy",
    "name": "Tiệm Trà Sữa Trân Châu — Lê Văn Sỹ",
    "kind": "drinks",
    "area": "Quận 3",
    "address": "386/35 Lê Văn Sỹ, Quận 3, TP.HCM",
    "addressSource": "Danh bạ địa điểm/Google Maps, cần xác minh trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ti%E1%BB%87m%20Tr%C3%A0%20S%E1%BB%AFa%20Tr%C3%A2n%20Ch%C3%A2u%20%E2%80%94%20L%C3%AA%20V%C4%83n%20S%E1%BB%B9%20386%2F35%20L%C3%AA%20V%C4%83n%20S%E1%BB%B9%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM",
    "description": "Món nước giải khát, trà sữa hoặc sinh tố phù hợp hẹn nhẹ nhàng.",
    "dishes": [
      "Trà sữa Thái",
      "Trà trái cây"
    ],
    "budgetMin": 20000,
    "budgetMax": 55000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Đồ uống"
    ],
    "cuisineTags": [
      "tra-sua",
      "tra-trai-cay"
    ],
    "sources": [
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Ti%E1%BB%87m%20Tr%C3%A0%20S%E1%BB%AFa%20Tr%C3%A2n%20Ch%C3%A2u%20%E2%80%94%20L%C3%AA%20V%C4%83n%20S%E1%BB%B9%20386%2F35%20L%C3%AA%20V%C4%83n%20S%E1%BB%B9%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-tra-sua-bong-map-vo-van-tan",
    "name": "Trà Sữa Bông Mập — Võ Văn Tần",
    "kind": "drinks",
    "area": "Quận 3",
    "address": "202/10 Võ Văn Tần, Quận 3, TP.HCM",
    "addressSource": "Nguồn địa chỉ công khai, kiểm tra lại giờ hoạt động trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Tr%C3%A0%20S%E1%BB%AFa%20B%C3%B4ng%20M%E1%BA%ADp%20%E2%80%94%20V%C3%B5%20V%C4%83n%20T%E1%BA%A7n%20202%2F10%20V%C3%B5%20V%C4%83n%20T%E1%BA%A7n%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM",
    "description": "Món nước giải khát, trà sữa hoặc sinh tố phù hợp hẹn nhẹ nhàng.",
    "dishes": [
      "Trà sữa trân châu",
      "Trà sữa kem cheese"
    ],
    "budgetMin": 25000,
    "budgetMax": 45000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Đồ uống"
    ],
    "cuisineTags": [
      "tra-sua"
    ],
    "sources": [
      {
        "label": "Nguồn quán & địa chỉ tham khảo",
        "url": "https://bobapop.com.vn/tra-sua-vo-van-tan/"
      },
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Tr%C3%A0%20S%E1%BB%AFa%20B%C3%B4ng%20M%E1%BA%ADp%20%E2%80%94%20V%C3%B5%20V%C4%83n%20T%E1%BA%A7n%20202%2F10%20V%C3%B5%20V%C4%83n%20T%E1%BA%A7n%2C%20Qu%E1%BA%ADn%203%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-tra-dem-126-tran-binh-trong",
    "name": "Trà Đêm 126 — Trần Bình Trọng",
    "kind": "drinks",
    "area": "Quận 5",
    "address": "126C Trần Bình Trọng, Quận 5, TP.HCM",
    "addressSource": "Danh bạ địa điểm/Google Maps, cần xác minh trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Tr%C3%A0%20%C4%90%C3%AAm%20126%20%E2%80%94%20Tr%E1%BA%A7n%20B%C3%ACnh%20Tr%E1%BB%8Dng%20126C%20Tr%E1%BA%A7n%20B%C3%ACnh%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "description": "Món nước giải khát, trà sữa hoặc sinh tố phù hợp hẹn nhẹ nhàng.",
    "dishes": [
      "Trà trái cây",
      "Trà sữa"
    ],
    "budgetMin": 20000,
    "budgetMax": 55000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Đồ uống"
    ],
    "cuisineTags": [
      "tra-sua",
      "tra-trai-cay"
    ],
    "sources": [
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Tr%C3%A0%20%C4%90%C3%AAm%20126%20%E2%80%94%20Tr%E1%BA%A7n%20B%C3%ACnh%20Tr%E1%BB%8Dng%20126C%20Tr%E1%BA%A7n%20B%C3%ACnh%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-juice-time-an-duong-vuong",
    "name": "Juice Time — An Dương Vương",
    "kind": "drinks",
    "area": "Quận 5",
    "address": "118 An Dương Vương, Quận 5, TP.HCM",
    "addressSource": "Danh bạ địa điểm/Google Maps, cần xác minh trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Juice%20Time%20%E2%80%94%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%20118%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "description": "Món nước giải khát, trà sữa hoặc sinh tố phù hợp hẹn nhẹ nhàng.",
    "dishes": [
      "Nước ép cam",
      "Sinh tố bơ",
      "Trà trái cây"
    ],
    "budgetMin": 20000,
    "budgetMax": 55000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Đồ uống"
    ],
    "cuisineTags": [
      "nuoc-ep",
      "sinh-to",
      "tra-trai-cay"
    ],
    "sources": [
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Juice%20Time%20%E2%80%94%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%20118%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-bobapop-tran-binh-trong",
    "name": "Bobapop — Trần Bình Trọng",
    "kind": "drinks",
    "area": "Quận 5",
    "address": "233 Trần Bình Trọng, Quận 5, TP.HCM",
    "addressSource": "Nguồn địa chỉ công khai, kiểm tra lại giờ hoạt động trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Bobapop%20%E2%80%94%20Tr%E1%BA%A7n%20B%C3%ACnh%20Tr%E1%BB%8Dng%20233%20Tr%E1%BA%A7n%20B%C3%ACnh%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM",
    "description": "Món nước giải khát, trà sữa hoặc sinh tố phù hợp hẹn nhẹ nhàng.",
    "dishes": [
      "Trà sữa trân châu",
      "Trà đào"
    ],
    "budgetMin": 30000,
    "budgetMax": 65000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Đồ uống"
    ],
    "cuisineTags": [
      "tra-sua",
      "tra-trai-cay"
    ],
    "sources": [
      {
        "label": "Nguồn quán & địa chỉ tham khảo",
        "url": "https://www.greensm.com/vn-vi/news/tra-sua-quan-5"
      },
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Bobapop%20%E2%80%94%20Tr%E1%BA%A7n%20B%C3%ACnh%20Tr%E1%BB%8Dng%20233%20Tr%E1%BA%A7n%20B%C3%ACnh%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%205%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-ola-ngon-nha-duong-quang-ham",
    "name": "OLA Ngon Nha — Dương Quảng Hàm",
    "kind": "drinks",
    "area": "Gò Vấp",
    "address": "80/101 Dương Quảng Hàm, Gò Vấp, TP.HCM",
    "addressSource": "Nguồn địa chỉ công khai, kiểm tra lại giờ hoạt động trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=OLA%20Ngon%20Nha%20%E2%80%94%20D%C6%B0%C6%A1ng%20Qu%E1%BA%A3ng%20H%C3%A0m%2080%2F101%20D%C6%B0%C6%A1ng%20Qu%E1%BA%A3ng%20H%C3%A0m%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM",
    "description": "Món nước giải khát, trà sữa hoặc sinh tố phù hợp hẹn nhẹ nhàng.",
    "dishes": [
      "Trà sữa",
      "Trà dâu",
      "Trà trái cây"
    ],
    "budgetMin": 10000,
    "budgetMax": 40000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Đồ uống"
    ],
    "cuisineTags": [
      "tra-sua",
      "tra-trai-cay"
    ],
    "sources": [
      {
        "label": "Nguồn quán & địa chỉ tham khảo",
        "url": "https://www.foody.vn/ho-chi-minh/ola-ngon-nha-tra-tra-sua"
      },
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=OLA%20Ngon%20Nha%20%E2%80%94%20D%C6%B0%C6%A1ng%20Qu%E1%BA%A3ng%20H%C3%A0m%2080%2F101%20D%C6%B0%C6%A1ng%20Qu%E1%BA%A3ng%20H%C3%A0m%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-tra-sua-hai-yen-phan-van-tri",
    "name": "Trà Sữa Hải Yến — Phan Văn Trị",
    "kind": "drinks",
    "area": "Gò Vấp",
    "address": "710/6/6 Phan Văn Trị, Gò Vấp, TP.HCM",
    "addressSource": "Danh bạ địa điểm/Google Maps, cần xác minh trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Tr%C3%A0%20S%E1%BB%AFa%20H%E1%BA%A3i%20Y%E1%BA%BFn%20%E2%80%94%20Phan%20V%C4%83n%20Tr%E1%BB%8B%20710%2F6%2F6%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM",
    "description": "Món nước giải khát, trà sữa hoặc sinh tố phù hợp hẹn nhẹ nhàng.",
    "dishes": [
      "Trà sữa",
      "Sinh tố",
      "Yaourt trái cây"
    ],
    "budgetMin": 20000,
    "budgetMax": 50000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Đồ uống"
    ],
    "cuisineTags": [
      "tra-sua",
      "sinh-to"
    ],
    "sources": [
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Tr%C3%A0%20S%E1%BB%AFa%20H%E1%BA%A3i%20Y%E1%BA%BFn%20%E2%80%94%20Phan%20V%C4%83n%20Tr%E1%BB%8B%20710%2F6%2F6%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-ai-cha-cityland-duong-so-10",
    "name": "Ai-CHA Cityland — Đường Số 10",
    "kind": "drinks",
    "area": "Gò Vấp",
    "address": "32 Đường Số 10, KDC Cityland, Gò Vấp, TP.HCM",
    "addressSource": "Danh bạ địa điểm/Google Maps, cần xác minh trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ai-CHA%20Cityland%20%E2%80%94%20%C4%90%C6%B0%E1%BB%9Dng%20S%E1%BB%91%2010%2032%20%C4%90%C6%B0%E1%BB%9Dng%20S%E1%BB%91%2010%2C%20KDC%20Cityland%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM",
    "description": "Món nước giải khát, trà sữa hoặc sinh tố phù hợp hẹn nhẹ nhàng.",
    "dishes": [
      "Trà sữa",
      "Trà trái cây",
      "Kem"
    ],
    "budgetMin": 20000,
    "budgetMax": 50000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Đồ uống"
    ],
    "cuisineTags": [
      "tra-sua",
      "tra-trai-cay"
    ],
    "sources": [
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Ai-CHA%20Cityland%20%E2%80%94%20%C4%90%C6%B0%E1%BB%9Dng%20S%E1%BB%91%2010%2032%20%C4%90%C6%B0%E1%BB%9Dng%20S%E1%BB%91%2010%2C%20KDC%20Cityland%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-nho-xiu-quan-nguyen-quang-bich",
    "name": "Nhỏ Xíu Quán — Nguyễn Quang Bích",
    "kind": "drinks",
    "area": "Tân Bình",
    "address": "42A Nguyễn Quang Bích, Tân Bình, TP.HCM",
    "addressSource": "Danh bạ địa điểm/Google Maps, cần xác minh trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Nh%E1%BB%8F%20X%C3%ADu%20Qu%C3%A1n%20%E2%80%94%20Nguy%E1%BB%85n%20Quang%20B%C3%ADch%2042A%20Nguy%E1%BB%85n%20Quang%20B%C3%ADch%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM",
    "description": "Món nước giải khát, trà sữa hoặc sinh tố phù hợp hẹn nhẹ nhàng.",
    "dishes": [
      "Trà sữa",
      "Trà trái cây",
      "Sinh tố"
    ],
    "budgetMin": 20000,
    "budgetMax": 60000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Đồ uống"
    ],
    "cuisineTags": [
      "tra-sua",
      "tra-trai-cay",
      "sinh-to"
    ],
    "sources": [
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=Nh%E1%BB%8F%20X%C3%ADu%20Qu%C3%A1n%20%E2%80%94%20Nguy%E1%BB%85n%20Quang%20B%C3%ADch%2042A%20Nguy%E1%BB%85n%20Quang%20B%C3%ADch%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  },
  {
    "id": "v5-ola-ngon-nha-cach-mang-thang-tam",
    "name": "OLA Ngon Nha — Cách Mạng Tháng Tám",
    "kind": "drinks",
    "area": "Tân Bình",
    "address": "766/83 Cách Mạng Tháng 8, Tân Bình, TP.HCM",
    "addressSource": "Nguồn địa chỉ công khai, kiểm tra lại giờ hoạt động trước khi đến",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=OLA%20Ngon%20Nha%20%E2%80%94%20C%C3%A1ch%20M%E1%BA%A1ng%20Th%C3%A1ng%20T%C3%A1m%20766%2F83%20C%C3%A1ch%20M%E1%BA%A1ng%20Th%C3%A1ng%208%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM",
    "description": "Món nước giải khát, trà sữa hoặc sinh tố phù hợp hẹn nhẹ nhàng.",
    "dishes": [
      "Trà sữa",
      "Trà dâu"
    ],
    "budgetMin": 15000,
    "budgetMax": 40000,
    "tags": [
      "Hợp túi tiền sinh viên",
      "Đồ uống"
    ],
    "cuisineTags": [
      "tra-sua"
    ],
    "sources": [
      {
        "label": "Nguồn quán & địa chỉ tham khảo",
        "url": "https://www.foody.vn/thuong-hieu/ola-ngon-nha-tra-tra-sua?c=ho-chi-minh"
      },
      {
        "label": "Xem địa điểm và tình trạng mới nhất trên Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=OLA%20Ngon%20Nha%20%E2%80%94%20C%C3%A1ch%20M%E1%BA%A1ng%20Th%C3%A1ng%20T%C3%A1m%20766%2F83%20C%C3%A1ch%20M%E1%BA%A1ng%20Th%C3%A1ng%208%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.HCM"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "budgetNote": "Mức dự trù biên tập cho 1 phần/người; không phải giá bán cố định. Hãy đối chiếu thực đơn, vị trí, giờ mở cửa và hoạt động trước khi đi."
  }
];
