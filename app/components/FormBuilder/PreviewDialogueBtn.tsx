import React from "react";
import Button from "../Button";
import { MdPreview } from "react-icons/md";

export default function PreviewDialogueBtn(props) {
  return <Button outline accent label="Preview" icon={MdPreview} />;
}
