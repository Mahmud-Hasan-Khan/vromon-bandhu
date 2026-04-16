import SectionTitle from "@/components/ui/sectionTitle/SectionTitle";
import { IAirlineLight } from "@/types/airlines.types";
import AirlinesPartnerMarqueeImageCard from "./AirlinesPartnerMarqueeImageCard";

// Revalidate every week
export const revalidate = 604800;

const AirlinesPartnerMarquee = ({ MarqueeData }: { MarqueeData: IAirlineLight[] }) => {
    return (
        <div className="py-3 bg-white rounded-md">
            <SectionTitle
                heading="Airlines Partner"
                subheading="Enjoy a comfortable and hassle-free journey on any destination"
            />

            {MarqueeData.length > 0 ? (
                <AirlinesPartnerMarqueeImageCard
                    MarqueeData={MarqueeData} />
            ) : (
                <div className="text-center py-6 text-gray-500">
                    No airline partners found.
                </div>
            )}
        </div>
    );
};

export default AirlinesPartnerMarquee;