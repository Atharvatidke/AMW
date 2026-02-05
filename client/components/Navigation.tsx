import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/products", label: "Products" },
    { to: "/clientele", label: "Clientele" },
    { to: "/contact", label: "Contact Us" },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const getLinkClass = (link: { to: string; label: string }) => {
    if (link.label === "Contact Us") {
      return "text-[#d62829] font-bold hover:text-[#b02020]";
    }
    if (isActive(link.to)) {
      return "text-[#545454] font-extrabold";
    }
    return "text-[#545454] hover:text-[#333]";
  };

  const getMobileLinkClass = (link: { to: string; label: string }) => {
    if (link.label === "Contact Us") {
      return "text-[#d62829] font-bold";
    }
    if (isActive(link.to)) {
      return "text-[#545454] font-extrabold bg-gray-50";
    }
    return "text-[#545454] hover:text-[#333] hover:bg-gray-50";
  };

  return (
    <nav className={`fixed top-4 md:top-6 lg:top-10 left-1/2 -translate-x-1/2 z-[9999] w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] max-w-[1200px] transition-all duration-300 ${isScrolled ? "top-2 md:top-4" : ""}`}>
      <div className={`flex items-center justify-between px-4 md:px-6 lg:px-8 py-2 md:py-2.5 bg-white/95 backdrop-blur-md rounded-full shadow-lg transition-all duration-300 ${isScrolled ? "shadow-xl" : ""}`}>
        {/* Logo */}
        <Link to="/" className="shrink-0 flex items-center">
          <img src="/logo.svg" alt="AMW Resources" className="h-10 md:h-12 lg:h-14 w-auto" />
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-9 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-bold text-lg xl:text-[22px] transition-colors whitespace-nowrap ${getLinkClass(link)}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-full hover:bg-gray-100 transition-colors shrink-0"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-[#545454]" />
          ) : (
            <>
              <span className="w-6 h-0.5 bg-[#545454] rounded-full"></span>
              <span className="w-6 h-0.5 bg-[#545454] rounded-full"></span>
              <span className="w-6 h-0.5 bg-[#545454] rounded-full"></span>
            </>
          )}
        </button>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`mt-2 bg-white/95 backdrop-blur-md rounded-3xl shadow-xl transition-all duration-300 border border-white/50 ${
          isMenuOpen ? "max-h-[400px] opacity-100 py-3" : "max-h-0 opacity-0 py-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsMenuOpen(false)}
              className={`px-6 py-3.5 font-bold text-base sm:text-lg transition-colors ${getMobileLinkClass(link)}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Menu backdrop */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 -z-10" 
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
}
