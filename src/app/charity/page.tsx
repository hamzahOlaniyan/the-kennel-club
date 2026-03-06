import MediaQuery from "@/src/components/ui/MediaQuery";
import React from "react";

export default function healthcare() {
   return (
      <MediaQuery>
         <div className="my-12 space-y-6 pb-12">
            <h1 className="text-xl font-bold">The Kennel Club Gambia Charity Department 🐾 </h1>

            <h1 className="text-lg font-semibold bg-emerald-600 w-fit p-4 rounded-md text-white">
               HOPE FOR HOUNDS FUND 💛
            </h1>

            <div className="space-y-6">
               <div className="space-y-2">
                  <h1 className="font-semibold">Our Mission</h1>
                  <p>
                     The Hope for Hounds Fund is the official charitable arm of The Kennel Club Gambia, dedicated to
                     rescuing, rehabilitating, and rehoming vulnerable dogs across The Gambia. We exist to give
                     abandoned, abused, injured, and neglected dogs a second chance at life. Through structured rescue
                     operations, medical care, feeding programs, behavioural rehabilitation, and responsible adoption
                     screening, we aim to transform suffering into security — and homelessness into hope.
                  </p>
               </div>
               <h1 className="font-semibold"> 🐕 What We Do</h1>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2 bg-neutral-50 p-4 border border-neutral-200 rounded-md">
                     <h1 className="font-medium">🛟 Rescue We respond to cases involving: </h1>
                     <ul className="list-disc pl-6">
                        <li>Lost and abandoned dogs</li>
                        <li>Abuse and neglect situations</li>
                        <li> Injured roadside animals</li>
                        <li> Malnourished and vulnerable puppies</li>
                     </ul>
                     <p>Our team works to safely recover and transport dogs to secure shelter facilities.</p>
                  </div>

                  <div className="space-y-2 bg-neutral-50 p-4 border border-neutral-200 rounded-md">
                     <h1 className="font-medium">🏥 Medical Treatment</h1>
                     <p>Every rescued dog receives:</p>
                     <ul className="list-disc pl-6">
                        <li> Veterinary examination</li>
                        <li>Vaccinations</li>
                        <li>Parasite treatment</li>
                        <li>Wound care or surgical intervention (if required)</li>
                        <li>Nutritional rehabilitation</li>
                        <li>No dog is placed for adoption until it is medically stable.</li>
                     </ul>
                  </div>
                  <div className="space-y-2 bg-neutral-50 p-4 border border-neutral-200 rounded-md">
                     <h1>🧠 Rehabilitation</h1>
                     <p>Many rescued dogs require emotional and behavioural support. We provide:</p>
                     <ul className="list-disc pl-6">
                        <li>Safe socialisation</li>
                        <li>Confidence-building training</li>
                        <li>Basic obedience foundations</li>
                        <li>Human interaction rehabilitation</li>
                        <li>Our goal is not just survival — but full recovery.</li>
                     </ul>
                  </div>
                  <div className="space-y-2 bg-neutral-50 p-4 border border-neutral-200 rounded-md">
                     <h1>🏠 Responsible Rehoming</h1>
                     <p>We carefully screen adopters to ensure:</p>
                     <ul className="list-disc pl-6">
                        <li>Safe living environments</li>
                        <li>Financial capability for long-term care</li>
                        <li>Commitment to responsible ownership</li>
                        <li>No breeding exploitation</li>
                        <li>Every adoption is monitored to ensure the continued welfare of the dog.</li>
                     </ul>
                  </div>
                  <div className="space-y-2 bg-neutral-50 p-4 border border-neutral-200 rounded-md">
                     <h1>🌍 Why This Matters</h1>
                     <p>Across The Gambia, many dogs suffer due to:</p>
                     <ul className="list-disc pl-6">
                        <li>Abandonment</li>
                        <li>Poor medical access</li>
                        <li>Uncontrolled breeding</li>
                     </ul>
                  </div>
                  <div className="space-y-2 bg-neutral-50 p-4 border border-neutral-200 rounded-md">
                     <h1>
                        The Hope for Hounds Fund is working to change this — through structured intervention and
                        education.We believe every dog deserves:
                     </h1>
                     <p>We believe every dog deserves:</p>
                     <ul className="list-disc pl-6">
                        <li>Safety</li>
                        <li>Medical care</li>
                        <li>Dignity</li>
                        <li>A loving home</li>
                     </ul>
                  </div>

                  <div className="space-y-2 bg-neutral-50 p-4 border border-neutral-200 rounded-md">
                     <h1>🤝 How You Can Help</h1>
                     <p>You can support Hope for Hounds by:</p>
                     <ul className="list-disc pl-6">
                        <li>Donating funds</li>
                        <li>Sponsoring a rescue dog</li>
                        <li>Donating food or medical supplies</li>
                        <li>Volunteering time</li>
                        <li>Adopting responsibly</li>
                        <li>Every contribution directly supports rescue, </li>
                        <li>treatment, and shelter operations.</li>
                     </ul>
                  </div>
                  <div className="space-y-2 bg-neutral-50 p-4 border border-neutral-200 rounded-md">
                     <h1>💚 Our Commitment</h1>
                     <p>Hope for Hounds operates with transparency, accountability, and ethical standards.</p>
                     <p>All funds raised are used strictly for:</p>
                     <ul className="list-disc pl-6">
                        <li>Rescue operations</li>
                        <li>Veterinary care</li>
                        <li>Shelter maintenance</li>
                        <li>Rehabilitation programs. </li>
                     </ul>
                  </div>
               </div>
               <div className="font-medium">
                  <p>
                     We are committed to making measurable impact in canine welfare within the smiling coast of west
                     africa The Gambia.
                  </p>
                  <p>Hope for Hounds Fund Rescue. Rehabilitate. Restore. Rehome.</p>
               </div>
            </div>
         </div>
      </MediaQuery>
   );
}
