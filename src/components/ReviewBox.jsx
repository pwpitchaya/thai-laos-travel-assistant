import { useEffect, useState } from "react";

export default function ReviewBox({ placeId }) {
  const storageKey = `reviews-${placeId}`;
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setReviews(JSON.parse(saved));
    }
  }, [storageKey]);

  function handleSubmit() {
    if (!name.trim() || !text.trim()) return;

    const newReviews = [
      {
        id: Date.now(),
        name,
        text,
      },
      ...reviews,
    ];

    setReviews(newReviews);
    localStorage.setItem(storageKey, JSON.stringify(newReviews));
    setName("");
    setText("");
  }

  return (
    <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-2xl font-bold text-slate-900 mb-4">รีวิวจากผู้ใช้</h3>

      <div className="grid md:grid-cols-2 gap-3 mb-3">
        <input
          type="text"
          placeholder="ชื่อ"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        />

        <input
          type="text"
          placeholder="เขียนรีวิว..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="mb-6 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 transition"
      >
        ส่งรีวิว
      </button>

      <div className="space-y-3">
        {reviews.length === 0 ? (
          <div className="rounded-2xl bg-slate-50 px-4 py-4 text-slate-500">
            ยังไม่มีรีวิว
          </div>
        ) : (
          reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
            >
              <p className="font-semibold text-slate-800">{review.name}</p>
              <p className="text-slate-600 mt-1">{review.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}