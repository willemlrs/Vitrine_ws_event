
import React, { useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: "JUL",
    date: "15-16 mai (Paris) · 29-30 mai (Marseille)",
    location: "Paris & Marseille, France",
    image: "jul.jpg",
    category: "Concert",
    isVIP: true
  },
  {
    id: 2,
    title: "Finale Ligue des Champions",
    date: "30 mai 2026",
    location: "Budapest, Hongrie - Puskás Aréna",
    image: "uclf.webp",
    category: "Sports",
    isVIP: true
  },
  {
    id: 3,
    title: "Bad Bunny",
    date: "30 mai - 15 juin 2026",
    location: "Madrid, Espagne - Estadio Riyadh Air Metropolitano",
    image: "badbunny.jpg",
    category: "Concert",
    isVIP: true
  },
  {
    id: 4,
    title: "Formula 1 Monaco Grand Prix",
    date: "May 25, 2025",
    location: "Monte Carlo, Monaco",
    image: "https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Sports",
    isVIP: true
  },
  {
    id: 5,
    title: "The Lion King - Broadway",
    date: "Multiple dates",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1616442761540-83f65689acf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Theatre",
    isVIP: false
  },
  {
    id: 6,
    title: "Ed Sheeran World Tour",
    date: "July 8, 2025",
    location: "Sydney, Australia",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Concert",
    isVIP: false
  }
];

const EventsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const eventRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    
    eventRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case "Concert":
        return "bg-pink-500";
      case "Sports":
        return "bg-blue-500";
      case "Festival":
        return "bg-purple-500";
      case "Theatre":
        return "bg-indigo-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section 
      id="events" 
      className="py-20 bg-muted"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 opacity-0" ref={el => eventRefs.current[0] = el}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Events</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Secure your tickets now for these high-demand events before they sell out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {upcomingEvents.slice(0, 3).map((event, index) => (
            <div 
              key={event.id}
              className="opacity-0"
              ref={el => eventRefs.current[index + 1] = el}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-xl">
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className={`${getCategoryColor(event.category)} text-white`}>
                      {event.category}
                    </Badge>
                    {event.isVIP && (
                      <Badge className="bg-secondary text-secondary-foreground">
                        VIP Available
                      </Badge>
                    )}
                  </div>
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <CalendarDays className="h-4 w-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-6">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <Button asChild className="w-full">
                    <a href="#request">Request Tickets</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
