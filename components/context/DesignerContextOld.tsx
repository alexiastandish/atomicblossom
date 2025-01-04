"use client";

import { createContext, ReactNode, useState } from "react";
import { FormElementInstance } from "../FormElements/FormElements";
import {
  Activator,
  Active,
  DragMoveEvent,
  DragStartEvent,
} from "@dnd-kit/core";

type DesignerContextType = {
  elements: FormElementInstance[];
  addElement: (index: number, element: FormElementInstance) => void;
  moveElement: (element: FormElementInstance) => void;
  handleDragMove: (element: DragMoveEvent) => void;
  handleDragStartPosition: (element: DragStartEvent) => void;
};

type Coordinates = { x: number; y: number };

export const DesignerContext = createContext<DesignerContextType | null>(null);

export default function DesignerContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [elements, setElements] = useState([]);
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  const [draggedItem, setDraggedItem] = useState<Active | null>(null);
  const handleDragStartPosition = (event: DragStartEvent) => {
    const { active } = event;
    setDraggedItem(active);
    if (active.data?.current?.position) {
      console.log("active.data.current.position", active.data.current.position);
      setDragPosition(active.data?.current?.position);
    }
  };
  const handleDragMove = (current) => {
    // console.log("ALSDKFJALSDF", event);
    console.log("current", current);
    const coordinates = {
      x: current.translated.left,
      y: current.translated.top,
    };
    console.log("coordinates", coordinates);
    setDragPosition(coordinates);
    // setDragPosition(event.active.data?.current?.position);
    // const { over, delta, active } = event;
    // if (over && over.id === "droppable-shelf") {
    //   setDragPosition((prevPos) => ({
    //     x: prevPos.x + delta.x,
    //     y: prevPos.y + delta.y,
    //   }));
    // }
  };

  type MovedElement = {
    data: { current: { position: { x: Number; y: Number } } };
    id: string;
    rect: { current: { initial: null | string; translated: null | string } };
  };

  const moveElement = (activeElement: MovedElement, activatorEvent) => {
    // console.log("alskdjflaskdjf");
    // // const updatedElements = [...elements];
    // const index = elements.findIndex(
    //   (stateElement) => stateElement.id === activeElement.id
    // );
    // // const updatedItem = { ...elements[index], position: dragPosition };
    // setElements((prev) => {
    //   const newElements = [...prev];
    //   newElements[index].position = {
    //     x: dropPosition.x,
    //     y: dropPosition.y,
    //   };
    //   // newElements.splice(index, 0, { ...element, position: dragPosition });
    //   // setDragPosition({ x: 0, y: 0 });
    //   return newElements;
    // });
    // const elementIndex =
  };

  const addElement = (index: number, element: FormElementInstance) => {
    console.log("dragPosition", dragPosition);
    debugger;
    setElements((prev) => {
      const newElements = [...prev];
      newElements.splice(index, 0, {
        ...element,
        position: {
          x: dragPosition.x,
          y: dragPosition.y - 200,
        },
      });
      setDragPosition(null);
      return newElements;
    });
  };
  return (
    <DesignerContext.Provider
      value={{
        elements,
        addElement,
        handleDragMove,
        handleDragStartPosition,
        moveElement,
        draggedItem,
        dragPosition,
      }}
    >
      {children}
    </DesignerContext.Provider>
  );
}
