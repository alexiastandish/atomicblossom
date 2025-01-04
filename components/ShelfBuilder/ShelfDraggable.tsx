"use client";
import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { FlowerElements, FormFlowerInstance } from "./ShelfBuilderElements";

// todo: update to dynamic
const CustomStyle = {
  display: "flex",
};

export function ShelfDraggable({
  flower,
  styles,
  index,
}: {
  flower: FormFlowerInstance;
  styles: any;
  index: number;
}) {
  const BuilderComponent = FlowerElements[flower.type].builderComponent;
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: flower.id,
    });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : {};

  return (
    <div
      ref={setNodeRef}
      style={{ ...style, ...CustomStyle, ...styles }}
      {...listeners}
      {...attributes}
    >
      <div data-no-dnd="true">
        <BuilderComponent
          flowerInstance={flower}
          index={index}
          isDragging={isDragging}
        />
      </div>
    </div>
  );
}
