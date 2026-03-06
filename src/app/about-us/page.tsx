import MediaQuery from "@/src/components/ui/MediaQuery";
import React from "react";

export default function AboutUs() {
   return (
      <MediaQuery>
         <div className="my-12 space-y-6">
            <h1 className="text-xl font-bold">Events & Activity</h1>

            <p>
               The Kennel Club Gambia (KCG), established in 2025, was formed to create a structured, transparent, and
               internationally aligned canine registry within The Gambia. We aim to: Maintain accurate pedigree records
               Support responsible breeders Promote canine health testing Organise sanctioned shows and events Represent
               Gambian breeders internationally KCG operates with integrity, professionalism, and a commitment to
               raising standards in West African canine development.
            </p>
         </div>
      </MediaQuery>
   );
}
