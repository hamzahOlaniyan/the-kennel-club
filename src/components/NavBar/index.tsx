"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { naviagtion, topNaviagtion } from "./navigation";
import Logo from "../ui/logo";
import MediaQuery from "../ui/MediaQuery";
import SideBar from "../SideMenu";
import { useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { RiLogoutBoxRLine, RiMenuFill, RiProfileLine } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { useAuth } from "@/src/providers/AuthProvider";
import { LogoutButton } from "../LogoutButton";

export default function Navigation() {
   const user = useAuth((s) => s.user);

   console.log({ user });

   const [showMenu, setShowMenu] = useState(false);
   const [showDropdown, setShowDropdown] = useState(false);

   const pathname = usePathname();

   if (pathname.includes("auth")) return null;

   const isActive = (path: string) => {
      return pathname === path;
   };

   const isLoggedIn = !!user;

   return (
      <header className="bg-white backdrop-blur-sm w-full z-50">
         {/* <div className="bg-red-600 h-1"></div> */}
         <div className="bg-emerald-700 py-1.5 h-8 pt-2 flex justify-center items-center">
            <MediaQuery>
               <nav className="flex justify-end items-center gap-2">
                  <div className="hidden lg:flex justify-center items-center gap-6">
                     {topNaviagtion.map((n) => (
                        <div key={n.id} className="flex items-center">
                           <Link
                              href={`${n.route}`}
                              className="px-2 text-center font-bold text-xs capitalize text-white hover:text-neutral-200/80"
                           >
                              {n.title}
                           </Link>
                        </div>
                     ))}
                  </div>
                  <p className="hidden lg:flex text-neutral-200/80 relative -top-0.5">|</p>
                  <div className="flex gap-2 items-center">
                     {isLoggedIn ? (
                        <div onMouseEnter={() => setShowDropdown(true)} className="flex items-center gap-1 relative">
                           <FaUserLarge className="text-white text-xs" />
                           <p className="text-sm capitalize font-medium text-white cursor-pointer">
                              {user?.user_metadata?.email}
                           </p>
                           {showDropdown && (
                              <div
                                 onMouseLeave={() => setShowDropdown(false)}
                                 className="bg-white absolute top-6 w-full overflow-hidden rounded-sm shadow-sm"
                              >
                                 <ul className="flex flex-col">
                                    <button
                                       type="button"
                                       className="text-sm flex gap-2 items-center text-left capitalize font-semibold cursor-pointer hover:bg-emerald-500/10 p-3 border-b border-neutral-200"
                                    >
                                       <RiProfileLine />
                                       <p> my profile</p>
                                    </button>
                                    <div className="text-sm flex gap-2 items-center text-left capitalize font-semibold cursor-pointer hover:bg-emerald-500/10 p-3 border-b border-neutral-200">
                                       <RiLogoutBoxRLine />
                                       <LogoutButton />
                                    </div>
                                 </ul>
                              </div>
                           )}
                        </div>
                     ) : (
                        <>
                           <FaUserLarge className="text-white text-xs" />
                           <Link
                              href={"/auth/sign-in"}
                              type="button"
                              className="text-xs capitalize font-bold text-white cursor-pointer"
                           >
                              sign in
                           </Link>
                        </>
                     )}
                  </div>
               </nav>
            </MediaQuery>
         </div>
         <MediaQuery>
            <div className="flex items-end justify-between h-20">
               <Logo />
               <div className="flex justify-end h-full w-full">
                  <nav className="hidden lg:flex items-center gap-8 h-full w-full justify-end">
                     {naviagtion.map((n, i) => (
                        <ul key={n.id} className="flex items-center ">
                           <Link
                              href={`${n.route}`}
                              className={`text-center text-md capitalize transition-colors justify-center font-semibold items-center h-full`}
                           >
                              {n.title}
                           </Link>
                        </ul>
                     ))}
                  </nav>
                  <button onClick={() => setShowMenu(!showMenu)} className="lg:hidden">
                     {showMenu ? <IoCloseSharp size={32} /> : <RiMenuFill size={32} />}
                  </button>
               </div>
            </div>
         </MediaQuery>
         <SideBar visible={showMenu} />
      </header>
   );
}
