"use client";
import Link from "next/link";
import React from "react";
import { FormContainerType } from "./types";
import kcg from "../../../public/kcg2.svg";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";

const FormContainer = ({
   header,
   children,
   subHeader,
   link,
   linkText,
   linkLabel,
   error,
   message,
   copyright = true,
}: FormContainerType) => {
   const router = useRouter();
   return (
      <div className="h-screen flex justify-center items-center flex-col bg-neutral-100">
         <IoCloseSharp
            onClick={() => router.replace("/")}
            className="absolute right-5 top-5 text-3xl cursor-pointer active:scale-95 hover:text-neutral-600"
         />
         <div className="lg:mx-w-2/4 bg-white py-8 p-6 rounded-md space-y-8">
            <div className="space-y-5">
               <div className="w-full space-y-3 h-full justify-center flex flex-col items-center">
                  <div className="w-50 h-8 lg:w-62 relative justify-center flex items-center ">
                     <Image src={kcg} alt={"logo"} fill priority className="w-full h-full" />
                  </div>
                  <p className="text-xl font-bold">{header}</p>
                  <p className="text-gray-600 font-medium text-sm">{subHeader}</p>
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
                  <Link href={`/auth/${link}`} className="font-bold hover:underline cursor-pointer transition-colors">
                     {linkLabel}
                  </Link>
               </div>
            </div>
            {copyright && (
               <p className="text-xs text-center">Copyright © The Kennel Club Gambia. All Rights Reserved.</p>
            )}
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
