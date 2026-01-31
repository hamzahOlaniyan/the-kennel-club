"use client";

import { signUp } from "@/src/actions/auth-actions";
import FormContainer from "@/src/components/FormContainer";
import Button from "@/src/components/ui/Button";
import { FormEvent, useState } from "react";
import { redirect } from "next/navigation";

export default function Register() {
   const [loading, setLoading] = useState(false);
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [name, setName] = useState("");
   const [error, setError] = useState("");
   const [message, setMessage] = useState("");

   const handleRegister = async (e: FormEvent) => {
      e.preventDefault();

      try {
         setLoading(true);
         await signUp(email, password, name).then((res) => {
            if (!res) {
               setError("Failed to create account");
            }
            setTimeout(() => {
               redirect("/auth/sign-in");
            }, 3000);

            setMessage(res.message);
            setLoading(false);
            setError("");
            setEmail("");
            setName("");
            setPassword("");
            console.log("✅ new user created ", res.data);
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
         header="Create account"
         subHeader="Sign up to get started with better-auth"
         linkText="Already have an account?"
         link="sign-in"
         linkLabel="sign up"
         error={error}
         message={message}
      >
         <form onSubmit={handleRegister} className="space-y-3">
            <div>
               <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
               </label>
               <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  disabled={loading}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="Enter your full name"
               />
            </div>
            <div>
               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
               </label>
               <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  disabled={loading}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  required
                  disabled={loading}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border text-black border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="Enter your password"
               />
            </div>
            <Button text="Create account" isloading={loading} />
         </form>
      </FormContainer>
   );
}
