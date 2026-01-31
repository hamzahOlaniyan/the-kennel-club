import Image from "next/image";
import heroImage from "../../../public/hero.jpg";
import React from "react";

export default function Hero() {
   return (
      <div className="flex justify-center items-center w-full h-170 relative">
         <div className="z-40 absolute w-full h-full bg-black/20 flex flex-col items-center justify-center"></div>
         <Image src={heroImage} alt="hero-img" fill={true} className="h-full w-full object-cover" priority />
      </div>
   );
}
