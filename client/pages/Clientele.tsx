import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

export default function Clientele() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-[80px] font-extrabold text-[#313131] mb-8">Our Clientele</h1>
          <p className="text-[27px] text-[#5A5A5A] mb-12">
            This page is under construction. Please continue prompting to fill in this page content.
          </p>
          <Link 
            to="/" 
            className="inline-block px-12 py-4 rounded-[40px] border border-black bg-amw-green shadow-[4px_4px_4px_rgba(0,0,0,0.25)] text-[#212121] text-[24px] font-medium hover:bg-amw-green-button transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
