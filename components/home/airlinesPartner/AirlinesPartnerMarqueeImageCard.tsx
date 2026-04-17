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
        <div className="pt-2 sm:pt-3 md:pt-4 pb-1 sm:pb-2 md:pb-3">
            <Marquee pauseOnHover speed={60} gradient={false}>
                {MarqueeData.map((logo, index) => (
                    <div
                        key={logo.id}
                        className="flex items-center gap-2 mx-4 sm:mx-5 md:mx-6"
                    >
                        <Image
                            src={logo.logo}
                            alt={logo.name}
                            width={35}
                            height={35}
                            sizes="35px"
                            className="object-contain"
                            priority={index < 5} // Prioritize loading the first few images
                        />
                        <h3 className="text-sm md:text-base font-medium whitespace-nowrap">{logo.name}</h3>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default AirlinesPartnerMarqueeImageCard;
