"use client";

import FormContainer from "@/src/app/components/FormContainer";
import Button from "@/src/app/components/ui/Button";
import { signIn } from "@/src/lib/auth";
import { FormEvent, useState } from "react";
import { redirect } from "next/navigation";

export default function SignIn() {
   const [loading, setLoading] = useState(false);
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
   const [message, setMessage] = useState("");

   const handleSignIn = async (e: FormEvent) => {
      e.preventDefault();

      try {
         setLoading(true);
         await signIn("credentials", { email, password }).then((res) => {
            if (!res) {
               setError("Failed to create account");
            }
            setTimeout(() => {
               redirect("/auth/sign-in");
            }, 3000);

            setLoading(false);
            setError("");
            setEmail("");
            setPassword("");
         });
      } catch (err) {
         if (err instanceof Error) {
            setError(err.message);
         }
      } finally {
         setLoading(false);
      }
   };

   return (
      <FormContainer
         header="Welcome back"
         subHeader="Sign in to your account to continue"
         linkText="Don't have an acount?"
         link="register"
         linkLabel="register"
      >
         <form onSubmit={handleSignIn} className="space-y-3">
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
         </form>
      </FormContainer>
   );
}
