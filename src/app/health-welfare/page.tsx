import MediaQuery from "@/src/components/ui/MediaQuery";
import React from "react";

export default function healthcare() {
   return (
      <MediaQuery>
         <div className="my-12 space-y-6">
            <h1 className="text-xl font-bold">Health & Welfare</h1>
            <p>
               We advocate for: Responsible breeding practices Genetic health screening Proper vaccination protocols
               Humane training standards Ethical treatment of all dogs KCG works to educate owners and breeders on best
               practices for canine care and welfare.
            </p>
         </div>
      </MediaQuery>
   );
}
