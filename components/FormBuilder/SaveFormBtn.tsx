"use client";

import React, { useEffect } from "react";
import Button from "../Button";
import { MdSave } from "react-icons/md";
import useShelfBuilder from "@/hooks/useShelfBuilder";
import useDndForm from "@/hooks/use-dnd-form";

export default function SaveFormBtn({
  name,
  id,
}: {
  name: string;
  id: string;
}) {
  const { flowers } = useShelfBuilder();
  const { saveShelf } = useDndForm({ name, content: flowers, id });

  return (
    <Button primary small label="Save" icon={MdSave} onClick={saveShelf} />
  );
}
