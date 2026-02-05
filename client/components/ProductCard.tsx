import { ArrowUpRight } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
}

export default function ProductCard({ image, title }: ProductCardProps) {
  return (
    <div className="w-full max-w-[384px] h-[200px] sm:h-[220px] md:h-[244px] rounded-2xl md:rounded-[20px] border border-amw-green-border bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4 md:p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-[#F4F4F4] font-extrabold text-lg sm:text-xl md:text-[24px] leading-tight">
            {title}
          </h3>
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/80 shadow-md flex items-center justify-center group-hover:bg-amw-green transition-all duration-300 flex-shrink-0">
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-[#333] transition-transform duration-300 group-hover:rotate-45" strokeWidth={2} />
          </div>
        </div>
      </div>
    </div>
  );
}
