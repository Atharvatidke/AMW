import { useState, useEffect } from "react";
import { ArrowUpRight, Send, Package, Truck, DollarSign, Warehouse, PackageCheck } from "lucide-react";
import Navigation from "@/components/Navigation";
import ServiceCard from "@/components/ServiceCard";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import GlobalOperationsMap from "@/components/GlobalOperationsMap";

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "https://api.builder.io/api/v1/image/assets/TEMP/d1f016bc25d8ba87ff6c68f658b4e371b22c963e?width=2880",
    "https://api.builder.io/api/v1/image/assets/TEMP/d7b30aa8b50e5e1f243e8fd03b04c1489b8b985c?width=2880",
    "https://api.builder.io/api/v1/image/assets/TEMP/60f2f344a25cafc801fd3bea701a8fbddb88da5f?width=2880",
    "https://api.builder.io/api/v1/image/assets/TEMP/f5240463364f2440e33a3c18bbfaf4159e84f9b3?width=2880",
    "https://api.builder.io/api/v1/image/assets/TEMP/722cef8f40fe4ad16051d541f38bf8ec4f0486c9?width=2880",
    "https://api.builder.io/api/v1/image/assets/TEMP/f01d0248d3c54c1aa320987040ebad1c32b0da1a?width=2880",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      iconName: "Package" as const,
      title: "Procurement",
      description: "Strategic sourcing of high-quality raw materials from global markets.",
    },
    {
      iconName: "Truck" as const,
      title: "Shipment and Logistics",
      description: "End-to-end logistics solutions ensuring timely cross-border movement.",
    },
    {
      iconName: "DollarSign" as const,
      title: "Finance and Operations",
      description: "Robust financial planning and operational excellence for trade efficiency.",
    },
    {
      iconName: "Warehouse" as const,
      title: "Warehouse and Distribution",
      description: "State-of-the-art warehousing networks for safe storage and rapid distribution.",
    },
    {
      iconName: "PackageCheck" as const,
      title: "Delivery",
      description: "Reliable last-mile delivery services ensuring products reach their destination safely.",
    },
  ];

  const products = [
    { title: "Phosphate Fertilizers", image: "/phosphate.svg" },
    { title: "Potash Fertilizers", image: "/potash.svg" },
    { title: "Compound Fertilizers", image: "/compund.svg" },
    { title: "Fertilizer Raw Materials", image: "/raw.svg" },
    { title: "Finished Fertilizers", image: "/finsihed.svg" },
    { title: "Industrial Minerals", image: "/industrial.svg" },
  ];

  const testimonials = [
    {
      quote: '"AMW International Private Limited has consistently met our requirements and provided us with Egyptian rock phosphate for SSP production. Our best wishes for the team."',
      position: "Director",
      company: "Rama Phosphates Pvt Ltd.",
      logo: "https://api.builder.io/api/v1/image/assets/TEMP/a5d1df9b550139eb21f79491b7d33a9a9d423948?width=248",
    },
    {
      quote: '"We are sourcing Rock Phosphate of Egyptian Origin from TLI AMW and have always considered them as a preferred supplier of Rock Phosphate for our raw material needs."',
      position: "Director",
      company: "Indorama India Pvt. Ltd.",
      logo: "https://api.builder.io/api/v1/image/assets/TEMP/c68339e29c1f1f8ef0faea4f0195d0b558d2811f?width=248",
    },
    {
      quote: '"AMW Resources FZC has been a dependable supplier for the last 4 years. Their expertise in sourcing minerals from the Middle East region is commendable"',
      position: "Director",
      company: "Bhilai Engineering Corporation Ltd",
      logo: "https://api.builder.io/api/v1/image/assets/TEMP/4991dfadbeebb0eb2902ca974cc8a8e08d7a8bc3?width=248",
    },
  ];

  const clientLogos = [
    "GreenLeaf Industries",
    "NutriSoil LTD",
    "Harvest Fields",
    "AgriCorp Global",
    "CropMax Solutions",
    "TerraFirma Traders",
    "BioGrowth Systems",
    "PureYield Organics",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
        <div className="absolute inset-0 flex transition-transform duration-1000" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {heroImages.map((img, idx) => (
            <div key={idx} className="min-w-full h-full relative">
              <img src={img} alt={`Slide ${idx + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          ))}
        </div>
        
        {/* Left side - AMW branding */}
        <div className="absolute left-6 sm:left-10 md:left-16 lg:left-24 top-[28%] flex flex-col items-start text-white">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[180px] font-bold leading-none tracking-tight drop-shadow-lg">
            AMW
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#d62829] mt-2">
            Resources FZC
          </p>
          
          {/* Slide indicators */}
          <div className="flex gap-2 mt-8 md:mt-10">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === idx 
                    ? "bg-amw-lime w-8" 
                    : "bg-white/60 w-2 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right side - Tagline */}
        <div className="absolute right-6 sm:right-10 md:right-16 lg:right-24 bottom-16 md:bottom-24 lg:bottom-32 text-right">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-white drop-shadow-lg italic">
            <span className="block">Supplying Strength to</span>
            <span className="block">Agriculture <span className="text-amw-lime">Worldwide.</span></span>
          </p>
        </div>
      </section>

      {/* Client Logos Scrolling Section */}
      <section className="py-4 sm:py-6 overflow-hidden">
        <div 
          className="relative mx-4 sm:mx-8 md:mx-12 lg:mx-16 rounded-full overflow-hidden"
          style={{ 
            backgroundImage: 'url(/cloud.svg)', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="py-6 sm:py-8 md:py-10 overflow-hidden">
            <div className="flex animate-scroll group">
              {[...clientLogos, ...clientLogos, ...clientLogos].map((name, idx) => (
                <div 
                  key={idx} 
                  className={`flex-shrink-0 px-8 sm:px-12 md:px-16 lg:px-20 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:rotate-1 ${
                    idx % 2 === 0 ? 'pt-4 pb-0' : 'pt-0 pb-4'
                  }`}
                >
                  <p 
                    className="text-black text-lg sm:text-xl md:text-2xl lg:text-[27px] font-bold whitespace-nowrap transition-all duration-300 hover:drop-shadow-lg"
                    style={{ textShadow: '2px 3px 4px rgba(0,0,0,0.15)' }}
                  >
                    {name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why AMW Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-[#373737] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px] font-bold leading-tight mb-4 md:mb-6 lg:mb-8">Why AMW?</h2>
            <p className="text-[#686868] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[27px] font-medium leading-relaxed mb-6 md:mb-8 lg:mb-12">
              AMW DMCC is a well-established company located in Dubai's Free Zone, that specializes in providing fertilizer inputs and finished fertilizers to its customers. We are a significant player in the industry and have a strong presence in the market. Our expertise lies in supplying raw materials, Agro Chemicals, Industry Minerals, Fertilizers and finished products, catering to the needs of our clients.
            </p>
            <button className="w-full sm:w-auto px-8 py-3 md:py-4 rounded-full border border-black bg-amw-green shadow-md hover:shadow-lg text-[#212121] text-lg md:text-xl lg:text-2xl xl:text-[30px] font-medium hover:bg-amw-green-button transition-all duration-300">
              Read more
            </button>
          </div>
          <div className="flex-shrink-0 w-full max-w-sm md:max-w-md lg:max-w-lg">
            <img 
              src="/Wheat.svg" 
              alt="Why AMW" 
              className="w-full h-auto rounded-3xl md:rounded-[40px] lg:rounded-[59px] shadow-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20">
        <h2 className="text-[#313131] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-extrabold leading-tight mb-3 md:mb-4">Our Services</h2>
        <p className="text-[#5A5A5A] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[27px] font-light mb-8 md:mb-12 lg:mb-16">
          Comprehensive solutions designed to streamline your global trade operations.
        </p>
        <div className="flex gap-4 md:gap-6 lg:gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {services.map((service, idx) => (
            <div key={idx} className="flex-shrink-0 w-[260px] sm:w-[280px] md:w-[300px] snap-start">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </section>

      {/* Our Products Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20">
        <h2 className="text-[#313131] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-extrabold leading-tight mb-8 md:mb-12 lg:mb-16">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 justify-items-center">
          {products.map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>
      </section>

      {/* Global Operations Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20">
        <div className="rounded-2xl md:rounded-[40px] lg:rounded-[50px] bg-white shadow-lg md:shadow-xl p-4 sm:p-6 md:p-10 lg:p-16">
          <h2 className="text-[#313131] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-extrabold leading-tight mb-4 md:mb-6 lg:mb-8 text-center">Global Operations</h2>
          <p className="text-[#5A5A5A] text-sm sm:text-base md:text-lg lg:text-xl xl:text-[27px] font-light text-center max-w-4xl mx-auto mb-6 md:mb-8 lg:mb-12">
            Our comprehensive service network spans procurement, shipment, logistics, and finance, anchored by our strategic presence in key global trade hubs.
          </p>
          <GlobalOperationsMap />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20">
        <h2 className="text-[#313131] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-extrabold leading-tight mb-3 md:mb-4">Testimonials</h2>
        <p className="text-[#5A5A5A] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[27px] font-light mb-8 md:mb-12 lg:mb-16">What Our Clients Say</p>
        <div className="flex gap-4 md:gap-6 lg:gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="flex-shrink-0 w-[320px] sm:w-[360px] md:w-[400px] snap-start">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer className="bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-10 md:py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-[#D9D9D9] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold mb-6 md:mb-8 lg:mb-12">
                Contact <span className="text-[#BEBEBE]">Us</span>
              </h2>
              <div className="space-y-4 md:space-y-6 lg:space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 block">Name</label>
                    <input type="text" className="w-full h-12 md:h-[54px] rounded-full bg-[#D9D9D9] px-5 md:px-6 text-black focus:outline-none focus:ring-2 focus:ring-amw-green-button transition-shadow" />
                  </div>
                  <div>
                    <label className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 block">Company name</label>
                    <input type="text" className="w-full h-12 md:h-[54px] rounded-full bg-[#D9D9D9] px-5 md:px-6 text-black focus:outline-none focus:ring-2 focus:ring-amw-green-button transition-shadow" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 block">Email</label>
                    <input type="email" className="w-full h-12 md:h-[54px] rounded-full bg-[#D9D9D9] px-5 md:px-6 text-black focus:outline-none focus:ring-2 focus:ring-amw-green-button transition-shadow" />
                  </div>
                  <div>
                    <label className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 block">Phone no.</label>
                    <input type="tel" className="w-full h-12 md:h-[54px] rounded-full bg-[#D9D9D9] px-5 md:px-6 text-black focus:outline-none focus:ring-2 focus:ring-amw-green-button transition-shadow" />
                  </div>
                </div>
                <div>
                  <label className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 block">Message</label>
                  <textarea className="w-full h-28 md:h-[129px] rounded-3xl bg-[#D9D9D9] px-5 md:px-6 py-3 md:py-4 text-black focus:outline-none focus:ring-2 focus:ring-amw-green-button transition-shadow resize-none"></textarea>
                </div>
                <button className="w-full h-12 md:h-[54px] rounded-full bg-amw-green-button text-black text-lg md:text-xl lg:text-2xl font-semibold flex items-center justify-center gap-2 hover:bg-amw-green transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amw-green-button">
                  Send <Send className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 gap-6 lg:gap-12">
              <div>
                <h3 className="text-[#C9C9C9] text-[16px] font-bold mb-6">For Customers</h3>
                <ul className="space-y-3 text-white text-[15px] font-bold">
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">Our Products</li>
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">Fertilizer Categories</li>
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">Bulk Order Inquiry</li>
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">Quality Standards</li>
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">How to Buy</li>
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">Distributor Network</li>
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">Export Services</li>
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">Import Services</li>
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">Request a Quote</li>
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">Support</li>
                </ul>
                
                <h3 className="text-[#C9C9C9] text-[16px] font-bold mt-12 mb-6">Resources</h3>
                <ul className="space-y-3 text-white text-[15px] font-bold">
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">Help & Support</li>
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">Product Catalog</li>
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">Certifications</li>
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">Company Brochure</li>
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">Case Studies</li>
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">Blog / News</li>
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">Farming Guides</li>
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">Market Updates</li>
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">Download Center</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-[#C9C9C9] text-[16px] font-bold mb-6">For Business Partners</h3>
                <ul className="space-y-3 text-white text-[15px] font-bold">
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">Become a Dealer</li>
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">Become a Distributor</li>
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">International Trade</li>
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">Logistics & Shipping</li>
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">Partnership Program</li>
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">B2B Solutions</li>
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">Corporate Orders</li>
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">Vendor Registration</li>
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">Government Supply</li>
                </ul>
                
                <h3 className="text-[#C9C9C9] text-[16px] font-bold mt-12 mb-6">Company</h3>
                <ul className="space-y-3 text-white text-[15px] font-bold">
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">About Us</li>
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">Our Mission & Vision</li>
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">Leadership</li>
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">Infrastructure</li>
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">Careers</li>
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">Our Global Presence</li>
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">Sustainability</li>
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">Partners</li>
                  <li className="cursor-pointer hover:text-[#87E40E] transition-colors">Trust, Safety & Quality</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-12 lg:mt-16 flex items-center gap-4">
            <p className="text-white text-lg md:text-xl lg:text-[24px] font-bold">Follow Us</p>
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/1f1450a447271bbbc3bf5a6a825844f539495e2f?width=441" 
              alt="Social Media" 
              className="h-7 md:h-9"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-[#373434] py-4">
          <p className="text-white/70 text-sm md:text-base lg:text-[20px] font-bold text-center">
            Copyrights © 2026. AMW Resources FZC Private Limited. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
