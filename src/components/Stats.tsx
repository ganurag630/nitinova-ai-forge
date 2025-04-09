
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Cpu, TrendingUp, Award, Smile, Timer } from 'lucide-react';

type StatProps = {
  value: string;
  label: string;
  icon: React.ElementType;
  description?: string;
};

const Stat = ({ value, label, icon: Icon, description }: StatProps) => {
  return (
    <Card className="border-none shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-6 text-center">
        <div className="w-12 h-12 rounded-full bg-nitinova-100 text-nitinova-500 flex items-center justify-center mx-auto mb-4">
          <Icon size={24} />
        </div>
        <h3 className="text-3xl md:text-4xl font-bold mb-2 text-nitinova-600">{value}</h3>
        <p className="text-lg font-medium mb-2">{label}</p>
        {description && <p className="text-sm text-gray-600">{description}</p>}
      </CardContent>
    </Card>
  );
};

const Stats = () => {
  const stats = [
    {
      value: "200+",
      label: "Clients Served",
      icon: Users,
      description: "Businesses of all sizes across diverse industries"
    },
    {
      value: "50+",
      label: "AI Implementations",
      icon: Cpu,
      description: "Custom AI solutions driving real business results"
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      icon: Smile,
      description: "As measured by post-project client surveys"
    },
    {
      value: "32%",
      label: "Average ROI",
      icon: TrendingUp,
      description: "Return on investment in the first year"
    },
    {
      value: "15+",
      label: "Industry Awards",
      icon: Award,
      description: "Recognized excellence in digital innovation"
    },
    {
      value: "3x",
      label: "Faster Deployment",
      icon: Timer,
      description: "Compared to traditional development approaches"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact By The Numbers</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Delivering measurable results for businesses through innovative digital solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Stat
              key={index}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
