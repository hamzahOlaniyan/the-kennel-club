"use client";

import FormContainer from "@/src/components/FormContainer";
import Button from "@/src/components/ui/Button";
import { FormEvent, useState } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function SignIn() {
   const [loading, setLoading] = useState(false);
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
   const [message, setMessage] = useState("");

   return (
      <FormContainer
         header="Welcome back"
         subHeader="Sign in to your account to continue"
         linkText="Don't have an acount?"
         link="register"
         linkLabel="register"
      >
         <form className="space-y-3 w-full">
            <div>
               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
               </label>
               <input
                  id="email"
                  name="email"
                  type="email"
                  // autoComplete="email"
                  required
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border text-black border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="Enter your email"
               />
            </div>
            <div>
               <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
               </label>
               <input
                  id="password"
                  name="password"
                  type="password"
                  // autoComplete={isSignIn ? "current-password" : "new-password"}
                  required
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border text-black border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="Enter your password"
               />
            </div>
            <Button text="Sign in" />
            <Link href="/auth/sign-in/otp" replace>
               otp
            </Link>
         </form>
      </FormContainer>
   );
}
