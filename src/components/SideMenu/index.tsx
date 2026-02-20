"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { naviagtion, topNaviagtion } from "../NavBar/navigation";
import { useAuth } from "@/src/providers/AuthProvider";
import { LogoutButton } from "../LogoutButton";
import { RiLogoutBoxRLine, RiProfileLine } from "react-icons/ri";

export default function SideBar({ visible, setShowMenu }: { visible: boolean; setShowMenu: any }) {
   const user = useAuth((s) => s.user);

   const [width, setWidth] = useState<number>(0);

   useEffect(() => {
      const onResize = () => setWidth(window.innerWidth);

      onResize(); // set initial width
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
   }, []);

   const isLoggedIn = !!user;

   return (
      <div className="">
         {visible && (
            <div className={`fixed top-18 w-full h-screen bg-white z-50 pt-10`}>
               <nav className="space-y-3">
                  {topNaviagtion.map((n) => (
                     <div key={n.id} className="flex items-center">
                        <Link
                           href={`${n.route}`}
                           className="px-8 py-3 w-full font-extrabold capitalize text-emerald-700"
                        >
                           {n.title}
                        </Link>
                     </div>
                  ))}
                  <Link
                     href={"/auth/sign-in"}
                     type="button"
                     className="px-8 py-3 capitalize font-extrabold flex items-center gap-2 cursor-pointer text-emerald-700"
                  >
                     <FaUserLarge className="text-emerald-700 text-xs" />
                     sign in
                  </Link>
               </nav>
               <nav className="">
                  {naviagtion.map((n, i) => (
                     <div key={n.id} className="flex items-center">
                        <Link
                           href={`${n.route}`}
                           onClick={() => setShowMenu(false)}
                           className={`px-8 text-lg py-4 w-full capitalize transition-colors justify-center font-bold items-center h-full hover:text-theme_green border-t border-theme_green/10`}
                        >
                           {n.title}
                        </Link>
                     </div>
                  ))}
               </nav>
            </div>
         )}
      </div>
   );
}
