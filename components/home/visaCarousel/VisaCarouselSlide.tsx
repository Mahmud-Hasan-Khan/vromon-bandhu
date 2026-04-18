"use client";

import Image from "next/image";
import type { VisaDestination } from "./visaCarouselData";

type Props = {
  item: VisaDestination;
  coverRef: (el: HTMLDivElement | null) => void;
};

export function VisaCarouselSlide({ item, coverRef }: Props) {
  return (
    <div className="min-w-0 flex-[0_0_86%] pl-1.5 pr-1.5 sm:flex-[0_0_50%] sm:px-3 lg:flex-[0_0_33.3333%] lg:px-4">
      <div
        className="relative h-[min(20rem,72svh)] w-full origin-center rounded-2xl shadow-lg ring-1 ring-black/5 sm:h-[min(24rem,65vh)] sm:rounded-3xl sm:shadow-xl lg:h-[26rem]"
        style={{ transformStyle: "preserve-3d" }}
        ref={coverRef}
      >
        <div className="relative h-full w-full overflow-hidden rounded-2xl sm:rounded-3xl">
          <Image
            src={item.image}
            alt=""
            fill
            sizes="(max-width: 639px) 86vw, (max-width: 1023px) 50vw, 33vw"
            className="pointer-events-none object-cover"
            draggable={false}
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/85 via-black/25 to-transparent p-4 pb-5 text-white sm:p-5">
            <h3 className="text-lg font-semibold leading-snug sm:text-xl">
              {item.title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
