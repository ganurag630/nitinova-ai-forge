
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

type PortfolioItemProps = {
  title: string;
  industry: string;
  services: string[];
  description: string;
  results: string[];
  image: string;
};

const PortfolioItem = ({ title, industry, services, description, results, image }: PortfolioItemProps) => {
  return (
    <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-52 overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold">{title}</h3>
          <Badge variant="outline" className="bg-gray-100">
            {industry}
          </Badge>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {services.map((service, i) => (
            <Badge key={i} variant="secondary" className="bg-nitinova-50 text-nitinova-600">
              {service}
            </Badge>
          ))}
        </div>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="space-y-1">
          <p className="font-medium">Key Results:</p>
          <ul className="space-y-1">
            {results.map((result, i) => (
              <li key={i} className="text-sm text-gray-600 flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-nitinova-500 mt-1.5 mr-2"></span>
                {result}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button variant="ghost" className="text-nitinova-500 hover:text-nitinova-600 p-0 flex items-center">
          View Case Study <ArrowRight size={16} className="ml-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const Portfolio = ({ compact = false }: { compact?: boolean }) => {
  const portfolioItems = [
    {
      title: "E-Commerce Transformation",
      industry: "Retail",
      services: ["E-Commerce", "AI Implementation", "Integration"],
      description: "Complete digital transformation for a mid-sized fashion retailer, including a custom e-commerce platform with AI-powered recommendations.",
      results: [
        "43% increase in online sales within 3 months",
        "68% improvement in customer engagement",
        "22% reduction in return rates"
      ],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=700&q=80"
    },
    {
      title: "Healthcare Patient Portal",
      industry: "Healthcare",
      services: ["Custom Apps", "Web Presence", "Operations Software"],
      description: "Modern, secure patient portal integrated with existing EHR systems, enabling seamless patient-provider communication.",
      results: [
        "89% patient adoption rate",
        "35% reduction in administrative work",
        "47% improvement in patient satisfaction scores"
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=700&q=80"
    },
    {
      title: "Manufacturing Operations Platform",
      industry: "Manufacturing",
      services: ["Operations Software", "AI Implementation", "Integration"],
      description: "Comprehensive digital operations platform with predictive maintenance AI and real-time production analytics.",
      results: [
        "27% increase in operational efficiency",
        "62% reduction in unplanned downtime",
        "18% decrease in maintenance costs"
      ],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=700&q=80"
    },
    {
      title: "Financial Advisory Dashboard",
      industry: "Financial Services",
      services: ["Custom Apps", "AI Implementation", "Operations Software"],
      description: "AI-powered financial analytics dashboard providing real-time insights and automated reporting for financial advisors.",
      results: [
        "40% increase in client portfolio value",
        "75% time savings on routine analysis tasks",
        "28% growth in client acquisition"
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=700&q=80"
    },
    {
      title: "Real Estate Marketing Platform",
      industry: "Real Estate",
      services: ["Web Presence", "SEO", "Custom Apps"],
      description: "Comprehensive digital marketing platform with virtual property tours, SEO optimization, and lead management system.",
      results: [
        "156% increase in qualified leads",
        "41% higher conversion rates",
        "67% reduction in marketing costs"
      ],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=80"
    },
    {
      title: "Legal Document Management",
      industry: "Legal Services",
      services: ["Operations Software", "Integration", "AI Implementation"],
      description: "Secure, AI-powered document management and workflow automation system for a large law firm.",
      results: [
        "85% faster document processing",
        "93% accuracy in document classification",
        "32% reduction in administrative overhead"
      ],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=700&q=80"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {!compact && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Explore how we've helped businesses across industries achieve digital transformation success
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.slice(0, compact ? 3 : 6).map((item, index) => (
            <PortfolioItem
              key={index}
              title={item.title}
              industry={item.industry}
              services={item.services}
              description={item.description}
              results={item.results}
              image={item.image}
            />
          ))}
        </div>
        
        {!compact && (
          <div className="mt-12 text-center">
            <Button 
              variant="outline" 
              className="border-nitinova-500 text-nitinova-500 hover:bg-nitinova-50"
            >
              View All Case Studies
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
