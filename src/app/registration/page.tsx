import MediaQuery from "@/src/components/ui/MediaQuery";
import Link from "next/link";
import React from "react";

const registrationLinks = [
   {
      id: 1,
      title: " Register my dog",
      subtitle:
         " Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique animi laborum neque mollitia eos sapiente culpa.",
      route: "/register-your-dog",
   },
   {
      id: 2,
      title: "Register Your Litter",
      subtitle:
         " Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique animi laborum neque mollitia eos sapiente culpa.",
      route: "",
   },
   {
      id: 3,
      title: " Transfer Ownership of Your Dog",
      subtitle:
         " Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique animi laborum neque mollitia eos sapiente culpa.",
      route: "",
   },
   {
      id: 4,
      title: " Transfer Ownership of Your Dog",
      subtitle:
         " Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique animi laborum neque mollitia eos sapiente culpa.",
      route: "",
   },
];
export default function registration() {
   return (
      <MediaQuery>
         <div className="space-y-12 my-12 flex-col justify-center items-center">
            <div className="space-y-3 flex-col flex justify-center mt-14">
               <h1 className=" text-center text-4xl font-bold">Registrations</h1>
               <p className="text-center lg:w-2/3 self-center">
                  The Kennel Club Gambia Club's registration system is open to all dogs, registering 250,000 pedigree
                  and crossbreed dogs in the UK every year. We have different registers to suit different breeds and
                  crossbreeds and their owners. See below for everything you need to know about registering your dog,
                  including guidance on who should complete each form and how to do so.
               </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 lg:w-3/4 mx-auto">
               {registrationLinks.map((r) => (
                  <Link
                     key={r.id}
                     href={`registration/${r.route}`}
                     className=" p-4 py-6 rounded-md bg-neutral-50 hover:bg-emerald-50 hover:border-emerald-500 border border-neutral-200 space-y-1 cursor-pointer"
                  >
                     <p className="font-semibold"> {r.title}</p>
                     <p className="text-sm">{r.subtitle}</p>
                  </Link>
               ))}
            </div>
         </div>
      </MediaQuery>
   );
}
