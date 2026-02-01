import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/logo.jpeg";
export default function Logo({ size = 120 }: { size?: number }) {
   return (
      <Link href="/" className="flex items-center justify-center gap-2 absolute top-0 p-2">
         <Image
            src={logo}
            alt={"logo"}
            width={size}
            height={size}
            priority
            className="rounded-full border-6 border-white"
         />
         <div className="">
            <p className="hidden lg:flex text-theme_green font-extrabold text-2xl text-justify">
               The Kennel Club Gambia
            </p>
         </div>
      </Link>
   );
}
