"use client";
import React, { useState } from "react";
import MediaQuery from "../ui/MediaQuery";
import { redirect } from "next/navigation";

const breeds = ["german shepherd", "Pitbull", "belgian mallinois", "doberman", "cane corso", "dogo"];

export default function SearchDog() {
   const [selected, setSelected] = useState();

   const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
      console.log(e.target.value);
   };

   return (
      <div className="bg-red-700 py-12">
         <MediaQuery>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
               <p className="text-white text-2xl">Search for a dog Breed</p>
               <select onChange={handleSelect} value={selected} id="breed" className="bg-white  w-full lg:w-1/4 h-10">
                  <option disabled>select breed</option>
                  {breeds.map((opt) => (
                     <option value={opt}>{opt}</option>
                  ))}
               </select>
            </div>
         </MediaQuery>
      </div>
   );
}
