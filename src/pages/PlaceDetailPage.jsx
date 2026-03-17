import { Link, useParams } from "react-router-dom";
import places from "../data/places";
import ReviewBox from "../components/ReviewBox";

export default function PlaceDetailPage() {
  const { id } = useParams();
  const place = places.find((item) => String(item.id) === String(id));

  if (!place) {
    return (
      <div className="min-h-screen bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            ไม่พบสถานที่นี้
          </h1>
          <p className="text-slate-600 mb-6">
            ข้อมูลสถานที่ที่คุณเปิดอาจถูกลบหรือไม่มีอยู่ในระบบ
          </p>
          <Link
            to="/places"
            className="inline-block rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 transition"
          >
            กลับไปหน้าสถานที่
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative h-[380px] overflow-hidden">
        <img
          src={place.images?.[0]}
          alt={place.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative mx-auto flex h-full max-w-6xl items-end px-6 pb-10">
          <div className="max-w-3xl text-white">
            <Link
              to="/places"
              className="mb-4 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur hover:bg-white/25 transition"
            >
              ← กลับไปหน้าสถานที่
            </Link>

            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-blue-500/80 px-3 py-1 text-xs font-semibold">
                {place.category}
              </span>
              <span className="rounded-full bg-yellow-400/90 px-3 py-1 text-xs font-semibold text-slate-900">
                ⭐ {place.rating}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              {place.name}
            </h1>

            <p className="text-lg text-slate-100">{place.location}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                รายละเอียดสถานที่
              </h2>

              <p className="text-slate-600 leading-8 mb-6">
                {place.fullDescription || place.shortDescription}
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200">
                  <p className="text-sm text-slate-500 mb-1">เวลาเปิด</p>
                  <p className="text-lg font-semibold text-slate-900">
                    {place.hours || "ไม่ระบุ"}
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200">
                  <p className="text-sm text-slate-500 mb-1">ประเภท</p>
                  <p className="text-lg font-semibold text-slate-900">
                    {place.category}
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200">
                  <p className="text-sm text-slate-500 mb-1">คะแนนรีวิว</p>
                  <p className="text-lg font-semibold text-slate-900">
                    ⭐ {place.rating}
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200">
                  <p className="text-sm text-slate-500 mb-1">พิกัด</p>
                  <p className="text-lg font-semibold text-slate-900">
                    {place.lat}, {place.lng}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${place.lat},${place.lng}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 transition"
                >
                  เปิดใน Google Maps
                </a>

                <Link
                  to="/places"
                  className="inline-block rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50 transition"
                >
                  ดูสถานที่อื่น
                </Link>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Gallery รูปสถานที่
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                {place.images?.map((image, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-2xl border border-slate-200"
                  >
                    <img
                      src={image}
                      alt={`${place.name} ${index + 1}`}
                      className="h-64 w-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            <ReviewBox placeId={`place-${place.id}`} />
          </div>

          <div>
            <div className="sticky top-24 space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  ข้อมูลสรุป
                </h3>

                <div className="space-y-4">
                  <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                    <p className="text-sm text-slate-500 mb-1">ชื่อสถานที่</p>
                    <p className="font-semibold text-slate-900">{place.name}</p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                    <p className="text-sm text-slate-500 mb-1">ที่ตั้ง</p>
                    <p className="font-semibold text-slate-900">
                      {place.location}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                    <p className="text-sm text-slate-500 mb-1">เหมาะสำหรับ</p>
                    <p className="font-semibold text-slate-900">
                      ท่องเที่ยว / ถ่ายรูป / เดินเล่น
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  นำทางด่วน
                </h3>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${place.lat},${place.lng}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 text-center font-semibold text-white hover:opacity-95 transition"
                >
                  เปิดแผนที่นำทาง
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}