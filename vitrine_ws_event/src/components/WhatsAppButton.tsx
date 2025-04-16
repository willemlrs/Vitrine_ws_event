
import React from "react";
import { MessageSquare } from "lucide-react";

const WhatsAppButton = () => {
  // Replace with your actual WhatsApp number
  const whatsappNumber = "+123456789";
  const whatsappMessage = "Hello! I'm interested in event tickets.";
  
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110 duration-300"
      aria-label="Contact on WhatsApp"
    >
      <MessageSquare className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;
