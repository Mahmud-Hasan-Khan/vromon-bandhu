import ContactUs from "@/components/ui/ContactUs/ContactUs";
import { getOfferById } from "@/lib/offer.service";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function OfferDetail({ params }: Props) {
    const resolvedParams = await params;
    const id = resolvedParams.id;

    if (!id) return notFound();

    const card = await getOfferById(id);
    if (!card) return notFound();


    return (
        <div className='bg-[#e2e8f0] h-dvh'>
            <div className='max-w-3xl mx-auto bg-[#222d32] h-10 md:h-12 text-white px-2 flex items-center justify-between'>
                <h4 className='font-bangla text-xs md:text-xl'>{card.title}</h4>
                <div>
                    <Link href={'/'} className="text-xs md:text-base px-1 md:px-2 py-1 bg-[#1882ff] text-white rounded-md font-semibold  translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200 hover:bg-[#126fde]">GO HOME</Link>
                </div>
            </div>
            <div className="max-w-3xl font-bangla mx-auto p-6 bg-white text-gray-600">
                <div className='max-w-xl'>
                    <div className="relative w-full h-40 md:h-56 rounded-lg overflow-hidden">
                        <Image
                            src={card.image}
                            alt={card.title || 'Card Image'}
                            fill
                            className="object-fill"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority
                        />
                    </div>

                    <p className="pt-2">সম্মানিত গ্রাহক,</p>
                    <div>
                        {card.description.split('\n').map((line, index) => (
                            <p key={index} className="py-1">
                                {line}
                            </p>
                        ))}
                    </div>
                    <div className='pt-2'>
                        <p className="text-gray-700 text-base">
                            যদি কোনো প্রশ্ন থাকে বা সাহায্য প্রয়োজন হয়, আমাদের সাথে যোগাযোগ করুন:
                        </p>
                        <div className="py-2">
                            <ContactUs />
                        </div>
                    </div>
                </div>
                <p className='pt-1'>ধন্যবাদ,</p>
                <p>টিম ওয়াকিয়া ট্রাভেলস</p>
            </div>
        </div>
    )
}
