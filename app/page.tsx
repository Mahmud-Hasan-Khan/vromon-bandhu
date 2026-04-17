import { Suspense } from "react";
import { getLightweightAirlines } from "@/lib/airlines.service";
import { getLightweightOffers } from "@/lib/offer.service";

import AirlinesPartnerMarquee from "@/components/home/airlinesPartner/AirlinesPartnerMarquee";
import OfferNoticeSlider from "@/components/home/offerSection/offerSlider";
import VisaCarousel from "@/components/home/visaCarousel/VisaCarousel";
import { IOfferLight } from "@/types/offer.types";
import { IAirlineLight } from "@/types/airlines.types";

export const revalidate = 3600;

function SectionSkeleton() {
  return (
    <div className="bg-white rounded-md shadow-lg my-4 p-6 space-y-4">
      <div className="h-6 w-1/3 bg-gray-200 animate-pulse rounded" />
      <div className="flex gap-4">
        <div className="h-40 w-1/3 bg-gray-200 animate-pulse rounded" />
        <div className="h-40 w-1/3 bg-gray-200 animate-pulse rounded" />
        <div className="h-40 w-1/3 bg-gray-200 animate-pulse rounded" />
      </div>
    </div>
  );
}

// These async components handle data fetching and allow streaming
async function OffersSection({ promise }: { promise: Promise<IOfferLight[]> }) {
  try {
    const offers = await promise;

    if (!offers?.length) {
      return (
        <div className="bg-white rounded-md shadow-lg my-4 p-6 text-center text-gray-500">
          No offers available at the moment.
        </div>
      );
    }

    return (
      <div className="bg-white rounded-md shadow-lg my-4">
        <OfferNoticeSlider cards={offers} />
      </div>
    );

  } catch (error) {
    return (
      <div className="bg-white rounded-md shadow-lg my-4 p-6 text-center text-red-500">
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
        <div className="bg-white rounded-md shadow-lg my-10 p-6 text-center text-gray-500">
          No airline partners available at the moment.
        </div>
      );
    }

    return (
      <div className="bg-white rounded-md shadow-lg my-10">
        <AirlinesPartnerMarquee MarqueeData={airlineMarquee} />
      </div>
    );

  } catch (error) {
    return (
      <div className="bg-white rounded-md shadow-lg my-10 p-6 text-center text-red-500">
        Failed to load airline partners.
      </div>
    );
  }
}

export default function Home() {
  // 🔥 Start fetching immediately in parallel (Render-as-you-Fetch)
  const offersPromise = getLightweightOffers();
  const airlinesPromise = getLightweightAirlines();

  return (
    <div className="bg-slate-200 min-h-screen">
      <div className="max-w-7xl mx-auto">
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

        {/* 
            VisaCarousel is already a Client Component. 
            By importing it normally, we get better SEO/LCP.
            If it's heavy, we can wrap it in its own Suspense.
        */}
        <Suspense fallback=
          {<div className="bg-white rounded-md shadow-lg my-10 p-6">
            <div className="h-6 w-1/4 bg-gray-200 animate-pulse rounded mb-4" />
            <div className="h-72 bg-gray-100 animate-pulse rounded" />
          </div>}>
          <VisaCarousel />
        </Suspense>
      </div>
    </div>
  );
}
