import React from "react";
import { FlowerElement, FormElement } from "../FormElements/FormElements";
import { useDraggable } from "@dnd-kit/core";

export default function SidebarFlower({ flower }: { flower: FlowerElement }) {
  const { label, icon: Icon } = formElement.designerBtnElement;
  const draggable = useDraggable({
    id: `designer-btn-${formElement.type}`,
    data: { type: formElement.type, isDesignerBtnElement: true },
  });
  return (
    <button
      ref={draggable.setNodeRef}
      className={`flex flex-col gap-2 h-[120px]  w-[120px]  cursor-grab outline outline-white text-white font-semibold ${
        draggable.isDragging && `ring-2 ring-primary`
      }`}
      {...draggable.listeners}
      {...draggable.attributes}
    >
      <Icon className="h-8 w-8 text-primary cursor-grab " />
      <p className="text-xs">{label}</p>
    </button>
  );
}

export function SidebarFlowerDragOverlay({
  formElement,
}: {
  formElement: FormElement;
}) {
  const { label, icon: Icon } = formElement.designerBtnElement;
  const draggable = useDraggable({
    id: `designer-btn-${formElement.type}`,
    data: { type: formElement.type, isDesignerBtnElement: true },
  });
  return (
    <button
      className={`flex flex-col gap-2 h-[120px] w-[120px] cursor-grab outline outline-white text-white font-semibold ${
        draggable.isDragging && `ring-2 ring-primary`
      }`}
    >
      <Icon className="h-8 w-8 text-primary cursor-grab" />
      <p className="text-xs">{label}</p>
    </button>
  );
}
