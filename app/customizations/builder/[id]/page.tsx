import { getFormById } from "@/actions/getFormById";
import FormBuilder from "@/components/FormBuilder/FormBuilder";
import ShelfBuilder from "@/components/ShelfBuilder/ShelfBuilder";
import ShelfBuilderContextProvider from "@/context/ShelfBuilderContext";
import React from "react";
export const dynamic = "force-dynamic";

export default async function page({ params }: { params: { id: string } }) {
  const form = await getFormById(params.id);
  // TODO
  return (
    <>
      <ShelfBuilderContextProvider>
        <ShelfBuilder formFlowers={form} />
      </ShelfBuilderContextProvider>
    </>
  );
}
