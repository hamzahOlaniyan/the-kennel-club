import FormContainer from "@/src/components/FormContainer";
import Button from "@/src/components/ui/Button";
import Link from "next/link";
import React from "react";

export default function Otp() {
   return (
      <FormContainer
         header="Welcome back"
         subHeader={`A 6 digit code has been seen to the email { ******@gmail}. Please check your email and  enter the code.`}
         linkText="Didn't get the opt code?"
         link="register"
         linkLabel="resend code"
         copyright={false}
      >
         <form className="space-y-3 w-full">
            <div>
               <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
                  Otp
               </label>
               <input
                  id="otp"
                  name="otp"
                  placeholder="6 digit code"
                  type="number"
                  required
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border text-black border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
               />
            </div>
            <Button text="verify" />
         </form>
      </FormContainer>
   );
}
