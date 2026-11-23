/* Dữ liệu đường đi, ảnh Google Maps và bãi giữ xe quanh ĐH Khoa học Tự nhiên (HCMUS - Cơ sở 1: 227 Nguyễn Văn Cừ) */
window.PARKING_DATA = {
  destination: {
    name: 'ĐH Khoa học Tự nhiên (HCMUS) – Cơ sở 1',
    shortName: 'ĐH KHTN · 227 NVC',
    address: '227 Nguyễn Văn Cừ, P. Chợ Quán (P.4, Q.5 cũ), TP.HCM',
    lat: 10.7626203,
    lng: 106.6820152,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=10.7626203,106.6820152'
  },

  mapPhotos: [
    {
      id: 'closeup',
      tabLabel: 'Lộ trình đi bộ (Zoom gần)',
      src: 'assets/gmap-closeup-routes.jpg',
      title: 'Lộ trình đi bộ từ Hầm Nowzone (#1) & ĐH Sư phạm (#2) vào cổng ĐH KHTN',
      desc: 'Đường nét đứt màu xanh lá: đi từ Hầm Nowzone (bên Q.1), băng qua vạch sang đường Nguyễn Văn Cừ rồi đi thẳng ~200m (2–3 phút) là tới cổng ĐH KHTN. Ngay sát phía dưới cổng trường là Texas Chicken Nguyễn Văn Cừ — mốc nhận diện rất dễ thấy.'
    },
    {
      id: 'satellite',
      tabLabel: 'Ảnh vệ tinh thực tế',
      src: 'assets/gmap-satellite.jpg',
      title: 'Ảnh vệ tinh thực tế khu vực cổng ĐH KHTN, Nowzone & THPT Chuyên Lê Hồng Phong',
      desc: 'Nhìn rõ mái ngói đỏ chữ U của THPT Chuyên Lê Hồng Phong nằm ngay kế trên ĐH KHTN (cùng dãy bên Q.5), đối diện bên kia đường là tổ hợp Khách sạn Nikko Saigon & TTTM Nowzone (phía Q.1).'
    },
    {
      id: 'overview',
      tabLabel: 'Bản đồ tổng quan khu vực',
      src: 'assets/gmap-overview.jpg',
      title: 'Tổng quan 5 điểm gửi xe & chiều lưu thông quanh Ngã sáu Cộng Hòa',
      desc: 'Hiển thị đầy đủ 5 lựa chọn gửi xe bên ngoài trong bán kính 350m quanh 227 Nguyễn Văn Cừ cùng nhắc nhở đường An Dương Vương chạy 1 chiều hướng từ Lê Hồng Phong ra Nguyễn Văn Cừ.'
    }
  ],

  quickPicks: [
    {
      badge: 'Đi xe máy',
      title: 'Gửi tại Hầm B1 Nowzone hoặc ĐH Sư phạm (280 ADV)',
      desc: 'Trường ĐH KHTN không nhận gửi xe bên trong ngày Lễ tốt nghiệp. Gửi ngay hầm B1 TTTM Nowzone (~200m, luôn rộng) hoặc bên ĐH Sư phạm (280 An Dương Vương, ~120m) rồi đi bộ 2 phút.',
      targetSpotId: 'nowzone',
      cta: 'Xem bãi Nowzone'
    },
    {
      badge: 'Đi ô tô (4–7 chỗ)',
      title: 'Chạy thẳng hầm B2 TTTM Nowzone',
      desc: 'Khuôn viên ĐH KHTN không nhận gửi ô tô. Hầm B2 Nowzone (235 Nguyễn Văn Cừ, Q.1) rộng rãi, lối xuống dễ đi, có mái che mát và chỉ mất 2–3 phút đi bộ qua cổng KHTN.',
      targetSpotId: 'nowzone',
      cta: 'Chỉ đường Nowzone'
    },
    {
      badge: 'Nhàn nhất cho người mới tới',
      title: 'Đặt Grab / Be / Xanh SM thẳng cổng 227 NVC',
      desc: 'Đỡ lo kẹt Ngã sáu Cộng Hòa, đường 1 chiều hay tìm chỗ gửi xe. Khi đặt xe nhớ chọn đúng "227 Nguyễn Văn Cừ, Quận 5" (tránh chọn nhầm Cơ sở 2 Linh Trung, Thủ Đức).',
      targetSpotId: 'destination',
      cta: 'Xem cổng KHTN trên bản đồ'
    }
  ],

  walkGuides: [
    {
      id: 'from-nowzone',
      tabLabel: '#1 Từ hầm Nowzone (Khuyên dùng)',
      badge: 'Dễ đi nhất · Xe máy & Ô tô · ~200m (2–3 phút)',
      summary: 'Phù hợp nhất cho người lần đầu tới: không lo hết chỗ, không lo đóng cổng sớm nếu ở lại ăn trưa sau lễ.',
      steps: [
        {
          title: 'Xác định đúng tòa nhà Nowzone (bên phía Quận 1)',
          detail: 'Chạy tới gần Ngã sáu Cộng Hòa, nhìn phía bên kia đường đối diện THPT Chuyên Lê Hồng Phong sẽ thấy tổ hợp lớn gồm Khách sạn Nikko Saigon màu trắng và tòa nhà TTTM Nowzone (235 Nguyễn Văn Cừ, Q.1).'
        },
        {
          title: 'Chạy xuống hầm B1 (xe máy) hoặc hầm B2 (ô tô)',
          detail: 'Chuyển làn sớm vào lối xuống hầm gửi xe bên hông tòa nhà Nowzone. Quẹt thẻ từ giữ xe và nhớ chụp lại số cột/khu vực đậu xe để lúc về tìm cho nhanh.'
        },
        {
          title: 'Lên sảnh trệt ra đường Nguyễn Văn Cừ',
          detail: 'Đi thang máy hoặc thang bộ từ tầng hầm lên tầng trệt (G), bước ra mặt tiền đường Nguyễn Văn Cừ.'
        },
        {
          title: 'Băng qua đường & đi bộ ~200m tới cổng ĐH KHTN',
          detail: 'Qua đường Nguyễn Văn Cừ sang phía dãy Trường THPT Chuyên Lê Hồng Phong (tòa nhà mái ngói đỏ), rẽ trái đi dọc vỉa hè hướng về phía An Dương Vương/Nguyễn Trãi khoảng 200m là tới thẳng cổng chính 227 Nguyễn Văn Cừ (ngay trước tiệm Texas Chicken).'
        }
      ],
      mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=10.7643404,106.6824603&destination=10.7626203,106.6820152&travelmode=walking',
      mapsCta: 'Mở lộ trình đi bộ từ Nowzone trên Google Maps'
    },
    {
      id: 'from-hcmue',
      tabLabel: '#2 Từ ĐH Sư phạm (280 ADV)',
      badge: 'Gần nhất · Chỉ xe máy · ~120m (1–2 phút)',
      summary: 'Giá gửi xe sinh viên và sát vách ĐH KHTN, nhưng cần đi đúng chiều đường 1 chiều An Dương Vương.',
      steps: [
        {
          title: 'Tiếp cận đúng chiều 1 chiều đường An Dương Vương',
          detail: 'Đoạn An Dương Vương trước cổng 280 là đường 1 chiều hướng từ Lê Hồng Phong → Nguyễn Văn Cừ. Nếu đang đi trên Nguyễn Văn Cừ, KHÔNG rẽ phải ngược chiều vào An Dương Vương; hãy đi vòng qua Trần Phú → Trần Bình Trọng/Lê Hồng Phong rồi rẽ trái vào An Dương Vương.'
        },
        {
          title: 'Hỏi bảo vệ & gửi xe máy tại cổng 280 An Dương Vương',
          detail: 'Chạy vào bãi giữ xe máy bên trong Trường ĐH Sư phạm TP.HCM (nên hỏi nhanh bảo vệ cổng vì quy định nhận xe khách vãng lai có thể thay đổi theo ngày cuối tuần/sự kiện).'
        },
        {
          title: 'Đi bộ vòng ra cổng chính 227 Nguyễn Văn Cừ',
          detail: 'Ra cổng An Dương Vương rẽ phải đi ra ngã tư An Dương Vương – Nguyễn Văn Cừ, sau đó quẹo trái lên vỉa hè Nguyễn Văn Cừ đi ngang qua Texas Chicken (~70m) là thấy ngay cổng ĐH KHTN (hoặc hỏi bảo vệ nếu lối thông nội bộ giữa 2 trường có mở).'
        }
      ],
      mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=10.7619457,106.6817971&destination=10.7626203,106.6820152&travelmode=walking',
      mapsCta: 'Mở lộ trình đi bộ từ ĐH Sư phạm trên Google Maps'
    },
    {
      id: 'from-lhp',
      tabLabel: '#3 Từ THPT Chuyên LHP',
      badge: 'Cùng vỉa hè · Không qua đường · ~140m (2 phút)',
      summary: 'Nằm ngay sát bên ĐH KHTN trên cùng một bên đường, nhưng chỉ gửi được khi trường có mở nhận xe ngoài.',
      steps: [
        {
          title: 'Nhận diện THPT Chuyên Lê Hồng Phong (235 NVC · Q.5)',
          detail: 'Đi từ Ngã sáu Cộng Hòa xuôi xuống Nguyễn Văn Cừ (hướng về cầu chữ Y), trường nằm ngay bên tay phải với kiến trúc Pháp cổ mái ngói đỏ rất đặc trưng.'
        },
        {
          title: 'Hỏi bảo vệ ở cổng trước khi chạy vào',
          detail: 'Do là trường THPT nên giờ học sinh đang học thường không nhận xe khách ngoài. Nếu hôm đó trường không nhận, bạn chạy thẳng tới ngã tư quay đầu/qua hầm Nowzone đối diện ngay là nhanh nhất.'
        },
        {
          title: 'Đi bộ dọc vỉa hè 140m sang cổng ĐH KHTN',
          detail: 'Nếu gửi được xe, bước ra cổng rẽ phải đi thẳng dọc vỉa hè khoảng 2 phút (không phải băng qua đường lớn) là tới ngay cổng 227 Nguyễn Văn Cừ.'
        }
      ],
      mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=10.7637689,106.6814728&destination=10.7626203,106.6820152&travelmode=walking',
      mapsCta: 'Mở lộ trình đi bộ từ THPT LHP trên Google Maps'
    },
    {
      id: 'from-sgu',
      tabLabel: '#4 Từ ĐH Sài Gòn (273 ADV)',
      badge: 'Dự phòng xe máy · ~330m (4–5 phút)',
      summary: 'Lựa chọn dự phòng rộng rãi cho xe máy khi cả KHTN và ĐH Sư phạm đều hết chỗ.',
      steps: [
        {
          title: 'Đi theo chiều 1 chiều đường An Dương Vương',
          detail: 'Đi từ hướng Lê Hồng Phong / Trần Bình Trọng xuôi theo đường An Dương Vương về phía Nguyễn Văn Cừ, Trường ĐH Sài Gòn (số 273) nằm bên tay phải (đối diện ĐH Sư phạm).'
        },
        {
          title: 'Gửi xe máy & kiểm tra giờ đóng cửa bãi',
          detail: 'Gửi xe trong bãi của trường (giá sinh viên) và hỏi nhanh giờ đóng cổng buổi trưa/chiều nếu bạn có kế hoạch ở lại ăn trưa sau lễ.'
        },
        {
          title: 'Đi bộ ~4–5 phút tới cổng ĐH KHTN',
          detail: 'Đi bộ xuôi theo An Dương Vương ~250m ra tới ngã tư Nguyễn Văn Cừ, băng qua đường An Dương Vương sang phía ĐH Sư phạm, rồi rẽ trái đi dọc Nguyễn Văn Cừ qua Texas Chicken ~80m là tới cổng KHTN.'
        }
      ],
      mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=10.7597031,106.6817595&destination=10.7626203,106.6820152&travelmode=walking',
      mapsCta: 'Mở lộ trình đi bộ từ ĐH Sài Gòn trên Google Maps'
    },
    {
      id: 'ride-hailing',
      tabLabel: 'Đi Grab / Be / Xanh SM',
      badge: 'Nhàn nhất · Không cần gửi xe · Thả thẳng cổng',
      summary: 'Khuyên dùng nếu đi từ nội thành hoặc mang theo hoa, quà tặng để không phải tìm chỗ gửi xe giữa trưa nắng.',
      steps: [
        {
          title: 'Nhập chính xác điểm đến Cơ sở 1 (Quận 5)',
          detail: 'Gõ: "Trường Đại học Khoa học Tự nhiên - 227 Nguyễn Văn Cừ". Kiểm tra kỹ trên bản đồ app là Quận 5 (gần Ngã sáu Cộng Hòa), tuyệt đối KHÔNG chọn nhầm Cơ sở 2 Linh Trung (TP. Thủ Đức).'
        },
        {
          title: 'Nhắn tài xế thả ngay cổng chính 227 Nguyễn Văn Cừ',
          detail: 'Cổng chính nằm ngay mặt tiền đường Nguyễn Văn Cừ, sát trạm xe buýt và ngay trên tiệm Texas Chicken Nguyễn Văn Cừ.'
        },
        {
          title: 'Lúc về đặt xe dễ đón hơn',
          detail: 'Nếu trước cổng trường quá đông người ra vào sau giờ lễ, bạn có thể đi bộ qua sảnh TTTM Nowzone (cách 200m) hoặc trước Texas Chicken để tài xế dễ tấp lề đón hơn.'
        }
      ],
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=10.7626203,106.6820152',
      mapsCta: 'Mở vị trí cổng chính 227 Nguyễn Văn Cừ'
    }
  ],

  walkingPolylines: [
    {
      id: 'walk-nowzone',
      color: '#059669',
      points: [
        [10.7643404, 106.6824603],
        [10.76418, 106.68185],
        [10.76340, 106.68202],
        [10.7626203, 106.6820152]
      ]
    },
    {
      id: 'walk-hcmue',
      color: '#2563eb',
      points: [
        [10.7619457, 106.6817971],
        [10.76182, 106.68240],
        [10.7626203, 106.6820152]
      ]
    }
  ],

  spots: [
    {
      id: 'nowzone',
      order: 1,
      name: 'TTTM Nowzone Fashion Mall (Hầm B1 & B2)',
      shortLabel: 'Nowzone (B1/B2)',
      category: 'best',
      badge: 'Khuyên dùng #1',
      recommended: true,
      vehicles: ['motorbike', 'car'],
      vehicleLabels: ['Xe máy (Hầm B1)', 'Ô tô (Hầm B2)'],
      covered: true,
      address: '235 Nguyễn Văn Cừ, P. Cầu Ông Lãnh (P. Nguyễn Cư Trinh, Q.1 cũ), TP.HCM',
      distanceMeters: 200,
      walkTime: '2–3 phút đi bộ',
      hours: 'TTTM mở 09:30 – 22:00 (hầm xe phục vụ khách ra vào cả ngày)',
      priceNote: 'Xe máy theo biểu phí TTTM; Ô tô ~30.000đ/giờ (thường miễn 3 giờ đầu nếu có hóa đơn mua sắm/ăn uống từ 500.000đ theo chính sách TTTM).',
      pros: [
        'Bãi hầm cực rộng, gần như chắc chắn còn chỗ kể cả ngày lễ tốt nghiệp rất đông.',
        'Có mái che mát mẻ, thẻ từ an ninh, lối xuống rộng phù hợp cả ô tô gầm cao.',
        'Ngay cạnh Khách sạn Nikko Saigon & Ngã sáu Cộng Hòa, đi bộ qua KHTN chỉ 2–3 phút.'
      ],
      notes: 'Chú ý phân biệt: Nowzone mang số 235 Nguyễn Văn Cừ nhưng nằm ở phía Quận 1 (bên kia đường so với KHTN & THPT Chuyên Lê Hồng Phong). Đi bộ qua vạch sang đường là tới cổng KHTN.',
      lat: 10.7643404,
      lng: 106.6824603,
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Nowzone+Fashion+Mall+235+Nguyen+Van+Cu+Quan+1'
    },
    {
      id: 'hcmue',
      order: 2,
      name: 'Trường ĐH Sư phạm TP.HCM (HCMUE)',
      shortLabel: 'ĐH Sư phạm (280 ADV)',
      category: 'moto',
      badge: 'Gần nhất · Xe máy',
      recommended: true,
      vehicles: ['motorbike'],
      vehicleLabels: ['Xe máy'],
      covered: true,
      address: '280 An Dương Vương, P. Chợ Quán (P.4, Q.5 cũ), TP.HCM',
      distanceMeters: 120,
      walkTime: '1–2 phút đi bộ',
      hours: 'Giờ hành chính / theo lịch hoạt động trường',
      priceNote: 'Phí gửi xe máy mức sinh viên / bình dân (tham khảo ~4.000đ – 5.000đ/lượt).',
      pros: [
        'Nằm sát vách phía cạnh/sau ĐH KHTN, là điểm gửi xe máy cực quen thuộc của sinh viên HCMUS.',
        'Khoảng cách đi bộ ngắn nhất trong các bãi ngoài trường, giá rất mềm.'
      ],
      notes: 'Đường An Dương Vương trước cổng là đường 1 chiều hướng ra Nguyễn Văn Cừ (không rẽ ngược chiều từ Nguyễn Văn Cừ vào). Nên hỏi bảo vệ cổng quy định nhận xe khách vào ngày cuối tuần/sự kiện.',
      lat: 10.7619457,
      lng: 106.6817971,
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=10.7619457,106.6817971'
    },
    {
      id: 'lhp',
      order: 3,
      name: 'Khu vực THPT Chuyên Lê Hồng Phong',
      shortLabel: 'THPT Chuyên LHP',
      category: 'moto',
      badge: 'Sát bên · Tùy thời điểm',
      recommended: false,
      vehicles: ['motorbike'],
      vehicleLabels: ['Xe máy (tùy quy định mở cổng)'],
      covered: false,
      address: '235 Nguyễn Văn Cừ, P. Chợ Quán (P.4, Q.5 cũ), TP.HCM',
      distanceMeters: 140,
      walkTime: '2 phút đi bộ',
      hours: 'Tùy lịch học / ngày nghỉ & quy định bảo vệ',
      priceNote: 'Chỉ nhận tùy thời điểm (không cố định mở cho khách ngoài vào ngày học sinh đang học).',
      pros: [
        'Nằm cùng bên đường Nguyễn Văn Cừ, ngay kế bên ĐH KHTN, không phải băng qua đường lớn.'
      ],
      notes: 'Trường phổ thông thường siết chặt người lạ ra vào trong giờ học, nên chỉ gửi được khi trường có mở điểm giữ xe hoặc hỗ trợ sự kiện. Nếu cổng không nhận xe ngoài, bạn qua Nowzone đối diện ngay là nhanh nhất.',
      lat: 10.7637689,
      lng: 106.6814728,
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=10.7637689,106.6814728'
    },
    {
      id: 'sgu',
      order: 4,
      name: 'Trường ĐH Sài Gòn (Cơ sở chính)',
      shortLabel: 'ĐH Sài Gòn (273 ADV)',
      category: 'moto',
      badge: 'Dự phòng · Rộng rãi',
      recommended: false,
      vehicles: ['motorbike'],
      vehicleLabels: ['Xe máy'],
      covered: true,
      address: '273 An Dương Vương, P. Chợ Quán (P.3, Q.5 cũ), TP.HCM',
      distanceMeters: 330,
      walkTime: '4–5 phút đi bộ',
      hours: 'Giờ hoạt động của trường (sáng đến tối)',
      priceNote: 'Mức giá giữ xe máy sinh viên (tham khảo ~4.000đ – 5.000đ/lượt).',
      pros: [
        'Khuôn viên rộng, dễ tìm trên trục đường An Dương Vương ngay gần ngã tư Nguyễn Văn Cừ.',
        'Phương án dự phòng tốt cho xe máy nếu ĐH Sư phạm hết chỗ.'
      ],
      notes: 'Đi theo đúng chiều 1 chiều An Dương Vương từ Lê Hồng Phong → Nguyễn Văn Cừ. Nên hỏi giờ đóng cổng bãi xe nếu ở lại ăn trưa hoặc chụp ảnh muộn.',
      lat: 10.7597031,
      lng: 106.6817595,
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=10.7597031,106.6817595'
    },
    {
      id: 'lhp-street',
      order: 5,
      name: 'Các bãi giữ xe tư nhân trục Lê Hồng Phong',
      shortLabel: 'Bãi tư nhân Lê Hồng Phong',
      category: 'alt',
      badge: 'Dự phòng · Ngày đêm',
      recommended: false,
      vehicles: ['motorbike', 'car'],
      vehicleLabels: ['Xe máy', 'Ô tô (bãi ngoài trời)'],
      covered: false,
      address: 'Dọc đường Lê Hồng Phong (đoạn gần Ngã sáu Cộng Hòa / số 266 Lê Hồng Phong), Q.5',
      distanceMeters: 300,
      walkTime: '4–5 phút đi bộ',
      hours: 'Nhiều bãi nhận gửi cả ngày / 24/7',
      priceNote: 'Giá dịch vụ tư nhân tùy bãi và tùy thời điểm ngày lễ — cần hỏi giá rõ trước khi gửi.',
      pros: [
        'Linh hoạt thời gian (nhiều bãi trông xe ngày đêm quanh khu vực các nhà xe lớn).',
        'Có thêm lựa chọn cho ô tô hoặc xe máy khi hầm TTTM đông.'
      ],
      notes: 'Bắt buộc hỏi rõ giá theo lượt hay theo giờ (đặc biệt nếu gửi quá trưa hoặc gửi ô tô) trước khi giao xe và nhớ giữ kỹ thẻ/biên nhận.',
      lat: 10.76465,
      lng: 106.68035,
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=266+Le+Hong+Phong+Quan+5+TP+HCM'
    }
  ],

  tips: [
    {
      num: '01',
      title: 'Tuyệt đối đừng chọn nhầm Cơ sở 2 Linh Trung (Thủ Đức)',
      text: 'ĐH Khoa học Tự nhiên có 2 cơ sở. Khi tìm đường trên Google Maps hoặc đặt Grab/Be, hãy nhập rõ "227 Nguyễn Văn Cừ, Quận 5" (gần Ngã sáu Cộng Hòa), tránh chọn nhầm cơ sở Thủ Đức cách hơn 20km.'
    },
    {
      num: '02',
      title: 'Nhớ chiều đường 1 chiều quanh Ngã sáu Cộng Hòa',
      text: 'Nguyễn Văn Cừ là đường 2 chiều. Tuy nhiên Trần Phú (1 chiều từ Ngã sáu đi xuống), Hùng Vương (1 chiều đi lên Ngã sáu) và An Dương Vương đoạn trước ĐH Sư phạm/Sài Gòn (1 chiều từ Lê Hồng Phong ra Nguyễn Văn Cừ) — cần nhìn biển báo để tránh đi ngược chiều.'
    },
    {
      num: '03',
      title: 'Tránh nhầm hai số 235 Nguyễn Văn Cừ',
      text: 'Nowzone (235 Nguyễn Văn Cừ, Q.1) nằm bên kia đường cạnh Khách sạn Nikko Saigon; còn THPT Chuyên Lê Hồng Phong (235 Nguyễn Văn Cừ, Q.5) nằm cùng dãy mái ngói đỏ sát KHTN. Nên bấm nút Google Maps trực tiếp trên từng thẻ.'
    },
    {
      num: '04',
      title: 'Đến sớm 15–30 phút & hỏi giá bãi tư nhân',
      text: 'Nút giao Ngã sáu Cộng Hòa rất đông vào buổi sáng và gần trưa. Nếu gửi bãi hộ dân/tư nhân quanh hẻm Nguyễn Văn Cừ – Lê Hồng Phong, nhớ hỏi rõ giá trước khi dựng xe; nếu ở lại ăn trưa sau lễ, gửi hầm Nowzone (mở đến 22:00) sẽ thoải mái nhất.'
    }
  ]
};
