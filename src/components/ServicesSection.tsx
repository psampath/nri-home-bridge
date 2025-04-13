
import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Home, TrendingUp, FileText, Video } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Property Management",
      description: "Regular maintenance, tenant screening, and rent collection. We ensure your property remains in excellent condition.",
      icon: <Home className="w-10 h-10 text-nri-blue" />,
    },
    {
      title: "Real Estate Investment",
      description: "Market insights, property scouting, and legal guidance. We help you make informed decisions to grow your wealth.",
      icon: <TrendingUp className="w-10 h-10 text-nri-blue" />,
    },
    {
      title: "Legal Support",
      description: "Documentation, tax compliance, and dispute resolution. We navigate the complex legal landscape so you don't have to.",
      icon: <FileText className="w-10 h-10 text-nri-blue" />,
    },
    {
      title: "Virtual Updates",
      description: "Video tours and real-time reports for peace of mind. Stay connected to your property no matter where you are.",
      icon: <Video className="w-10 h-10 text-nri-blue" />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-open-sans">
            Our <span className="text-nri-blue">Services</span>
          </h2>
          <div className="w-20 h-1 bg-nri-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We specialize in Hyderabad's booming market, ensuring your investments grow while we handle the details.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none h-full shadow-lg hover:shadow-xl transition-shadow animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8 flex flex-col items-center text-center h-full">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 flex-grow">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-nri-blue p-8 rounded-lg shadow-lg text-white text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to secure your property's future?</h3>
          <p className="mb-6">Let our expert team in Hyderabad take care of your investment while you focus on what matters.</p>
          <button 
            className="bg-white text-nri-blue hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
