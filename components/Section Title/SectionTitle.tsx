
// const SectionTitle = ({ heading, subheading }: { heading: string; subheading: string }) => {
//     return (
//         <>
//             <div className='sm:w-4/6 md:w-1/2 mx-auto'>
//                 <h1 className='text-center md:text-2xl font-semibold text-gray-800'>{heading}</h1>
//             </div>
//             <h4 className="md:w-[45%] mx-auto md:pb-2 mb-1 md:mb-0 font-normal text-gray-700 lg:font-medium text-center">{subheading}</h4>
//         </>
//     )
// }

// export default SectionTitle

const SectionTitle = ({ heading, subheading }: { heading: string; subheading: string }) => {
    return (
        <div className="text-center">
            {/* Heading with lines */}
            <div className="flex items-center justify-center gap-4 w-[98%] mx-auto">
                <hr className="flex-grow border-gray-200" />
                <h1 className="text-xl md:text-2xl font-semibold text-gray-800 whitespace-nowrap">
                    {heading}
                </h1>
                <hr className="flex-grow border-gray-200" />
            </div>

            {/* Subheading */}
            <h4 className="md:w-[45%] mx-auto pb-0.5 text-gray-700 text-sm md:text-base">
                {subheading}
            </h4>
        </div>
    );
};

export default SectionTitle;