
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
}

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  className,
  iconClassName 
}: ServiceCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover",
      className
    )}>
      <div className={cn(
        "w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-nitinova-100 text-nitinova-500",
        iconClassName
      )}>
        <Icon size={24} className="shrink-0" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
