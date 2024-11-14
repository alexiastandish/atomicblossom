import React from "react";
import Button from "../Button";
import { MdSave } from "react-icons/md";

export default function SaveFormBtn(props) {
  return <Button primary label="Save" icon={MdSave} />;
}
