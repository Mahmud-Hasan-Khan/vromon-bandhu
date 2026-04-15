import OfferNoticeSlider from "@/components/home/offerSection/offerSlider";
import { getLightweightOffers } from "@/lib/offer.service";
export const dynamic = "force-dynamic";

export default async function Home() {
  const offers = await getLightweightOffers();
  return (
    <div className="relative bg-slate-200">
        <h1 className="text-4xl font-bold text-center mt-10">
          Welcome to My Next.js App
        </h1>
        <p className="text-center mt-4 text-gray-600">
          This is a simple Next.js application with Tailwind CSS.
        </p>
        <div className="absolute top-40 w-full bg-white rounded-md shadow-lg">
          <OfferNoticeSlider cards={offers} />
        </div>
    </div>
  );
}
