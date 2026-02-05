import { create } from "zustand";
import { Session, User } from "@supabase/supabase-js";

export type AuthState = {
   user: User | null;
   session: Session | null;
};

export type AuthActions = {
   setAuth: (payload: { user: User | null; session: Session | null }) => void;
   signOut: () => void;
};

export type AuthStore = AuthState & AuthActions;

export const defaultInitState: AuthState = {
   user: null,
   session: null,
};

export const useAuthStore = (initState: AuthState = defaultInitState) => {
   return create<AuthStore>((set) => ({
      ...initState,
      setAuth: ({ user, session }) => set({ session, user }),
      signOut: () => set({ user: null }),
   }));
};
