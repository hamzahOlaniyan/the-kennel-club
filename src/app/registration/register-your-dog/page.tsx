"use client";

import MediaQuery from "@/src/components/ui/MediaQuery";
import { useAuth } from "@/src/providers/AuthProvider";
import Link from "next/link";
import React, { useState } from "react";
import { redirect, useRouter } from "next/navigation";

const owner = [
   {
      id: 1,
      title: " I OWN THE LITTER",
      desc: "I am a litter owner and am registering a dog to all the litter owners.",
      name: "owner",
   },
   {
      id: 2,
      title: "  I AM A NEW OWNER",
      desc: "I am registering a dog I purchased from a breeder/another party",
      name: "new-owner",
   },
];

export default function registerYourDog() {
   const user = useAuth((s) => s.user);

   const router = useRouter();
   const [select, setSelect] = useState("owner");

   const handlePress = () => {
      if (!user) redirect("/auth/sign-in");
      router.push("/");
   };

   console.log({ select });

   return (
      <MediaQuery>
         <div className="my-12">
            <div>
               <div className="space-y-12">
                  <div className="bg-sky-700 text-white p-3 rounded-sm w-fit">
                     <h1 className="text-2xl font-semibold">Register Your Dog</h1>
                  </div>
                  <div className="space-y-4">
                     <p>
                        Registering your pedigree dog with The Kennel Club Gambia Club connects you to over 150 years of
                        expertise in promoting responsible breeding practices and canine health. Once registered, you
                        will receive individual documentation of your dog's breed lineage and heritage PLUS 5 weeks free
                        insurance for each puppy as added protection when they leave for their new homes. This also
                        enables you and your new puppy owners to participate in dog shows and access expert advice on
                        responsible ownership. By registering, you demonstrate your commitment to best breeding
                        practices, aligning with The Kennel Club Gambia Club's breed-specific health and welfare
                        standards.
                     </p>
                     <p>
                        Once your litter is registered you'll have the opportunity to create a free puppy pack through
                        your online account. Additionally, you have the option to purchase an enhanced pedigree
                        certificate that showcases your dog's ancestry, while supporting The Kennel Club Gambia Club's
                        charitable work in promoting dog welfare and health.
                     </p>
                     <p>
                        There may be extra costs associated if your information is incorrect, once your litter has been
                        registered.
                     </p>
                  </div>

                  <div className="p-6 py-12 space-y-12 bg-neutral-50 rounded-md border border-neutral-200">
                     <div className="space-y-6">
                        {owner.map((o) => (
                           <div key={o.id} className="flex gap-2 items-center">
                              <input
                                 type="radio"
                                 name={o.name}
                                 id={`owner-${o.id}`}
                                 onChange={(e) => setSelect(e.target.value)}
                                 checked={select === o.name}
                                 className="w-5 h-5"
                                 // value={o.name}
                                 defaultValue={select}
                              />
                              <div className="">
                                 <label htmlFor={o.name} className="font-semibold text-lg">
                                    {o.title}
                                 </label>
                                 <p>{o.desc}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                     <div className="bg-emerald-700 hover:bg-emerald-600 text-white rounded-md w-fit p-2 px-4">
                        <button type="button" onClick={handlePress}>
                           Continue to registration
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </MediaQuery>
   );
}
