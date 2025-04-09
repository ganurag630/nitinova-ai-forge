
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-nitinova-50 to-blue-50 -z-10"></div>
      
      {/* Abstract pattern overlay */}
      <div className="absolute inset-0 opacity-10 -z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyek00NiAzNGgtMnYtNGgydjR6TTIwIDQ4aC00di0yaDR2Mnt6IE0zMCA0MGgtMnYtNGgydjR6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transform Your Business with
            <span className="block text-gradient">AI-Powered Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            From websites to intelligent operations, we're your growth partner.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-nitinova-500 hover:bg-nitinova-600 text-white px-6 py-6 text-lg">
              Get a Free Consultation
            </Button>
            <Button variant="outline" className="border-nitinova-500 text-nitinova-500 hover:bg-nitinova-50 px-6 py-6 text-lg">
              Explore Services
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Curved bottom shape */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white -mb-1 rounded-t-[50%] z-10"></div>
    </div>
  );
};

export default Hero;
