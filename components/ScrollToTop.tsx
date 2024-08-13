"use client";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      className={`fixed w-8 h-10 lg:w-10 lg:h-12 xl:w-14 xl:h-14 flex items-center justify-center bottom-0 left-0 rounded-tr-lg bg-amber-950 transition-opacity ease-out duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-label="Scroll to top button"
    >
      <ArrowUp className="w-4 h-4 lg:w-6 lg:h-6 xl:w-8 xl:h-8 text-slate-200" />
    </button>
  );
}
