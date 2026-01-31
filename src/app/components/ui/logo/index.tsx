import Link from "next/link";
import Image from "next/image";
export default function Logo() {
   return (
      <Link href="/" className="flex items-center justify-center">
         <Image src={"/logo.jpeg"} alt={"logo"} width={105} height={105} priority className="rounded-full" />
         <p className="font-bold text-xl">The Kennel Club Gambia</p>
      </Link>
   );
}
