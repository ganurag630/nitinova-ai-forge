
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PackageCard from '@/components/PackageCard';
import { Button } from '@/components/ui/button';
import { Package, Rocket, BarChart, Building, Cpu, Store } from 'lucide-react';

const Packages = () => {
  const packages = [
    {
      title: "Starter Package",
      price: "$149",
      description: "Everything you need to establish your online presence and start growing.",
      features: [
        "Domain & hosting setup",
        "Professional website (5 pages)",
        "Basic SEO optimization",
        "Google Analytics integration",
        "Email setup",
        "1 month of support"
      ],
      icon: Package
    },
    {
      title: "Growth Package",
      price: "$349",
      description: "Take your business to the next level with e-commerce and marketing tools.",
      features: [
        "Everything in Starter Package",
        "E-commerce functionality",
        "Payment gateway integration",
        "Inventory management",
        "Advanced SEO strategy",
        "3 months of priority support"
      ],
      icon: Rocket,
      isPopular: true
    },
    {
      title: "Business Optimizer",
      price: "$599",
      description: "Streamline your operations with integrated business tools and automation.",
      features: [
        "Everything in Growth Package",
        "CRM implementation",
        "Basic ERP functionality",
        "Workflow automation",
        "Email marketing integration",
        "6 months of priority support"
      ],
      icon: BarChart
    },
    {
      title: "Enterprise Solution",
      price: "$1,499",
      description: "Comprehensive digital transformation for established businesses.",
      features: [
        "Custom enterprise website",
        "Advanced ERP & CRM integration",
        "AI-powered analytics",
        "Custom application development",
        "Multi-platform integration",
        "12 months of dedicated support"
      ],
      icon: Building
    },
    {
      title: "AI Innovation",
      price: "$999",
      description: "Leverage AI technology to gain competitive advantage and automation.",
      features: [
        "AI strategy consultation",
        "Custom ML model implementation",
        "Natural language processing",
        "Automated workflows",
        "Predictive analytics",
        "Ongoing AI maintenance"
      ],
      icon: Cpu
    },
    {
      title: "Industry Solutions",
      price: "Custom",
      description: "Tailored digital solutions specific to your industry needs.",
      features: [
        "Industry-specific functionality",
        "Specialized integrations",
        "Compliance implementation",
        "Industry best practices",
        "Competitive analysis",
        "Dedicated account manager"
      ],
      icon: Store
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Packages Tailored to Your Growth</h1>
              <p className="text-lg text-gray-600 mb-8">
                From establishing your online presence to implementing cutting-edge AI solutions, 
                our packages are designed to scale with your business needs.
              </p>
              <Button className="bg-nitinova-500 hover:bg-nitinova-600 text-white">
                Get Custom Quote
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <PackageCard
                  key={index}
                  title={pkg.title}
                  price={pkg.price}
                  description={pkg.description}
                  features={pkg.features}
                  isPopular={pkg.isPopular}
                />
              ))}
            </div>
          </div>
        </div>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Need a Custom Solution?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our team can create a tailored package that perfectly matches your specific business requirements and goals.
              </p>
              <Button className="bg-teal hover:bg-teal-600 text-white">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Packages;
