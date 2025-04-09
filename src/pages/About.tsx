
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, Award, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import TrustBadges from '@/components/TrustBadges';

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

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Former tech executive with 15+ years of experience in AI and digital transformation."
    },
    {
      name: "Sophia Rodriguez",
      role: "CTO",
      bio: "AI researcher and software architect with a background in machine learning applications."
    },
    {
      name: "Michael Johnson",
      role: "Web Development Director",
      bio: "Full-stack developer with expertise in modern web technologies and e-commerce solutions."
    },
    {
      name: "Emily Williams",
      role: "AI Solutions Lead",
      bio: "Specialist in natural language processing and automation systems for business operations."
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
              
              {/* Team Section */}
              <h2 className="text-2xl font-semibold text-center mb-8">Meet Our Leadership</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {teamMembers.map((member, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center">
                    <div className="w-16 h-16 rounded-full bg-nitinova-100 text-nitinova-500 flex items-center justify-center mr-4 text-xl font-bold">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{member.name}</h3>
                      <p className="text-nitinova-500 font-medium text-sm mb-1">{member.role}</p>
                      <p className="text-gray-600 text-sm">{member.bio}</p>
                    </div>
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
                <Button asChild className="bg-nitinova-500 hover:bg-nitinova-600 text-white">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust Badges */}
        <TrustBadges />
        
        {/* Stats Section */}
        <Stats />
        
        {/* Testimonials */}
        <Testimonials />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
