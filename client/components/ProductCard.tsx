import { ArrowUpRight } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
}

export default function ProductCard({ image, title }: ProductCardProps) {
  return (
    <div className="w-full max-w-[384px] h-[244px] rounded-[20px] border border-amw-green-border bg-cover bg-center shadow-[4px_4px_4px_rgba(0,0,0,0.25)] overflow-hidden group cursor-pointer relative">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-[#F4F4F4] font-extrabold text-[24px] leading-tight">
            {title}
          </h3>
          <div className="w-8 h-8 rounded-full bg-white/70 shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center group-hover:bg-amw-green transition-colors">
            <ArrowUpRight className="w-4 h-4 text-[#333]" strokeWidth={2} />
          </div>
        </div>
      </div>
    </div>
  );
}
