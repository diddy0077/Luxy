import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import { ToastProvider } from "./components/CustomToast";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ToastProvider>
      <div className="relative">
        <HomePage />
        {showScrollTop && <ScrollToTop />}
      </div>
    </ToastProvider>
  );
};

export default App;
