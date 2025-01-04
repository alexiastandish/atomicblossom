export type ElementsType = "TextField" | "NumberField";
export type FlowerType =
  | "hydrangea"
  | "sunflower"
  | "cosmos"
  | "orange-tj-flowers";

export type FlowerElement = {
  type: FlowerType;
  construct?: (id: string) => FormElementInstance;
  image: {
    alt: string;
    src: { [key: string]: any };
  };
  colors: string[];
};

export type FormElement = {
  type: ElementsType;

  construct: (id: string) => FormElementInstance;

  designerBtnElement: {
    icon: React.ElementType;
    label: string;
  };
  designerComponent: React.FC<{ elementInstance: FormElementInstance }>;
  formComponent: React.FC;
  propertiesComponent: React.FC;
};

export type FormElementInstance = {
  id: string;
  type: ElementsType;
  extraAttributes?: Record<string, any>;
};

export type FlowerElementInstance = {
  id: string;
  type: FlowerType;
  image: {
    alt: string;
    src: { [key: string]: any };
  };
  color: string;
  // extraAttributes?: Record<string, any>;
};

type FormElementsType = {
  [key in ElementsType]: FormElement;
};

import React from "react";
import { TextFieldFormElement } from "./TextField";

export const FormElements: FormElementsType = {
  TextField: TextFieldFormElement,
};
