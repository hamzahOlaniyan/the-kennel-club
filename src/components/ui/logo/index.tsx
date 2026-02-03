import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import kcg from "../../../../public/kcg1.svg";

export default function Logo({ size = 120 }: { size?: number }) {
   return (
      <Link href="/" className="flex items-center justify-center gap-2 absolute top-0 p-2">
         <Image
            src={logo}
            alt={"logo"}
            width={size}
            height={size}
            priority
            className="rounded-full border-6 border-white bg-white"
         />
         <div className="">
            <Image src={kcg} alt={"logo"} width={200} height={200} priority className="text-red-600 fill-amber-700" />
         </div>
      </Link>
   );
}
