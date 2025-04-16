
import React from "react";
import { MessageSquare, Mail, Phone } from "lucide-react";

const Footer = () => {
  // Replace with your actual contact information
  const email = "contact@eventhorizon.com";
  const phone = "+1 (555) 123-4567";
  const whatsappNumber = "+123456789";
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=Hello! I'm interested in event tickets.`;
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-4">EventHorizon</h3>
            <p className="text-primary-foreground/80 mb-6">
              Your trusted source for premium event tickets worldwide. We specialize in hard-to-find tickets for sold-out and exclusive events.
            </p>
            <div className="flex space-x-4">
              <a 
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="h-5 w-5" />
              </a>
              <a 
                href={`mailto:${email}`}
                className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href={`tel:${phone}`}
                className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#events" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Featured Events
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#request" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Request Tickets
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Event Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#events" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Concerts
                </a>
              </li>
              <li>
                <a href="#events" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Sports
                </a>
              </li>
              <li>
                <a href="#events" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Theatre & Broadway
                </a>
              </li>
              <li>
                <a href="#events" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Festivals
                </a>
              </li>
              <li>
                <a href="#events" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Special Events
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>© {currentYear} EventHorizon. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            {" | "}
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
