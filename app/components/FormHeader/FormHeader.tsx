import React from "react";
import PreviewDialogueBtn from "../FormBuilder/PreviewDialogueBtn";
import SaveFormBtn from "../FormBuilder/SaveFormBtn";
import PublishFormBtn from "../FormBuilder/PublishFormBtn";
import { DndForm } from "@prisma/client";
import useDndForm from "@/hooks/use-dnd-form";
import useShelfBuilder from "@/hooks/useShelfBuilder";

export default function FormHeader({ form }: { form: DndForm | null }) {
  return (
    <nav className="flex justify-between border-b-2 p-2 gap-3 items-center">
      <h2 className="truncate font-medium">
        <span className="text-muted-foreground mr-2">Form: </span>
        {form?.name}
      </h2>
      <div className="flex items-center gap-2">
        <PreviewDialogueBtn />
        {!form?.submitted && form?.name && form?.id && (
          <>
            <SaveFormBtn name={form?.name} id={form?.id} /> <PublishFormBtn />
          </>
        )}
      </div>
    </nav>
  );
}
