
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Trust Us", href: "#trust" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 py-3 transition-all duration-300",
        isScrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="#home" className="flex items-center">
          <span className={cn(
            "text-2xl font-bold font-open-sans",
            isScrolled ? "text-nri-blue" : "text-white"
          )}>
            NRI <span className="text-nri-gold">HomeConnect</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "font-open-sans font-semibold transition-colors duration-300",
                isScrolled 
                  ? "text-gray-700 hover:text-nri-blue" 
                  : "text-white hover:text-nri-gold"
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        <Button 
          className="hidden md:block bg-nri-blue hover:bg-blue-600 text-white"
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Get Started Today
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={cn(isScrolled ? "text-gray-700" : "text-white")} />
          ) : (
            <Menu className={cn(isScrolled ? "text-gray-700" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg w-full absolute top-14 left-0 py-4 px-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-nri-blue font-semibold py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button 
              className="bg-nri-blue hover:bg-blue-600 text-white w-full"
              onClick={() => {
                setIsMobileMenuOpen(false);
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Get Started Today
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
