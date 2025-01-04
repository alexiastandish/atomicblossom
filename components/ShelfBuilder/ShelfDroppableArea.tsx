import React from "react";
import { useDndMonitor, useDroppable } from "@dnd-kit/core";

// TODO
const CustomStyle = {
  display: "flex",
  height: "400px",
  width: "924px",
  position: "relative",
  overflow: "hidden",
};

export function ShelfDroppableArea({ children, setPosition }) {
  const { isOver, setNodeRef, rect } = useDroppable({
    id: "droppable",
  });

  useDndMonitor({
    onDragMove(event) {
      const { over, active } = event;

      if (over) {
        const droppableRect = over.rect;
        const draggableRect = active.rect;

        const x = draggableRect.current.translated.left - droppableRect.left;
        const y = draggableRect.current.translated?.top - droppableRect.top;
        setPosition({ x, y });
      }
    },
  });

  return (
    <div
      style={{ ...CustomStyle }}
      className={`${isOver ? "bg-neutral" : "bg-secondary"}`}
      ref={setNodeRef}
    >
      {children}
    </div>
  );
}
