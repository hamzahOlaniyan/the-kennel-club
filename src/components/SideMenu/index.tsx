import Link from "next/link";
import React from "react";
import { FaUserLarge } from "react-icons/fa6";
import { naviagtion, topNaviagtion } from "../NavBar/navigation";
import { log } from "console";

export default function SideBar({ visible }: { visible: boolean }) {
   const { innerWidth: width } = window;

   return (
      <div
         className={`h-screen w-full bg-white fixed left-0 top-27 pt-4 ${visible && width < 1024 ? "visible" : "hidden"}`}
      >
         <nav className="">
            {topNaviagtion.map((n) => (
               <div key={n.id} className="flex items-center">
                  <Link
                     href={`${n.route}`}
                     className="px-8 py-3 w-full font-extrabold  capitalize hover:text-theme_green text-theme_green/90 hover:underline"
                  >
                     {n.title}
                  </Link>
               </div>
            ))}
            {/* <FaUserLarge className="text-theme_green text-xs" /> */}
         </nav>
         <nav className="">
            {naviagtion.map((n, i) => (
               <div key={n.id} className="flex items-center">
                  <Link
                     href={`${n.route}`}
                     className={`px-8 text-lg py-4 w-full capitalize transition-colors justify-center font-bold items-center h-full hover:text-theme_green border-t border-theme_green/10`}
                  >
                     {n.title}
                  </Link>
               </div>
            ))}
         </nav>
      </div>
   );
}
