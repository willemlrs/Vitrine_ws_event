import React, { useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Clock } from "lucide-react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { SiX } from "react-icons/si"; // logo X pour Twitter

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contactRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const options = { root: null, rootMargin: "0px", threshold: 0.1 };
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          obs.unobserve(entry.target);
        }
      });
    }, options);

    if (sectionRef.current) observer.observe(sectionRef.current);
    contactRefs.current.forEach(ref => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  const email = "ws.event.paris@gmail.com";
  const phone = "+33651420243";
  const hours = "24/7";

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-muted" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 opacity-0" ref={el => contactRefs.current[0] = el}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have questions or need to get in touch? We're here to help you find the perfect tickets.
          </p>
        </div>

        <Card className="max-w-5xl mx-auto opacity-0" ref={el => contactRefs.current[1] = el}>
          <CardContent className="p-6 md:flex md:items-start md:justify-between">
            {/* Left: contact infos */}
            <div className="space-y-4 md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-primary mt-1 mr-3" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href={`mailto:${email}`} className="text-primary hover:underline">
                    {email}
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-primary mt-1 mr-3" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href={`tel:${phone}`} className="text-primary hover:underline">
                    {phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-primary mt-1 mr-3" />
                <div>
                  <p className="font-medium">Business Hours</p>
                  <p className="text-muted-foreground">{hours}</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block h-full w-px bg-border mx-6" />

            {/* Right: social links */}
            <div className="mt-10 md:mt-0 md:w-1/2 flex flex-col items-start gap-6">
              <h3 className="text-xl font-semibold">Follow us</h3>
              <a href="https://www.instagram.com/ws_event_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary hover:text-secondary transition">
                <FaInstagram className="text-2xl" /> Instagram
              </a>
              <a href="https://twitter.com/ws_event" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary hover:text-secondary transition">
                <SiX className="text-2xl" /> X
              </a>
              <a href="https://www.tiktok.com/@ws_event" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary hover:text-secondary transition">
                <FaTiktok className="text-2xl" /> TikTok
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
