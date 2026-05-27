"use client";
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <div className="fixed bottom-10 right-10 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-orange-500 animate-bounce cursor-pointer text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition"
          aria-label="Scroll to top"
        >
          <ArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
