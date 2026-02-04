"use client";
import { usePathname } from "next/navigation";
import MediaQuery from "../ui/MediaQuery";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo-white.png";
import kcg2 from "../../../public/kcg2.svg";

import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { naviagtion } from "./footerNavigation";

export default function footer() {
   const pathname = usePathname();

   if (pathname.includes("auth")) return null;
   return (
      <footer>
         <div className="bg-emerald-900 text-white bottom-0 py-12 w-full">
            <MediaQuery>
               <div className="space-y-4">
                  <div className="space-y-6 lg:gap-10">
                     <div className="flex space-y-5 flex-col lg:flex-row justify-center items-center">
                        <Link href="/" className="flex gap-2 lg:gap-2 flex-col lg:flex-row justify-center items-center">
                           <Image src={logo} alt={"logo"} width={85} height={85} priority />
                           <Image src={kcg2} alt={"kcg"} width={200} height={90} priority />
                        </Link>
                        <div className="flex gap-6 w-full items-center justify-center">
                           <a href="">
                              <FiFacebook size={26} />
                           </a>
                           <a href="">
                              <FiInstagram size={26} />
                           </a>
                           <a href="">
                              <FaXTwitter size={26} />
                           </a>
                           <a href="">
                              <FiYoutube size={26} />
                           </a>
                        </div>
                     </div>
                     <div className="grid grid-cols-2 gap-y-6 lg:flex justify-between w-full">
                        <div className="space-y-1">
                           <h1 className="font-bold text-sm">MENU</h1>
                           {naviagtion.map((n, i) => (
                              <div key={i} className="flex items-center">
                                 <Link href={`${n.route}`} className="text-sm my-0.5">
                                    {n.title}
                                 </Link>
                              </div>
                           ))}
                        </div>
                        <div className="space-y-1">
                           <h1 className="font-bold text-sm">CHARITY WORK</h1>
                           {naviagtion.map((n, i) => (
                              <div key={i} className="flex items-center">
                                 <Link href={`${n.route}`} className="text-sm my-0.5">
                                    {n.title}
                                 </Link>
                              </div>
                           ))}
                        </div>
                        <div className="space-y-1">
                           <h1 className="font-bold text-sm">EVENTS</h1>
                           {naviagtion.map((n, i) => (
                              <div key={i} className="flex items-center">
                                 <Link href={`${n.route}`} className="text-sm my-0.5">
                                    {n.title}
                                 </Link>
                              </div>
                           ))}
                        </div>
                        <div className="space-y-1">
                           <h1 className="font-bold text-sm">RESOURCES</h1>
                           {naviagtion.map((n, i) => (
                              <div key={i} className="flex">
                                 <Link href={`${n.route}`} className="text-sm my-0.5">
                                    {n.title}
                                 </Link>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
                  <div className="w-full h-px bg-emerald-200/10"></div>
                  <div className="space-y-12">
                     <nav className="hidden lg:flex items-center h-full justify-end ">
                        {naviagtion.map((n, i) => (
                           <div key={i} className="flex items-center">
                              <Link
                                 href={`${n.route}`}
                                 className={`px-2 text-center text-sm capitalize transition-colors justify-center font-semibold items-center h-full hover:underline`}
                              >
                                 {n.title}
                              </Link>
                              <p className="text-emerald-200/20">|</p>
                           </div>
                        ))}
                     </nav>
                     <div className="space-y-1 text-center">
                        <p className="font-bold text-sm">
                           Copyright © The Royal Kennel Club Limited 2026. The unauthorised reproduction of text and
                           images is strictly prohibited.
                        </p>
                        <p className="text-xs text-center">
                           The Royal Kennel Club Limited is an Appointed Representative of Agria Pet Insurance Ltd, who
                           administer the insurance. Agria Pet Insurance is authorised and regulated by the Financial
                           Conduct Authority, Financial Services Register Number 496160. Agria Pet Insurance Ltd is
                           registered and incorporated in England and Wales with registered number 04258783. Registered
                           office: First Floor, Blue Leanie, Walton Street, Aylesbury, Buckinghamshire, HP21 7QW. Agria
                           insurance policies are underwritten by Agria Försäkring who is authorised and regulated by
                           the Prudential Regulatory Authority and Financial Conduct Authority.
                        </p>
                     </div>
                  </div>
               </div>
            </MediaQuery>
         </div>
      </footer>
   );
}
