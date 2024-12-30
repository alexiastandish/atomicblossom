import { getFormById } from "@/actions/getFormById";
import FormBuilder from "@/app/components/FormBuilder/FormBuilder";
import ShelfBuilder from "@/app/components/ShelfBuilder/ShelfBuilder";
import DesignerContextProvider, {
  DesignerContext,
} from "@/app/context/DesignerContext";
import ShelfBuilderContextProvider from "@/app/context/ShelfBuilderContext";
import React from "react";

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
