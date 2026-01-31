"use client";
import { usePathname } from "next/navigation";
import MediaQuery from "../ui/MediaQuery";

export default function footer() {
   const pathname = usePathname();

   if (pathname.includes("auth")) return null;
   return (
      <footer className="h-20 bg-emerald-900 text-white bottom-0 absolute w-full">
         <MediaQuery>
            <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, accusantium eius ad in commodi
               deleniti. Quasi dolorem sequi exercitationem sed accusantium iusto quae earum provident, rem, libero quod
               laboriosam asperiores!
            </p>
         </MediaQuery>
      </footer>
   );
}
