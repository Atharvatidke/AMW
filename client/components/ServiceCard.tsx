import { Package, Truck, DollarSign, Warehouse, PackageCheck, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Package,
  Truck,
  DollarSign,
  Warehouse,
  PackageCheck,
};

interface ServiceCardProps {
  iconName: "Package" | "Truck" | "DollarSign" | "Warehouse" | "PackageCheck";
  title: string;
  description: string;
}

export default function ServiceCard({ iconName, title, description }: ServiceCardProps) {
  const Icon = iconMap[iconName];
  
  return (
    <div className="w-full max-w-[280px] min-h-[280px] md:min-h-[322px] rounded-2xl md:rounded-[20px] border border-amw-green-border bg-white shadow-md hover:shadow-lg transition-shadow p-5 md:p-6 flex flex-col items-center">
      <div className="w-14 h-14 md:w-16 md:h-16 mb-4 flex-shrink-0 rounded-full bg-amw-green/10 flex items-center justify-center">
        <Icon className="w-7 h-7 md:w-8 md:h-8 text-amw-green-button" strokeWidth={1.5} />
      </div>
      <h3 className="text-[#474747] font-bold text-lg md:text-[21px] text-center mb-3 md:mb-4 leading-tight flex-shrink-0">
        {title}
      </h3>
      <p className="text-[#565151] text-sm md:text-base lg:text-[18px] font-normal text-center leading-snug flex-grow">
        {description}
      </p>
    </div>
  );
}
