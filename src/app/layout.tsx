import type { Metadata } from "next";
import { Alfa_Slab_One, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const lilita_One = Alfa_Slab_One({
   variable: "--font-lilita",
   weight: ["400"],
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "The Kennel Club Gambia",
   description:
      "If you’re searching online for anything related to dogs in The Gambia — be it security dogs, guard dogs, top-notch protection training, or a reputable working dog breeder — look no further than Elite K9 International. We’re dedicated to being the number one name that pops up when you need the best-trained and best-bred dogs. Whether you're in West Africa or Europe, our reputation for excellence in dog training and breeding speaks for itself.",
};

export default async function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body
            className={`${lilita_One.variable} ${geistMono.variable} antialiased h-screen font-[95%] md:font-[98%] lg:font-[100%]`}
         >
            <NavBar />
            <div className="">{children}</div>
            <Footer />
         </body>
      </html>
   );
}
