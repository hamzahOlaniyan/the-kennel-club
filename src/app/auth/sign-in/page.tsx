"use client";

import FormContainer from "@/src/components/FormContainer";
import { login } from "@/src/actions/auth";
import { useTransition } from "react";
import { CgSpinner } from "react-icons/cg";
import Input from "@/src/components/ui/input";

export default function SignIn() {
   const [isPending, starTransition] = useTransition();

   return (
      <FormContainer
         header="Welcome back"
         subHeader="Sign in to your account to continue"
         linkText="Don't have an acount?"
         link="register"
         linkLabel="register"
      >
         <form action={(fd) => starTransition(() => login(fd))} className="space-y-3 w-full">
            <Input label="Email" />
            <Input label="Password" />
            <button
               type="submit"
               disabled={isPending}
               className="bg-emerald-800 hover:bg-emerald-700 cursor-pointer w-full font-medium text-sm p-3 rounded-lg text-white flex justify-center items-center"
            >
               {isPending ? <CgSpinner className="animate-spin" /> : "Sign up"}
            </button>
         </form>
      </FormContainer>
   );
}
