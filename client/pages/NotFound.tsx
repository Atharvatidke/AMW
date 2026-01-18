import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="flex items-center justify-center min-h-screen px-6">
        <div className="text-center">
          <h1 className="text-[120px] md:text-[180px] font-bold text-[#313131] leading-none">404</h1>
          <p className="text-2xl md:text-[27px] text-[#5A5A5A] mb-8">Oops! Page not found</p>
          <Link 
            to="/" 
            className="inline-block px-12 py-4 rounded-[40px] border border-black bg-amw-green shadow-[4px_4px_4px_rgba(0,0,0,0.25)] text-[#212121] text-xl md:text-[24px] font-medium hover:bg-amw-green-button transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
