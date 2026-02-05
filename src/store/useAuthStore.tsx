import { create } from "zustand";
import { Session, User } from "@supabase/supabase-js";

export type AuthState = {
   user: User | null;
   session: Session | null;
};

export type AuthActions = {
   signOut: () => void;
   logIn: () => void;
};

export type AuthStore = AuthState & AuthActions;

export const defaultInitState: AuthState = {
   user: null,
   session: null,
};

export const createAuthStore = (initState: AuthState = defaultInitState) => {
   return create<AuthStore>((set) => ({
      ...initState,
      signOut: () => set({ session: null }),
      logIn: () => set({ user: null }),
   }));
};
