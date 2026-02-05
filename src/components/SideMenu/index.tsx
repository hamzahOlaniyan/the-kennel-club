"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { naviagtion, topNaviagtion } from "../NavBar/navigation";

export default function SideBar({ visible }: { visible: boolean }) {
   const [width, setWidth] = useState<number>(0);

   useEffect(() => {
      const onResize = () => setWidth(window.innerWidth);

      onResize(); // set initial width
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
   }, []);

   return (
      <div
         className={`h-screen w-full bg-white fixed left-0 top-27 pt-4 ${visible && width < 1024 ? "visible" : "hidden"}`}
      >
         <nav className="">
            {topNaviagtion.map((n) => (
               <div key={n.id} className="flex items-center">
                  <Link href={`${n.route}`} className="px-8 py-3 w-full font-extrabold  capitalize text-emerald-700">
                     {n.title}
                  </Link>
               </div>
            ))}
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
