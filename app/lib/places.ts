import type { Place } from './types';
import { EXTRA_PLACES } from './places-extra';

const ORIGINAL_PLACES: Place[] = [
  {
    "id": "pizza-4ps-ben-thanh",
    "name": "Pizza 4P’s Bến Thành",
    "kind": "food",
    "area": "Quận 1",
    "address": "8 Thủ Khoa Huân, phường Bến Thành, TP.HCM",
    "addressSource": "Website chính thức Pizza 4P’s",
    "mapUrl": "https://maps.app.goo.gl/g599auJNcDBpAbZN7",
    "description": "Pizza để chia đôi, một bữa tối thong thả trong căn nhà có ban công nhìn ra khu Bến Thành. Đặt bàn trước vào cuối tuần. Có thể gọi pizza nửa này nửa kia để thử hai vị.",
    "dishes": [
      "Pizza bốn loại phô mai",
      "Pizza nửa–nửa",
      "Pasta Bolognese"
    ],
    "budgetMin": 300000,
    "budgetMax": 550000,
    "tags": [
      "Ăn tối",
      "Ấm cúng",
      "Hẹn cuối tuần"
    ],
    "community": {
      "provider": "Tripadvisor",
      "score": 4.6,
      "count": 912,
      "url": "https://www.tripadvisor.com/Restaurant_Review-g293925-d10865662-Reviews-Pizza_4P_s_Ben_Thanh-Ho_Chi_Minh_City.html",
      "checkedAt": "2026-11-27"
    },
    "sources": [
      {
        "label": "Địa chỉ, đặt bàn và không gian",
        "url": "https://pizza4ps.com/vn/location/933/"
      },
      {
        "label": "Đánh giá cộng đồng và món",
        "url": "https://www.tripadvisor.com/Restaurant_Review-g293925-d10865662-Reviews-Pizza_4P_s_Ben_Thanh-Ho_Chi_Minh_City.html"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "booking": "https://pizza4ps.com/vn/location/933/",
    "image": "/venues/pizza-4ps-ben-thanh.jpg",
    "imageSource": "https://pizza4ps.com/vn/location/933/",
    "cuisineTags": [
      "pizza",
      "au"
    ]
  },
  {
    "id": "the-deck-saigon",
    "name": "The Deck Saigon",
    "kind": "food",
    "area": "Thảo Điền",
    "address": "38 Nguyễn Ư Dĩ, phường An Khánh, TP.HCM",
    "addressSource": "Website chính thức The Deck",
    "mapUrl": "https://maps.app.goo.gl/t6zLGj4iRTgiVTki7",
    "description": "Bàn ăn ven sông cho một dịp đặc biệt; hợp đến trước hoàng hôn rồi ở lại ăn tối. Nên hỏi trước bàn ven sông và phương án trong nhà khi mưa. Mức chi sẽ tăng nếu gọi cocktail hoặc rượu.",
    "dishes": [
      "Hải sản theo thực đơn",
      "Món gà",
      "Sườn cừu"
    ],
    "budgetMin": 700000,
    "budgetMax": 1600000,
    "tags": [
      "Ven sông",
      "Kỷ niệm",
      "Hoàng hôn"
    ],
    "community": {
      "provider": "Tripadvisor",
      "score": 4.2,
      "count": 1403,
      "url": "https://www.tripadvisor.com.vn/Restaurant_Review-g293925-d1928671-Reviews-The_Deck_Saigon-Ho_Chi_Minh_City.html",
      "checkedAt": "2026-11-27"
    },
    "sources": [
      {
        "label": "Địa chỉ và vị trí ven sông",
        "url": "https://www.thedecksaigon.com/contact-us/"
      },
      {
        "label": "Đánh giá cộng đồng",
        "url": "https://www.tripadvisor.com.vn/Restaurant_Review-g293925-d1928671-Reviews-The_Deck_Saigon-Ho_Chi_Minh_City.html"
      },
      {
        "label": "Trải nghiệm cặp đôi, món gà và cừu",
        "url": "https://www.tripadvisor.com/Restaurant_Review-g293925-d1928671-Reviews-The_Deck_Saigon-Ho_Chi_Minh_City.html"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "booking": "https://www.thedecksaigon.com/",
    "image": "/venues/the-deck-saigon.jpg",
    "imageSource": "https://www.thedecksaigon.com/contact-us/",
    "cuisineTags": [
      "hai-san",
      "au"
    ]
  },
  {
    "id": "hum-garden",
    "name": "Hum Garden",
    "kind": "food",
    "area": "Thảo Điền",
    "address": "32 đường số 10, phường An Khánh, TP.HCM",
    "addressSource": "Website chính thức Hum Dining",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Hum%20Garden%2032%20%C4%91%C6%B0%E1%BB%9Dng%20s%E1%BB%91%2010%2C%20ph%C6%B0%E1%BB%9Dng%20An%20Kh%C3%A1nh%2C%20TP.HCM",
    "description": "Món chay trong biệt thự có sân vườn, phù hợp một buổi hẹn muốn ăn chậm và trò chuyện. Chọn đúng Hum Garden ở Thảo Điền khi đặt bàn; Hum Signature và Hum Lounge là những địa điểm khác.",
    "dishes": [
      "Chả giò nấm",
      "Chè nhãn hạt sen"
    ],
    "budgetMin": 300000,
    "budgetMax": 650000,
    "tags": [
      "Yên tĩnh",
      "Sân vườn",
      "Ăn chay"
    ],
    "community": {
      "provider": "Tripadvisor",
      "score": 4.7,
      "count": 98,
      "url": "https://www.tripadvisor.com/Restaurant_Review-g293925-d12711227-Reviews-Hum_Garden-Ho_Chi_Minh_City.html",
      "checkedAt": "2026-11-27"
    },
    "sources": [
      {
        "label": "Địa chỉ và không gian",
        "url": "https://hum-dining.vn/en/locations/"
      },
      {
        "label": "Món được giới thiệu",
        "url": "https://guide.michelin.com/us/en/ho-chi-minh/ho-chi-minh_2978179/restaurant/hum-garden"
      },
      {
        "label": "Đánh giá cộng đồng",
        "url": "https://www.tripadvisor.com/Restaurant_Review-g293925-d12711227-Reviews-Hum_Garden-Ho_Chi_Minh_City.html"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "booking": "https://hum-dining.vn/en/locations/",
    "image": "/venues/hum-garden.jpg",
    "imageSource": "https://hum-dining.vn/en/locations/",
    "cuisineTags": [
      "chay"
    ]
  },
  {
    "id": "cuc-gach-quan",
    "name": "Cục Gạch Quán",
    "kind": "food",
    "area": "Quận 1",
    "address": "10 Đặng Tất, phường Tân Định, TP.HCM",
    "addressSource": "Website chính thức Cục Gạch Quán, đối chiếu MICHELIN",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=C%E1%BB%A5c%20G%E1%BA%A1ch%20Qu%C3%A1n%2010%20%C4%90%E1%BA%B7ng%20T%E1%BA%A5t%2C%20ph%C6%B0%E1%BB%9Dng%20T%C3%A2n%20%C4%90%E1%BB%8Bnh%2C%20TP.HCM",
    "description": "Bữa cơm Việt để cùng chia sẻ trong không gian nhà cũ, có cây xanh và hồ cá. Gọi vài món dùng chung sẽ dễ thử nhiều vị. Nếu muốn nói chuyện lâu, nhờ quán xếp bàn xa nhóm đông.",
    "dishes": [
      "Đậu hũ chiên sả ớt",
      "Canh chua cá hú",
      "Chuối chiên"
    ],
    "budgetMin": 250000,
    "budgetMax": 550000,
    "tags": [
      "Cơm nhà",
      "Ấm cúng",
      "Ăn tối"
    ],
    "community": {
      "provider": "Tripadvisor",
      "score": 4.4,
      "count": 3036,
      "url": "https://www.tripadvisor.com/Restaurant_Review-g293925-d1717810-Reviews-Cuc_Gach_Quan-Ho_Chi_Minh_City.html",
      "checkedAt": "2026-11-27"
    },
    "sources": [
      {
        "label": "Địa chỉ chính thức",
        "url": "https://cucgachquan.com/en/a-vietnamese-family-moment/directions.html"
      },
      {
        "label": "Món và không gian",
        "url": "https://guide.michelin.com/us/en/ho-chi-minh/ho-chi-minh_2978179/restaurant/cuc-gach-quan"
      },
      {
        "label": "Đánh giá cộng đồng",
        "url": "https://www.tripadvisor.com/Restaurant_Review-g293925-d1717810-Reviews-Cuc_Gach_Quan-Ho_Chi_Minh_City.html"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "booking": "https://cucgachquan.com/",
    "image": "/venues/cuc-gach-quan.jpg",
    "imageSource": "https://cucgachquan.com/",
    "cuisineTags": [
      "com"
    ]
  },
  {
    "id": "chay-garden-vo-van-tan",
    "name": "Chay Garden · Võ Văn Tần",
    "kind": "food",
    "area": "Quận 3",
    "address": "52 Võ Văn Tần, phường Xuân Hòa, TP.HCM",
    "addressSource": "Website chính thức Chay Garden",
    "mapUrl": "https://maps.app.goo.gl/JPEVuUR9CyeQzCvt6",
    "description": "Một khu vườn trong hẻm với món chay trình bày đẹp, dễ chọn cho buổi hẹn nhẹ nhàng. Chọn đúng chi nhánh Võ Văn Tần. Có thể hỏi quán giờ nhận món cuối trước khi đến buổi tối.",
    "dishes": [
      "Gỏi nấm khoai môn sốt chanh dây",
      "Lẩu thuyền hoa",
      "Nấm mối hấp đá núi lửa"
    ],
    "budgetMin": 200000,
    "budgetMax": 450000,
    "tags": [
      "Sân vườn",
      "Ăn chay",
      "Nhẹ nhàng"
    ],
    "community": {
      "provider": "Tripadvisor",
      "score": 4.7,
      "count": 114,
      "url": "https://www.tripadvisor.com.vn/Restaurant_Review-g293925-d15618103-Reviews-Chay_Garden_Vo_Van_T_n_Vegetarian_Restaurant_Coffee-Ho_Chi_Minh_City.html",
      "checkedAt": "2026-11-27"
    },
    "sources": [
      {
        "label": "Địa chỉ, món và liên kết Google Maps",
        "url": "https://chaygarden.vn/mo-loi-vuon-chay/"
      },
      {
        "label": "Đánh giá cộng đồng",
        "url": "https://www.tripadvisor.com.vn/Restaurant_Review-g293925-d15618103-Reviews-Chay_Garden_Vo_Van_T_n_Vegetarian_Restaurant_Coffee-Ho_Chi_Minh_City.html"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "booking": "https://chaygarden.vn/",
    "image": "/venues/chay-garden-vo-van-tan.jpg",
    "imageSource": "https://chaygarden.vn/mo-loi-vuon-chay/",
    "cuisineTags": [
      "chay",
      "lau"
    ]
  },
  {
    "id": "bep-me-in",
    "name": "Bếp Mẹ Ỉn · Lê Thánh Tôn",
    "kind": "food",
    "area": "Quận 1",
    "address": "136/9 Lê Thánh Tôn, phường Bến Thành, TP.HCM",
    "addressSource": "MICHELIN Guide; đối chiếu hồ sơ Tripadvisor",
    "mapUrl": "https://maps.app.goo.gl/ZqPLaaz2ptgiLMUU9",
    "description": "Quán trong hẻm gần chợ Bến Thành, hợp cùng gọi bánh xèo và cơm chiên để chia sẻ. Địa chỉ đầy đủ có số hẻm 136/9; đừng nhầm với chi nhánh Nguyễn Thái Bình.",
    "dishes": [
      "Bánh xèo tôm thịt",
      "Cơm chiên tôm trứng trong trái dừa"
    ],
    "budgetMin": 150000,
    "budgetMax": 350000,
    "tags": [
      "Món Việt",
      "Ăn trưa",
      "Vừa túi tiền"
    ],
    "community": {
      "provider": "Tripadvisor",
      "score": 4.6,
      "count": 2201,
      "url": "https://www.tripadvisor.com/Restaurant_Review-g293925-d10721705-Reviews-B_p_M_n_Le_Thanh_Ton-Ho_Chi_Minh_City.html",
      "checkedAt": "2026-11-27"
    },
    "sources": [
      {
        "label": "Địa chỉ đầy đủ và món",
        "url": "https://guide.michelin.com/us/en/ho-chi-minh/ho-chi-minh_2978179/restaurant/bep-me-in-le-thanh-ton"
      },
      {
        "label": "Liên kết Maps chính thức",
        "url": "https://bep.mein.vn/"
      },
      {
        "label": "Đánh giá cộng đồng",
        "url": "https://www.tripadvisor.com/Restaurant_Review-g293925-d10721705-Reviews-B_p_M_n_Le_Thanh_Ton-Ho_Chi_Minh_City.html"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "booking": "https://bep.mein.vn/",
    "cuisineTags": [
      "banh-xeo",
      "com"
    ]
  },
  {
    "id": "anan-saigon",
    "name": "Anan Saigon",
    "kind": "food",
    "area": "Quận 1",
    "address": "89 Tôn Thất Đạm, Quận 1, TP.HCM",
    "addressSource": "Website chính thức Anan Saigon",
    "mapUrl": "https://www.google.com/maps/place/Anan+Saigon/@10.771729,106.7007043,17z/data=!4m16!1m10!4m9!1m0!1m6!1m2!1s0x31752f412769f767:0xef37ef32f9a503e7!2zQW5hbiBTYWlnb24sIDg5IFTDtG4gVGjhuqV0IMSQ4bqhbSwgQuG6v24gTmdow6ksIEhvIENoaSBNaW5oIENpdHksIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!2m2!1d106.702893!2d10.771729!3e0!3m4!1s0x31752f412769f767:0xef37ef32f9a503e7!8m2!3d10.771729!4d106.702893",
    "description": "Món Việt được biến tấu trong căn nhà phố giữa chợ cũ, dành cho một buổi tối muốn trải nghiệm ẩm thực. Tasting menu cần đặt trước. Dự trù bên dưới dành cho bữa trải nghiệm; gọi món lẻ và đồ uống có mức chi khác.",
    "dishes": [
      "Bánh xèo taco",
      "Bún chả Bourdain",
      "Kem nước mắm"
    ],
    "budgetMin": 2500000,
    "budgetMax": 5000000,
    "tags": [
      "Kỷ niệm",
      "Trải nghiệm mới",
      "Ăn tối"
    ],
    "community": {
      "provider": "Tripadvisor",
      "score": 4.4,
      "count": 866,
      "url": "https://www.tripadvisor.com/Restaurant_Review-g293925-d12134206-Reviews-Anan_Saigon-Ho_Chi_Minh_City.html",
      "checkedAt": "2026-11-27"
    },
    "sources": [
      {
        "label": "Địa chỉ",
        "url": "https://anansaigon.com/contact/"
      },
      {
        "label": "Món, đặt bàn và giá tasting menu",
        "url": "https://anansaigon.com/"
      },
      {
        "label": "Đánh giá cộng đồng",
        "url": "https://www.tripadvisor.com/Restaurant_Review-g293925-d12134206-Reviews-Anan_Saigon-Ho_Chi_Minh_City.html"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "booking": "https://anansaigon.com/",
    "image": "/venues/anan-saigon.jpg",
    "imageSource": "https://anansaigon.com/",
    "cuisineTags": [
      "banh-xeo",
      "bun",
      "khac"
    ]
  },
  {
    "id": "quan-bui-original",
    "name": "Quán Bụi Original",
    "kind": "food",
    "area": "Quận 1",
    "address": "19 Ngô Văn Năm, Quận 1, TP.HCM",
    "addressSource": "Website chính thức Quán Bụi",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20B%E1%BB%A5i%20Original%2019%20Ng%C3%B4%20V%C4%83n%20N%C4%83m%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM",
    "description": "Món Việt ba miền và những góc nhà gỗ ấm, hợp một bữa cơm chung sau ngày làm việc. Quán có nhiều chi nhánh; chọn Original ở số 19 Ngô Văn Năm. Hỏi chỗ ngồi khi đặt bàn.",
    "dishes": [
      "Bánh xèo",
      "Phở",
      "Đá me Quán Bụi"
    ],
    "budgetMin": 250000,
    "budgetMax": 500000,
    "tags": [
      "Cơm nhà",
      "Ấm cúng",
      "Ăn tối"
    ],
    "community": {
      "provider": "Tripadvisor",
      "score": 4.4,
      "count": 1123,
      "url": "https://www.tripadvisor.com.vn/Restaurant_Review-g293925-d4475963-Reviews-Quan_B_i_Original-Ho_Chi_Minh_City.html",
      "checkedAt": "2026-11-27"
    },
    "sources": [
      {
        "label": "Địa chỉ, không gian và món Việt",
        "url": "https://quan-bui.com/original/"
      },
      {
        "label": "Đánh giá cộng đồng",
        "url": "https://www.tripadvisor.com.vn/Restaurant_Review-g293925-d4475963-Reviews-Quan_B_i_Original-Ho_Chi_Minh_City.html"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "booking": "https://quan-bui.com/original/",
    "image": "/venues/quan-bui-original.jpg",
    "imageSource": "https://quan-bui.com/original/",
    "cuisineTags": [
      "com",
      "banh-xeo",
      "pho"
    ]
  },
  {
    "id": "the-workshop",
    "name": "The Workshop Coffee",
    "kind": "coffee",
    "area": "Quận 1",
    "address": "Lầu 2, 27 Ngô Đức Kế, Quận 1, TP.HCM",
    "addressSource": "Hồ sơ do quán quản lý trên Tripadvisor",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=The%20Workshop%20Coffee%20L%E1%BA%A7u%202%2C%2027%20Ng%C3%B4%20%C4%90%E1%BB%A9c%20K%E1%BA%BF%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM",
    "description": "Cà phê pha thủ công và bữa sáng trên lầu một căn nhà cũ, hợp buổi hẹn ban ngày. Có cầu thang lên quán. Dễ kết hợp đi bộ khu Đồng Khởi sau khi uống cà phê.",
    "dishes": [
      "Cà phê pour-over",
      "Cappuccino",
      "Nitro cold brew"
    ],
    "budgetMin": 90000,
    "budgetMax": 220000,
    "tags": [
      "Cà phê",
      "Hẹn ban ngày",
      "Brunch"
    ],
    "community": {
      "provider": "Tripadvisor",
      "score": 4.5,
      "count": 621,
      "url": "https://www.tripadvisor.com.vn/Restaurant_Review-g293925-d6991596-Reviews-The_Workshop-Ho_Chi_Minh_City.html",
      "checkedAt": "2026-11-27"
    },
    "sources": [
      {
        "label": "Địa chỉ, món và đánh giá cộng đồng",
        "url": "https://www.tripadvisor.com.vn/Restaurant_Review-g293925-d6991596-Reviews-The_Workshop-Ho_Chi_Minh_City.html"
      },
      {
        "label": "Nguồn chuyên về cà phê",
        "url": "https://www.vietnamcraftcoffee.com/vi/cafes/the-workshop-coffee"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "booking": "https://www.facebook.com/the.workshop.coffee",
    "cuisineTags": [
      "ca-phe"
    ]
  },
  {
    "id": "okkio-le-loi",
    "name": "OKKIO Caffe · Lê Lợi",
    "kind": "coffee",
    "area": "Quận 1",
    "address": "120–122 Lê Lợi, Quận 1, TP.HCM",
    "addressSource": "Hồ sơ do quán quản lý trên Tripadvisor",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=OKKIO%20Caffe%20%C2%B7%20L%C3%AA%20L%E1%BB%A3i%20120%E2%80%93122%20L%C3%AA%20L%E1%BB%A3i%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM",
    "description": "Một điểm dừng cà phê nhỏ gần Bến Thành, phù hợp nối tiếp sau bữa trưa hoặc một vòng đi dạo. Chọn đúng chi nhánh Lê Lợi; kiểm tra chỗ ngồi khi đi vào cuối tuần.",
    "dishes": [
      "Cà phê",
      "Trà"
    ],
    "budgetMin": 60000,
    "budgetMax": 140000,
    "tags": [
      "Cà phê",
      "Hẹn ban ngày",
      "Gần trung tâm"
    ],
    "community": {
      "provider": "Tripadvisor",
      "score": 4.7,
      "count": 26,
      "url": "https://www.tripadvisor.com/Restaurant_Review-g293925-d15579484-Reviews-Okkio_Caffe-Ho_Chi_Minh_City.html",
      "checkedAt": "2026-11-27"
    },
    "sources": [
      {
        "label": "Địa chỉ và đánh giá cộng đồng",
        "url": "https://www.tripadvisor.com/Restaurant_Review-g293925-d15579484-Reviews-Okkio_Caffe-Ho_Chi_Minh_City.html"
      },
      {
        "label": "Giới thiệu specialty coffee",
        "url": "https://worldcoffeemap.com/reviews/hcmc/okkio-cafe-le-loi"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "cuisineTags": [
      "ca-phe",
      "do-uong"
    ]
  },
  {
    "id": "lusine-le-thanh-ton",
    "name": "L’Usine · Lê Thánh Tôn",
    "kind": "coffee",
    "area": "Quận 1",
    "address": "19 Lê Thánh Tôn, Quận 1, TP.HCM",
    "addressSource": "Hồ sơ do quán quản lý trên Tripadvisor",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=L%E2%80%99Usine%20%C2%B7%20L%C3%AA%20Th%C3%A1nh%20T%C3%B4n%2019%20L%C3%AA%20Th%C3%A1nh%20T%C3%B4n%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM",
    "description": "Café kết hợp cửa hàng lifestyle, hợp cùng ăn brunch rồi thong thả xem đồ. Chi nhánh Lê Thánh Tôn khác các điểm L’Usine còn lại. Kiểm tra menu và giờ phục vụ món trước khi đi.",
    "dishes": [
      "Cà phê",
      "Brunch kiểu Âu"
    ],
    "budgetMin": 150000,
    "budgetMax": 350000,
    "tags": [
      "Brunch",
      "Cà phê",
      "Hẹn ban ngày"
    ],
    "community": {
      "provider": "Tripadvisor",
      "score": 4.2,
      "count": 111,
      "url": "https://www.tripadvisor.com.vn/Restaurant_Review-g293925-d12979524-Reviews-L_Usine_Le_Thanh_Ton-Ho_Chi_Minh_City.html",
      "checkedAt": "2026-11-27"
    },
    "sources": [
      {
        "label": "Địa chỉ, ý tưởng quán và đánh giá cộng đồng",
        "url": "https://www.tripadvisor.com.vn/Restaurant_Review-g293925-d12979524-Reviews-L_Usine_Le_Thanh_Ton-Ho_Chi_Minh_City.html"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "booking": "https://lusinespace.com/",
    "cuisineTags": [
      "ca-phe",
      "au"
    ]
  },
  {
    "id": "com-tam-ba-ghien",
    "name": "Cơm Tấm Ba Ghiền",
    "kind": "food",
    "area": "Phú Nhuận",
    "address": "84 Đặng Văn Ngữ, phường Phú Nhuận, TP.HCM",
    "addressSource": "MICHELIN Guide",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20T%E1%BA%A5m%20Ba%20Ghi%E1%BB%81n%2084%20%C4%90%E1%BA%B7ng%20V%C4%83n%20Ng%E1%BB%AF%2C%20ph%C6%B0%E1%BB%9Dng%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.HCM",
    "description": "Một đĩa cơm tấm sườn nướng cho buổi hẹn giản dị; nên ghép thêm quán cà phê nếu muốn ngồi lâu. Đây là quán ăn bình dân. Một buổi hẹn ăn ngon, nhanh gọn sẽ hợp hơn lịch cần không gian riêng tư.",
    "dishes": [
      "Cơm tấm sườn nướng",
      "Cơm tấm gà"
    ],
    "budgetMin": 90000,
    "budgetMax": 170000,
    "tags": [
      "Vừa túi tiền",
      "Ăn trưa",
      "Bình dân"
    ],
    "community": {
      "provider": "Tripadvisor",
      "score": 4.4,
      "count": 135,
      "url": "https://www.tripadvisor.com.vn/Restaurant_Review-g293925-d9706209-Reviews-Com_Tam_Ba_Ghien-Ho_Chi_Minh_City.html",
      "checkedAt": "2026-11-27"
    },
    "sources": [
      {
        "label": "Địa chỉ và món",
        "url": "https://guide.michelin.com/us/en/ho-chi-minh/ho-chi-minh_2978179/restaurant/com-tam-ba-ghien"
      },
      {
        "label": "Đánh giá cộng đồng",
        "url": "https://www.tripadvisor.com.vn/Restaurant_Review-g293925-d9706209-Reviews-Com_Tam_Ba_Ghien-Ho_Chi_Minh_City.html"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "cuisineTags": [
      "com-tam"
    ]
  },
  {
    "id": "banh-xeo-46a",
    "name": "Bánh Xèo 46A",
    "kind": "food",
    "area": "Quận 1",
    "address": "46A Đinh Công Tráng, TP.HCM",
    "addressSource": "Tripadvisor và MICHELIN Guide trong hồ sơ địa điểm",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20X%C3%A8o%2046A%2046A%20%C4%90inh%20C%C3%B4ng%20Tr%C3%A1ng%2C%20TP.HCM",
    "description": "Cùng cuốn bánh xèo tôm thịt trong buổi hẹn ăn uống thoải mái, không cần quá cầu kỳ. Khẩu phần bánh lớn, có thể hỏi trước rồi gọi để chia sẻ. Bếp mở có thể nóng vào ngày oi.",
    "dishes": [
      "Bánh xèo tôm thịt",
      "Gỏi gà",
      "Gỏi cuốn"
    ],
    "budgetMin": 100000,
    "budgetMax": 230000,
    "tags": [
      "Bình dân",
      "Vừa túi tiền",
      "Món Việt"
    ],
    "community": {
      "provider": "Tripadvisor",
      "score": 4,
      "count": 519,
      "url": "https://www.tripadvisor.com/Restaurant_Review-g293925-d1122087-Reviews-Banh_Xeo_46A-Ho_Chi_Minh_City.html",
      "checkedAt": "2026-11-27"
    },
    "sources": [
      {
        "label": "Địa chỉ, món và đánh giá cộng đồng",
        "url": "https://www.tripadvisor.com/Restaurant_Review-g293925-d1122087-Reviews-Banh_Xeo_46A-Ho_Chi_Minh_City.html"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "cuisineTags": [
      "banh-xeo"
    ]
  },
  {
    "id": "pho-mien-ga-ky-dong",
    "name": "Phở Miến Gà Kỳ Đồng",
    "kind": "food",
    "area": "Quận 3",
    "address": "14/5 Bis Kỳ Đồng, phường Xuân Hòa, TP.HCM",
    "addressSource": "MICHELIN Guide",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Mi%E1%BA%BFn%20G%C3%A0%20K%E1%BB%B3%20%C4%90%E1%BB%93ng%2014%2F5%20Bis%20K%E1%BB%B3%20%C4%90%E1%BB%93ng%2C%20ph%C6%B0%E1%BB%9Dng%20Xu%C3%A2n%20H%C3%B2a%2C%20TP.HCM",
    "description": "Phở hoặc miến gà nóng cho một buổi sáng đi cùng nhau, rồi tìm thêm quán nước gần đó. Lưu đủ phần 14/5 Bis khi tìm đường. Đây là điểm ăn sáng hoặc ăn nhanh.",
    "dishes": [
      "Phở gà",
      "Miến gà"
    ],
    "budgetMin": 60000,
    "budgetMax": 130000,
    "tags": [
      "Ăn sáng",
      "Bình dân",
      "Vừa túi tiền"
    ],
    "community": {
      "provider": "Tripadvisor",
      "score": 4.5,
      "count": 28,
      "url": "https://www.tripadvisor.com.vn/Restaurant_Review-g293925-d6000559-Reviews-Pho_Mien_Ga_Ky_Dong-Ho_Chi_Minh_City.html",
      "checkedAt": "2026-11-27"
    },
    "sources": [
      {
        "label": "Địa chỉ chuẩn và món",
        "url": "https://guide.michelin.com/vn/en/ho-chi-minh/ho-chi-minh_2978179/restaurant/pho-mien-ga-ky-%C4%91ong"
      },
      {
        "label": "Đánh giá cộng đồng",
        "url": "https://www.tripadvisor.com.vn/Restaurant_Review-g293925-d6000559-Reviews-Pho_Mien_Ga_Ky_Dong-Ho_Chi_Minh_City.html"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "cuisineTags": [
      "pho"
    ]
  },
  {
    "id": "bosgaurus-saigon-pearl",
    "name": "Bosgaurus · Saigon Pearl",
    "kind": "coffee",
    "area": "Bình Thạnh",
    "address": "Villa 1, đường D5, 92 Nguyễn Hữu Cảnh, phường Thạnh Mỹ Tây, TP.HCM",
    "addressSource": "Website chính thức Bosgaurus",
    "mapUrl": "https://www.google.com/maps/place/Bosgaurus+Coffee+Roasters+-+Saigon+Pearl/@10.7889169,106.7180503,845m/data=!3m2!1e3!4b1!4m6!3m5!1s0x31752919665bb315:0x61a84ad53007412!8m2!3d10.7889116!4d106.7206306!16s%2Fg%2F11clyzht3c?entry=ttu",
    "description": "Quán cà phê trong khu biệt thự Saigon Pearl, dành cho hai người thích thử cà phê và trò chuyện ban ngày. Lưu cả Villa 1 và đường D5 để dễ tìm; số 92 Nguyễn Hữu Cảnh là lối vào khu lớn.",
    "dishes": [
      "Arabica cold brew chanh dây",
      "Cà phê đen đá",
      "Lemon cheesecake"
    ],
    "budgetMin": 80000,
    "budgetMax": 200000,
    "tags": [
      "Cà phê",
      "Hẹn ban ngày",
      "Nhẹ nhàng"
    ],
    "community": {
      "provider": "Tripadvisor",
      "score": 4.8,
      "count": 26,
      "url": "https://www.tripadvisor.com.vn/Restaurant_Review-g293925-d10210737-Reviews-Bosgaurus_Coffee_Roasters-Ho_Chi_Minh_City.html",
      "checkedAt": "2026-11-27"
    },
    "sources": [
      {
        "label": "Địa chỉ và đồ uống",
        "url": "https://bosgauruscoffee.com/"
      },
      {
        "label": "Liên kết Maps chính thức và bánh",
        "url": "https://bosgauruscoffee.com/blogs/BOS-stores"
      },
      {
        "label": "Đánh giá cộng đồng",
        "url": "https://www.tripadvisor.com.vn/Restaurant_Review-g293925-d10210737-Reviews-Bosgaurus_Coffee_Roasters-Ho_Chi_Minh_City.html"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "booking": "https://bosgauruscoffee.com/",
    "image": "/venues/bosgaurus-saigon-pearl.jpg",
    "imageSource": "https://bosgauruscoffee.com/blogs/BOS-stores",
    "cuisineTags": [
      "ca-phe",
      "banh-ngot"
    ]
  },
  {
    "id": "maison-marou-calmette",
    "name": "Maison Marou · Calmette",
    "kind": "dessert",
    "area": "Quận 1",
    "address": "169 Calmette, Quận 1, TP.HCM",
    "addressSource": "Website chính thức Maison Marou",
    "mapUrl": "https://www.google.com/maps/dir/?api=1&destination=Maison+Marou+Flagship+Saigon,+169+%C4%90.+Calmette,+Qu%E1%BA%ADn+1,+H%E1%BB%93+Ch%C3%AD+Minh",
    "description": "Chia nhau một chiếc bánh và đồ uống chocolate, một điểm kết thúc ngọt ngào sau bữa ăn. Website hiện ghi số 169; các hồ sơ cũ có thể ghi 167–169. Mua chocolate mang về là lựa chọn thêm.",
    "dishes": [
      "Chocolate nóng",
      "Bánh chocolate",
      "Bonbon"
    ],
    "budgetMin": 100000,
    "budgetMax": 250000,
    "tags": [
      "Ăn ngọt",
      "Hẹn ban ngày",
      "Sau bữa tối"
    ],
    "community": {
      "provider": "Tripadvisor",
      "score": 4.5,
      "count": 476,
      "url": "https://www.tripadvisor.com.vn/Restaurant_Review-g293925-d10340476-Reviews-Maison_Marou_Saigon-Ho_Chi_Minh_City.html",
      "checkedAt": "2026-11-27"
    },
    "sources": [
      {
        "label": "Địa chỉ hiện tại và loại món",
        "url": "https://maisonmarou.com/vi/pages/stores"
      },
      {
        "label": "Đánh giá cộng đồng",
        "url": "https://www.tripadvisor.com.vn/Restaurant_Review-g293925-d10340476-Reviews-Maison_Marou_Saigon-Ho_Chi_Minh_City.html"
      }
    ],
    "curated": true,
    "checkedAt": "2026-11-27",
    "booking": "https://maisonmarou.com/vi/pages/stores",
    "image": "/venues/maison-marou-calmette.jpg",
    "imageSource": "https://maisonmarou.com/vi/pages/stores",
    "cuisineTags": [
      "banh-ngot",
      "do-uong"
    ]
  }
];

// A varied, affordable first row; original IDs remain stable for saved notebooks.
const spotlight = ["xoi-binh-tien-tran-dai-nghia", "com-chay-huong-sen-phan-van-doi", "bun-thit-nuong-kieu-bao-de-tham", "com-tam-di-tu-huong-lo-2", "banh-mi-bay-ho-huynh-khuong-ninh", "bun-bo-hue-dong-ba-ni-su-huynh-lien", "banh-xeo-mien-trung-duong-so-10", "ca-phe-vot-phan-dinh-phung", "banh-mi-chao-co-3-hau", "che-ha-ky-chau-van-liem"];
export const CURATED_PLACES: Place[] = [...spotlight.map(id=>EXTRA_PLACES.find(place=>place.id===id)!).filter(Boolean),...ORIGINAL_PLACES,...EXTRA_PLACES.filter(place=>!spotlight.includes(place.id))];
