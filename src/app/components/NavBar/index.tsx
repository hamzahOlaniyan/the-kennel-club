"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { naviagtion, topNaviagtion } from "./navigation";
import Logo from "../ui/logo";
import MediaQuery from "../ui/MediaQuery";
import SideBar from "../SideMenu";
import { useState } from "react";

export default function Navigation({ session }: { session: any }) {
   const [showMenu, setShowMenu] = useState(false);
   const pathname = usePathname();

   if (pathname.includes("auth")) return null;

   const isActive = (path: string) => {
      return pathname === path;
   };

   // const handleSignOut = async () => {
   //    await signOut().then((res) => console.log(res));
   // };

   return (
      <header className="bg-white backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
         <div className="h-1 bg-red-700"></div>
         <div className="bg-sky-700 py-1">
            <MediaQuery>
               <div className="flex justify-end items-center">
                  <nav className="gap-6 flex">
                     {topNaviagtion.map((n) => (
                        <Link
                           key={n.id}
                           href={`${n.route}`}
                           className="text-white hover:text-sky-200 font-bold text-xs capitalize"
                        >
                           {n.title}
                        </Link>
                     ))}
                  </nav>
               </div>
            </MediaQuery>
         </div>
         <MediaQuery>
            <div className="flex justify-between h-20">
               <Logo />
               <div className="justify-between items-center gap-6">
                  <nav className="hidden lg:flex items-center h-full">
                     {naviagtion.map((n) => (
                        <Link
                           key={n.id}
                           href={`${n.route}`}
                           className={`px-3 py-2 text-center capitalize font-bold transition-colors justify-center  items-center h-full hover:border-emerald-700 flex hover:bg-neutral-100 hover:text-emerald-700/80 ${isActive(n.route) ? " border-b-3 border-emerald-700 text-emerald-800" : "border-b-3 border-transparent"}`}
                        >
                           {n.title}
                        </Link>
                     ))}
                  </nav>
               </div>
               <button onClick={() => setShowMenu(!showMenu)} className=" lg:hidden">
                  {showMenu ? "close" : "menu"}{" "}
               </button>
               <Link
                  href={"/registration"}
                  className="hidden lg:flex bg-emerald-700 text-white capitalize font-bold p-2 px-3 rounded-md hover:bg-emerald-600 active:scale-x-95"
               >
                  registration
               </Link>
            </div>
         </MediaQuery>
         <SideBar visible={showMenu} />
      </header>
   );
}

{
   /* <button type="button" onClick={handleSignOut} className="cursor-pointer">
                  signOut
               </button> */
}
