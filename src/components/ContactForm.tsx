
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = ({ className }: { className?: string }) => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form submitted",
      description: "Thank you for contacting us. We'll be in touch shortly.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            required
            className="w-full"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            required
            className="w-full"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="+1 (555) 123-4567"
            className="w-full"
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Company Name
          </label>
          <Input
            id="company"
            type="text"
            placeholder="Your Company"
            className="w-full"
          />
        </div>
      </div>
      
      <div className="mb-4">
        <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700 mb-1">
          Inquiry Type
        </label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select an inquiry type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="web">Web Development</SelectItem>
            <SelectItem value="ecommerce">E-Commerce Solutions</SelectItem>
            <SelectItem value="ai">AI Implementation</SelectItem>
            <SelectItem value="operations">Operations Software</SelectItem>
            <SelectItem value="custom">Custom Development</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Your Message
        </label>
        <Textarea
          id="message"
          placeholder="Please describe what you're looking for..."
          required
          className="min-h-32"
        />
      </div>
      
      <Button type="submit" className="w-full bg-nitinova-500 hover:bg-nitinova-600">
        Submit Inquiry
      </Button>
    </form>
  );
};

export default ContactForm;
