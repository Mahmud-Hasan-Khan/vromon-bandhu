// import Link from "next/link"
// import { FaEnvelope, FaFacebook, FaInstagram, FaPhoneAlt, FaWhatsapp, FaYoutube } from "react-icons/fa"

// const ContactUs = () => {
//     return (
//         <div className="flex flex-wrap gap-3">

//             {/* Email */}
//             <Link
//                 href="mailto:wakia.info@gmail.com"
//                 className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
//             >
//                 <FaEnvelope size={18} />
//                 <span>E-mail</span>
//             </Link>

//             {/* Call */}
//             <Link
//                 href="tel:+8801303118811"
//                 className="flex items-center gap-2 px-3 py-1.5 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-all duration-300"
//             >
//                 <FaPhoneAlt size={18} />
//                 <span>Phone</span>
//             </Link>

//             {/* WhatsApp */}
//             <Link
//                 href="https://wa.me/8801303118811"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 px-3 py-1.5 bg-[#25d366] text-white rounded-lg shadow-md hover:bg-emerald-600 transition-all duration-300"
//             >
//                 <FaWhatsapp size={20} />
//                 <span>WhatsApp</span>
//             </Link>
//             {/* Facebook */}
//             <Link
//                 href="https://www.facebook.com/wakia.info"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
//             >
//                 <FaFacebook size={18} />
//                 <span>Facebook</span>
//             </Link>
//             {/* Instagram */}
//             <Link
//                 href="https://www.instagram.com/wakia.info"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 px-3 py-1.5 bg-pink-600 text-white rounded-lg shadow-md hover:bg-pink-700 transition-all duration-300"
//             >
//                 <FaInstagram size={18} />
//                 <span>Instagram</span>
//             </Link>
//             {/* YouTube */}
//             <Link
//                 href="https://www.youtube.com/wakia.info"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 px-3 py-1.5 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition-all duration-300"
//             >
//                 <FaYoutube size={18} />
//                 <span>YouTube</span>
//             </Link>

//         </div>

//     )
// }

// export default ContactUs
// import Link from "next/link";
// import { FaEnvelope, FaFacebook, FaGoogle, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaYoutube } from "react-icons/fa";
// import { SiGooglemaps } from "react-icons/si";

// const GoogleMapsIcon = () => (
//     <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//         <path d="M12.9 14.32a.23.23 0 0 1-.2-.04L7.4 9.94a.23.23 0 0 1 0-.35l2.64-2.22a.23.23 0 0 1 .3 0l5.3 4.4a.23.23 0 0 1 0 .35l-2.65 2.22z" fill="#1A73E8" />
//         <path d="M4.6 15.3l4.63-3.88a.23.23 0 0 0 0-.35L6.6 8.7a.23.23 0 0 0-.34 0L.1 13.88a.23.23 0 0 0 0 .35l4.16 3.48a.23.23 0 0 0 .34-.35l-.04-2.06z" fill="#EA4335" />
//         <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" fill="#34A853" />
//         <path d="M15.4 7.2l-4.14 3.48a.23.23 0 0 0 0 .35l2.64 2.21a.23.23 0 0 0 .35 0l4.13-3.48a.23.23 0 0 0 0-.35L15.75 7.2a.23.23 0 0 0-.35 0z" fill="#FBBC05" />
//     </svg>
// );

// const ContactUs = () => {
//     // ডাটাগুলোকে একটি অ্যারেতে নিয়ে আসা হয়েছে যাতে কোড ক্লিন থাকে
//     const contactLinks = [
//         { id: 1, name: "E-mail", icon: <FaEnvelope />, href: "mailto:wakia.info@gmail.com", color: "bg-blue-600 hover:bg-blue-700" },
//         { id: 2, name: "Phone", icon: <FaPhoneAlt />, href: "tel:+8801303118811", color: "bg-green-600 hover:bg-green-700" },
//         { id: 3, name: "WhatsApp", icon: <FaWhatsapp size={20} />, href: "https://wa.me/8801303118811", color: "bg-[#25d366] hover:bg-emerald-600" },
//         { id: 4, name: "Google Maps", icon: <GoogleMaps />, href: "https://maps.app.goo.gl/u3i79pF6FN1Nu7XU9", color: "bg-[#1877F2] hover:bg-blue-800" },
//         { id: 5, name: "Facebook", icon: <FaFacebook />, href: "https://www.facebook.com/wakia.info", color: "bg-[#1877F2] hover:bg-blue-800" },
//         { id: 6, name: "Instagram", icon: <FaInstagram />, href: "https://www.instagram.com/wakia.info", color: "bg-pink-600 hover:bg-pink-700" },
//         { id: 7, name: "YouTube", icon: <FaYoutube />, href: "https://www.youtube.com/wakia.info", color: "bg-red-600 hover:bg-red-700" },
//     ];

//     return (
//         <div className="w-full max-w-4xl mx-auto p-4">
//             {/* grid-cols-2: মোবাইলে ২ কলামে দেখাবে
//                 sm:grid-cols-3: ট্যাবলেটে ৩ কলামে দেখাবে
//                 lg:grid-cols-6: ডেস্কটপে সব বাটন এক লাইনে দেখাবে
//             */}
//             <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-start gap-3">
//                 {contactLinks.map((link) => (
//                     <Link
//                         key={link.id}
//                         href={link.href}
//                         target={link.href.startsWith('http') ? "_blank" : undefined}
//                         rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
//                         className={`flex items-center justify-center gap-2 px-2 py-1 text-white rounded-lg shadow-sm transition-all duration-300 transform hover:scale-105 active:scale-95 ${link.color} text-sm md:text-base font-medium w-full lg:w-auto`}
//                     >
//                         <span className="text-lg">{link.icon}</span>
//                         <span>{link.name}</span>
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ContactUs;


import Link from "next/link";
import { FaEnvelope, FaFacebook, FaInstagram, FaPhoneAlt, FaWhatsapp, FaYoutube } from "react-icons/fa";

// নিখুঁত মাল্টিকালার গুগল ম্যাপস আইকন
const GoogleMapsIcon = () => (
    <svg
        width="22"
        height="22"
        viewBox="0 0 232597 333333"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        imageRendering="optimizeQuality"
        fillRule="evenodd"
        clipRule="evenodd"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M151444 5419C140355 1916 128560 0 116311 0 80573 0 48591 16155 27269 41534l54942 46222 69232-82338z" fill="#1a73e8" />
        <path d="M27244 41534C10257 61747 0 87832 0 116286c0 21876 4360 39594 11517 55472l70669-84002-54942-46222z" fill="#ea4335" />
        <path d="M116311 71828c24573 0 44483 19910 44483 44483 0 10938-3957 20969-10509 28706 0 0 35133-41786 69232-82313-14089-27093-38510-47936-68048-57286L82186 87756c8166-9753 20415-15928 34125-15928z" fill="#4285f4" />
        <path d="M116311 160769c-24573 0-44483-19910-44483-44483 0-10863 3906-20818 10358-28555l-70669 84027c12072 26791 32159 48289 52851 75381l85891-102122c-8141 9628-20339 15752-33948 15752z" fill="#fbbc04" />
        <path d="M148571 275014c38787-60663 84026-88210 84026-158728 0-19331-4738-37552-13080-53581L64393 247140c6578 8620 13206 17793 19683 27900 23590 36444 17037 58294 32260 58294 15172 0 8644-21876 32235-58320z" fill="#34a853" />
    </svg>
);

const ContactUs = () => {
    const contactLinks = [
        {
            id: 1, name: "E-mail", icon: <FaEnvelope />, href: "mailto:wakia.info@gmail.com",
            brandColor: "text-[#EA4335]", borderColor: "border-[#EA4335]/20", hoverBg: "hover:bg-[#EA4335]/5"
        },
        {
            id: 2, name: "Phone", icon: <FaPhoneAlt />, href: "tel:+8801303118811",
            brandColor: "text-[#007AFF]", borderColor: "border-[#007AFF]/20", hoverBg: "hover:bg-[#007AFF]/5"
        },
        {
            id: 3, name: "WhatsApp", icon: <FaWhatsapp size={22} />, href: "https://wa.me/8801303118811",
            brandColor: "text-[#25D366]", borderColor: "border-[#25D366]/20", hoverBg: "hover:bg-[#25D366]/5"
        },
        {
            id: 4, name: "Address", icon: <GoogleMapsIcon />, href: "https://maps.google.com",
            brandColor: "text-[#4285F4]", borderColor: "border-[#4285F4]/20", hoverBg: "hover:bg-[#4285F4]/5"
        },
        {
            id: 5, name: "Facebook", icon: <FaFacebook size={22} />, href: "https://www.facebook.com/wakia.info",
            brandColor: "text-[#1877F2]", borderColor: "border-[#1877F2]/20", hoverBg: "hover:bg-[#1877F2]/5"
        },
        {
            id: 6, name: "Instagram", icon: <FaInstagram size={22} />, href: "https://www.instagram.com/wakia.info",
            brandColor: "text-[#E4405F]", borderColor: "border-[#E4405F]/20", hoverBg: "hover:bg-[#E4405F]/5"
        },
        {
            id: 7, name: "YouTube", icon: <FaYoutube size={22} />, href: "https://www.youtube.com/wakia.info",
            brandColor: "text-[#FF0000]", borderColor: "border-[#FF0000]/20", hoverBg: "hover:bg-[#FF0000]/5"
        },
    ];

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="grid grid-cols-3 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-start gap-3">
                {contactLinks.map((link) => (
                    <Link
                        key={link.id}
                        href={link.href}
                        target={link.href.startsWith('http') ? "_blank" : undefined}
                        rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                        className={`flex items-center justify-center gap-2 px-3 py-1 bg-transparent border ${link.borderColor} ${link.brandColor} ${link.hoverBg} rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm md:text-base font-semibold w-full lg:w-auto shadow-sm`}
                    >
                        <span className="shrink-0 text-lg">{link.icon}</span>
                        <span>{link.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ContactUs;