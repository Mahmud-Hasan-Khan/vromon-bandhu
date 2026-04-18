"use client";

import type { UseEmblaCarouselType } from "embla-carousel-react";
import { useCallback, useEffect, useRef, type MutableRefObject } from "react";

type EmblaCarouselApi = NonNullable<UseEmblaCarouselType[1]>;

type CoverflowStrength = { rotateMul: number; zMul: number; blurMul: number };

export function useVisaCarouselCoverflow(
  emblaApi: EmblaCarouselApi | undefined,
  slidesRef: MutableRefObject<(HTMLDivElement | null)[]>,
  setSelectedIndex: (index: number) => void,
  setScrollSnaps: (snaps: number[]) => void
) {
  const coverflowRef = useRef<CoverflowStrength>({
    rotateMul: 1,
    zMul: 1,
    blurMul: 1,
  });
  const reduceMotionRef = useRef(false);

  const syncCoverflowStrength = useCallback(() => {
    if (typeof window === "undefined") return;
    reduceMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const w = window.innerWidth;
    if (w >= 1024) {
      coverflowRef.current = { rotateMul: 1, zMul: 1, blurMul: 1 };
    } else if (w >= 640) {
      coverflowRef.current = { rotateMul: 0.55, zMul: 0.55, blurMul: 0.7 };
    } else {
      coverflowRef.current = { rotateMul: 0.35, zMul: 0.4, blurMul: 0.5 };
    }
  }, []);

  useEffect(() => {
    syncCoverflowStrength();
    window.addEventListener("resize", syncCoverflowStrength);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotion = () => syncCoverflowStrength();
    mq.addEventListener("change", onMotion);
    return () => {
      window.removeEventListener("resize", syncCoverflowStrength);
      mq.removeEventListener("change", onMotion);
    };
  }, [syncCoverflowStrength]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());

    const update = () => {
      const progress = emblaApi.scrollProgress();
      const snaps = emblaApi.scrollSnapList();
      const { rotateMul, zMul, blurMul } = coverflowRef.current;
      const reduce = reduceMotionRef.current;

      slidesRef.current.forEach((slide, index) => {
        if (!slide) return;

        let diff = snaps[index] - progress;

        if (diff > 0.5) diff -= 1;
        if (diff < -0.5) diff += 1;

        const distance = Math.abs(diff);

        if (reduce) {
          slide.style.transform = "none";
          slide.style.opacity = `${1 - Math.min(distance * 0.35, 0.35)}`;
          slide.style.filter = "none";
          slide.style.zIndex = `${Math.round(100 - distance * 100)}`;
          return;
        }

        const scale = 1 - Math.min(distance * 0.5, 0.5);
        const rotate = diff * -90 * rotateMul;
        const translateZ = -distance * 600 * zMul;
        const opacity = 1 - Math.min(distance * 0.7, 0.7);
        const blur = distance * 2 * blurMul;

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

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());

    const onReInit = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      update();
    };

    emblaApi.on("scroll", update);
    emblaApi.on("reInit", onReInit);
    emblaApi.on("resize", update);
    emblaApi.on("select", onSelect);

    onSelect();
    update();

    return () => {
      emblaApi.off("scroll", update);
      emblaApi.off("reInit", onReInit);
      emblaApi.off("resize", update);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, setSelectedIndex, setScrollSnaps]);
}
