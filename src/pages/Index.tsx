
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="font-open-sans">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TrustSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
