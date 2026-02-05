"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "../lib/supabase/server";
import { cookies } from "next/headers";
import { useAuthStore } from "../store/useAuthStore";
import { useAuth } from "../providers/AuthProvider";

type SignupState = {
   ok: boolean;
   error: string | null;
   data: unknown | null;
   status?: number | null;
};

export async function login(formData: FormData) {
   const supabase = createClient(cookies());

   const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
   };

   const { error, data: result } = await supabase.auth.signInWithPassword(data);
   console.log({ result });

   if (error) {
      console.log({ error });
   }

   // revalidatePath("/", "layout");
   // redirect("/account");
}

export async function signup(prevState: SignupState, formData: FormData): Promise<SignupState> {
   const supabase = createClient(cookies());

   const data = {
      email: formData?.get("email") as string,
      password: formData?.get("password") as string,
   };

   const { error, data: result } = await supabase.auth.signUp(data);

   if (error) return { ok: false, error: error.message, status: error.status, data: null };

   return { ok: false, error: null, status: 200, data: result };

   // revalidatePath("/", "layout");
   // redirect("/account");
}
