import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function HomePage() {
  const { language } = useLanguage();

  const content = {
    th: {
      badge: "HakTang Journey • เดินทางไทย–ลาวได้ง่ายขึ้น",
      title1: "เดินทางให้เก่งขึ้น",
      title2: "ข้ามแดนได้ง่ายขึ้น",
      desc:
        "ค้นหาสถานที่ ดูข้อมูลด่าน วางแผนเส้นทาง และรับคำแนะนำการเดินทางได้ทันทีในประสบการณ์เดียวที่สวย ใช้ง่าย และดูทันสมัย",
      btn1: "เริ่มวางแผน",
      btn2: "สำรวจสถานที่",
      stat1: "10+ สถานที่แนะนำ",
      stat2: "แผนที่นำทางง่าย",
      stat3: "AI ช่วยตอบเร็ว",
      sectionBadge: "สิ่งที่คุณทำได้",
      sectionTitle: "ทุกอย่างที่ต้องใช้สำหรับทริปนี้",
      sectionDesc:
        "วางแผนเส้นทาง ดูข้อมูลด่าน สำรวจจุดหมาย และถาม AI ได้ในเว็บเดียว โดยไม่ต้องสลับหลายหน้าให้ยุ่งยาก",
      card1Title: "สำรวจสถานที่",
      card1Desc:
        "ดูแลนด์มาร์ก คาเฟ่ วัด ตลาด และจุดน่าแวะในเวียงจันทน์และพื้นที่ใกล้เคียง",
      card2Title: "ข้อมูลผ่านด่าน",
      card2Desc:
        "ดูเอกสารที่ต้องใช้ ขั้นตอนการข้ามแดน และคำแนะนำสำคัญก่อนเดินทาง",
      card3Title: "ข้อมูลการเดินทาง",
      card3Desc:
        "ดูข้อมูลรถตู้ Shuttle Bus และตัวเลือกการเดินทางที่สะดวกมากขึ้น",
      card4Title: "ผู้ช่วย AI",
      card4Desc:
        "ถามคำถามเกี่ยวกับเส้นทาง สถานที่ และการเดินทาง แล้วรับคำตอบสั้น กระชับ ใช้งานได้จริง",
      featureBadge: "เส้นทางแนะนำ",
      featureTitle: "จากหนองคายสู่เวียงจันทน์",
      featureDesc:
        "เส้นทางยอดนิยมสำหรับคนที่ต้องการข้อมูลด่าน จุดเที่ยว คาเฟ่ และการเดินทางข้ามแดนแบบเข้าใจง่าย",
      featureBtn: "ดูข้อมูลด่าน",
      brandBadge: "HakTang Journey",
      brandTitle: "เดินทางให้สวยงาม ไม่ใช่เดินทางแบบเครียด",
      brandDesc:
        "ออกแบบสำหรับคนที่อยากได้เว็บเดียวที่ช่วยค้นหา วางแผน และเดินทางระหว่างไทยกับลาวได้อย่างมั่นใจ",
      brand1: "ข้อมูลด่านและการเดินทางในที่เดียว",
      brand2: "สถานที่เที่ยว คาเฟ่ และจุดน่าแวะ",
      brand3: "ผู้ช่วย AI ที่ตอบได้ไวและใช้ง่าย",
      footerDesc:
        "ประสบการณ์การเดินทางแบบใหม่สำหรับค้นหาเส้นทาง จุดหมาย และไฮไลต์สำคัญระหว่างไทยและลาว",
      navTitle: "เมนู",
      nav1: "หน้าหลัก",
      nav2: "สถานที่",
      nav3: "ข้อมูลด่าน",
      nav4: "ผู้ช่วย AI",
      brandText:
        "ออกแบบให้เหมือนเว็บท่องเที่ยวจริง — สวย ใช้งานง่าย และน่าสนใจ",
      side1Title: "Travel Assistant",
      side1Desc:
        "อยากเดินทางจากหนองคายไปเวียงจันทน์? เราช่วยเรื่องเอกสาร ด่าน เส้นทาง การเดินทาง และสถานที่เที่ยวได้",
      side2Title: "ยอดนิยมตอนนี้",
      side2a: "ประตูชัย และพระธาตุหลวง",
      side2b: "คาเฟ่ในเวียงจันทน์",
      side2c: "คู่มือผ่านด่าน",
      side2d: "ข้อมูลรถไฟลาวจีน",
      side3Title: "Experience",
      side3Desc:
        "ออกแบบให้ดูเหมือนแพลตฟอร์มท่องเที่ยวจริง — คลีน ทันสมัย และใช้งานสบาย",
      copy: "© 2026 HakTang Journey. All rights reserved.",
    },

    en: {
      badge: "HakTang Journey • Explore Thailand–Laos with ease",
      title1: "Travel smarter",
      title2: "cross borders easier",
      desc:
        "Discover places, check border information, plan routes, and get instant travel guidance in one beautiful, modern, and easy-to-use experience.",
      btn1: "Start Planning",
      btn2: "Explore Places",
      stat1: "10+ recommended places",
      stat2: "Easy map navigation",
      stat3: "Fast AI assistance",
      sectionBadge: "What you can do",
      sectionTitle: "Everything you need for the trip",
      sectionDesc:
        "Plan routes, check border details, discover destinations, and ask AI for help — all in one place.",
      card1Title: "Explore Places",
      card1Desc:
        "Browse landmarks, cafés, temples, markets, and riverside spots across Vientiane and nearby destinations.",
      card2Title: "Border Guide",
      card2Desc:
        "See required documents, crossing steps, and useful guidance before traveling.",
      card3Title: "Transport Info",
      card3Desc:
        "Check vans, shuttle buses, and practical travel options for a smoother journey.",
      card4Title: "Travel AI",
      card4Desc:
        "Ask about routes, places, and travel essentials, and get concise helpful answers.",
      featureBadge: "Featured Journey",
      featureTitle: "From Nong Khai to Vientiane",
      featureDesc:
        "A simple and scenic route for travelers who want border guidance, city highlights, cafés, and smoother cross-border planning.",
      featureBtn: "View Border Info",
      brandBadge: "HakTang Journey",
      brandTitle: "Travel beautifully, not stressfully",
      brandDesc:
        "Built for travelers who want one clean place to discover, plan, and move confidently between Thailand and Laos.",
      brand1: "Border and transport in one place",
      brand2: "Places, cafés, and local spots",
      brand3: "Modern AI help for every trip",
      footerDesc:
        "A modern travel experience for discovering routes, destinations, and local highlights across Thailand and Laos.",
      navTitle: "Navigate",
      nav1: "Home",
      nav2: "Places",
      nav3: "Border Info",
      nav4: "AI Assistant",
      brandText:
        "Designed to feel like a real travel platform — visual, useful, and easy to explore.",
      side1Title: "Travel Assistant",
      side1Desc:
        "Need help crossing from Nong Khai to Vientiane? We can guide you on documents, border routes, transport, and must-visit places.",
      side2Title: "Popular now",
      side2a: "Patuxai & Pha That Luang",
      side2b: "Cafés in Vientiane",
      side2c: "Border crossing guide",
      side2d: "Laos–China train info",
      side3Title: "Experience",
      side3Desc:
        "Designed to feel like a real travel platform — clean, modern, and easy to use.",
      copy: "© 2026 HakTang Journey. All rights reserved.",
    },

    lo: {
      badge: "HakTang Journey • ເດີນທາງ ໄທ–ລາວ ໄດ້ງ່າຍຂຶ້ນ",
      title1: "ເດີນທາງໃຫ້ສະຫຼາດຂຶ້ນ",
      title2: "ຂ້າມແດນໄດ້ງ່າຍຂຶ້ນ",
      desc:
        "ຄົ້ນຫາສະຖານທີ່ ເບິ່ງຂໍ້ມູນດ່ານ ວາງແຜນເສັ້ນທາງ ແລະ ຮັບຄຳແນະນຳການເດີນທາງໃນປະສົບການດຽວ",
      btn1: "ເລີ່ມວາງແຜນ",
      btn2: "ສຳຫຼວດສະຖານທີ່",
      stat1: "10+ ສະຖານທີ່ແນະນຳ",
      stat2: "ແຜນທີ່ນຳທາງງ່າຍ",
      stat3: "AI ຊ່ວຍຕອບໄວ",
      sectionBadge: "ສິ່ງທີ່ທ່ານເຮັດໄດ້",
      sectionTitle: "ທຸກຢ່າງທີ່ຕ້ອງໃຊ້ສຳລັບທຣິບ",
      sectionDesc:
        "ວາງແຜນເສັ້ນທາງ ເບິ່ງຂໍ້ມູນດ່ານ ສຳຫຼວດຈຸດໝາຍ ແລະ ຖາມ AI ໄດ້ໃນເວັບດຽວ",
      card1Title: "ສຳຫຼວດສະຖານທີ່",
      card1Desc:
        "ເບິ່ງແລນດ໌ມາກ ຄາເຟ່ ວັດ ຕະຫຼາດ ແລະ ຈຸດນ່າແວະໃນວຽງຈັນ",
      card2Title: "ຄູ່ມືຜ່ານດ່ານ",
      card2Desc:
        "ເບິ່ງເອກະສານທີ່ຕ້ອງໃຊ້ ຂັ້ນຕອນການຂ້າມແດນ ແລະ ຄຳແນະນຳ",
      card3Title: "ຂໍ້ມູນການເດີນທາງ",
      card3Desc:
        "ເບິ່ງລົດຕູ້ Shuttle Bus ແລະ ທາງເລືອກການເດີນທາງ",
      card4Title: "Travel AI",
      card4Desc:
        "ຖາມເລື່ອງເສັ້ນທາງ ສະຖານທີ່ ແລະ ຂໍ້ມູນສຳຄັນໃນການເດີນທາງ",
      featureBadge: "ເສັ້ນທາງແນະນຳ",
      featureTitle: "ຈາກໜອງຄາຍສູ່ວຽງຈັນ",
      featureDesc:
        "ເສັ້ນທາງຍອດນິຍົມສຳລັບຄົນທີ່ຕ້ອງການຂໍ້ມູນດ່ານ ຈຸດທ່ຽວ ຄາເຟ່ ແລະ ການຂ້າມແດນ",
      featureBtn: "ເບິ່ງຂໍ້ມູນດ່ານ",
      brandBadge: "HakTang Journey",
      brandTitle: "ເດີນທາງໃຫ້ສວຍງາມ ບໍ່ແມ່ນເຄັ່ງຄຽດ",
      brandDesc:
        "ສ້າງສຳລັບນັກເດີນທາງທີ່ຕ້ອງການເວັບດຽວໃນການຄົ້ນຫາ ວາງແຜນ ແລະ ເດີນທາງລະຫວ່າງໄທ ແລະ ລາວ",
      brand1: "ຂໍ້ມູນດ່ານ ແລະ ການເດີນທາງໃນທີ່ດຽວ",
      brand2: "ສະຖານທີ່ທ່ຽວ ຄາເຟ່ ແລະ ຈຸດນ່າແວະ",
      brand3: "AI ສະໄໝໃໝ່ສຳລັບທຸກການເດີນທາງ",
      footerDesc:
        "ປະສົບການການເດີນທາງແບບໃໝ່ສຳລັບການຄົ້ນຫາເສັ້ນທາງ ຈຸດໝາຍ ແລະ ຈຸດເດັ່ນລະຫວ່າງໄທ ແລະ ລາວ",
      navTitle: "ນຳທາງ",
      nav1: "ໜ້າຫຼັກ",
      nav2: "ສະຖານທີ່",
      nav3: "ຂໍ້ມູນດ່ານ",
      nav4: "AI Assistant",
      brandText:
        "ອອກແບບໃຫ້ຄ້າຍເວັບທ່ອງທ່ຽວຈິງ — ສວຍ ໃຊ້ງານງ່າຍ ແລະ ນ່າສົນໃຈ",
      side1Title: "Travel Assistant",
      side1Desc:
        "ຢາກເດີນທາງຈາກໜອງຄາຍໄປວຽງຈັນບໍ? ພວກເຮົາຊ່ວຍເລື່ອງເອກະສານ ດ່ານ ເສັ້ນທາງ ແລະ ສະຖານທີ່ທ່ຽວໄດ້",
      side2Title: "ຍອດນິຍົມຕອນນີ້",
      side2a: "Patuxai & Pha That Luang",
      side2b: "ຄາເຟ່ໃນວຽງຈັນ",
      side2c: "ຄູ່ມືຂ້າມດ່ານ",
      side2d: "ຂໍ້ມູນລົດໄຟລາວ–ຈີນ",
      side3Title: "Experience",
      side3Desc:
        "ອອກແບບໃຫ້ຄ້າຍແພລດຟອມທ່ອງທ່ຽວຈິງ — ຄລີນ ທັນສະໄໝ ແລະ ໃຊ້ສະດວກ",
      copy: "© 2026 HakTang Journey. All rights reserved.",
    },

    zh: {
      badge: "HakTang Journey • 更轻松探索泰国与老挝",
      title1: "更聪明地旅行",
      title2: "更轻松地跨境",
      desc:
        "探索景点、查看口岸信息、规划路线，并在一个现代且易用的平台中获得即时旅行帮助。",
      btn1: "开始规划",
      btn2: "探索景点",
      stat1: "10+ 推荐地点",
      stat2: "便捷地图导航",
      stat3: "快速 AI 帮助",
      sectionBadge: "你可以做什么",
      sectionTitle: "这趟旅程所需的一切",
      sectionDesc:
        "规划路线、查看口岸信息、探索目的地，并在同一个网站中向 AI 提问。",
      card1Title: "探索景点",
      card1Desc:
        "浏览万象及周边的地标、咖啡馆、寺庙、市场与河畔景点。",
      card2Title: "口岸指南",
      card2Desc:
        "查看所需文件、通关步骤以及出行前的重要提示。",
      card3Title: "交通信息",
      card3Desc:
        "查看面包车、接驳巴士以及更便捷的出行方式。",
      card4Title: "旅行 AI",
      card4Desc:
        "询问路线、景点和旅行重点，获得简洁实用的回答。",
      featureBadge: "推荐路线",
      featureTitle: "从廊开到万象",
      featureDesc:
        "适合需要口岸信息、城市亮点、咖啡馆和跨境旅行规划的热门路线。",
      featureBtn: "查看口岸信息",
      brandBadge: "HakTang Journey",
      brandTitle: "让旅行更美好，而不是更焦虑",
      brandDesc:
        "为想要在一个干净平台中探索、规划并自信往返泰国与老挝的旅行者而设计。",
      brand1: "口岸与交通信息一站式查看",
      brand2: "景点、咖啡馆与本地推荐",
      brand3: "适用于每次旅行的现代 AI 帮助",
      footerDesc:
        "为探索泰国与老挝之间路线、目的地和本地亮点而打造的现代旅行体验。",
      navTitle: "导航",
      nav1: "首页",
      nav2: "景点",
      nav3: "口岸信息",
      nav4: "AI 助手",
      brandText: "设计得像真正的旅行平台——美观、实用且易于探索。",
      side1Title: "Travel Assistant",
      side1Desc:
        "想从廊开去万象吗？我们可以帮助你了解文件、口岸路线、交通和必去景点。",
      side2Title: "热门推荐",
      side2a: "凯旋门与塔銮",
      side2b: "万象咖啡馆",
      side2c: "通关指南",
      side2d: "中老铁路信息",
      side3Title: "Experience",
      side3Desc:
        "设计得像真正的旅行平台——简洁、现代且易于使用。",
      copy: "© 2026 HakTang Journey. All rights reserved.",
    },
  };

  const c = content[language] || content.en;

  return (
    <div className="bg-slate-50">
      <section className="relative overflow-hidden">
        <img
          src="/images/hero-vientiane.jpg"
          alt="HakTang Journey Hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/55"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/50 to-transparent"></div>

        <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-3xl text-white">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
              <img
                src="/images/logo.png"
                alt="HakTang Journey"
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="text-sm font-medium text-white/90">
                {c.badge}
              </span>
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
              {c.title1}
              <br />
              <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                {c.title2}
              </span>
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              {c.desc}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/chatbot"
                className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 shadow-xl transition hover:scale-[1.02]"
              >
                {c.btn1}
              </Link>

              <Link
                to="/places"
                className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                {c.btn2}
              </Link>
            </div>

            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <p className="text-3xl font-bold text-white">10+</p>
                <p className="mt-1 text-sm text-slate-200">{c.stat1}</p>
              </div>
              <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <p className="text-3xl font-bold text-white">Maps</p>
                <p className="mt-1 text-sm text-slate-200">{c.stat2}</p>
              </div>
              <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <p className="text-3xl font-bold text-white">AI</p>
                <p className="mt-1 text-sm text-slate-200">{c.stat3}</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-[32px] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl bg-white p-5 text-slate-800 shadow-lg">
                  <p className="mb-2 text-sm font-semibold text-blue-600">
                    {c.side1Title}
                  </p>
                  <p className="leading-7">{c.side1Desc}</p>
                </div>

                <div className="rounded-3xl border border-white/15 bg-white/10 p-5 text-white">
                  <p className="mb-2 text-sm font-semibold text-cyan-200">
                    {c.side2Title}
                  </p>
                  <ul className="space-y-3 text-sm text-slate-100">
                    <li>• {c.side2a}</li>
                    <li>• {c.side2b}</li>
                    <li>• {c.side2c}</li>
                    <li>• {c.side2d}</li>
                  </ul>
                </div>

                <div className="rounded-3xl border border-white/15 bg-white/10 p-5 text-white">
                  <p className="mb-2 text-sm font-semibold text-cyan-200">
                    {c.side3Title}
                  </p>
                  <p className="text-sm leading-7 text-slate-100">
                    {c.side3Desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
            {c.sectionBadge}
          </p>
          <h2 className="text-4xl font-bold text-slate-900">
            {c.sectionTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            {c.sectionDesc}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
              📍
            </div>
            <h3 className="mb-3 text-xl font-bold text-slate-900">
              {c.card1Title}
            </h3>
            <p className="leading-7 text-slate-600">{c.card1Desc}</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-2xl">
              🛂
            </div>
            <h3 className="mb-3 text-xl font-bold text-slate-900">
              {c.card2Title}
            </h3>
            <p className="leading-7 text-slate-600">{c.card2Desc}</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-2xl">
              🚆
            </div>
            <h3 className="mb-3 text-xl font-bold text-slate-900">
              {c.card3Title}
            </h3>
            <p className="leading-7 text-slate-600">{c.card3Desc}</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
              🤖
            </div>
            <h3 className="mb-3 text-xl font-bold text-slate-900">
              {c.card4Title}
            </h3>
            <p className="leading-7 text-slate-600">{c.card4Desc}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
            <img
              src="/images/hero-vientiane.jpg"
              alt="HakTang Journey"
              className="h-72 w-full object-cover"
            />
            <div className="p-8">
              <p className="mb-2 text-sm font-semibold text-blue-600">
                {c.featureBadge}
              </p>
              <h3 className="mb-4 text-3xl font-bold text-slate-900">
                {c.featureTitle}
              </h3>
              <p className="mb-6 leading-8 text-slate-600">{c.featureDesc}</p>
              <Link
                to="/border"
                className="inline-block rounded-2xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
              >
                {c.featureBtn}
              </Link>
            </div>
          </div>

          <div className="rounded-[32px] bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 p-8 text-white shadow-sm">
            <p className="mb-2 text-sm font-semibold text-cyan-300">
              {c.brandBadge}
            </p>
            <h3 className="mb-4 text-3xl font-bold">{c.brandTitle}</h3>
            <p className="mb-8 max-w-xl leading-8 text-slate-200">
              {c.brandDesc}
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <p className="font-semibold">{c.brand1}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <p className="font-semibold">{c.brand2}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <p className="font-semibold">{c.brand3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="HakTang Journey"
                className="h-11 w-11 rounded-2xl object-cover"
              />
              <div>
                <p className="font-bold text-slate-900">HakTang Journey</p>
                <p className="text-sm text-slate-500">ฮักทาง Journey</p>
              </div>
            </div>

            <p className="max-w-sm leading-7 text-slate-600">{c.footerDesc}</p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-slate-900">{c.navTitle}</h4>
            <ul className="space-y-3 text-slate-600">
              <li>
                <Link to="/" className="hover:text-blue-600">
                  {c.nav1}
                </Link>
              </li>
              <li>
                <Link to="/places" className="hover:text-blue-600">
                  {c.nav2}
                </Link>
              </li>
              <li>
                <Link to="/border" className="hover:text-blue-600">
                  {c.nav3}
                </Link>
              </li>
              <li>
                <Link to="/chatbot" className="hover:text-blue-600">
                  {c.nav4}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-slate-900">Brand</h4>
            <p className="leading-7 text-slate-600">{c.brandText}</p>
          </div>
        </div>

        <div className="border-t border-slate-200 py-4 text-center text-sm text-slate-500">
          {c.copy}
        </div>
      </footer>
    </div>
  );
}