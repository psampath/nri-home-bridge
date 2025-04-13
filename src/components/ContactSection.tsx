
import React from "react";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5 text-nri-blue" />,
      title: "Address",
      details: "Hitech City, Madhapur, Hyderabad, Telangana 500081",
    },
    {
      icon: <Phone className="w-5 h-5 text-nri-blue" />,
      title: "Phone",
      details: "+91 9876543210",
    },
    {
      icon: <Mail className="w-5 h-5 text-nri-blue" />,
      title: "Email",
      details: "contact@nrihomeconnect.com",
    },
    {
      icon: <Clock className="w-5 h-5 text-nri-blue" />,
      title: "Office Hours",
      details: "Mon-Sat: 9AM - 6PM IST (8:30PM - 5:30AM PST)",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-open-sans">
            Get in <span className="text-nri-blue">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-nri-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to secure your property? Let's connect—your peace of mind is one click away.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-up">
            <Card className="border-none shadow-lg p-8 bg-white">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Send Us a Message
              </h3>
              <ContactForm />
            </Card>
          </div>

          <div className="space-y-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">{item.title}</h4>
                      <p className="text-gray-600">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Our Location
              </h3>
              <div className="rounded-lg overflow-hidden h-64 shadow-lg">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.292489522264!2d78.37693027492125!3d17.44938198381702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e8faec9d7f%3A0xaa5843440aac9c86!2sHitech%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1686639783583!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
