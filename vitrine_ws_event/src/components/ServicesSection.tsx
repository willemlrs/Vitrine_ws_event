
import React, { useRef, useEffect } from "react";
import { CheckCircle, Star, Clock, Ticket } from "lucide-react";

const services = [
  {
    title: "Flexible Options",
    description: "From affordable seats to VIP access — we’ve got something for every budget.",
    icon: <Clock className="h-10 w-10 text-secondary" />
  },
  {
    title: "VIP & Premium Seats",
    description: "Enjoy the best views with exclusive seating, hospitality, and unique experiences.",
    icon: <Star className="h-10 w-10 text-secondary" />
  },
  {
    title: "Events Worldwide",
    description: "From Paris to New York — concerts, football, fights. You choose, we deliver.",
    icon: <Ticket className="h-10 w-10 text-secondary" />
  },
  {
    title: "Verified & Secure",
    description: "100% verified tickets. Real support. Peace of mind guaranteed.",
    icon: <CheckCircle className="h-10 w-10 text-secondary" />
  }
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    serviceRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="services" 
      className="py-20 bg-white"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 opacity-0" ref={el => serviceRefs.current[0] = el}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose ws_event?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          From premium seats to affordable options — we help you find the tickets that fit your vibe and your budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div 
              key={index}
              ref={el => serviceRefs.current[index + 1] = el}
              className="p-6 rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="p-3 rounded-lg bg-accent">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
