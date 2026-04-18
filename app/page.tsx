import { Suspense } from "react";
import dynamic from "next/dynamic";
import { getLightweightAirlines } from "@/lib/airlines.service";
import { getLightweightOffers } from "@/lib/offer.service";

import AirlinesPartnerMarquee from "@/components/home/airlinesPartner/AirlinesPartnerMarquee";
import OfferNoticeSlider from "@/components/home/offerSection/offerSlider";
import { VisaCarouselSkeleton } from "@/components/home/visaCarousel/VisaCarouselSkeleton";
import { SectionSkeleton } from "@/components/ui/skeleton/SectionSkeleton";
import { IOfferLight } from "@/types/offer.types";
import { IAirlineLight } from "@/types/airlines.types";
import { HOME_SECTION } from "@/lib/ui/homeSectionLayout";

export const revalidate = 3600;

const sectionShell = `${HOME_SECTION.panel} ${HOME_SECTION.stack}`;
const sectionEmpty = `${sectionShell} ${HOME_SECTION.panelPad} text-center`;

// These async components handle data fetching and allow streaming
async function OffersSection({ promise }: { promise: Promise<IOfferLight[]> }) {
  try {
    const offers = await promise;

    if (!offers?.length) {
      return (
        <div className={`${sectionEmpty} text-gray-500`}>
          No offers available at the moment.
        </div>
      );
    }

    return (
      <div className={sectionShell}>
        <OfferNoticeSlider cards={offers} />
      </div>
    );

  } catch (error) {
    return (
      <div className={`${sectionEmpty} text-red-500`}>
        Failed to load offers. Please try again later.
      </div>
    );
  }
}

async function AirlinesSection({ promise }: { promise: Promise<IAirlineLight[]> }) {
  try {
    const airlineMarquee = await promise;

    if (!airlineMarquee?.length) {
      return (
        <div className={`${sectionEmpty} text-gray-500`}>
          No airline partners available at the moment.
        </div>
      );
    }

    return (
      <div className={sectionShell}>
        <AirlinesPartnerMarquee MarqueeData={airlineMarquee} />
      </div>
    );

  } catch (error) {
    return (
      <div className={`${sectionEmpty} text-red-500`}>
        Failed to load airline partners.
      </div>
    );
  }
}

const VisaCarousel = dynamic(
  () => import("@/components/home/visaCarousel/VisaCarousel"),
  {
    loading: () => <VisaCarouselSkeleton />,
    ssr: true,
  }
);

export default function Home() {
  // 🔥 Start fetching immediately in parallel (Render-as-you-Fetch)
  const offersPromise = getLightweightOffers();
  const airlinesPromise = getLightweightAirlines();

  return (
    <div className="bg-slate-200 min-h-screen">
      <div className={"max-w-7xl mx-auto"}>
        <h1 className="text-4xl font-bold text-center pt-10">
          Welcome to My Next.js App
        </h1>
        <p className="text-center mt-4 text-gray-600 pb-6">
          Experience fast loading with optimized server resources.
        </p>

        <Suspense fallback={<SectionSkeleton />}>
          <OffersSection promise={offersPromise} />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <AirlinesSection promise={airlinesPromise} />
        </Suspense>

        <div className={sectionShell}>
          {/* Dynamic import splits Embla + carousel UI into a separate JS chunk for faster initial parse. */}
          <VisaCarousel />
        </div>
      </div>
    </div>
  );
}
