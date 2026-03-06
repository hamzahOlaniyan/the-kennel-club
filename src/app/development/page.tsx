import MediaQuery from "@/src/components/ui/MediaQuery";
import React from "react";

export default function healthcare() {
   return (
      <MediaQuery>
         <div className="my-12 space-y-6">
            <h1 className="text-xl font-bold">WEST AFRICAN DEVELOPMENT</h1>
            <p>
               The Kennel Club Gambia aims to become a leading voice in West African canine development. Our long-term
               vision includes: Regional cooperation International partnerships Recognition beyond The Gambia
               Standardised pedigree systems across West Africa
            </p>
         </div>
      </MediaQuery>
   );
}
