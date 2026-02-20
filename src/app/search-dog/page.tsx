import MediaQuery from "@/src/components/ui/MediaQuery";
import Link from "next/link";
import React from "react";

export default function SearchDog() {
   return (
      <MediaQuery>
         <p>SearchDog</p>
         <Link href={`/search-dog/doberman`}>doberman</Link>
      </MediaQuery>
   );
}
