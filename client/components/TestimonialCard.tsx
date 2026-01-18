interface TestimonialCardProps {
  quote: string;
  position: string;
  company: string;
  logo: string;
}

export default function TestimonialCard({ quote, position, company, logo }: TestimonialCardProps) {
  return (
    <div className="w-full max-w-[427px] h-[337px] rounded-[30px] border border-amw-green-border bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25)] p-11 flex flex-col justify-between">
      <p className="text-[#676767] text-[22px] font-normal leading-snug">
        {quote}
      </p>
      <div className="flex items-end gap-6 mt-auto">
        <img src={logo} alt={company} className="w-[124px] h-[85px] object-contain" />
        <div>
          <p className="text-[#676767] font-bold text-[27px]">{position}</p>
          <p className="text-[#676767] text-[15px] font-normal">{company}</p>
        </div>
      </div>
    </div>
  );
}
