interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="w-full max-w-[241px] min-h-[322px] rounded-[20px] border border-amw-green-border bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25)] p-6 flex flex-col items-center">
      <img src={icon} alt={title} className="w-16 h-16 mb-4 flex-shrink-0" />
      <h3 className="text-[#474747] font-bold text-[21px] text-center mb-4 leading-tight flex-shrink-0">
        {title}
      </h3>
      <p className="text-[#565151] text-[18px] font-normal text-center leading-snug flex-grow">
        {description}
      </p>
    </div>
  );
}
