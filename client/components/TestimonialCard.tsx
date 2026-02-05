interface TestimonialCardProps {
  quote: string;
  position: string;
  company: string;
  logo: string;
}

export default function TestimonialCard({ quote, position, company, logo }: TestimonialCardProps) {
  return (
    <div className="w-full max-w-[427px] min-h-[280px] md:min-h-[320px] lg:min-h-[337px] rounded-2xl md:rounded-[30px] border border-amw-green-border bg-white shadow-md hover:shadow-lg transition-shadow p-6 sm:p-8 md:p-10 lg:p-11 flex flex-col justify-between">
      <p className="text-[#676767] text-base sm:text-lg md:text-xl lg:text-[22px] font-normal leading-relaxed">
        {quote}
      </p>
      <div className="flex items-end gap-4 md:gap-6 mt-4 md:mt-6">
        <img 
          src={logo} 
          alt={company} 
          className="w-20 h-14 sm:w-24 sm:h-16 md:w-[100px] md:h-[70px] lg:w-[124px] lg:h-[85px] object-contain" 
          loading="lazy"
        />
        <div className="min-w-0">
          <p className="text-[#676767] font-bold text-lg sm:text-xl md:text-2xl lg:text-[27px] truncate">{position}</p>
          <p className="text-[#676767] text-xs sm:text-sm md:text-[15px] font-normal truncate">{company}</p>
        </div>
      </div>
    </div>
  );
}
