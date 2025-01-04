import React from "react";
import Button from "../Button";
import { MdPreview } from "react-icons/md";

export default function PreviewDialogueBtn(props) {
  return <Button small outline accent label="Preview" icon={MdPreview} />;
}
