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
                  Register your dog with The Kennel Club Gambia to receive official documentation and pedigree
                  recognition. We offer: ✔ Individual Dog Registration For purebred dogs meeting breed standards. ✔
                  Litter Registration For registered breeders with verified parentage. ✔ Pedigree Certificates Issued
                  with official KCG documentation. ✔ Ownership Transfer Secure and traceable ownership updates. All
                  registrations are subject to verification to protect breed integrity.
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
