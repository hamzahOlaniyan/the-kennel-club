import React from "react";
import MediaQuery from "../ui/MediaQuery";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";

export const Registration = () => {
   return (
      <div className=" bg-gray-200">
         <MediaQuery>
            <div className="flex flex-col lg:flex-row py-12 gap-13">
               <div className="w-150 lg:w-250 relative">
                  <Image
                     src={logo}
                     alt={"logo"}
                     fill={true}
                     objectFit="'contain"
                     priority
                     className="object-contain w-full h-full object-top rounded-full"
                  />
               </div>
               <div className=" space-y-6">
                  <div className="space-y-3">
                     <h1 className="text-4xl font-serif">Declare Your Love and Register with the KCG</h1>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem tempora laborum ab explicabo fugiat
                        incidunt quasi at, veniam repudiandae quis. Eos optio odio nihil omnis. Autem libero cumque
                        itaque eius.
                     </p>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem tempora laborum ab explicabo fugiat
                        incidunt quasi at, veniam repudiandae quis. Eos optio odio nihil omnis. Autem libero cumque
                        itaque eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem tempora laborum ab
                        explicabo fugiat incidunt quasi at, veniam repudiandae quis. Eos optio odio nihil omnis. Autem
                        libero cumque itaque eius.
                     </p>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem tempora laborum ab explicabo fugiat
                        incidunt quasi at, veniam repudiandae quis. Eos optio odio nihil omnis. Autem libero cumque
                        itaque eius.
                     </p>
                  </div>
                  <Link
                     href={"/registration"}
                     className=" bg-emerald-800 text-white capitalize font-bold p-3 px-6 rounded-md hover:bg-theme_blue/90 active:scale-x-95"
                  >
                     register
                  </Link>
               </div>
            </div>
         </MediaQuery>
      </div>
   );
};
