import React from "react";
import { useDndMonitor, useDroppable } from "@dnd-kit/core";

// TODO
const CustomStyle = {
  display: "flex",
  height: "400px",
  width: "900px",
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
        console.log("droppableRect", droppableRect);
        console.log("draggableRect", draggableRect);

        const x = draggableRect.current.translated.left - droppableRect.left;
        const y = draggableRect.current.translated?.top - droppableRect.top;
        console.log("x", x);
        console.log("y", y);
        setPosition({ x, y });
        // setDroppedText(`Dropped at x: ${x}, y: ${y}`);
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
