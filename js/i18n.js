/* =========================================================
   RAGTIME COFFEE — translations (ja / en / zh / ko)
   ・data-i18n="key" の要素に textContent を流し込む
   ・schedule の曜日ラベルもここで管理
   ========================================================= */
window.I18N = {
  ja: {
    "nav.about": "ABOUT", "nav.craft": "こだわり", "nav.menu": "MENU",
    "nav.schedule": "出店スケジュール", "nav.contact": "CONTACT",

    "hero.eyebrow": "北海道江別 — 自家焙煎",
    "hero.title1": "注文を受けてから、",
    "hero.title2": "焙煎する一杯。",
    "hero.lead": "まちを巡るキッチンカーと、淹れたての香り。RAGTIME COFFEE。",
    "hero.ctaSchedule": "今週の出店を見る",
    "hero.ctaMenu": "メニュー",
    "hero.scroll": "SCROLL",

    "about.kicker": "ABOUT",
    "about.title": "江別の小さな焙煎所から",
    "about.p1": "RAGTIME COFFEE は、北海道江別を拠点にする自家焙煎のコーヒー店です。ご注文をいただいてから一杯ずつ向き合い、焙煎したての豆をお届けします。",
    "about.p2": "アーシーでスモーキー、チョコレートのような余韻。日常にそっと寄り添う、飾らない一杯を目指しています。",
    "about.fact1": "焙煎をはじめた年",
    "about.fact2": "焙煎日からの賞味目安",
    "about.fact3": "拠点とするまち",

    "craft.kicker": "CRAFT",
    "craft.title": "三つのこだわり",
    "craft.c1t": "注文後の焙煎",
    "craft.c1d": "作り置きをせず、ご注文を受けてから焙煎。もっとも香りの立つ状態でお渡しします。",
    "craft.c2t": "選び抜いた生豆",
    "craft.c2d": "マンデリン、トラジャ、ブルンジなど。素性のたしかな生豆を、豆ごとの個性に合わせて焼き分けます。",
    "craft.c3t": "まちを巡る一台",
    "craft.c3d": "キッチンカーでまちへ。イベントや軒先で、その場で淹れたての一杯をお出しします。",

    "menu.kicker": "MENU", "menu.title": "メニュー",
    "menu.note": "※ 出店内容により取り扱いが変わります。価格は税込の目安です。",
    "menu.catDrink": "キッチンカーの一杯",
    "menu.d1": "ハンドドリップコーヒー", "menu.d2": "カフェオレ", "menu.d3": "オーガニックカフェオレ", "menu.d4": "カフェモカ", "menu.d5": "クラフトビール",
    "menu.catBeans": "持ち帰りの豆・ドリップパック",
    "menu.b1": "焙煎豆（200g〜）", "menu.b2": "ドリップパック 6個セット", "menu.b3": "ドリップパック 10個セット", "menu.b4": "ギフトセット",
    "menu.shop": "オンラインストアで購入する →",

    "schedule.kicker": "SCHEDULE", "schedule.title": "出店スケジュール",
    "schedule.note": "天候などにより変更となる場合があります。最新情報は Instagram をご確認ください。",
    "schedule.map": "地図", "schedule.empty": "次回の出店は調整中です。Instagram で最新情報をお知らせします。",

    "instagram.kicker": "INSTAGRAM", "instagram.title": "最近の一台",
    "instagram.note": "出店の様子や新作は Instagram でお知らせしています。",
    "instagram.follow": "@ragtime.coffee をフォロー",

    "contact.kicker": "CONTACT", "contact.title": "出店のご依頼・お問い合わせ",
    "contact.lead": "イベント・マルシェ・軒先への出店のご相談を承ります。お気軽にどうぞ。",
    "contact.mail": "メールで問い合わせ",

    "footer.loc": "北海道江別市", "footer.store": "オンラインストア",

    "_weekdays": ["日", "月", "火", "水", "木", "金", "土"]
  },

  en: {
    "nav.about": "ABOUT", "nav.craft": "CRAFT", "nav.menu": "MENU",
    "nav.schedule": "SCHEDULE", "nav.contact": "CONTACT",

    "hero.eyebrow": "Ebetsu, Hokkaido — Roasted in-house",
    "hero.title1": "Roasted",
    "hero.title2": "to order.",
    "hero.lead": "A coffee truck on the move, and the aroma of a freshly brewed cup. RAGTIME COFFEE.",
    "hero.ctaSchedule": "See this week",
    "hero.ctaMenu": "Menu",
    "hero.scroll": "SCROLL",

    "about.kicker": "ABOUT",
    "about.title": "From a small roastery in Ebetsu",
    "about.p1": "RAGTIME COFFEE is an in-house roaster based in Ebetsu, Hokkaido. We roast only after your order is placed, and deliver beans at their freshest.",
    "about.p2": "Earthy and smoky, with a chocolate-like finish. We aim for an honest cup that quietly fits into everyday life.",
    "about.fact1": "Roasting since",
    "about.fact2": "Best within, from roast date",
    "about.fact3": "Our home town",

    "craft.kicker": "CRAFT",
    "craft.title": "Three things we care about",
    "craft.c1t": "Roasted to order",
    "craft.c1d": "Nothing sits on a shelf. We roast after you order, so the aroma is at its peak when it reaches you.",
    "craft.c2t": "Carefully sourced beans",
    "craft.c2d": "Mandheling, Toraja, Burundi and more — trustworthy green beans, roasted to suit each origin.",
    "craft.c3t": "A truck on the move",
    "craft.c3d": "We bring the truck to town — brewing a fresh cup on the spot at events and storefronts.",

    "menu.kicker": "MENU", "menu.title": "Menu",
    "menu.note": "Offerings vary by location. Prices include tax and are a guide.",
    "menu.catDrink": "From the truck",
    "menu.d1": "Hand-drip Coffee", "menu.d2": "Café au Lait", "menu.d3": "Organic Café au Lait", "menu.d4": "Café Mocha", "menu.d5": "Craft Beer",
    "menu.catBeans": "Beans & Drip packs to go",
    "menu.b1": "Roasted beans (from 200g)", "menu.b2": "Drip pack, set of 6", "menu.b3": "Drip pack, set of 10", "menu.b4": "Gift set",
    "menu.shop": "Buy at the online store →",

    "schedule.kicker": "SCHEDULE", "schedule.title": "Where we'll be",
    "schedule.note": "Subject to change due to weather and other factors. Please check Instagram for the latest.",
    "schedule.map": "Map", "schedule.empty": "Our next pop-up is being arranged. Follow us on Instagram for updates.",

    "contact.kicker": "CONTACT", "contact.title": "Bookings & Inquiries",
    "contact.lead": "We welcome requests for events, markets and storefront pop-ups. Feel free to reach out.",
    "contact.mail": "Email us",

    "footer.loc": "Ebetsu, Hokkaido", "footer.store": "Online Store",

    "_weekdays": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  },

  zh: {
    "nav.about": "关于", "nav.craft": "匠心", "nav.menu": "菜单",
    "nav.schedule": "出摊日程", "nav.contact": "联系",

    "hero.eyebrow": "北海道江别 — 自家烘焙",
    "hero.title1": "接单之后，",
    "hero.title2": "现烘一杯。",
    "hero.lead": "穿行于街巷的咖啡车，与现冲现磨的香气。RAGTIME COFFEE。",
    "hero.ctaSchedule": "查看本周出摊",
    "hero.ctaMenu": "菜单",
    "hero.scroll": "SCROLL",

    "about.kicker": "ABOUT",
    "about.title": "源自江别的小小烘焙所",
    "about.p1": "RAGTIME COFFEE 是一家位于北海道江别的自家烘焙咖啡店。收到订单后才开始烘焙，把最新鲜的咖啡豆交到您手中。",
    "about.p2": "醇厚而带烟熏感，余韵如巧克力。我们追求的，是悄然融入日常、质朴自然的一杯。",
    "about.fact1": "开始烘焙的年份",
    "about.fact2": "烘焙日起赏味期",
    "about.fact3": "扎根的城市",

    "craft.kicker": "CRAFT",
    "craft.title": "三点坚持",
    "craft.c1t": "接单后烘焙",
    "craft.c1d": "绝不预先囤货，收到订单后才烘焙。在香气最盛之时交到您手中。",
    "craft.c2t": "精选生豆",
    "craft.c2d": "曼特宁、托拉贾、布隆迪等，来源可靠的生豆，依各自个性分别烘焙。",
    "craft.c3t": "穿行街巷的咖啡车",
    "craft.c3d": "咖啡车驶入街巷，在活动与店前现场为您冲煮一杯。",

    "menu.kicker": "MENU", "menu.title": "菜单",
    "menu.note": "※ 供应内容随出摊地点而变。价格为含税参考价。",
    "menu.catDrink": "咖啡车的一杯",
    "menu.d1": "手冲咖啡", "menu.d2": "欧蕾咖啡", "menu.d3": "有机欧蕾咖啡", "menu.d4": "摩卡咖啡", "menu.d5": "精酿啤酒",
    "menu.catBeans": "外带咖啡豆・挂耳包",
    "menu.b1": "烘焙豆（200g 起）", "menu.b2": "挂耳包 6 入组", "menu.b3": "挂耳包 10 入组", "menu.b4": "礼盒装",
    "menu.shop": "前往网店选购 →",

    "schedule.kicker": "SCHEDULE", "schedule.title": "出摊日程",
    "schedule.note": "可能因天气等原因变动，最新信息请关注 Instagram。",
    "schedule.map": "地图", "schedule.empty": "下次出摊正在安排中，最新消息将在 Instagram 发布。",

    "contact.kicker": "CONTACT", "contact.title": "出摊预约・咨询",
    "contact.lead": "欢迎洽询活动、市集、店前出摊等合作，请随时与我们联系。",
    "contact.mail": "邮件联系",

    "footer.loc": "北海道江别市", "footer.store": "网上商店",

    "_weekdays": ["日", "一", "二", "三", "四", "五", "六"]
  },

  ko: {
    "nav.about": "소개", "nav.craft": "고집", "nav.menu": "메뉴",
    "nav.schedule": "출점 일정", "nav.contact": "문의",

    "hero.eyebrow": "홋카이도 에베쓰 — 자가 로스팅",
    "hero.title1": "주문을 받고 나서,",
    "hero.title2": "로스팅하는 한 잔.",
    "hero.lead": "거리를 도는 커피 트럭과, 갓 내린 향. RAGTIME COFFEE.",
    "hero.ctaSchedule": "이번 주 출점 보기",
    "hero.ctaMenu": "메뉴",
    "hero.scroll": "SCROLL",

    "about.kicker": "ABOUT",
    "about.title": "에베쓰의 작은 로스터리에서",
    "about.p1": "RAGTIME COFFEE는 홋카이도 에베쓰를 거점으로 하는 자가 로스팅 커피점입니다. 주문을 받은 뒤 한 잔씩 정성을 들여, 갓 로스팅한 원두를 전해 드립니다.",
    "about.p2": "어시하고 스모키하며, 초콜릿 같은 여운. 일상에 살며시 스며드는, 꾸밈없는 한 잔을 지향합니다.",
    "about.fact1": "로스팅을 시작한 해",
    "about.fact2": "로스팅일 기준 권장 기간",
    "about.fact3": "거점이 되는 도시",

    "craft.kicker": "CRAFT",
    "craft.title": "세 가지 고집",
    "craft.c1t": "주문 후 로스팅",
    "craft.c1d": "미리 만들어 두지 않고, 주문을 받은 뒤 로스팅합니다. 향이 가장 살아 있는 상태로 전해 드립니다.",
    "craft.c2t": "엄선한 생두",
    "craft.c2d": "만델링, 토라자, 부룬디 등. 출처가 분명한 생두를 원두별 개성에 맞춰 로스팅합니다.",
    "craft.c3t": "거리를 도는 한 대",
    "craft.c3d": "커피 트럭으로 거리로. 행사와 가게 앞에서 그 자리에서 갓 내린 한 잔을 드립니다.",

    "menu.kicker": "MENU", "menu.title": "메뉴",
    "menu.note": "※ 출점 장소에 따라 취급 품목이 달라집니다. 가격은 세금 포함 기준입니다.",
    "menu.catDrink": "커피 트럭의 한 잔",
    "menu.d1": "핸드드립 커피", "menu.d2": "카페오레", "menu.d3": "유기농 카페오레", "menu.d4": "카페모카", "menu.d5": "크래프트 비어",
    "menu.catBeans": "테이크아웃 원두・드립백",
    "menu.b1": "로스팅 원두 (200g~)", "menu.b2": "드립백 6개 세트", "menu.b3": "드립백 10개 세트", "menu.b4": "선물 세트",
    "menu.shop": "온라인 스토어에서 구매하기 →",

    "schedule.kicker": "SCHEDULE", "schedule.title": "출점 일정",
    "schedule.note": "날씨 등으로 변경될 수 있습니다. 최신 정보는 Instagram을 확인해 주세요.",
    "schedule.map": "지도", "schedule.empty": "다음 출점은 조율 중입니다. Instagram에서 최신 소식을 전해 드립니다.",

    "contact.kicker": "CONTACT", "contact.title": "출점 의뢰・문의",
    "contact.lead": "행사・마르셰・가게 앞 출점 상담을 받습니다. 편하게 연락 주세요.",
    "contact.mail": "메일로 문의",

    "footer.loc": "홋카이도 에베쓰시", "footer.store": "온라인 스토어",

    "_weekdays": ["일", "월", "화", "수", "목", "금", "토"]
  }
};