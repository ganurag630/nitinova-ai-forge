
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { 
  Globe, 
  ShoppingBag, 
  Database, 
  Smartphone, 
  Brain, 
  Link, 
  Search, 
  LifeBuoy,
  Server
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Digital Foundation",
      description: "Build a solid technical foundation with domain registration, secure hosting, SSL certification, professional email, and cloud infrastructure.",
      icon: Server
    },
    {
      title: "Web Presence",
      description: "Create an impactful online presence with custom-designed websites, content management, SEO optimization, and comprehensive analytics.",
      icon: Globe
    },
    {
      title: "E-Commerce",
      description: "Transform your business with powerful online stores, secure payment processing, inventory management, and customer-focused shopping experiences.",
      icon: ShoppingBag
    },
    {
      title: "Operations Software",
      description: "Streamline your business with integrated CRM, ERP, project management tools, and workflow automation solutions.",
      icon: Database
    },
    {
      title: "Custom Applications",
      description: "Develop tailor-made web and mobile applications, custom APIs, and modernize legacy systems to meet your specific business needs.",
      icon: Smartphone
    },
    {
      title: "AI Implementation",
      description: "Harness the power of artificial intelligence with AI strategy development, machine learning integration, NLP, and intelligent automation.",
      icon: Brain
    },
    {
      title: "System Integration",
      description: "Seamlessly connect your systems with API development, data migration, compatibility solutions, and third-party integrations.",
      icon: Link
    },
    {
      title: "SEO & Marketing",
      description: "Boost your visibility with comprehensive SEO audits, keyword strategy, link building, content optimization, and conversion rate optimization.",
      icon: Search
    },
    {
      title: "Ongoing Support",
      description: "Get peace of mind with 24/7 technical support, regular updates and maintenance, security monitoring, and performance optimization.",
      icon: LifeBuoy
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h1>
              <p className="text-lg text-gray-600">
                Technical expertise meets AI innovation to deliver comprehensive solutions
                for all your digital transformation needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>
        </div>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Discover our package options that combine these services for maximum value and impact.
              </p>
              <Button className="bg-nitinova-500 hover:bg-nitinova-600 text-white">
                Explore Packages
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
