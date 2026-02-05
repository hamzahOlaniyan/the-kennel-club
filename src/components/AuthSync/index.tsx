"use client";

import { useEffect } from "react";
import { createClient } from "@/src/lib/supabase/client";
import { useAuth } from "@/src/providers/AuthProvider";

export default function AuthSync() {
   const setAuth = useAuth((s) => s.setAuth);
   const session = useAuth((s) => s.session);
   const user = useAuth((s) => s.user);

   const signOutStore = useAuth((s) => s.signOut);

   //    console.log("HOME SESSION", session);
   //    console.log("HOME USER", user);

   useEffect(() => {
      const supabase = createClient();

      // initial load
      supabase.auth.getSession().then(({ data }) => {
         setAuth({
            user: data.session?.user ?? null,
            session: data.session ?? null,
         });
      });

      // keep in sync
      const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
         if (!session) signOutStore();
         else
            setAuth({
               user: session.user,
               session,
            });
      });

      return () => sub.subscription.unsubscribe();
   }, [setAuth, signOutStore]);

   return null;
}
