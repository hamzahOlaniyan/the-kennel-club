import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/kcg-white.png";
import kcg from "../../../../public/kcg1.svg";

export default function Logo() {
   return (
      <div className="flex gap-4 relative -top-1.5 lg:top-5">
         <div className="w-18 h-18 lg:w-30 lg:h-30 relative">
            <Image src={logo} alt={"kcg"} fill priority className="w-full h-full" />
         </div>
         <div className="w-32 lg:w-42 relative">
            <Image src={kcg} alt={"logo"} fill priority className="w-full h-full" />
         </div>
      </div>
   );
}
