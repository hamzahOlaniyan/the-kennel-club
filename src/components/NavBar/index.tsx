"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { naviagtion, topNaviagtion } from "./navigation";
import Logo from "../ui/logo";
import MediaQuery from "../ui/MediaQuery";
import SideBar from "../SideMenu";
import { useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { RiMenuFill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

export default function Navigation() {
   const [showMenu, setShowMenu] = useState(false);
   const pathname = usePathname();

   if (pathname.includes("auth")) return null;

   const isActive = (path: string) => {
      return pathname === path;
   };

   return (
      <header className="bg-white backdrop-blur-sm w-full z-50">
         <div className="bg-red-600 h-1"></div>
         <div className=" bg-theme_green/15 py-1.5 h-8">
            <MediaQuery>
               <nav className="hidden lg:flex justify-end items-center">
                  <div className="flex items-center">
                     {topNaviagtion.map((n) => (
                        <div key={n.id} className="flex items-center">
                           <Link
                              href={`${n.route}`}
                              className="px-2 text-center font-extrabold text-xs capitalize hover:text-theme_green text-theme_green/90 hover:underline"
                           >
                              {n.title}
                           </Link>
                           <p className="text-theme_green/50">|</p>
                        </div>
                     ))}
                  </div>
                  <FaUserLarge className="text-theme_green text-xs" />
               </nav>
            </MediaQuery>
         </div>
         <MediaQuery>
            <div className="flex items-end justify-between h-20">
               <Logo />
               <div className="flex justify-end h-full">
                  <nav className="hidden lg:flex items-center h-full ">
                     {naviagtion.map((n, i) => (
                        <div key={n.id} className="flex items-center">
                           <Link
                              href={`${n.route}`}
                              className={`px-2 text-center text-md capitalize transition-colors justify-center font-bold items-center h-full hover:text-theme_green`}
                           >
                              {n.title}
                           </Link>
                           <p className="text-theme_green/50">|</p>
                        </div>
                     ))}
                  </nav>
                  <button onClick={() => setShowMenu(!showMenu)} className="lg:hidden">
                     {showMenu ? <IoCloseSharp size={28} /> : <RiMenuFill size={28} />}
                  </button>
               </div>
            </div>
         </MediaQuery>
         <SideBar visible={showMenu} />
      </header>
   );
}
