import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Logo {
  name: string;
  src: string;
  alt: string;
}

const logos: Logo[] = [
  { name: "Jubilee", src: "/jubilee-.png", alt: "Jubilee Insurance" },
  { name: "Britam", src: "/britam.png", alt: "Britam Insurance" },
  { name: "Old Mutual", src: "/oldmutual.png", alt: "Old Mutual Insurance" },
  { name: "Heritage", src: "/heritage.png", alt: "Heritage Insurance" },
  { name: "Madison", src: "/madison.png", alt: "Madison Insurance" },
  { name: "GA Insurance", src: "/ga-insurance.png", alt: "GA Insurance" },
  { name: "Sanlam", src: "/sanlam.png", alt: "Sanlam Insurance" },
];

const LogoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 768) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, logos.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const visibleLogos = logos.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4">
      <Button
        variant="ghost"
        size="icon"
        onClick={handlePrev}
        className="h-8 w-8 sm:h-10 sm:w-10 rounded-full hover:bg-muted flex-shrink-0"
        aria-label="Previous logos"
      >
        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
      </Button>

      <div className="flex-1 overflow-hidden">
        <div className="grid gap-2 sm:gap-4" style={{ gridTemplateColumns: `repeat(${itemsPerView}, 1fr)` }}>
          {visibleLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center bg-white rounded-lg p-2 sm:p-4 border border-border hover:shadow-md transition-shadow"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="max-h-12 sm:max-h-16 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        onClick={handleNext}
        className="h-8 w-8 sm:h-10 sm:w-10 rounded-full hover:bg-muted flex-shrink-0"
        aria-label="Next logos"
      >
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
      </Button>
    </div>
  );
};

export default LogoCarousel;
