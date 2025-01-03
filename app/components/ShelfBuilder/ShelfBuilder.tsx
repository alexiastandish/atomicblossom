"use client";

import React, { useRef, useState } from "react";
import {
  DndContext,
  DragEndEvent,
  DragMoveEvent,
  pointerWithin,
  useDndMonitor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import Sidebar from "./Sidebar/Sidebar";
import { restrictToWindowEdges, snapCenterToCursor } from "@dnd-kit/modifiers";
import SideRail from "@/app/components/SideRail/SideRail";
import useShelfBuilder from "@/hooks/useShelfBuilder";
import { SmartPointerSensor } from "../SmartPointerSensor";
import FormFlowerConfig from "./FormFlowerConfig/FormFlowerConfig";
import { FlowerElementInstance } from "../FormElements/FormElements";
import { ShelfDroppableArea } from "./ShelfDroppableArea";
import { ShelfDraggable } from "./ShelfDraggable";
import FormHeader from "../FormHeader/FormHeader";
import defaultFlowers from "@/app/utils/constants/flowers.json";

export default function ShelfBuilder({
  formFlowers,
}: {
  formFlowers: FlowerElementInstance[];
}) {
  const { flowers, addFlower, moveFlower } = useShelfBuilder();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleDragEnd(ev: DragEndEvent) {
    const { over } = ev;

    if (!over) return;
    if (ev.active.data?.current?.isSidebarItem) {
      const updatePosition = {
        x: position.x,
        y: position.y,
      };

      return addFlower(ev.active, updatePosition);
    }
    moveFlower(ev.active.id, { x: ev.delta.x, y: ev.delta.y });
  }

  const smartSensor = useSensor(SmartPointerSensor);
  const sensors = useSensors(smartSensor);
  return (
    <div className="flex items-center justify-items-center justify-center min-h-screen w-full h-full gap-16 font-[family-name:var(--font-geist-sans)] relative paper  flex-grow overflow-y-auto bg-accent bg-[url(/paper.svg)] dark:bg-[url(/paper-dark.svg)]">
      <div className="flex flex-col justify-center align-center bg-white rounded-md overflow-hidden ">
        <FormHeader form={formFlowers} />
        <main className="flex">
          <DndContext
            autoScroll={{ layoutShiftCompensation: false }}
            onDragEnd={handleDragEnd}
            modifiers={[snapCenterToCursor, restrictToWindowEdges]}
            collisionDetection={pointerWithin}
            sensors={sensors}
          >
            <Sidebar />
            <div>
              <ShelfDroppableArea setPosition={setPosition}>
                {flowers.map((flower, index) => (
                  <ShelfDraggable
                    styles={{
                      position: "absolute",
                      left: `${flower.position.x}px`,
                      top: `${flower.position.y}px`,
                    }}
                    index={index}
                    flower={flower}
                    key={flower.id}
                  />
                ))}
              </ShelfDroppableArea>
            </div>

            <SideRail>
              <FormFlowerConfig />
            </SideRail>
          </DndContext>
        </main>
      </div>
    </div>
  );
}
