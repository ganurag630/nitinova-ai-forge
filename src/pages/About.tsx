
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, Award, HeartHandshake } from 'lucide-react';

const About = () => {
  const values = [
    {
      title: "Technical Excellence",
      description: "We maintain the highest standards in development, security, and performance optimization.",
      icon: CheckCircle
    },
    {
      title: "Client Partnership",
      description: "We build lasting relationships by understanding your needs and delivering personalized solutions.",
      icon: Users
    },
    {
      title: "Innovation Leadership",
      description: "We constantly explore new technologies and approaches to give you a competitive edge.",
      icon: Award
    },
    {
      title: "Ethical AI",
      description: "We're committed to developing responsible AI solutions that align with your values and goals.",
      icon: HeartHandshake
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Powering Success with Innovation</h1>
              <p className="text-lg text-gray-600">
                Discover the story behind Nitinova AI and our mission to transform businesses through technology.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-12">
                <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded by a team of technology experts and business strategists, Nitinova AI emerged from the recognition that businesses need more than just technical solutions – they need strategic partners who understand their goals and can leverage cutting-edge technology to achieve them.
                </p>
                <p className="text-gray-600 mb-4">
                  With decades of combined experience in web development, artificial intelligence, digital marketing, and business operations, our team has helped businesses of all sizes – from startups to enterprises – navigate their digital transformation journey.
                </p>
                <p className="text-gray-600">
                  Today, we continue to push the boundaries of what's possible, combining our technical expertise with our deep understanding of business challenges to deliver solutions that drive real results.
                </p>
              </div>
              
              <h2 className="text-2xl font-semibold text-center mb-8">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {values.map((value, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-nitinova-100 text-nitinova-500">
                      <value.icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-nitinova-50 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
                <p className="text-gray-600 mb-6">
                  Combining deep knowledge in AI, web development, SEO, and business operations, 
                  we deliver holistic solutions that address your specific industry challenges 
                  and growth opportunities.
                </p>
                <Button className="bg-nitinova-500 hover:bg-nitinova-600 text-white">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
