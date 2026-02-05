import React from "react";

export default function MediaQuery({ children }: { children: React.ReactNode }) {
   return <div className="mx-auto px-4 sm:px-4 lg:px-28 w-full">{children}</div>;
}
