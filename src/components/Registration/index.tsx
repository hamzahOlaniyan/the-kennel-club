import React from "react";
import MediaQuery from "../ui/MediaQuery";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";

export const Registration = () => {
   return (
      <div className=" bg-gray-200">
         <MediaQuery>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 py-12 lg:py-24 p-4">
               <div className="h-48 relative">
                  <Image src={logo} alt={"logo"} fill={true} priority className="object-contain w-full h-full" />
               </div>
               <div className="space-y-6 ">
                  <div className="space-y-3 text-center md:text-left">
                     <h1 className="text-4xl font-serif">The Kennel Club Gambia (KCG)</h1>
                     <p>
                        The Kennel Club Gambia is the official body dedicated to the registration, development, and
                        advancement of purebred dogs and responsible dog ownership in The Gambia. We promote: Breed
                        integrity Ethical breeding standards Canine welfare Education & responsible ownership National
                        and regional dog events Our mission is to establish internationally recognised standards for
                        pedigree dogs within The Gambia and West Africa. Excellence. Integrity. Canine Development.
                     </p>
                  </div>
                  <div className="flex justify-center items-center md:justify-start">
                     <Link
                        href={"/registration"}
                        className=" bg-emerald-800 text-center md:w-fit text-white w-full capitalize font-bold p-4 px-6 rounded-md active:scale-x-95"
                     >
                        register
                     </Link>
                  </div>
               </div>
            </div>
         </MediaQuery>
      </div>
   );
};
