import React from "react";

export default function MediaQuery({ children }: { children: React.ReactNode }) {
   return <div className="px-4 sm:px-4 md:px-8 lg:px-28">{children}</div>;
}
