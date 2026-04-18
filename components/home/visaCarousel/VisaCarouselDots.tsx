"use client";

import { HOME_SECTION } from "@/lib/ui/homeSectionLayout";

type Props = {
  scrollSnaps: number[];
  selectedIndex: number;
  slideLabels: string[];
  onGoTo: (index: number) => void;
};

export function VisaCarouselDots({
  scrollSnaps,
  selectedIndex,
  slideLabels,
  onGoTo,
}: Props) {
  if (scrollSnaps.length <= 1) return null;

  return (
    <div
      className={`flex justify-center gap-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] ${HOME_SECTION.dotsTop}`}
      aria-label="Choose a destination"
    >
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`${slideLabels[index] ?? `Slide ${index + 1}`}${selectedIndex === index ? ", current slide" : ""}`}
          aria-current={selectedIndex === index ? "true" : undefined}
          onClick={() => onGoTo(index)}
          className={`h-2 rounded-full transition-all ${
            selectedIndex === index ? "w-6 bg-blue-500" : "w-2 bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
}
