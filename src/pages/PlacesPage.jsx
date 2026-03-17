import { Link } from "react-router-dom";
import places from "../data/places";
import PlacesMap from "../components/PlacesMap";
import ReviewBox from "../components/ReviewBox";

export default function PlacesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative h-[380px] overflow-hidden">
        <img
          src="/images/patuxai.jpg"
          alt="Patuxai"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative max-w-6xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <p className="text-sm font-semibold mb-3 text-blue-200">
              Explore Vientiane
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              สถานที่เที่ยวและคาเฟ่แนะนำ
            </h1>
            <p className="text-lg text-slate-100 leading-8">
              รวมแลนด์มาร์ก วัด ตลาด คาเฟ่ และจุดน่าแวะในเวียงจันทน์
              พร้อมแผนที่และรีวิวจากผู้ใช้
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="mb-10">
          <p className="text-sm text-blue-600 font-semibold mb-2">
            Explore Places
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            สถานที่แนะนำในเวียงจันทน์
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl">
            กดดูรายละเอียดแต่ละสถานที่ หรือเปิด Google Maps เพื่อนำทางได้ทันที
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {places.map((place) => (
            <div
              key={place.id}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white/80 backdrop-blur shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={place.images?.[0]}
                  alt={place.name}
                  className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    {place.category}
                  </span>
                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                    ⭐ {place.rating}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {place.name}
                </h3>

                <p className="text-sm text-slate-500 mb-3">{place.location}</p>

                <p className="text-slate-600 leading-7 mb-4">
                  {place.shortDescription}
                </p>

                <p className="text-sm text-slate-500 mb-5">
                  เวลาเปิด: {place.hours}
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to={`/places/${place.id}`}
                    className="inline-block rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 transition"
                  >
                    ดูรายละเอียด
                  </Link>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${place.lat},${place.lng}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block rounded-xl border border-blue-600 px-5 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition"
                  >
                    นำทาง
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-14">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            แผนที่สถานที่
          </h2>
          <p className="text-slate-600">
            กดที่หมุดเพื่อดูชื่อสถานที่และเปิด Google Maps
          </p>
        </div>

        <PlacesMap />
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Gallery รูปสถานที่
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {places.map((place) => (
              <div
                key={place.id}
                className="overflow-hidden rounded-2xl border border-slate-200"
              >
                <img
                  src={place.images?.[0]}
                  alt={place.name}
                  className="h-52 w-full object-cover hover:scale-105 transition duration-300"
                />
                <div className="p-3 bg-white">
                  <p className="font-semibold text-slate-800">{place.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <ReviewBox placeId="places-page" />
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Thailand–Laos Travel Assistant
            </h3>
            <p className="text-slate-600 leading-7">
              ระบบต้นแบบสำหรับช่วยวางแผนการเดินทางไทย–ลาว
              พร้อมข้อมูลสถานที่ แผนที่ และแชตบอต
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Explore</h4>
            <ul className="space-y-2 text-slate-600">
              <li>Places</li>
              <li>Border Information</li>
              <li>Transport</li>
              <li>AI Chatbot</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Project</h4>
            <p className="text-slate-600 leading-7">
              Seminar Project
              <br />
              Computer Science and Information
              <br />
              Khon Kaen University Nong Khai Campus
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}