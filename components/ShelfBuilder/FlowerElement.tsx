"use client";

import HoverWrapper from "@/components/HoverWrapper/HoverWrapper";
import {
  FlowerType,
  FormFlower,
  FormFlowerInstance,
  Properties,
} from "@/components/ShelfBuilderElements";
import flowers from "@/utils/constants/flowers.json";
import useShelfBuilder from "@/hooks/useShelfBuilder";
import { IconPencil } from "@tabler/icons-react";
import Image from "next/image";

export const HydrangeaFormElement: FormFlower = {
  type: "Hydrangea",
  construct: (id: string, type: FlowerType, properties: Properties) => ({
    id,
    properties,
    type,
    position: { x: 0, y: 0 },
  }),
  sidebarFlower: {
    icon: "/images/hydrangea.png",
    label: "Hydrangea",
  },
  builderComponent: BuilderComponent,
  // TODO
  previewerComponent: () => <div>previewerComponent</div>,
  propertiesComponent: () => <div>propertiesComponent</div>,
};

export const SunflowerFormElement: FormFlower = {
  type: "Sunflower",
  construct: (id: string, type: FlowerType, properties: Properties) => ({
    id,
    properties,
    type,
    position: { x: 0, y: 0 },
  }),
  sidebarFlower: {
    icon: "/images/sunflower.png",
    label: "Sunflower",
  },
  builderComponent: BuilderComponent,
  // TODO
  previewerComponent: () => <div>previewerComponent</div>,
  propertiesComponent: () => <div>propertiesComponent</div>,
};

export const CosmosFormElement: FormFlower = {
  type: "Cosmos",
  construct: (id: string, type: FlowerType, properties: Properties) => ({
    id,
    properties,
    type,
    position: { x: 0, y: 0 },
  }),
  sidebarFlower: {
    icon: "/images/cosmos.png",
    label: "Cosmos",
  },
  builderComponent: BuilderComponent,
  previewerComponent: () => <div>previewerComponent</div>,
  propertiesComponent: () => <div>propertiesComponent</div>,
};

// todo: add wiggle on hover
function BuilderComponent({
  flowerInstance,
  index,
  isDragging,
}: {
  flowerInstance: FormFlowerInstance;
  index: number;
  isDragging: boolean;
}) {
  const flowerConfig = flowers[flowerInstance.type.toLowerCase()];
  const { setEditFlowerAndIndex } = useShelfBuilder();
  console.log(
    "flowerConfig.image.src[flowerInstance.properties.color]",
    flowerConfig.image.src[flowerInstance.properties.color]
  );
  return (
    <HoverWrapper
      isDragging={isDragging}
      buttonIcon={<IconPencil stroke={1.5} size="20px" />}
      onButtonClick={() => setEditFlowerAndIndex(flowerInstance, index)}
    >
      <div
        className={`w-[${flowerInstance.properties.size}px] h-[${flowerInstance.properties.size}px] overflow-hidden`}
        style={{
          height: flowerInstance.properties?.size,
          width: flowerInstance.properties?.size,
        }}
      >
        <Image
          src={flowerConfig.image.src[flowerInstance.properties.color]}
          alt={flowerInstance.type}
          layout="fill"
          objectFit="contain"
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
    </HoverWrapper>
  );
}
