
import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Languages, Shield, Map, LucideCreditCard } from "lucide-react";

const TrustSection = () => {
  const trustFactors = [
    {
      title: "We understand time zone challenges",
      description: "We work around your schedule, with flexible meeting times and quick response rates.",
      icon: <Clock className="w-8 h-8 text-nri-blue" />,
    },
    {
      title: "We bridge language and cultural barriers",
      description: "Our team navigates local dialects and cultural nuances that often confuse overseas investors.",
      icon: <Languages className="w-8 h-8 text-nri-blue" />,
    },
    {
      title: "We provide complete transparency",
      description: "Regular video updates, detailed reports, and secure online portals keep you informed.",
      icon: <Shield className="w-8 h-8 text-nri-blue" />,
    },
    {
      title: "We know Hyderabad's market inside out",
      description: "Our local expertise helps you make smart investment decisions in this booming tech hub.",
      icon: <Map className="w-8 h-8 text-nri-blue" />,
    },
    {
      title: "We offer secure, US-friendly payments",
      description: "Seamless transactions through platforms you already trust, with no hidden fees.",
      icon: <LucideCreditCard className="w-8 h-8 text-nri-blue" />,
    },
  ];

  return (
    <section id="trust" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-open-sans">
            Why NRIs <span className="text-nri-blue">Trust Us</span>
          </h2>
          <div className="w-20 h-1 bg-nri-gold mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 p-8 rounded-lg animate-fade-up">
            <h3 className="text-2xl font-semibold text-nri-blue mb-6">We Address Your Pain Points</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We know the challenges you face: time zone hassles, language barriers, and the fear of being cheated. As someone who's lived in the US, I understand your need for transparency and efficiency. We use secure systems, provide video updates, and work with verified local partners in Hyderabad. Your property is safe with us, no matter where you are.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The emotional connection to your Indian property is something we deeply understand. Whether it's preserving a family home or investing in your roots, we honor that connection with personalized care and regular updates that keep you connected to your investment.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex gap-8 mb-8">
              <div className="flex-1 bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-3xl font-bold text-nri-blue">100+</h3>
                <p className="text-gray-600">NRIs Served</p>
              </div>
              <div className="flex-1 bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-3xl font-bold text-nri-blue">5+</h3>
                <p className="text-gray-600">Years in Business</p>
              </div>
              <div className="flex-1 bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-3xl font-bold text-nri-blue">24/7</h3>
                <p className="text-gray-600">Support</p>
              </div>
            </div>
            <div className="p-6 rounded-lg bg-nri-blue/5 border border-nri-blue/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md mr-4">
                  <img src="https://cdn-icons-png.flaticon.com/512/197/197484.png" alt="Indian Flag" className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">Partnered with Hyderabad's top real estate firms</h4>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md mr-4">
                  <img src="https://cdn-icons-png.flaticon.com/512/197/197374.png" alt="US Flag" className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">Secure payments via US-friendly platforms</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustFactors.map((factor, index) => (
            <Card key={index} className="border border-gray-200 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 flex gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                  {factor.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">{factor.title}</h4>
                  <p className="text-gray-600 text-sm">{factor.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
