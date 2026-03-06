import MediaQuery from "@/src/components/ui/MediaQuery";
import React from "react";

export default function dog_breeding() {
   return (
      <MediaQuery>
         <div className="my-12 space-y-6">
            <h1 className="text-xl font-bold">Breeders</h1>
            <p>
               KCG supports ethical and responsible breeders committed to: Health testing Proper socialisation Breed
               preservation Transparency in lineage Breeder Benefits: Official breeder listing Litter registration
               privileges Recognition at KCG events Access to educational resources Breeders must comply with our Code
               of Ethics to maintain membership status.
            </p>
         </div>
      </MediaQuery>
   );
}
