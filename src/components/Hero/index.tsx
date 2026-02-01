import Image from "next/image";
import heroImage from "../../../public/hero.jpg";

export default function Hero() {
   return (
      <div className="flex items-center relative -z-10">
         <div className="z-10 absolute w-full h-full bg-black/30 flex flex-col items-center justify-center">
            <div className="w-3/4 lg:w-full relative top-3 flex flex-col items-center justify-center">
               <div className="text-shadow text-center [text-shadow:0_1px_30px_#000] text-white space-y-3">
                  <h1 className="text-[46px] text-white sm:text-[54px] font-lilita leading-13 ">
                     Everything We Do, We Do for Dogs
                  </h1>
               </div>
            </div>
         </div>
         <div className="h-170">
            <Image src={heroImage} alt="hero-img" fill={true} className="h-full w-full object-cover" priority />
         </div>
      </div>
   );
}
