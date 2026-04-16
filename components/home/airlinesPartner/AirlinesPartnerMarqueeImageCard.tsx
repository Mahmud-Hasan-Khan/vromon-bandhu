'use client';

import { IAirlineLight } from "@/types/airlines.types";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const AirlinesPartnerMarqueeImageCard = ({
    MarqueeData,
}: { MarqueeData: IAirlineLight[] }) => {
    if (!MarqueeData || MarqueeData.length === 0) {
        return null;
    }

    return (
        <div className="py-2 sm:py-3 md:py-4">
            <Marquee pauseOnHover speed={60} gradient={false}>
                {MarqueeData.map((logo, index) => (
                    <div
                        key={logo.id}
                        className="flex items-center gap-3 mx-8"
                    >
                        <Image
                            src={logo.logo}
                            alt={logo.name}
                            width={30}
                            height={30}
                            style={{ width: "auto", height: "auto" }}
                            className="object-contain"
                            priority={index < 5} // Prioritize loading the first few images
                        />
                        <h3 className="text-sm md:text-base font-semibold whitespace-nowrap">{logo.name}</h3>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default AirlinesPartnerMarqueeImageCard;
