import MediaQuery from "@/src/components/ui/MediaQuery";
import React from "react";

export default function events_activities() {
   return (
      <MediaQuery>
         <div className="my-12 space-y-6">
            <h1 className="text-xl font-bold">Events & Activity</h1>

            <p>
               The Kennel Club Gambia organises and sanctions: Conformation Shows Working Dog Trials Obedience
               Competitions Protection Sport Events Specialty Breed Shows Our events are structured to align with
               international standards while promoting canine excellence within The Gambia and West Africa. Upcoming
               events and entry forms will be posted here.
            </p>
         </div>
      </MediaQuery>
   );
}
