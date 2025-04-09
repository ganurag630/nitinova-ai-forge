
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  ShoppingCart, 
  Database, 
  Cpu, 
  Code, 
  BrainCircuit, 
  Link as LinkIcon, 
  Search, 
  LifeBuoy,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Target,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import PackageCard from '@/components/PackageCard';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent } from '@/components/ui/card';
import Testimonials from '@/components/Testimonials';
import Stats from '@/components/Stats';
import Portfolio from '@/components/Portfolio';
import TrustBadges from '@/components/TrustBadges';

const Index = () => {
  const services = [
    {
      icon: Globe,
      title: 'Digital Foundation',
      description: 'Domain, hosting, SSL, email, and cloud infrastructure to build your digital presence on solid ground.'
    },
    {
      icon: Code,
      title: 'Web Presence',
      description: 'Custom websites, content management, SEO optimization, and analytics to make your brand stand out.'
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce',
      description: 'Full-featured online stores with secure payment processing, inventory management, and automation.'
    },
    {
      icon: Database,
      title: 'Operations Software',
      description: 'CRM, ERP, and project management tools tailored to streamline your business processes.'
    },
    {
      icon: Cpu,
      title: 'Custom Apps',
      description: 'Bespoke web and mobile applications designed to solve your unique business challenges.'
    },
    {
      icon: BrainCircuit,
      title: 'AI Implementation',
      description: 'Strategic AI integration, machine learning solutions, NLP, and automation to transform your operations.'
    },
    {
      icon: LinkIcon,
      title: 'Integration',
      description: 'Seamless API connections, data migration, and system compatibility to unite your digital ecosystem.'
    },
    {
      icon: Search,
      title: 'SEO',
      description: 'Comprehensive audits, keyword strategy, link building, and optimization to boost your visibility.'
    },
    {
      icon: LifeBuoy,
      title: 'Support',
      description: '24/7 technical assistance, regular updates, and security monitoring to keep your systems running smoothly.'
    }
  ];

  const packages = [
    {
      title: 'Starter Package',
      price: '$499',
      description: 'Everything you need to establish a professional online presence.',
      features: [
        'Domain & Hosting Setup',
        'Custom Website (5 pages)',
        'Mobile Responsive Design',
        'Basic SEO Setup',
        'Google Analytics Integration',
        '1 Month of Support'
      ]
    },
    {
      title: 'Growth Package',
      price: '$1,499',
      description: 'Complete e-commerce solution to start selling products online.',
      features: [
        'Everything in Starter Package',
        'E-commerce Functionality',
        'Payment Gateway Integration',
        'Inventory Management',
        'Enhanced SEO Strategy',
        '3 Months of Support'
      ],
      isPopular: true
    },
    {
      title: 'Enterprise Solution',
      price: 'Custom',
      description: 'Comprehensive digital transformation tailored to your needs.',
      features: [
        'Custom Web Applications',
        'AI Implementation & Integration',
        'CRM & ERP Systems',
        'Data Analytics & Reporting',
        'API Development & Integration',
        'Dedicated Support Team'
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Trust Badges Section */}
        <TrustBadges />
        
        {/* Intro Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Full-Service Digital Transformation Partner</h2>
              <p className="text-xl text-gray-700 mb-8">
                At Nitinova, we combine technical expertise with innovative AI solutions to help businesses of all sizes thrive in the digital landscape. From establishing your online presence to implementing intelligent automation systems, we deliver end-to-end solutions that drive real results.
              </p>
              <Button asChild className="bg-nitinova-500 hover:bg-nitinova-600">
                <Link to="/contact">Ready to Grow? Let's Talk</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <Stats />
        
        {/* Services Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Comprehensive solutions designed to meet your every digital need
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild variant="outline" className="border-nitinova-500 text-nitinova-500 hover:bg-nitinova-50">
                <Link to="/services">
                  View Detailed Service Descriptions
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Featured Portfolio Section */}
        <Portfolio compact={true} />
        
        {/* Packages Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Packages</h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Bundled solutions designed to provide everything you need at each stage of growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
            
            <div className="mt-12 text-center">
              <Button asChild variant="outline" className="border-nitinova-500 text-nitinova-500 hover:bg-nitinova-50">
                <Link to="/packages">
                  View All Packages
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-nitinova-500 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Nitinova</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                We're committed to delivering exceptional results through innovation and expertise
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-teal" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Holistic Approach</h3>
                  <p className="opacity-90">
                    We provide end-to-end solutions that cover every aspect of your digital transformation journey.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <BrainCircuit size={32} className="text-teal" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">AI Leadership</h3>
                  <p className="opacity-90">
                    We leverage cutting-edge AI technologies to deliver intelligent solutions that drive real business growth.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <Target size={32} className="text-teal" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Industry Focus</h3>
                  <p className="opacity-90">
                    We understand the unique challenges of your industry and tailor our solutions accordingly.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <LifeBuoy size={32} className="text-teal" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Ongoing Support</h3>
                  <p className="opacity-90">
                    We provide reliable technical support and strategic guidance long after project completion.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Start Your Digital Transformation Journey</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Ready to elevate your business with AI-powered solutions? Fill out the form and our experts will get back to you within 24 hours.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Sparkles size={20} className="text-teal mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">Get a personalized strategy tailored to your business goals</p>
                    </div>
                    <div className="flex items-start">
                      <Clock size={20} className="text-teal mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">Fast implementation with proven methodologies</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-teal mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">Ongoing support and optimization</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
