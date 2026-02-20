import React, { Component, ComponentProps, HTMLInputTypeAttribute, InputEvent } from "react";

export default function Input({ ...props }: any) {
   return (
      <div className="">
         <label htmlFor={props.label} className="text-sm font-medium">
            {props.label}
         </label>
         <input
            className="w-full px-3 py-2 border text-black border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors"
            id={props.label}
            name={props.label}
            type={props.type}
            required
         />
      </div>
   );
}
