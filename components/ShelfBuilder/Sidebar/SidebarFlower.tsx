"use client";
import React from "react";
import { useDraggable } from "@dnd-kit/core";
import Image from "next/image";
import { FormFlower } from "@/components/ShelfBuilderElements";

export default function SidebarFlower({
  formFlower,
}: {
  formFlower: FormFlower;
}) {
  const { label, icon } = formFlower.sidebarFlower;

  const { setNodeRef, listeners, attributes, transform, isDragging, ...rest } =
    useDraggable({
      id: formFlower.type,
      data: { isSidebarItem: true, type: formFlower.type },
    });

  if (isDragging) console.log("rest", rest);

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : {};
  return (
    <div
      ref={setNodeRef}
      className="w-[100px] h-[100px] p-[10px] cursor-grab text-center z-10 border border-transparent hover:border-black"
      style={style}
      {...listeners}
      {...attributes}
    >
      <div className="relative flex flex-col h-[80%]">
        <Image
          src={icon}
          alt={formFlower.type}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <p className="text-sm">{label}</p>
    </div>
  );
}
