// import { IOfferLight } from '@/types/offer.types';
// import Image from 'next/image';
// import { memo } from 'react';

// const OfferCard = (
//     {
//         card,
//         onClick,
//         index
//     }: {
//         card: IOfferLight;
//         onClick: () => void;
//         index: number;
//     }) => {
//     const isPriority = index < 3; // First card is priority
//     return (
//         <div
//             onClick={onClick}
//             onKeyDown={(e) => {
//                 if (e.key === "Enter" || e.key === " ") {
//                     e.preventDefault();
//                     onClick();
//                 }
//             }}
//             role="button"
//             tabIndex={0}
//             aria-label={`View details for ${card.title}`}
//             className="relative cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:scale-[1.05] transition-transform group border-t-2 border-t-blue-500"
//         >
//             <div className="relative w-full h-44 rounded-lg overflow-hidden bg-gray-200">
//                 <Image
//                     src={card.image}
//                     alt={card.title}
//                     priority={isPriority}
//                     fill
//                     className="object-fill transition-transform duration-500 group-hover:scale-105"
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                 />
//             </div>

//             {/* Smooth Grow Overlay */}
//             <div className="absolute inset-0 flex items-end overflow-hidden">
//                 <div className="w-full h-0 group-hover:h-full bg-transparent group-hover:bg-black/80 group-hover:bg-opacity-80 transition-all duration-500 ease-in-out flex flex-col items-center justify-end p-6 rounded-b-lg">

//                     {/* Title */}
//                     <h3 className="text-white text-lg font-bold mb-5 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
//                         {card.title}
//                     </h3>

//                     {/* Button */}
//                     <span className="px-2 py-1 bg-[#1882ff] text-white rounded-md font-semibold opacity-0 translate-y-5 cursor-pointer group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 hover:bg-[#126fde]">
//                         View Details
//                     </span>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default memo(OfferCard);

import { IOfferLight } from '@/types/offer.types';
import Image from 'next/image';
import { memo, useState } from 'react';

const OfferCard = (
    {
        card,
        onClick,
        index
    }: {
        card: IOfferLight;
        onClick: () => void;
        index: number;
    }) => {
    const isPriority = index < 3;
    const [active, setActive] = useState(false);

    const handleInteraction = () => {
        // 📱 Mobile logic
        if (window.innerWidth < 768 && !active) {
            setActive(true); // first tap → শুধু show
        } else {
            onClick(); // second tap → redirect
        }
    };

    return (
        <div
            onClick={handleInteraction} // mobile tap to show overlay
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleInteraction()}
            role="button"
            tabIndex={0}
            aria-label={`View details for ${card.title}`}
            onMouseLeave={() => setActive(false)} // মাউস সরিয়ে নিলে রিসেট হবে
            className="relative cursor-pointer bg-white rounded-lg shadow-md shadow-black/40 overflow-hidden hover:scale-[1.05] transition-transform group border-t-2 border-t-blue-500"
        >
            {/* Image */}
            <div className="relative w-full h-44 rounded-lg overflow-hidden bg-gray-200">
                <Image
                    src={card.image}
                    alt={card.title}
                    priority={isPriority}
                    fill
                    className="object-fll transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 flex items-end overflow-hidden">
                <div
                    className={`
                        w-full transition-all duration-500 ease-in-out 
                        flex flex-col items-center justify-end 
                        p-6 rounded-b-lg

                        ${active
                            ? "h-full bg-black/80"
                            : "h-0 bg-transparent"
                        }

                        md:h-0 
                        md:bg-transparent 
                        md:group-hover:h-full 
                        md:group-hover:bg-black/80
                    `}
                >
                    {/* Title */}
                    <h3
                        className={`
                            text-white text-lg font-bold mb-5 transition-all duration-500 delay-100
                            ${active
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-5"
                            }

                            md:opacity-0 md:translate-y-5
                            md:group-hover:opacity-100 md:group-hover:translate-y-0
                        `}
                    >
                        {card.title}
                    </h3>

                    {/* Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onClick();
                        }}
                        className={`
                            px-2 py-1 bg-[#1882ff] text-white rounded-md font-semibold 
                            transition-all duration-500 delay-100 hover:bg-[#126fde]

                            ${active
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-5"
                            }

                            md:opacity-0 md:translate-y-5
                            md:group-hover:opacity-100 md:group-hover:translate-y-0
                        `}
                    >
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default memo(OfferCard);