export default function BookingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-sky-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(250,204,21,0.14),transparent_25%)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-14">
          <div className="max-w-3xl text-white">
            <p className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md mb-5">
              Transport Services
            </p>

            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-5">
              บริการการเดินทาง
              <br />
              <span className="bg-gradient-to-r from-sky-300 via-white to-yellow-300 bg-clip-text text-transparent">
                ไทย–ลาว แบบสะดวกขึ้น
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-200 leading-8">
              ค้นหาตัวเลือกการเดินทางจากด่านชายแดนเข้าสู่ตัวเมือง
              พร้อมเปรียบเทียบรูปแบบบริการ ราคาโดยประมาณ
              และข้อมูลสำคัญก่อนเดินทาง
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
          <div className="space-y-6">
            <div className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <p className="text-sm font-semibold text-blue-600 mb-2">
                    Route Planner
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                    เส้นทางที่เลือก
                  </h2>
                </div>

                <div className="hidden md:flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                  พร้อมวางแผนการเดินทาง
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-600 mb-2">
                    จุดเริ่มต้น
                  </label>
                  <input
                    type="text"
                    value="ด่านหนองคาย"
                    readOnly
                    className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3.5 text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-600 mb-2">
                    จุดหมายปลายทาง
                  </label>
                  <input
                    type="text"
                    value="เวียงจันทน์"
                    readOnly
                    className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3.5 text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-600 mb-2">
                    วันที่เดินทาง
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3.5 text-slate-800 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-600 mb-2">
                    จำนวนผู้โดยสาร
                  </label>
                  <select className="w-full rounded-2xl border border-slate-300 px-4 py-3.5 text-slate-800 outline-none focus:border-blue-500">
                    <option>1 คน</option>
                    <option>2 คน</option>
                    <option>3 คน</option>
                    <option>4 คน</option>
                    <option>5 คนขึ้นไป</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div className="max-w-2xl">
                    <div className="mb-3 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                      Recommended
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      รถตู้ส่วนตัว
                    </h3>

                    <p className="text-slate-600 leading-8">
                      เหมาะสำหรับเดินทางเป็นกลุ่ม มีพื้นที่เก็บสัมภาระ
                      และสะดวกในการเดินทางต่อเข้าตัวเมือง
                      หรือแวะจุดท่องเที่ยวระหว่างทางได้ยืดหยุ่นมากขึ้น
                    </p>
                  </div>

                  <div className="md:text-right">
                    <p className="text-sm text-slate-500 mb-1">ราคาโดยประมาณ</p>
                    <p className="text-3xl font-black text-blue-600">
                      500 – 800 บาท
                    </p>
                    <button className="mt-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:scale-[1.02]">
                      จองเลย
                    </button>
                  </div>
                </div>
              </div>

              <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div className="max-w-2xl">
                    <div className="mb-3 inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                      Comfort Option
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      รถพร้อมคนขับ
                    </h3>

                    <p className="text-slate-600 leading-8">
                      เหมาะสำหรับนักท่องเที่ยวที่ต้องการความสะดวก
                      สามารถเดินทางต่อไปยังแหล่งท่องเที่ยวหลักได้ทันที
                      พร้อมความยืดหยุ่นเรื่องเวลาและเส้นทาง
                    </p>
                  </div>

                  <div className="md:text-right">
                    <p className="text-sm text-slate-500 mb-1">ราคาโดยประมาณ</p>
                    <p className="text-3xl font-black text-blue-600">
                      1000 – 1500 บาท
                    </p>
                    <button className="mt-4 rounded-2xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800">
                      จองเลย
                    </button>
                  </div>
                </div>
              </div>

              <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div className="max-w-2xl">
                    <div className="mb-3 inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                      Budget Choice
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      Shuttle Bus
                    </h3>

                    <p className="text-slate-600 leading-8">
                      ตัวเลือกประหยัดสำหรับข้ามแดน
                      เหมาะสำหรับนักเดินทางทั่วไปที่ต้องการลดค่าใช้จ่าย
                      และเดินทางตามขั้นตอนมาตรฐานของด่าน
                    </p>
                  </div>

                  <div className="md:text-right">
                    <p className="text-sm text-slate-500 mb-1">ราคาโดยประมาณ</p>
                    <p className="text-3xl font-black text-blue-600">
                      20 – 30 บาท
                    </p>
                    <button className="mt-4 rounded-2xl border border-slate-300 bg-slate-50 px-6 py-3 font-semibold text-slate-800 transition hover:bg-slate-100">
                      ดูรายละเอียด
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                สรุปการเดินทาง
              </h2>

              <div className="space-y-4">
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                  <p className="text-sm text-slate-500 mb-1">เส้นทาง</p>
                  <p className="font-semibold text-slate-900">
                    ด่านหนองคาย → เวียงจันทน์
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                  <p className="text-sm text-slate-500 mb-1">เหมาะสำหรับ</p>
                  <p className="font-semibold text-slate-900">
                    นักท่องเที่ยว / เดินทางข้ามแดน / เดินทางต่อเข้าเมือง
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                  <p className="text-sm text-slate-500 mb-1">ช่วงราคาที่พบ</p>
                  <p className="font-semibold text-slate-900">
                    20 – 1500 บาท
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                ข้อมูลเพิ่มเติม
              </h2>

              <ul className="space-y-3 text-slate-600 leading-7">
                <li>• บริการทั้งหมดเป็นข้อมูลตัวอย่างสำหรับระบบต้นแบบ</li>
                <li>• ราคาอาจเปลี่ยนแปลงตามวัน เวลา และจำนวนผู้โดยสาร</li>
                <li>• ควรตรวจสอบเอกสารให้ครบก่อนเดินทางทุกครั้ง</li>
                <li>• บางบริการเหมาะกับการเดินทางต่อเข้าเมืองหรือเที่ยวหลายจุด</li>
              </ul>
            </div>

            <div className="rounded-[30px] bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 p-6 text-white shadow-sm">
              <p className="text-sm font-semibold text-blue-100 mb-2">
                Future Expansion
              </p>

              <h2 className="text-2xl font-bold mb-3">
                พร้อมต่อยอดสู่ระบบจองจริง
              </h2>

              <p className="text-blue-50 leading-8">
                หน้านี้แสดงให้เห็นว่าระบบสามารถต่อยอดไปสู่การจองบริการเดินทางจริง
                เชื่อมผู้ให้บริการ ราคาแบบเรียลไทม์ และการยืนยันการจองในอนาคตได้
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}