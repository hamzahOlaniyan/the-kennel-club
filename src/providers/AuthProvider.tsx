"use client";

import { createContext, useContext, useRef } from "react";
import { useStore } from "zustand";
import { AuthState, AuthStore, defaultInitState, useAuthStore } from "../store/useAuthStore";

type AuthStoreApi = ReturnType<typeof useAuthStore>;

const AuthStoreContext = createContext<AuthStoreApi | null>(null);

export function AuthStoreProvider({
   children,
   initialState = defaultInitState,
}: {
   children: React.ReactNode;
   initialState?: AuthState;
}) {
   const storeRef = useRef<AuthStoreApi | null>(null);

   if (!storeRef.current) {
      storeRef.current = useAuthStore(initialState);
   }

   return <AuthStoreContext.Provider value={storeRef.current}>{children}</AuthStoreContext.Provider>;
}

export function useAuth<T>(selector: (s: AuthStore) => T): T {
   const store = useContext(AuthStoreContext);
   if (!store) throw new Error("useAuth must be used within AuthStoreProvider");
   return useStore(store, selector);
}
