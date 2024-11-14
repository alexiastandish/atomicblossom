import React from "react";
import { FormElements } from "../FormElements/FormElements";
import SidebarBtnElement from "./SidebarBtnElement";
import flowers from "@/utils/constants/flowers.json";

export default function DesignerSidebar(props) {
  return (
    <aside className="w-[400px] max-w-[400px] flex flex-col flex-grow gap-2 border-l-2 border-muted bg-secondary overflow-y-auto h-full">
      Elements
      {flowers.map((flower) => {
        console.log("flower", flower);
      })}
      <SidebarBtnElement formElement={FormElements.TextField} />
    </aside>
  );
}
