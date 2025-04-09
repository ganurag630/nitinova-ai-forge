
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Success Stories</h1>
              <p className="text-lg text-gray-600">
                Explore real-world examples of how we've helped businesses transform through digital innovation
              </p>
            </div>
          </div>
        </div>
        
        {/* Portfolio Section */}
        <Portfolio />
        
        {/* Testimonials */}
        <Testimonials />
        
        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-nitinova-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business achieve similar results through strategic digital transformation.
            </p>
            <Button asChild className="bg-nitinova-500 hover:bg-nitinova-600 text-white">
              <Link to="/contact">
                Schedule a Free Consultation
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PortfolioPage;
