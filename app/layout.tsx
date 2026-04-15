import type { Metadata } from "next";
import {
  Poppins,
  Inter,
  Noto_Sans_Bengali,
} from "next/font/google";
import "./globals.css";

// English Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Bangla Fonts
const notoBangla = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bangla",
});


export const metadata: Metadata = {
  title: "Vromon Bandhu",
  description: "Travel Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`
        ${poppins.variable}
        ${inter.variable}
        ${notoBangla.variable}
        h-full antialiased
      `}
    >
      <body className="bg-slate-200 font-sans">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          {children}
        </main>
      </body>
    </html>
  );
}