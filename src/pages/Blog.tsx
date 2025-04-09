
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "How AI is Transforming Small Business Operations",
      excerpt: "Discover how small businesses are leveraging AI to automate processes, improve customer service, and drive growth without breaking the bank.",
      category: "Artificial Intelligence",
      date: "April 2, 2025",
      readTime: "5 min read"
    },
    {
      title: "5 E-Commerce Trends to Watch in 2025",
      excerpt: "From voice shopping to AR product visualization, these emerging e-commerce trends are shaping the future of online retail.",
      category: "E-Commerce",
      date: "March 28, 2025",
      readTime: "4 min read"
    },
    {
      title: "The Complete Guide to SEO for SaaS Companies",
      excerpt: "Learn the specific SEO strategies that software-as-a-service companies can use to attract qualified leads and reduce customer acquisition costs.",
      category: "SEO",
      date: "March 22, 2025",
      readTime: "7 min read"
    },
    {
      title: "Building a Digital Foundation: What Every New Business Needs",
      excerpt: "From domain names to cloud infrastructure, we break down the essential tech components every new business needs to establish a strong digital presence.",
      category: "Digital Strategy",
      date: "March 15, 2025",
      readTime: "6 min read"
    },
    {
      title: "How to Choose the Right CRM for Your Business",
      excerpt: "With so many options available, selecting the right CRM can be overwhelming. This guide helps you identify your needs and find the perfect match.",
      category: "Operations",
      date: "March 8, 2025",
      readTime: "5 min read"
    },
    {
      title: "The ROI of Custom Application Development",
      excerpt: "Custom apps require investment, but when done right, they can deliver exceptional returns. Here's how to measure and maximize your ROI.",
      category: "Development",
      date: "March 1, 2025",
      readTime: "6 min read"
    }
  ];

  const categories = [
    "Artificial Intelligence",
    "E-Commerce",
    "SEO",
    "Digital Strategy",
    "Operations",
    "Development",
    "Industry Insights"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Blog</h1>
              <p className="text-lg text-gray-600">
                Insights, tips, and guidance on AI, web development, SEO, and digital transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 gap-8">
                  {blogPosts.map((post, index) => (
                    <Card key={index} className="overflow-hidden card-hover">
                      <CardHeader>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-medium text-teal bg-teal-50 px-2 py-1 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-xs text-gray-500">{post.date}</span>
                        </div>
                        <CardTitle className="text-xl hover:text-nitinova-500 transition-colors cursor-pointer">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">
                          {post.excerpt}
                        </p>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                        <Button variant="ghost" className="text-nitinova-500 hover:text-nitinova-600 p-0 flex items-center">
                          Read Article <ArrowRight size={16} className="ml-1" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-12 flex justify-center">
                  <Button variant="outline" className="border-nitinova-500 text-nitinova-500 hover:bg-nitinova-50">
                    Load More Articles
                  </Button>
                </div>
              </div>
              
              <div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                  <h2 className="text-xl font-semibold mb-4">Categories</h2>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <a href="#" className="text-gray-600 hover:text-nitinova-500 transition-colors flex items-center">
                          <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                          {category}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-nitinova-50 rounded-xl p-6">
                  <h2 className="text-xl font-semibold mb-4">Subscribe</h2>
                  <p className="text-gray-600 mb-4">
                    Get the latest articles and insights delivered straight to your inbox.
                  </p>
                  <form className="space-y-4">
                    <div>
                      <Input 
                        type="email" 
                        placeholder="Your email address" 
                        className="w-full"
                      />
                    </div>
                    <Button className="w-full bg-nitinova-500 hover:bg-nitinova-600 text-white">
                      Subscribe
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
