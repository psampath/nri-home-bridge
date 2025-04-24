import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "property-management",
    location: "hyderabad",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string, name: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service_type: formData.serviceType,
          location: formData.location,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      if (response.status === 200) {
        setSubmitted(true);
        toast({
          title: "Message sent!",
          description: "We'll reach out within 24 hours to bring your plans to life!",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          serviceType: "property-management",
          location: "hyderabad",
          message: "",
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {submitted ? (
        <div className="text-center p-8 bg-green-50 rounded-lg border border-green-200 animate-fade-in">
          <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h3 className="text-2xl font-semibold text-green-800 mb-2">Thank You!</h3>
          <p className="text-green-700 mb-6">We'll reach out within 24 hours to bring your plans to life!</p>
          <Button 
            variant="outline" 
            className="bg-white text-green-700 border-green-300 hover:bg-green-50"
            onClick={() => setSubmitted(false)}
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone (Optional)</Label>
            <Input
              id="phone"
              name="phone"
              placeholder="Include country code if international"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="serviceType">Service Needed</Label>
            <Select value={formData.serviceType} onValueChange={(value) => handleSelectChange(value, "serviceType")}>
              <SelectTrigger>
                <SelectValue placeholder="Select service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="property-management">Property Management</SelectItem>
                <SelectItem value="interior-design">Interior Design</SelectItem>
                <SelectItem value="both">Both Services</SelectItem>
                <SelectItem value="investment">Real Estate Investment</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="location">Property Location</Label>
            <Input
              id="location"
              name="location"
              placeholder="Hyderabad"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your property and requirements"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-nri-blue hover:bg-blue-600 text-white" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Your Query"}
          </Button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
