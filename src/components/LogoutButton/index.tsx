"use client";
import { useAuth } from "@/src/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";

export function LogoutButton() {
   const signOutStore = useAuth((s) => s.signOut);
   const [loading, setLoading] = useState(false);

   const router = useRouter();

   const onLogout = async () => {
      if (loading) return;
      setLoading(true);
      try {
         await fetch("/auth/signout", { method: "POST" });
         signOutStore();
         router.replace("/");
         router.refresh();
      } catch (error) {
         setLoading(false);
         console.log(error);
      }
   };

   return (
      <button onClick={onLogout} disabled={loading}>
         {loading ? <CgSpinner className="animate-spin" /> : "log out"}
      </button>
   );
}
