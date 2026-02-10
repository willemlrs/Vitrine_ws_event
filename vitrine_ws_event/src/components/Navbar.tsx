import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        {/* Left: Logo */}
        <div className="flex-1 flex items-center">
          <a href="#">
            <img
              src="/lovable-uploads/logo_ws_event_png.png"
              alt="WS Event Logo"
              className="h-12 w-auto"
            />
          </a>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden md:flex justify-center items-center space-x-8 flex-1">
          {/*<a href="#services" className="text-white hover:text-secondary transition-colors">
            {t("services")}
          </a>*/}
          <a href="#events" className="text-white hover:text-secondary transition-colors">
            {t("events.label")}
          </a>
          <a href="#testimonials" className="text-white hover:text-secondary transition-colors">
            {t("testimonials")}
          </a>
          <a href="#request" className="text-white hover:text-secondary transition-colors">
            {t("request_ticket")}
          </a>
        </nav>

        {/* Right: Contact + Language */}
        <div className="hidden md:flex items-center justify-end gap-4 flex-1">
          <Button asChild variant="outline" className="bg-transparent border-secondary text-secondary hover:bg-secondary/10">
            <a href="#contact">{t("contact")}</a>
          </Button>
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-end">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black/95 border-t border-white/10 absolute w-full py-4 px-6 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            {/*<a href="#services" className="text-white hover:text-secondary transition-colors" onClick={toggleMenu}>
              {t("services")}
            </a>*/}
            <a href="#events" className="text-white hover:text-secondary transition-colors" onClick={toggleMenu}>
              {t("events.label")}
            </a>
            <a href="#testimonials" className="text-white hover:text-secondary transition-colors" onClick={toggleMenu}>
              {t("testimonials")}
            </a>
            <a href="#request" className="text-white hover:text-secondary transition-colors" onClick={toggleMenu}>
              {t("request_ticket")}
            </a>
            {/* <Link to="/availability" className="text-white hover:text-secondary transition-colors" onClick={toggleMenu}>
              {t("availability")}
            </Link> */}
            <Button asChild variant="outline" className="w-full bg-transparent border-secondary text-secondary hover:bg-secondary/10">
              <a href="#contact" onClick={toggleMenu}>{t("contact")}</a>
            </Button>
            <div className="pt-2 border-t border-white/10">
              <LanguageSwitcher />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;