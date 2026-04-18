"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState } from "react";

import { VisaCarouselDots } from "./VisaCarouselDots";
import { VisaCarouselSlide } from "./VisaCarouselSlide";
import { VISA_CAROUSEL_DESTINATIONS } from "./visaCarouselData";
import { useVisaCarouselCoverflow } from "./useVisaCarouselCoverflow";
import SectionTitle from "@/components/ui/sectionTitle/SectionTitle";
import { HOME_SECTION } from "@/lib/ui/homeSectionLayout";

export default function VisaCarousel() {
  const data = VISA_CAROUSEL_DESTINATIONS;
  const startIndex = Math.floor(data.length / 2);

  const autoplay = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      startIndex,
      containScroll: false,
    },
    [autoplay.current]
  );

  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(startIndex);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useVisaCarouselCoverflow(
    emblaApi,
    slidesRef,
    setSelectedIndex,
    setScrollSnaps
  );

  return (
    <section
      className={HOME_SECTION.panelPad}
      aria-roledescription="carousel"
      aria-label="Popular travel destinations"
    >
        <SectionTitle
          heading="Popular Destinations"
          subheading="Explore the best travel destinations"
        />

      <div className="overflow-hidden select-none" ref={emblaRef}>
        <div className="flex touch-pan-y items-center [-webkit-tap-highlight-color:transparent]">
          {data.map((item, index) => (
            <VisaCarouselSlide
              key={item.id}
              item={item}
              coverRef={(el) => {
                slidesRef.current[index] = el;
              }}
            />
          ))}
        </div>
      </div>

      <VisaCarouselDots
        scrollSnaps={scrollSnaps}
        selectedIndex={selectedIndex}
        slideLabels={data.map((d) => d.title)}
        onGoTo={(index) => emblaApi?.scrollTo(index)}
      />
    </section>
  );
}
