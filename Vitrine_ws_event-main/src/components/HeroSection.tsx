
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current && textRef.current) {
        const scrollPosition = window.scrollY;
        const opacity = 1 - scrollPosition / 700;
        const translateY = scrollPosition * 0.3;
        
        textRef.current.style.opacity = Math.max(0, opacity).toString();
        textRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-primary/5"
    >
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-center"
        style={{ transform: "scale(1.1)" }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div 
        ref={textRef} 
        className="container mx-auto px-4 relative z-10 text-center"
      >
        <img 
          src="/lovable-uploads/logo_ws_event_png.png" 
          alt="WS Event Logo" 
          className="w-32 md:w-48 mx-auto mb-8 animate-fade-in"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg animate-fade-in">
          ws_event
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-md animate-fade-in italic">
          One ticket, one atmosphere, one memory forever
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button asChild size="lg" className="text-lg bg-secondary text-primary hover:bg-secondary/90">
            <a href="#request">Request Tickets</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg bg-transparent border-white text-white hover:bg-white/10">
            <a href="#events">Browse Events</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services">
          <ChevronDown className="h-8 w-8 text-white drop-shadow-md" />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
