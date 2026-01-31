import React from "react";

export default function MediaQuery({ children }: { children: React.ReactNode }) {
   return <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">{children}</div>;
}
