
import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Languages, Shield, Map, LucideCreditCard, PaintBucket } from "lucide-react";

const TrustSection = () => {
  const trustFactors = [
    {
      title: "We understand time zone challenges",
      description: "We work around your schedule, with flexible meeting times and quick response rates, no matter where you are in the US.",
      icon: <Clock className="w-8 h-8 text-nri-blue" />,
    },
    {
      title: "We bridge language and cultural barriers",
      description: "Our team navigates local dialects and cultural nuances that often confuse overseas investors and homeowners.",
      icon: <Languages className="w-8 h-8 text-nri-blue" />,
    },
    {
      title: "We provide complete transparency",
      description: "Regular video updates, 3D design renders, detailed reports, and secure online portals keep you informed and confident.",
      icon: <Shield className="w-8 h-8 text-nri-blue" />,
    },
    {
      title: "We know India's markets inside out",
      description: "Starting with Hyderabad and expanding soon, our local expertise helps you make smart investment and design decisions.",
      icon: <Map className="w-8 h-8 text-nri-blue" />,
    },
    {
      title: "We blend tradition with modernity",
      description: "Our designs weave Indian heritage with global functionality, creating spaces that feel like home no matter where you live.",
      icon: <PaintBucket className="w-8 h-8 text-nri-blue" />,
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
              After 15 years in the US, I know the NRI heartbeat: the anxiety of properties left unattended, the fear of designs that don't match your vision, and the hassle of coordinating across time zones. At NRI HomeConnect, we make it simple.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We offer video updates for property checks, 3D renders for design plans, and clear pricing with no hidden fees. Our vetted Hyderabad team—builders, designers, realtors—ensures your investment and dreams are safe. Starting in Hyderabad, we're building a trusted network to serve all of India soon.
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
                  <h4 className="font-semibold">Partnered with top real estate and design firms</h4>
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
              <div className="flex items-center mt-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md mr-4">
                  <PaintBucket className="w-6 h-6 text-nri-gold" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">We craft homes that weave Indian traditions with global style</h4>
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
