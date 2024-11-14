import React from "react";
import { MdOutlinePublish } from "react-icons/md";
import Button from "../Button";
export default function PublishFormBtn(props) {
  return (
    <Button secondary label="Publish" icon={MdOutlinePublish} />
    // <button className="btn btn-primary">
    //   <MdOutlinePublish />
    //   Publish
    // </button>
  );
}
