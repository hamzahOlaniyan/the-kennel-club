import MediaQuery from "@/src/components/ui/MediaQuery";
import React from "react";

export default function healthcare() {
   return (
      <MediaQuery>
         <div className="my-12 space-y-6">
            <h1 className="text-xl font-bold">EDUCATION</h1>
            <p>
               We provide educational resources on: Responsible dog ownership Breeding standards Puppy development
               Training fundamentals Canine nutrition Workshops and seminars will be organised periodically.
            </p>
         </div>
      </MediaQuery>
   );
}
