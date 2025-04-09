
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

type TestimonialProps = {
  quote: string;
  name: string;
  company: string;
  role: string;
  rating?: number;
  compact?: boolean;
};

const Testimonial = ({ quote, name, company, role, rating = 5, compact = false }: TestimonialProps) => {
  return (
    <Card className={`border-none shadow-md hover:shadow-lg transition-shadow duration-300 ${compact ? 'h-full' : ''}`}>
      <CardContent className={`p-6 ${compact ? 'p-4' : 'p-6'}`}>
        <div className="flex mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        
        <div className="relative">
          <Quote className="absolute -left-2 -top-2 w-8 h-8 text-gray-200 rotate-180" />
          <blockquote className={`text-gray-700 mb-4 relative z-10 ${compact ? 'text-sm' : 'text-base'}`}>
            "{quote}"
          </blockquote>
        </div>
        
        <div className="flex items-center mt-4">
          <div className="w-10 h-10 rounded-full bg-nitinova-100 text-nitinova-500 flex items-center justify-center mr-3">
            {name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-600">{role}, {company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = ({ compact = false }: { compact?: boolean }) => {
  const testimonials = [
    {
      quote: "Nitinova transformed our e-commerce operations with AI automation that reduced our customer service response time by 75% and increased sales conversion by 32%.",
      name: "Sarah Johnson",
      company: "Fashion Forward Retail",
      role: "E-Commerce Director",
      rating: 5
    },
    {
      quote: "The SEO and web development expertise at Nitinova helped us reach the top 3 search results for our target keywords, doubling our leads within just 3 months.",
      name: "Michael Chen",
      company: "GreenTech Solutions",
      role: "Marketing Manager",
      rating: 5
    },
    {
      quote: "Their AI integration with our patient management system revolutionized how we handle appointments and follow-ups. Patient satisfaction scores increased by 47%.",
      name: "Dr. Emily Williams",
      company: "Northside Medical Group",
      role: "Practice Manager",
      rating: 5
    },
    {
      quote: "We were struggling with outdated systems. Nitinova built a custom CRM that perfectly fit our unique workflow. The ROI has been incredible - 300% in the first year alone.",
      name: "Robert Martinez",
      company: "BuildRight Construction",
      role: "Operations Director",
      rating: 5
    },
    {
      quote: "The team at Nitinova truly understands the unique challenges of the financial sector. Their custom analytics dashboard gives us insights we never had before.",
      name: "Jessica Wong",
      company: "Pacific Financial Advisors",
      role: "CEO",
      rating: 5
    },
    {
      quote: "From concept to implementation, Nitinova delivered our custom app on time and within budget. Their expertise in both technology and business strategy is unmatched.",
      name: "Thomas Anderson",
      company: "LogisticsPro",
      role: "CTO",
      rating: 5
    }
  ];

  return (
    <section className={`py-16 md:py-24 bg-gray-50 ${compact ? 'py-12' : ''}`}>
      <div className="container mx-auto px-4">
        {!compact && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Hear from businesses we've helped transform through digital innovation and AI solutions
            </p>
          </div>
        )}
        
        <div className={`grid gap-6 ${compact ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
          {testimonials.slice(0, compact ? 3 : testimonials.length).map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              company={testimonial.company}
              role={testimonial.role}
              rating={testimonial.rating}
              compact={compact}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
