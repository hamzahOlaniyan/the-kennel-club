"use client";
import React from "react";
import { useParams } from "next/navigation";
import MediaQuery from "@/src/components/ui/MediaQuery";

export default function page() {
   const { breed } = useParams();

   return <MediaQuery>{breed}</MediaQuery>;
}
