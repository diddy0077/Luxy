import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import { ToastProvider } from "./components/CustomToast";
import ScrollToTop from "./components/ScrollToTop";
import JoinWaitlist from "./pages/JoinWaitlist";
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ToastProvider>
      <div className='' style={{
      background: '#080C16',
      backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,.02), rgba(255,255,255,.02) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, rgba(255,255,255,.02), rgba(255,255,255,.02) 1px, transparent 1px, transparent 60px), linear-gradient(145deg, rgb(18, 26, 43), rgb(12, 17, 29))'
    }}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/join-waitlist' element={<JoinWaitlist />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        {showScrollTop && <ScrollToTop />}
        <Footer />
      </div>
    </ToastProvider>
  );
};

export default App;
