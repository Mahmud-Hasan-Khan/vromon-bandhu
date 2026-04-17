"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef } from "react";
import Image from "next/image";

type Item = {
  id: number;
  title: string;
  image: string;
};

const data: Item[] = [
  {
    id: 1,
    title: "Singapore",
    image:
      "https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=1200",
  },
  {
    id: 2,
    title: "Kuala Lumpur",
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1200",
  },
  {
    id: 3,
    title: "Maldives",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
  },
  {
    id: 4,
    title: "Kolkata",
    image:
      "https://images.unsplash.com/photo-1599661046827-dacde6976548?q=80&w=1200",
  },
  {
    id: 5,
    title: "Bangkok",
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1200",
  },
];

export default function EmblaCoverflow3() {
  // 🔥 Start from center (CRITICAL FIX)
  const startIndex = Math.floor(data.length / 2);

  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      startIndex, // ✅ ensures 3 slides from first render
    },
    [autoplay.current]
  );

  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!emblaApi) return;

    const update = () => {
      const progress = emblaApi.scrollProgress();
      const snaps = emblaApi.scrollSnapList();

      slidesRef.current.forEach((slide, index) => {
        if (!slide) return;

        let diff = snaps[index] - progress;

        // 🔥 loop fix
        if (diff > 0.5) diff -= 1;
        if (diff < -0.5) diff += 1;

        const distance = Math.abs(diff);

        // 🎯 Coverflow effect
        const scale = 1 - Math.min(distance * 0.5, 0.5);
        const rotate = diff * -90;
        const translateZ = -distance * 600;
        const opacity = 1 - Math.min(distance * 0.7, 0.7);
        const blur = distance * 2;

        slide.style.transform = `
          perspective(1400px)
          translateZ(${translateZ}px)
          rotateY(${rotate}deg)
          scale(${scale})
        `;

        slide.style.opacity = `${opacity}`;
        slide.style.filter = `blur(${blur}px)`;
        slide.style.zIndex = `${Math.round(100 - distance * 100)}`;
      });
    };

    emblaApi.on("scroll", update);
    emblaApi.on("reInit", update);

    update();
  }, [emblaApi]);

  return (
    <div className="py-20">
      {/* Heading */}
      <h2 className="text-center text-4xl font-bold mb-12">
        Popular Destinations
      </h2>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex items-center">
          {data.map((item, index) => (
            <div
              key={item.id}
              className="flex-[0_0_33.3333%] min-w-0 px-4"
              ref={(el) => {
                slidesRef.current[index] = el;
              }}
            >
              <div className="relative h-105 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/20" />

                {/* content */}
                <div className="absolute bottom-0 w-full p-5 bg-linear-to-t from-black/80 to-transparent text-white">
                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}