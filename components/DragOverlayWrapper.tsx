import { Active, DragOverlay, useDndMonitor } from "@dnd-kit/core";
import React, { useState } from "react";
import { SidebarBtnElementDragOverlay } from "./Designer/SidebarBtnElement";
import { ElementsType, FormElements } from "./FormElements/FormElements";

export default function DragOverlayWrapper(props) {
  const [draggedItem, setDraggedItem] = useState<Active | null>(null);
  useDndMonitor({
    onDragStart: (event) => {
      setDraggedItem(event.active);
    },
    onDragCancel: (event) => {
      console.log(event, "drag start");
    },
    onDragEnd: (event) => {
      console.log(event, "drag start");
    },
  });

  if (!draggedItem) return null;

  let node = <div>no drag overlay</div>;
  const isSidebarBtnElement = draggedItem.data?.current?.isDesignerBtnElement;

  if (isSidebarBtnElement) {
    const type = draggedItem.data?.current?.type as ElementsType;
    node = <SidebarBtnElementDragOverlay formElement={FormElements[type]} />;
  }
  return <DragOverlay>{node}</DragOverlay>;
}
