"use client";

// import { signUp } from "@/src/actions/login";
import FormContainer from "@/src/components/FormContainer";
import Button from "@/src/components/ui/Button";
import { FormEvent, useState } from "react";
import { redirect } from "next/navigation";
import { signup } from "@/src/actions/auth";
import { useActionState, useTransition } from "react";
import { CgSpinner } from "react-icons/cg";
import Input from "@/src/components/ui/input";

export default function Register() {
   const [isPending, startTransition] = useTransition();

   const [state, action] = useActionState(signup, { ok: false, error: null, data: null, status: null });

   return (
      <FormContainer
         header="Create account"
         subHeader="Sign up to get started The Kennel club Gambia"
         linkText="Already have an account?"
         link="sign-in"
         linkLabel="sign in"
      >
         <form action={(fd) => startTransition(() => action(fd))} className="space-y-3 w-full">
            <Input label="Name" />
            <Input label="Email" />
            <Input label="Password" />
            {state?.error ? <p>{state.error}</p> : null}
            <button
               type="submit"
               disabled={isPending}
               className="bg-emerald-800 hover:bg-emerald-700 cursor-pointer w-full text-sm p-3 font-semibold rounded-lg text-white flex justify-center items-center"
            >
               {isPending ? <CgSpinner className="animate-spin" /> : "Register"}
            </button>
         </form>
      </FormContainer>
   );
}
