import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import { translations } from "../i18n/translations";
import { useEffect, useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { to: "/", label: t.navHome },
    { to: "/border", label: t.navBorder },
    { to: "/chatbot", label: t.navChatbot },
    { to: "/places", label: t.navPlaces },
    { to: "/booking", label: t.navBooking },
  ];

  const isActive = (path) =>
    location.pathname === path ||
    (path !== "/" && location.pathname.startsWith(path));

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 md:px-5">
      <div
        className={`mx-auto max-w-7xl transition-all duration-300 ${
          scrolled ? "max-w-6xl" : "max-w-7xl"
        }`}
      >
        <div
          className={`relative flex items-center justify-between rounded-2xl border border-white/50 bg-white/75 backdrop-blur-xl transition-all duration-300 ${
            scrolled
              ? "h-14 px-4 shadow-[0_10px_30px_rgba(15,23,42,0.10)]"
              : "h-16 px-5 shadow-[0_10px_40px_rgba(15,23,42,0.08)]"
          }`}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-50/70 via-white/80 to-cyan-50/70 pointer-events-none" />

          <Link to="/" className="relative flex items-center gap-3 min-w-0">
            <img
              src="/images/logo.png"
              alt="HakTang Journey"
              className={`rounded-xl object-cover transition-all duration-300 ${
                scrolled ? "h-9 w-9" : "h-10 w-10"
              }`}
            />
            <div className="min-w-0">
              <h1
                className={`truncate bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 bg-clip-text font-bold text-transparent transition-all duration-300 ${
                  scrolled ? "text-base" : "text-lg"
                }`}
              >
                HakTang Journey
              </h1>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              const active = isActive(item.to);

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`group relative py-2 text-sm font-medium transition-all duration-300 ${
                    active
                      ? "text-slate-900"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>

                  <span className="absolute inset-x-[-10px] inset-y-0 rounded-full bg-gradient-to-r from-sky-100/0 via-cyan-100/80 to-sky-100/0 opacity-0 blur-md transition duration-300 group-hover:opacity-100" />

                  <span
                    className={`absolute left-0 -bottom-[8px] h-[2.5px] rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <div className="rounded-xl border border-slate-200/80 bg-white/80 px-2 py-1.5 shadow-sm">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent px-2 text-sm text-slate-700 outline-none"
              >
                <option value="th">ไทย</option>
                <option value="en">EN</option>
                <option value="lo">ລາວ</option>
                <option value="zh">中文</option>
              </select>
            </div>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative text-xl lg:hidden"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="mt-2 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-lg backdrop-blur-xl lg:hidden">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-xl px-4 py-2 text-sm transition ${
                    isActive(item.to)
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <select
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value);
                setMenuOpen(false);
              }}
              className="mt-3 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
            >
              <option value="th">ไทย</option>
              <option value="en">EN</option>
              <option value="lo">ລາວ</option>
              <option value="zh">中文</option>
            </select>
          </div>
        )}
      </div>
    </header>
  );
}