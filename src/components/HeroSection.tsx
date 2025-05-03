
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden"
    >
      {/* Background Image - Using background image for parallax effect */}
      <div 
        className="absolute inset-0 bg-blend-overlay"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=2071')", // Singapore cityscape
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          opacity: 0.4
        }}
      >
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-open-sans">
            Your Trusted Partner for All Property Needs
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-open-sans">
            From the US to India, we bridge the gap—managing and designing your properties with care. Starting in Hyderabad, expanding soon.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className={cn(
                "bg-nri-blue hover:bg-blue-600 text-white text-lg px-8 py-6",
              )}
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Start Your Journey
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white hover:bg-white/10 text-white text-lg px-8 py-6"
              onClick={() => {
                const servicesSection = document.getElementById("services");
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Our Services
            </Button>
          </div>
          
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="w-3 h-3 bg-nri-gold rounded-full"></span>
            <p className="text-white text-sm md:text-base">
              Founded by individuals who lived in the US for 15 years
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5L12 19M12 19L18 13M12 19L6 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
