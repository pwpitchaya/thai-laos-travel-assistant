import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage.jsx";
import BorderPage from "./pages/BorderPage.jsx";
import ChatbotPage from "./pages/ChatbotPage.jsx";
import PlacesPage from "./pages/PlacesPage.jsx";
import PlaceDetailPage from "./pages/PlaceDetailPage.jsx";
import BookingPage from "./pages/BookingPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function AppLayout() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/border" element={<BorderPage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/places" element={<PlacesPage />} />
          <Route path="/places/:id" element={<PlaceDetailPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}