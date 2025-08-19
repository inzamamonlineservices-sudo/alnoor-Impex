import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const texts = ["Connecting Markets", "Delivering Quality", "Building Trust"];

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    
    if (isTyping) {
      const typingTimer = setTimeout(() => {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setDisplayText("");
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }, 2000);
        }
      }, 100);
      
      return () => clearTimeout(typingTimer);
    }
  }, [currentTextIndex, displayText, isTyping, texts]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080"
          alt="Modern textile manufacturing facility"
          className="w-full h-full object-cover"
          data-testid="img-hero-background"
        />
        <div className="absolute inset-0 hero-video-overlay"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in" 
          data-testid="text-hero-title"
        >
          Alnoor Impex
        </h1>
        <div 
          className="text-xl sm:text-2xl lg:text-3xl font-light mb-8 animate-fade-in-delay"
          data-aos="fade"
          data-aos-duration="180"
          data-aos-delay="60"
        >
          <span
            className="transition-opacity duration-300"
            data-testid="text-hero-rotating"
          >
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </div>
        <p 
          className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay-2" 
          data-testid="text-hero-description"
          data-aos="fade"
          data-aos-duration="200"
          data-aos-delay="60"
        >
          With over a decade of proven expertise, Al Noor Impex is a trusted global textile sourcing partner. We connect buyers with leading suppliers of yarn, fabrics, garments, and home furnishings, ensuring quality, reliability, and seamless trade across international markets.
        </p>
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3"
          data-aos="fade"
          data-aos-duration="200"
          data-aos-delay="60"
        >
          <Link href="/services" data-testid="button-hero-services">
            <Button size="lg" className="bg-accent text-white hover:bg-blue-600 px-8 py-3 text-lg">
              Explore Our Services
            </Button>
          </Link>
          <Link href="/contact" data-testid="button-hero-contact">
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-3 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        data-aos="fade"
        data-aos-duration="180"
      >
        <div className="scroll-indicator text-white text-2xl" data-testid="icon-scroll-indicator">
          <ChevronDown />
        </div>
      </div>
    </section>
  );
}
