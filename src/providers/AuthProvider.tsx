// src/providers/counter-store-provider.tsx
"use client";

import { type ReactNode, createContext, useState, useContext } from "react";
import { useStore } from "zustand";

import { type AuthStore, createAuthStore } from "@/src/store/useAuthStore";

export type AuthStoreApi = ReturnType<typeof createAuthStore>;

export const AuthStoreContext = createContext<AuthStoreApi | undefined>(undefined);

export interface AuthStoreProviderProps {
   children: ReactNode;
}

export const AuthStoreProvider = ({ children }: AuthStoreProviderProps) => {
   const [store] = useState(() => createAuthStore());
   return <AuthStoreContext.Provider value={store}>{children}</AuthStoreContext.Provider>;
};

export const useCounterStore = <T,>(selector: (store: AuthStore) => T): T => {
   const authStoreContaxt = useContext(AuthStoreContext);
   if (!authStoreContaxt) {
      throw new Error(`useCounterStore must be used within AuthStoreProvider`);
   }

   return useStore(authStoreContaxt, selector);
};
