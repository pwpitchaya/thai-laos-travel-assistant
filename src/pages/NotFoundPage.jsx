import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-slate-800 mb-3">
          ไม่พบหน้าที่ต้องการ
        </h2>
        <p className="text-slate-600 mb-6">
          หน้าที่คุณเปิดอาจถูกย้ายหรือลิงก์ไม่ถูกต้อง
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          กลับหน้าหลัก
        </Link>
      </div>
    </div>
  );
}