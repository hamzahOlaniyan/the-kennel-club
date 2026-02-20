import React from "react";
import MediaQuery from "./ui/MediaQuery";

export const RegisterServiceSection = () => {
   return (
      <section className="bg-gray-50 py-24 px-6 border-y border-gray-100">
         <MediaQuery>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="text-4xl font-serif text-regal-navy mb-8">Registry Services for the Modern Breeder</h2>
                  <div className="space-y-8">
                     {[
                        {
                           title: "Purebred Pedigree",
                           desc: "Official documentation of five generations of ancestry, ensuring the integrity of your lineage.",
                        },
                        {
                           title: "DNA Profiling",
                           desc: "Cutting-edge genetic testing to confirm parentage and identify breed-specific health markers.",
                        },
                        {
                           title: "Title Recognition",
                           desc: "Official recording of performance and conformation titles earned across global circuits.",
                        },
                     ].map((service, i) => (
                        <div key={i} className="flex items-start">
                           <div className="w-12 h-12 bg-white shadow-md flex items-center justify-center rounded-sm mr-6 flex-shrink-0">
                              <span className="text-regal-gold font-serif text-xl">0{i + 1}</span>
                           </div>
                           <div>
                              <h4 className="font-bold text-regal-navy mb-2">{service.title}</h4>
                              <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="relative">
                  <img
                     src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=1000"
                     alt="Breeder checking dog"
                     className="rounded-sm shadow-2xl"
                  />
                  <div className="absolute -bottom-8 -left-8 bg-regal-navy bg-slate-900 p-8 text-white max-w-xs hidden md:block">
                     <p className="italic text-lg font-serif mb-4">
                        "Regal Kennel Club provided the foundation my kennel needed to achieve international
                        recognition."
                     </p>
                     <p className="text-regal-gold text-xs font-bold uppercase tracking-widest">
                        — Evelyn Thorne, Sterling Weimaraners
                     </p>
                  </div>
               </div>
            </div>
         </MediaQuery>
      </section>
   );
};
