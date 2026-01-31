import Link from "next/link";
import React from "react";
import { FormContainerType } from "./types";

const FormContainer = ({ children, subHeader, link, linkText, linkLabel, error, message }: FormContainerType) => {
   return (
      <div className="h-screen flex justify-center items-center bg-sky-700 flex-col">
         <div className="w-1/4 bg-white py-8 p-6 rounded-md space-y-8">
            <div className="space-y-5">
               <div className="w-full space-y-3 h-full">
                  <div className="text-center">
                     <h1 className="text-xl font-bold text-gray-900 mb-2">The Kennel Club Gambia</h1>
                     <p className="text-gray-600 text-sm">{subHeader}</p>
                  </div>
                  {error && (
                     <div className="bg-red-50 border border-red-200 rounded-lg p-2">
                        <div className="flex">
                           <div className="shrink-0">
                              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                 <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                    clipRule="evenodd"
                                 />
                              </svg>
                           </div>
                           <div className="ml-3">
                              <p className="text-sm text-red-800">{error || message}</p>
                           </div>
                        </div>
                     </div>
                  )}
                  {message && (
                     <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-2">
                        <p className="text-xs">{error || message}</p>
                     </div>
                  )}
                  {children}
               </div>
               <div className="flex items-center gap-1 justify-center">
                  <p>{linkText}</p>
                  <Link
                     href={`/auth/${link}`}
                     className="text-sm font-bold cursor-pointer transition-colors text-neutral-800"
                  >
                     {linkLabel}
                  </Link>
               </div>
            </div>
            <p className="text-xs text-center">Copyright © The Kennel Club Gambia. All Rights Reserved.</p>
         </div>
         <Link
            href={"/"}
            className="text-sm text-white text-center mt-8 hover:text-neutral-200 active:scale-95 font-medium"
         >
            Back to home page
         </Link>
      </div>
   );
};

export default FormContainer;
