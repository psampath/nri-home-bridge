
import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-open-sans">
            About Me / <span className="text-nri-blue">Why Us</span>
          </h2>
          <div className="w-20 h-1 bg-nri-gold mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto border-4 border-nri-gold">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-nri-blue text-white py-2 px-4 rounded-lg shadow-lg">
                <p className="text-sm font-semibold">12+ years in the US</p>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 animate-fade-up">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-nri-blue mb-4 font-open-sans">
                  I've Walked in Your Shoes
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  I'm Raj Sharma, an Indian who moved to the US at 21 and lived there for 12 years. I know firsthand the pulse of NRIs—the longing to stay connected to India, the worry about aging parents' properties, and the frustration of dealing with unreliable vendors from afar.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Now back in Hyderabad, I started NRI HomeConnect to solve these pain points. Having experienced both worlds, I understand the unique challenges NRIs face when managing properties remotely. The time differences, language barriers, and finding trustworthy partners shouldn't keep you from protecting your investments.
                </p>
                <p className="text-gray-700 leading-relaxed font-semibold">
                  I treat your property like my own—whether it's finding tenants, handling repairs, or guiding investments. My US experience and Indian roots give me a unique perspective to serve you better.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-lg">
                    <div className="w-10 h-10 bg-nri-blue/10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-nri-blue"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
                    </div>
                    <span className="font-medium">Experience in Both Worlds</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-lg">
                    <div className="w-10 h-10 bg-nri-blue/10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-nri-blue"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    </div>
                    <span className="font-medium">Personal Care</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-lg">
                    <div className="w-10 h-10 bg-nri-blue/10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-nri-blue"><path d="M21 2H3v16h5v4l4-4h4l5-5V2zM12 10v.01M8 10v.01M16 10v.01"></path></svg>
                    </div>
                    <span className="font-medium">Cultural Understanding</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
