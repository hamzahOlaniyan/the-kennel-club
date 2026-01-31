import React from "react";

export default function SideBar({ visible }: { visible: boolean }) {
   return (
      <div
         className={`h-screen w-full bg-sky-800 absolute left-0 top-0 ${visible ? "translate-x-full" : "-translate-x-full"}`}
      >
         index
      </div>
   );
}
