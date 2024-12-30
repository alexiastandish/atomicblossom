import React from "react";
import flowers from "@/app/utils/constants/flowers.json";
import useShelfBuilder from "@/hooks/useShelfBuilder";
import FormFlowerColor from "./FormFlowerColor";
import FormFlowerSize from "./FormFlowerSize";

export default function FormFlowerConfig() {
  const { editFlower, editIndex, removeFlower } = useShelfBuilder();

  if (!editFlower) return;

  const type = editFlower?.type.toLowerCase();
  const config = {
    colors: flowers[type].colors.map((color) => {
      return { label: color, value: color };
    }),
    size: flowers[type].size.width,
  };

  return (
    <div>
      {config.colors.length > 1 && (
        <FormFlowerColor
          config={config.colors}
          // TODO add defaults
          activeColor={editFlower.properties?.color}
          editIndex={editIndex}
        />
      )}
      <FormFlowerSize
        minFlowerSize={flowers[type].size.minFlowerSize}
        maxFlowerSize={flowers[type].size.maxFlowerSize}
        activeSize={editFlower.properties?.size}
        editIndex={editIndex}
      />
      <button onClick={removeFlower}>Remove</button>
    </div>
  );
}