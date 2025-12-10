import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import { ToastProvider } from "./components/CustomToast";
import ScrollToTop from "./components/ScrollToTop";
import JoinWaitlist from "./pages/JoinWaitlist";
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer";

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
      <div className="relative">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/join-waitlist' element={<JoinWaitlist />} />
        </Routes>
        {showScrollTop && <ScrollToTop />}
        <Footer />
      </div>
    </ToastProvider>
  );
};

export default App;
