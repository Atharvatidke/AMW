import { useState, useEffect } from "react";
import { ArrowUpRight, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import ServiceCard from "@/components/ServiceCard";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";

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
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/7216143%201",
      title: "Procurement",
      description: "Strategic sourcing of high-quality raw materials from global markets.",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/9286994%201",
      title: "Shipment and Logistics",
      description: "End-to-end logistics solutions ensuring timely cross-border movement.",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/12610568%201",
      title: "Finance and Operations",
      description: "Robust financial planning and operational excellence for trade efficiency.",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/407826%201",
      title: "Warehouse and Distribution",
      description: "State-of-the-art warehousing networks for safe storage and rapid distribution.",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/870130%201",
      title: "Delivery",
      description: "Reliable last-mile delivery services ensuring products reach their destination safely.",
    },
  ];

  const products = [
    { title: "Phosphate Fertilizers", image: "https://api.builder.io/api/v1/image/assets/TEMP/phosphate" },
    { title: "Potash Fertilizers", image: "https://api.builder.io/api/v1/image/assets/TEMP/potash" },
    { title: "Compound Fertilizers", image: "https://api.builder.io/api/v1/image/assets/TEMP/compound" },
    { title: "Fertilizer Raw Materials", image: "https://api.builder.io/api/v1/image/assets/TEMP/raw-materials" },
    { title: "Finished Fertilizers", image: "https://api.builder.io/api/v1/image/assets/TEMP/finished" },
    { title: "Industrial Minerals", image: "https://api.builder.io/api/v1/image/assets/TEMP/minerals" },
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
      <section className="relative h-[500px] md:h-[650px] lg:h-[807px] overflow-hidden">
        <div className="absolute inset-0 flex transition-transform duration-1000" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {heroImages.map((img, idx) => (
            <div key={idx} className="min-w-full h-full relative">
              <img src={img} alt={`Slide ${idx + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        
        <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-12 lg:px-24 text-white">
          <div className="hidden md:flex items-center gap-2 mb-2">
            <div className="w-[6px] h-[6px] rounded-full bg-white"></div>
            <div className="w-0.5 h-[120px] lg:h-[220px] bg-[#ECE7E7]"></div>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[171px] font-bold leading-none mb-4">AMW</h1>
          <p className="text-lg md:text-2xl lg:text-[35px] font-bold text-black bg-white/90 px-3 py-1.5 md:px-4 md:py-2 rounded">Resources FZC</p>
          
          <div className="hidden md:flex items-center gap-2 mt-4 lg:mt-8">
            <div className="w-0.5 h-[120px] lg:h-[220px] bg-[#DBD6D6]"></div>
            <div className="w-[6px] h-[6px] rounded-full bg-white"></div>
          </div>
          
          <p className="text-xl md:text-3xl lg:text-[50px] font-black leading-tight mt-4 lg:mt-8 max-w-[300px] md:max-w-[450px] lg:max-w-[592px]">
            Supplying Strength to Agriculture <span className="text-[#D9F868]">Worldwide.</span>
          </p>
          
          <div className="flex gap-2 mt-4 lg:mt-6">
            <div className="w-4 h-4 md:w-5 md:h-5 lg:w-[26px] lg:h-[26px] rounded-full bg-white"></div>
            <div className="w-4 h-4 md:w-5 md:h-5 lg:w-[26px] lg:h-[26px] rounded-full bg-white"></div>
            <div className="w-4 h-4 md:w-5 md:h-5 lg:w-[26px] lg:h-[26px] rounded-full bg-white"></div>
          </div>
        </div>

        {/* Logo placeholder - to be replaced with SVG logo */}
        <div className="absolute top-6 left-6 md:left-12 lg:left-24 text-[#535353] text-4xl md:text-6xl lg:text-[82px] font-bold">Logo</div>
      </section>

      {/* Client Logos Scrolling Section */}
      <section className="py-12 overflow-hidden bg-white border-y">
        <div className="relative">
          <div className="flex animate-scroll">
            {[...clientLogos, ...clientLogos].map((name, idx) => (
              <div key={idx} className="flex-shrink-0 px-8">
                <p className="text-black text-[27px] font-semibold text-shadow-[3px_4px_3.4px_rgba(0,0,0,0.39)]">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AMW Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-[#373737] text-[90px] font-bold leading-tight mb-8">Why AMW?</h2>
            <p className="text-[#686868] text-[27px] font-medium leading-normal mb-12">
              AMW DMCC is a well-established company located in Dubai's Free Zone, that specializes in providing fertilizer inputs and finished fertilizers to its customers. We are a significant player in the industry and have a strong presence in the market. Our expertise lies in supplying raw materials, Agro Chemicals, Industry Minerals, Fertilizers and finished products, catering to the needs of our clients.
            </p>
            <button className="w-full max-w-[682px] h-[62px] rounded-[40px] border border-black bg-amw-green shadow-[4px_4px_4px_rgba(0,0,0,0.25)] text-[#212121] text-[30px] font-medium hover:bg-amw-green-button transition-colors">
              Read more
            </button>
          </div>
          <div className="flex-shrink-0">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/108514e733ef42bf3aa855dd81f4d2c65843674a?width=882" 
              alt="Why AMW" 
              className="w-[441px] h-[470px] rounded-[59px] shadow-[inset_0_4px_10.6px_5px_rgba(0,0,0,0.25)] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-[#313131] text-[80px] font-extrabold leading-tight mb-4">Our Services</h2>
        <p className="text-[#5A5A5A] text-[27px] font-light mb-16">
          Comprehensive solutions designed to streamline your global trade operations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </section>

      {/* Our Products Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-[#313131] text-[80px] font-extrabold leading-tight mb-16">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {products.map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>
      </section>

      {/* Global Operations Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="rounded-[50px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25)] p-16">
          <h2 className="text-[#313131] text-[80px] font-extrabold leading-tight mb-8 text-center">Global Operations</h2>
          <p className="text-[#5A5A5A] text-[27px] font-light text-center max-w-4xl mx-auto mb-12">
            Our comprehensive service network spans procurement, shipment, logistics, and finance, anchored by our strategic presence in key global trade hubs.
          </p>
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/b49b430928117b43f805216c9b09d2162d34c0a6?width=2276" 
            alt="Global Operations Map" 
            className="w-full max-w-[1138px] h-auto rounded-[40px] border border-[#5E5E5E] mx-auto"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-[#313131] text-[80px] font-extrabold leading-tight mb-4">Testimonials</h2>
        <p className="text-[#5A5A5A] text-[27px] font-light mb-16">What Our Clients Say</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} {...testimonial} />
          ))}
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer className="bg-black text-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-[#D9D9D9] text-3xl md:text-4xl lg:text-[56px] font-bold mb-8 lg:mb-12">
                Contact <span className="text-[#BEBEBE]">Us</span>
              </h2>
              <div className="space-y-6 lg:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="text-white text-lg md:text-xl lg:text-[25px] font-bold mb-2 block">Name</label>
                    <input type="text" className="w-full h-[54px] rounded-[30px] bg-[#D9D9D9] px-6 text-black focus:outline-none focus:ring-2 focus:ring-[#87E40E] transition-shadow" />
                  </div>
                  <div>
                    <label className="text-white text-lg md:text-xl lg:text-[25px] font-bold mb-2 block">Company name</label>
                    <input type="text" className="w-full h-[54px] rounded-[30px] bg-[#D9D9D9] px-6 text-black focus:outline-none focus:ring-2 focus:ring-[#87E40E] transition-shadow" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="text-white text-lg md:text-xl lg:text-[25px] font-bold mb-2 block">Email</label>
                    <input type="email" className="w-full h-[54px] rounded-[30px] bg-[#D9D9D9] px-6 text-black focus:outline-none focus:ring-2 focus:ring-[#87E40E] transition-shadow" />
                  </div>
                  <div>
                    <label className="text-white text-lg md:text-xl lg:text-[25px] font-bold mb-2 block">Phone no.</label>
                    <input type="tel" className="w-full h-[54px] rounded-[30px] bg-[#D9D9D9] px-6 text-black focus:outline-none focus:ring-2 focus:ring-[#87E40E] transition-shadow" />
                  </div>
                </div>
                <div>
                  <label className="text-white text-lg md:text-xl lg:text-[25px] font-bold mb-2 block">Message</label>
                  <textarea className="w-full h-[129px] rounded-[30px] bg-[#D9D9D9] px-6 py-4 text-black focus:outline-none focus:ring-2 focus:ring-[#87E40E] transition-shadow resize-none"></textarea>
                </div>
                <button className="w-full h-[54px] rounded-[30px] bg-[#87E40E] text-black text-xl md:text-2xl lg:text-[28px] font-semibold flex items-center justify-center gap-2 hover:bg-amw-green transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#87E40E]">
                  Send <Send className="w-5 h-5" />
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
