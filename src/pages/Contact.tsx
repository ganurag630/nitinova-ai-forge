
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { Mail, Phone, MapPin } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  service: z.string().optional()
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      service: ""
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast.success("Your message has been sent! We'll get back to you soon.");
    form.reset();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Start Your Journey</h1>
              <p className="text-lg text-gray-600">
                Ready to transform your business? Get in touch with our team to discuss how we can help.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                  <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="Your email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone (Optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="Your phone number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company (Optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="Your company" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service of Interest (Optional)</FormLabel>
                            <select
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                              {...field}
                            >
                              <option value="">Select a service</option>
                              <option value="web-presence">Web Presence</option>
                              <option value="e-commerce">E-Commerce</option>
                              <option value="operations">Operations Software</option>
                              <option value="custom-apps">Custom Applications</option>
                              <option value="ai">AI Implementation</option>
                              <option value="seo">SEO & Marketing</option>
                              <option value="package">Package Inquiry</option>
                            </select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <textarea
                                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="How can we help you?"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-nitinova-500 hover:bg-nitinova-600 text-white"
                      >
                        Send Message
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>
              
              <div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
                  <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail size={20} className="mr-3 text-nitinova-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:info@nitinova.com" className="text-gray-600 hover:text-nitinova-500 transition-colors">
                          info@nitinova.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone size={20} className="mr-3 text-nitinova-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <a href="tel:+15551234567" className="text-gray-600 hover:text-nitinova-500 transition-colors">
                          +1 (555) 123-4567
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin size={20} className="mr-3 text-nitinova-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-gray-600">
                          123 Innovation Drive<br />
                          Tech City, CA 94043
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-nitinova-50 rounded-xl p-6 text-center">
                  <h3 className="text-lg font-semibold mb-3">Business Hours</h3>
                  <p className="text-gray-600 mb-2">Monday - Friday: 9am - 6pm</p>
                  <p className="text-gray-600">Saturday - Sunday: Closed</p>
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

export default Contact;
