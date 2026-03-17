import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function BorderPage() {
  const { language } = useLanguage();

  const content = {
    th: {
      badge: "Border Crossing Guide",
      title1: "ข้อมูลการข้ามแดน",
      title2: "ไทย → ลาว แบบเข้าใจง่าย",
      desc:
        "รวมทุกขั้นตอน เอกสาร และคำแนะนำสำหรับการข้ามแดนจากหนองคายไปเวียงจันทน์ แบบไม่งงและพร้อมใช้งานจริง",

      stepsTitle: "ขั้นตอนการข้ามแดน",
      steps: [
        "เตรียมพาสปอร์ต (Passport)",
        "กรอกเอกสาร ตม.",
        "ผ่านด่านตรวจฝั่งไทย",
        "ขึ้น Shuttle Bus ข้ามสะพาน",
        "ผ่านด่านตรวจฝั่งลาว",
        "เข้าสู่เวียงจันทน์",
      ],

      docsTitle: "เอกสารที่ต้องใช้",
      docs: [
        "พาสปอร์ต (Passport) อายุเหลือมากกว่า 6 เดือน",
        "บัตรประชาชน (สำรอง)",
        "แบบฟอร์ม ตม. (บางกรณี)",
        "เงินสด (บาท / กีบ)",
      ],

      warningTitle: "ข้อควรระวัง",
      warnings: [
        "ห้ามลืมพาสปอร์ต",
        "ตรวจวันหมดอายุ",
        "ควรเผื่อเวลา 1–2 ชั่วโมง",
      ],

      infoTitle: "ข้อมูลด่าน",
      borderLabel: "ด่าน",
      borderValue: "สะพานมิตรภาพไทย–ลาว",
      hourLabel: "เวลาเปิด",
      hourValue: "06:00 – 22:00",
      feeLabel: "ค่าข้ามสะพาน",
      feeValue: "20–30 บาท",

      tipTitle: "Travel Tip",
      tipDesc:
        "ไปช่วงเช้าจะเร็วที่สุด และคนไม่เยอะ เหมาะสำหรับคนที่ต้องการเข้าตัวเมืองไว",

      ctaTitle: "พร้อมเดินทางแล้ว?",
      ctaDesc: "ไปเลือกบริการเดินทางต่อเข้าเมืองได้เลย",
      ctaBtn: "ไปหน้า Booking",
    },

    en: {
      badge: "Border Crossing Guide",
      title1: "Border Crossing",
      title2: "Thailand → Laos Made Simple",
      desc:
        "All the steps, required documents, and key guidance for crossing from Nong Khai to Vientiane in one easy place.",

      stepsTitle: "Crossing Steps",
      steps: [
        "Prepare your passport",
        "Fill in immigration forms",
        "Pass Thai immigration",
        "Take the shuttle bus across the bridge",
        "Pass Lao immigration",
        "Enter Vientiane",
      ],

      docsTitle: "Required Documents",
      docs: [
        "Passport with more than 6 months validity",
        "National ID card (backup)",
        "Immigration form (if required)",
        "Cash (THB / LAK)",
      ],

      warningTitle: "Important Notes",
      warnings: [
        "Do not forget your passport",
        "Check the expiration date",
        "Allow 1–2 hours extra time",
      ],

      infoTitle: "Border Info",
      borderLabel: "Checkpoint",
      borderValue: "Thai–Lao Friendship Bridge",
      hourLabel: "Opening Hours",
      hourValue: "06:00 – 22:00",
      feeLabel: "Bridge Fee",
      feeValue: "20–30 THB",

      tipTitle: "Travel Tip",
      tipDesc:
        "Morning travel is usually faster and less crowded, especially if you want to get into the city quickly.",

      ctaTitle: "Ready to travel?",
      ctaDesc: "Choose your transport option for the city next.",
      ctaBtn: "Go to Booking",
    },

    lo: {
      badge: "Border Crossing Guide",
      title1: "ຂໍ້ມູນການຂ້າມແດນ",
      title2: "ໄທ → ລາວ ແບບເຂົ້າໃຈງ່າຍ",
      desc:
        "ລວມຂັ້ນຕອນ ເອກະສານ ແລະ ຄຳແນະນຳສຳລັບການຂ້າມແດນຈາກໜອງຄາຍໄປວຽງຈັນ",

      stepsTitle: "ຂັ້ນຕອນການຂ້າມແດນ",
      steps: [
        "ກຽມ Passport",
        "ກອກເອກະສານ ຕມ.",
        "ຜ່ານດ່ານຝັ່ງໄທ",
        "ຂຶ້ນ Shuttle Bus ຂ້າມສະພານ",
        "ຜ່ານດ່ານຝັ່ງລາວ",
        "ເຂົ້າສູ່ວຽງຈັນ",
      ],

      docsTitle: "ເອກະສານທີ່ຕ້ອງໃຊ້",
      docs: [
        "Passport ອາຍຸເຫຼືອຫຼາຍກວ່າ 6 ເດືອນ",
        "ບັດປະຈຳຕົວ (ສຳຮອງ)",
        "ແບບຟອມ ຕມ. (ບາງກໍລະນີ)",
        "ເງິນສົດ (ບາດ / ກີບ)",
      ],

      warningTitle: "ຂໍ້ຄວນລະວັງ",
      warnings: [
        "ຫ້າມລືມ Passport",
        "ກວດວັນໝົດອາຍຸ",
        "ຄວນເຜື່ອເວລາ 1–2 ຊົ່ວໂມງ",
      ],

      infoTitle: "ຂໍ້ມູນດ່ານ",
      borderLabel: "ດ່ານ",
      borderValue: "ສະພານມິດຕະພາບ ໄທ–ລາວ",
      hourLabel: "ເວລາເປີດ",
      hourValue: "06:00 – 22:00",
      feeLabel: "ຄ່າຂ້າມສະພານ",
      feeValue: "20–30 ບາດ",

      tipTitle: "Travel Tip",
      tipDesc:
        "ໄປຊ່ວງເຊົ້າຈະໄວທີ່ສຸດ ແລະ ຄົນບໍ່ຫຼາຍ ເໝາະສຳລັບຄົນທີ່ຢາກເຂົ້າເມືອງໄວ",

      ctaTitle: "ພ້ອມເດີນທາງແລ້ວບໍ?",
      ctaDesc: "ໄປເລືອກບໍລິການເດີນທາງຕໍ່ເຂົ້າເມືອງໄດ້ເລີຍ",
      ctaBtn: "ໄປໜ້າ Booking",
    },

    zh: {
      badge: "Border Crossing Guide",
      title1: "过境信息",
      title2: "泰国 → 老挝 一看就懂",
      desc:
        "整合从廊开到万象的通关步骤、所需文件和重要建议，方便直接使用。",

      stepsTitle: "过境步骤",
      steps: [
        "准备护照",
        "填写移民表格",
        "通过泰国边检",
        "乘坐 Shuttle Bus 过桥",
        "通过老挝边检",
        "进入万象",
      ],

      docsTitle: "所需文件",
      docs: [
        "有效期超过 6 个月的护照",
        "身份证（备用）",
        "移民表格（部分情况）",
        "现金（泰铢 / 基普）",
      ],

      warningTitle: "注意事项",
      warnings: [
        "不要忘记护照",
        "检查有效期",
        "建议预留 1–2 小时",
      ],

      infoTitle: "口岸信息",
      borderLabel: "口岸",
      borderValue: "泰老友谊大桥",
      hourLabel: "开放时间",
      hourValue: "06:00 – 22:00",
      feeLabel: "过桥费用",
      feeValue: "20–30 泰铢",

      tipTitle: "Travel Tip",
      tipDesc:
        "早上出发通常更快，人也更少，适合想尽快进城的旅客。",

      ctaTitle: "准备好出发了吗？",
      ctaDesc: "接下来可以选择进入市区的交通服务。",
      ctaBtn: "前往 Booking",
    },
  };

  const c = content[language] || content.en;

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden">
        <img
          src="/images/hero-vientiane.jpg"
          alt="Border Crossing"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 text-white">
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-md mb-5">
            {c.badge}
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-5">
            {c.title1}
            <br />
            <span className="bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
              {c.title2}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-200 max-w-2xl leading-8">
            {c.desc}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
        <div className="space-y-6">
          <div className="bg-white rounded-[30px] border border-slate-200 p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              {c.stepsTitle}
            </h2>

            <div className="space-y-5">
              {c.steps.map((step, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                    {i + 1}
                  </div>
                  <p className="text-slate-700 leading-7">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[30px] border border-slate-200 p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              {c.docsTitle}
            </h2>

            <ul className="space-y-3 text-slate-700">
              {c.docs.map((doc, i) => (
                <li key={i}>• {doc}</li>
              ))}
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-[30px] p-6">
            <h3 className="text-lg font-bold text-yellow-800 mb-3">
              ⚠️ {c.warningTitle}
            </h3>
            <ul className="text-yellow-700 space-y-2">
              {c.warnings.map((warning, i) => (
                <li key={i}>• {warning}</li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-white rounded-[30px] border border-slate-200 p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              {c.infoTitle}
            </h2>

            <div className="space-y-4 text-slate-700">
              <div>
                <p className="text-sm text-slate-500">{c.borderLabel}</p>
                <p className="font-semibold">{c.borderValue}</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">{c.hourLabel}</p>
                <p className="font-semibold">{c.hourValue}</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">{c.feeLabel}</p>
                <p className="font-semibold">{c.feeValue}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-[30px] p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-3">💡 {c.tipTitle}</h2>
            <p className="leading-7 text-blue-50">{c.tipDesc}</p>
          </div>

          <div className="bg-slate-900 text-white rounded-[30px] p-6">
            <h2 className="text-xl font-bold mb-3">{c.ctaTitle}</h2>

            <p className="text-slate-300 mb-4">{c.ctaDesc}</p>

            <Link
              to="/booking"
              className="block text-center bg-white text-slate-900 py-3 rounded-xl font-semibold hover:bg-slate-200 transition"
            >
              {c.ctaBtn}
            </Link>
          </div>
        </aside>
      </section>
    </div>
  );
}