import React, { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Music Enthusiast",
    message: "I couldn't believe how easy it was to get front-row tickets to a sold-out Taylor Swift concert. The VIP experience was unforgettable!",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    name: "Marcus Reynolds",
    role: "Sports Fan",
    message: "Thanks to EventHorizon, I was able to secure Champions League final tickets for me and my son. The memories we made will last a lifetime.",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg"
  },
  {
    id: 3,
    name: "Emily Parker",
    role: "Theatre Lover",
    message: "I've been trying to get Hamilton tickets for years. One email to EventHorizon and within days I had premium seats. Truly exceptional service!",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg"
  },
  {
    id: 4,
    name: "Daniel Kim",
    role: "Festival Goer",
    message: "The Coachella VIP package I got through EventHorizon included accommodations and exclusive access. It was worth every penny!",
    avatar: "https://randomuser.me/api/portraits/men/17.jpg"
  },
  {
    id: 5,
    name: "Alexandra Thompson",
    role: "Concert Enthusiast",
    message: "I've used EventHorizon for three major concerts now, and each time they've delivered premium seats with no hassle. My go-to ticket source!",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg"
  },
  {
    id: 6,
    name: "Alexandra Thompson",
    role: "Concert Enthusiast",
    message: "I've used EventHorizon for three major concerts now, and each time they've delivered premium seats with no hassle. My go-to ticket source!",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg"
  },
  {
    id: 7,
    name: "Alexandra Thompson",
    role: "Concert Enthusiast",
    message: "I've used EventHorizon for three major concerts now, and each time they've delivered premium seats with no hassle. My go-to ticket source!",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg"
  },
  {
    id: 8,
    name: "Alexandra Thompson",
    role: "Concert Enthusiast",
    message: "I've used EventHorizon for three major concerts now, and each time they've delivered premium seats with no hassle. My go-to ticket source!",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg"
  },
  {
    id: 9,
    name: "Alexandra Thompson",
    role: "Concert Enthusiast",
    message: "I've used EventHorizon for three major concerts now, and each time they've delivered premium seats with no hassle. My go-to ticket source!",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg"
  }
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Supprimer les doublons dans les témoignages
  const uniqueTestimonials = Array.from(
    new Map(testimonials.map((item) => [item.id, item])).values()
  );

  // Détecte le nombre de slides par page selon la largeur de l'écran
  const computeItemsPerPage = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }
    return 1;
  };

  // Met à jour itemsPerPage lors du resize
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(computeItemsPerPage());
      setCurrentIndex(0); // reset à la première page
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calcule le nombre de pages
  const maxIndex = uniqueTestimonials.length - itemsPerPage;

  const nextSlide = () => {
    if (currentIndex < uniqueTestimonials.length - itemsPerPage) {
      setCurrentIndex((prev) => prev + 1); // Avance d'un seul élément
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1); // Recule d'un seul élément
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experiences.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)`,
                width: `${uniqueTestimonials.length * (100 / itemsPerPage)}%`,
              }}
            >
              {uniqueTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  style={{
                    width: `${100 / itemsPerPage}%`,
                    flex: `0 0 ${100 / itemsPerPage}%`,
                  }}
                  className="px-4"
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <Quote className="h-10 w-10 text-secondary mb-4 opacity-60" />
                      <p className="text-foreground mb-6 italic">"{testimonial.message}"</p>
                      <div className="flex items-center">
                        <Avatar className="h-12 w-12 mr-4">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`rounded-full transition-opacity ${
                currentIndex === 0 ? "opacity-40 cursor-not-allowed" : ""
              }`}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className={`rounded-full transition-opacity ${
                currentIndex >= maxIndex ? "opacity-40 cursor-not-allowed" : ""
              }`}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
