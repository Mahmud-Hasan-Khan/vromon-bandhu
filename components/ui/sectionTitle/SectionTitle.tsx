import { SECTION_TITLE_BLOCK } from "@/lib/ui/homeSectionLayout";

const SectionTitle = ({ heading, subheading }: { heading: string; subheading: string }) => {
    return (
        <div className={`text-center ${SECTION_TITLE_BLOCK}`}>
            {/* Heading with lines */}
            <div className="flex items-center justify-center gap-4 w-[98%] mx-auto">
                <hr className="grow border-gray-200" />
                <h1 className="text-xl md:text-3xl font-heading font-semibold text-gray-800 whitespace-nowrap">
                    {heading}
                </h1>
                <hr className="grow border-gray-200" />
            </div>

            {/* Subheading */}
            <h4 className="md:w-[45%] mx-auto pb-0.5 text-gray-700 font-sans text-sm md:text-base">
                {subheading}
            </h4>
        </div>
    );
};

export default SectionTitle;