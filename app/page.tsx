import AirlinesPartnerMarquee from "@/components/home/airlinesPartner/AirlinesPartnerMarquee";
import OfferNoticeSlider from "@/components/home/offerSection/offerSlider";
import { getLightweightAirlines } from "@/lib/airlines.service";
import { getLightweightOffers } from "@/lib/offer.service";
export const dynamic = "force-dynamic";

export default async function Home() {
  const offers = await getLightweightOffers();
  const airlineMarquee= await getLightweightAirlines();
  return (
    <div className="bg-slate-200 ">
        <h1 className="text-4xl font-bold text-center mt-10">
          Welcome to My Next.js App
        </h1>
        <p className="text-center mt-4 text-gray-600">
          This is a simple Next.js application with Tailwind CSS.
        </p>
        <div className="bg-white rounded-md shadow-lg my-4">
          <OfferNoticeSlider cards={offers} />
        </div>
        <div className="bg-white rounded-md shadow-lg my-10">
          <AirlinesPartnerMarquee MarqueeData={airlineMarquee} />
        </div>
    </div>
  );
}
