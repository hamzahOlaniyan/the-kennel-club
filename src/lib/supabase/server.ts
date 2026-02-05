// import { createServerClient } from "@supabase/ssr";
// import { cookies } from "next/headers";

// export async function createClient() {
//    const cookieStore = await cookies();

//    // Create a server's supabase client with newly configured cookie,
//    // which could be used to maintain user's session
//    return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!, {
//       cookies: {
//          getAll() {
//             return cookieStore.getAll();
//          },
//          setAll(cookiesToSet) {
//             try {
//                cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
//             } catch {
//                // The `setAll` method was called from a Server Component.
//                // This can be ignored if you have proxy refreshing
//                // user sessions.
//             }
//          },
//       },
//    });
// }

import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

export const createClient = (cookieStore: ReturnType<typeof cookies>) => {
   return createServerClient(supabaseUrl!, supabaseKey!, {
      cookies: {
         async getAll() {
            return (await cookieStore).getAll();
         },
         setAll(cookiesToSet) {
            try {
               cookiesToSet.forEach(async ({ name, value, options }) => (await cookieStore).set(name, value, options));
            } catch {
               // The `setAll` method was called from a Server Component.
               // This can be ignored if you have middleware refreshing
               // user sessions.
            }
         },
      },
   });
};
