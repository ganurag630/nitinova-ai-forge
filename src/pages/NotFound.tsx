
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileQuestion } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="flex justify-center mb-6">
            <div className="p-6 rounded-full bg-gray-100">
              <FileQuestion size={64} className="text-nitinova-500" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild className="bg-nitinova-500 hover:bg-nitinova-600 text-white">
              <Link to="/">Go Home</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
