import { getFormById } from "@/actions/getFormById";
import FormBuilder from "@/app/components/FormBuilder/FormBuilder";
import React from "react";

export default async function page({ params }: { params: { id: string } }) {
  const form = await getFormById(params.id);
  return <FormBuilder form={form} />;
}
