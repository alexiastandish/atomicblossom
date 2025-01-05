"use client";
import { DndForm } from "@prisma/client";
import { useRouter } from "next/navigation";
import React from "react";

export default function FormsList({ forms }: { forms: DndForm[] }) {
  const router = useRouter();
  console.log("forms", forms);

  return (
    <div>
      {forms.map((form) => {
        return (
          <div
            className="p-5 m-5 bg-white rounded-lg flex items-center justify-between space-x-8  border-transparent border-2 hover:border-secondary  cursor-pointer"
            role="button"
            onClick={() => router.push(`customizations/builder/${form.id}`)}
          >
            <div className="flex-1 flex justify-between items-center">
              <div className="h-4 w-48 bg-gray-300 rounded">{form.name}</div>
              <div className="w-24 h-6 rounded-lg bg-purple-300">
                {form.createDate.toLocaleDateString()}
              </div>
            </div>
            <div>{form.submitted ? "Submitted" : "Draft"}</div>
          </div>
        );
      })}
    </div>
  );
}
