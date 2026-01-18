import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/products", label: "Products" },
    { to: "/clientele", label: "Clientele" },
    { to: "/contact", label: "Contact Us" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-10 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1056px] px-4">
      <div className="flex items-center justify-between gap-8 px-5 py-3.5 bg-white rounded-[33px] shadow-lg">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-9 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-bold text-[22px] transition-colors ${
                isActive(link.to)
                  ? "text-[#79F965]"
                  : "text-[#545454] hover:text-[#79F965]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Logo/Brand */}
        <Link to="/" className="lg:hidden text-[#545454] font-bold text-[22px]">
          AMW
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col justify-center items-center gap-1.5 w-10 h-10 lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-[#545454]" />
          ) : (
            <>
              <div className="h-[3px] w-6 rounded-full bg-[#545454]"></div>
              <div className="h-[3px] w-6 rounded-full bg-[#6A6A6A]"></div>
              <div className="h-[3px] w-6 rounded-full bg-[#545454]"></div>
            </>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-2 bg-white rounded-[20px] shadow-lg overflow-hidden">
          <div className="flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={`px-6 py-3 font-bold text-[18px] transition-colors ${
                  isActive(link.to)
                    ? "text-[#79F965] bg-gray-50"
                    : "text-[#545454] hover:text-[#79F965] hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
