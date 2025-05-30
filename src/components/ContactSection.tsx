
import React from "react";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  const contactInfo = [
    // {
    //   icon: <MapPin className="w-5 h-5 text-nri-blue" />,
    //   title: "Address",
    //   details: "1-1-724/2, Gandhinagar, Hyderabad, Telangana, 500080",
    // },
    {
      icon: <Phone className="w-5 h-5 text-nri-blue" />,
      title: "Phone",
      details: "+1 331-684-8428",
    },
    {
      icon: <Mail className="w-5 h-5 text-nri-blue" />,
      title: "Email",
      details: "info@nrihomeconnect.com",
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
            Ready to secure or transform your Indian property? Let's connect—your vision is one click away.
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
