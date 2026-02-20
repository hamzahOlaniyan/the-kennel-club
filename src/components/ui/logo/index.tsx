import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/kcg-white.png";
import kcg from "../../../../public/kcg1.svg";

export default function Logo() {
   return (
      <div className="flex gap-2 relative z-50">
         <div className="w-16 h-16 lg:w-20 lg:h-20 relative">
            <Image src={logo} alt={"kcg"} fill priority className="w-full h-full" />
         </div>
         <div className="w-32 lg:w-42 relative">
            <Image src={kcg} alt={"logo"} fill priority className="w-full h-full" />
         </div>
      </div>
   );
}
