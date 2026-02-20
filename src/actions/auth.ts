"use server";

import { redirect } from "next/navigation";
import { createClient } from "../lib/supabase/server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

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

   console.log({ data });

   const { error, data: result } = await supabase.auth.signInWithPassword(data);
   console.log({ result });

   if (error) {
      console.log({ error });
      return { message: error };
   }

   revalidatePath("/", "layout");
   redirect("/");
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

// export async function signinWithGoogle() {
//    const supabase = createClient(cookies());

//    const { data, error } = await supabase.auth.signInWithOAuth({
//       provider: "google",
//       options: {
//          redirectTo: "http://example.com/auth/callback",
//       },
//    });

//    if (data.url) {
//       redirect(data.url); // use the redirect API for your server framework
//    }
// }
