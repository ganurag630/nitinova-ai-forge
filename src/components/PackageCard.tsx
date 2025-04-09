
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PackageCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  className?: string;
}

const PackageCard = ({
  title,
  price,
  description,
  features,
  isPopular = false,
  className,
}: PackageCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-xl overflow-hidden border transition-all",
      isPopular ? "border-teal shadow-lg" : "border-gray-200",
      className
    )}>
      {isPopular && (
        <div className="bg-teal text-white text-center py-1 px-4 text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold">{price}</span>
          {price !== 'Custom' && <span className="text-gray-500 ml-1">/month</span>}
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check size={18} className="text-teal mt-0.5 mr-2 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          className={cn(
            "w-full",
            isPopular ? "bg-teal hover:bg-teal-600" : "bg-nitinova-500 hover:bg-nitinova-600"
          )}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default PackageCard;
