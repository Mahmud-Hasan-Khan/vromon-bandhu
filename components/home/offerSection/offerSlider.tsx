"use client";

import { useCallback, useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import OfferCard from "./offerCard";
import { IOfferLight } from "@/types/offer.types";
import SectionTitle from "@/components/ui/sectionTitle/SectionTitle";
import { HOME_SECTION } from "@/lib/ui/homeSectionLayout";

const OfferNoticeSlider = ({ cards }: { cards: IOfferLight[] }) => {
    const router = useRouter();
    const [selectedIndex, setSelectedIndex] = useState(0);

    const autoplay = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
    );

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "start" },
        [autoplay.current]
    );

    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    useEffect(() => {
        if (!emblaApi) return;

        setScrollSnaps(emblaApi.scrollSnapList());

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on("select", onSelect);
        onSelect();

        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi]);

    const handleCardClick = useCallback(
        (id: string) => {
            router.push(`/offer/${id}`);
        },
        [router]
    );

    if (!cards?.length) {
        return (
            <p className={`text-center ${HOME_SECTION.panelPad}`}>No offers available</p>
        );
    }

    return (
        <div className={`relative w-full ${HOME_SECTION.panelPad}`}>
            <SectionTitle
                heading="Exclusive Offers"
                subheading="Check out our latest deals and discounts"
            />

            <div ref={emblaRef} className="overflow-hidden">
                <div className="flex">
                    {cards.map((card, index) => (
                        <div
                            key={card.id}
                            className={`flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] ${HOME_SECTION.slideCell}`}
                        >
                            <OfferCard
                                card={card}
                                index={index}
                                onClick={() => handleCardClick(card.id)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots based on scroll snaps */}
            {scrollSnaps.length > 1 && (
                <div className={`flex justify-center gap-2 ${HOME_SECTION.dotsTop}`}>
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => emblaApi?.scrollTo(index)}
                            className={`h-2 rounded-full transition-all ${selectedIndex === index
                                ? "w-6 bg-blue-500"
                                : "w-2 bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default OfferNoticeSlider;