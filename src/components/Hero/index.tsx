import Image from "next/image";
import heroImage from "../../../public/hero.jpg";

export default function Hero() {
   return (
      <div className="relative h-[86vh] flex items-center overflow-hidden">
         <div className="absolute inset-0 z-0">
            <Image src={heroImage} alt="Champion Dog" fill className="w-full h-full object-cover brightness-50" />
            <div className="absolute inset-0 bg-linear-to-r from-neutral-950/40 to-transparent"></div>
         </div>

         <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-2xl text-white">
               <span className="inline-block px-3 py-1 bg-regal-gold text-regal-navy text-xs font-bold tracking-widest mb-6 uppercase rounded-sm">
                  Est. 2025
               </span>
               <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
                  The Golden Standard of <br />
                  <span className="text-emerald-500">Purebred Registry</span>
               </h1>
               <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed font-light">
                  The Kennel Club Gambia is the premier institution for dog pedigree documentation, sport oversight, and
                  canine advocacy. Join a community of over 1.2 million breeders and owners worldwide.
               </p>
               <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                  <button
                     // onClick={onGetStarted}
                     className="bg-regal-gold text-regal-navy px-8 py-4 rounded-sm font-bold text-lg text-emerald-800 transition-all shadow-2xl flex items-center justify-center bg-white cursor-pointer hover:bg-neutral-200"
                  >
                     REGISTER YOUR DOG
                     <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                     </svg>
                  </button>
                  <button className="border border-white/30 backdrop-blur-xs text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center cursor-pointer">
                     LEARN MORE
                  </button>
               </div>
            </div>
         </div>

         {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex space-x-12">
            <div className="text-center">
               <div className="text-regal-gold text-2xl font-serif">150+</div>
               <div className="text-gray-300 text-[10px] tracking-widest uppercase">Recognized Breeds</div>
            </div>
            <div className="text-center">
               <div className="text-regal-gold text-2xl font-serif">1M+</div>
               <div className="text-gray-300 text-[10px] tracking-widest uppercase">Registered Pups</div>
            </div>
            <div className="text-center">
               <div className="text-regal-gold text-2xl font-serif">2K+</div>
               <div className="text-gray-300 text-[10px] tracking-widest uppercase">Annual Events</div>
            </div>
         </div> */}
      </div>
      // <div className="flex items-center relative -z-10">
      //    <div className="z-10 absolute w-full h-full bg-black/30 flex flex-col items-center justify-center">
      //       <div className="w-3/4 lg:w-full relative top-3 flex flex-col items-center justify-center">
      //          <div className="text-shadow text-center [text-shadow:0_1px_30px_#000] text-white space-y-3">
      //             <h1 className="text-[46px] text-white sm:text-[54px] font-alfa-slab leading-13 ">
      //                Everything We Do, We Do for Dogs
      //             </h1>
      //          </div>
      //       </div>
      //    </div>
      //    <div className="h-170">
      //       <Image src={heroImage} alt="hero-img" fill={true} className="h-full w-full object-cover" priority />
      //    </div>
      // </div>
   );
}
