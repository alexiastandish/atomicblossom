"use client";

import { createContext, ReactNode, useEffect, useState } from "react";
import {
  FlowerElements,
  FlowerType,
  FormFlowerInstance,
  Position,
} from "@/components/ShelfBuilder/ShelfBuilderElements";
import defaultData from "@/utils/constants/flowers.json";
import { Active } from "@dnd-kit/core";
import { useParams, usePathname } from "next/navigation";
import axios from "axios";
import { idGenerator } from "@/utils/helpers/idGenerator";

type ShelfBuilderContextType = {
  flowers: FormFlowerInstance[];
  addFlower: (element: Active, position: Position) => void;
  moveFlower: (elementId: string, moveCoordinates: Position) => void;
  editFlower: FormFlowerInstance | null;
  editIndex: number | null;
  setEditFlowerAndIndex: (value: FormFlowerInstance, index: number) => void;
  resetEditFlower: () => void;
  editFlowerSize: (size: number[], index: number) => void;
  editFlowerColor: (color: string, index: number) => void;
  // TODO: close editor if open
  removeFlower: () => void;
};

export const ShelfBuilderContext =
  createContext<ShelfBuilderContextType | null>(null);

export default function ShelfBuilderContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [flowers, setFlowers] = useState<FormFlowerInstance[]>([]);
  const [editFlower, setEditFlower] = useState<FormFlowerInstance | null>(null);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const pathname = usePathname();
  const paramsId = useParams()?.id as string;

  console.log("params", paramsId);
  console.log("pathname", pathname);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(`/api/get-form-by-id/${paramsId}`);
        const parsedContent = JSON.parse(response.data.content);

        setFlowers(parsedContent);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [paramsId]);

  const setEditFlowerAndIndex = (value: FormFlowerInstance, index: number) => {
    setEditFlower(value);
    setEditIndex(index);
  };

  const resetEditFlower = () => {
    setEditFlower(null);
    setEditIndex(null);
  };

  const editFlowerSize = (size: number[], index: number) => {
    const updatedFlowers = [...flowers];
    const updatedFlower = { ...flowers[index] };
    updatedFlower.properties.size = size[0];

    updatedFlowers[index] = updatedFlower;
    setEditFlower(updatedFlower);
    return setFlowers(updatedFlowers);
  };

  const editFlowerColor = (color: string, index: number) => {
    const updatedFlowers = [...flowers];
    const updatedFlower = { ...flowers[index] };
    updatedFlower.properties.color = color;
    updatedFlowers[index] = updatedFlower;
    setEditFlower(updatedFlower);
    return setFlowers(updatedFlowers);
  };

  const addFlower = (element: Active, position: Position) => {
    const properties = {
      size: defaultData[element?.data?.current?.type.toLowerCase()].size.width,
      color: defaultData[element?.data?.current?.type.toLowerCase()].colors[0],
    };

    const newFlower = FlowerElements[
      element?.data?.current?.type as FlowerType
    ].construct(idGenerator(), element?.data?.current?.type, properties);

    return setFlowers((prev) => {
      return [...prev, { ...newFlower, position }];
    });
  };

  const moveFlower = (elementId: string, moveCoordinates: Position) => {
    const flower = flowers.find((x) => x.id === elementId);
    if (!flower) return;
    flower.position.x += moveCoordinates.x;
    flower.position.y += moveCoordinates.y;
    const _flowers = flowers.map((x) => {
      if (x.id === flower.id) return flower;
      return x;
    });
    setFlowers(_flowers);
  };

  const removeFlower = () => {
    const updatedFlowers = [...flowers];
    updatedFlowers.splice(editIndex, 1);
    setFlowers(updatedFlowers);
  };

  return (
    <ShelfBuilderContext.Provider
      value={{
        flowers,
        addFlower,
        moveFlower,
        editFlower,
        editIndex,
        setEditFlowerAndIndex,
        resetEditFlower,
        editFlowerSize,
        editFlowerColor,
        removeFlower,
      }}
    >
      {children}
    </ShelfBuilderContext.Provider>
  );
}
