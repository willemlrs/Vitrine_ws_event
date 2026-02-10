
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/90 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/logo_ws_event_png.png" 
            alt="WS Event Logo" 
            className="h-12 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-white hover:text-secondary transition-colors">
            Services
          </a>
          <a href="#events" className="text-white hover:text-secondary transition-colors">
            Events
          </a>
          <a href="#testimonials" className="text-white hover:text-secondary transition-colors">
            Testimonials
          </a>
          <a href="#request" className="text-white hover:text-secondary transition-colors">
            Request Tickets
          </a>
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="outline" className="bg-transparent border-secondary text-secondary hover:bg-secondary/10">
            <a href="#contact">Contact Us</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black/95 border-t border-white/10 absolute w-full py-4 px-6 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-white hover:text-secondary transition-colors"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a 
              href="#events" 
              className="text-white hover:text-secondary transition-colors"
              onClick={toggleMenu}
            >
              Events
            </a>
            <a 
              href="#testimonials" 
              className="text-white hover:text-secondary transition-colors"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <a 
              href="#request" 
              className="text-white hover:text-secondary transition-colors"
              onClick={toggleMenu}
            >
              Request Tickets
            </a>


            <Button asChild variant="outline" className="w-full bg-transparent border-secondary text-secondary hover:bg-secondary/10">
              <a href="#contact" onClick={toggleMenu}>Contact Us</a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
