"use client";
import React from "react";
import styles from "./Sidebar.module.scss";
import SidebarFlower from "./SidebarFlower";
import { FlowerElements } from "../ShelfBuilderElements";

export default function Sidebar(props) {
  // TODO: add text about color changing arnd resizing within the layout

  return (
    <div className={styles.sidebar}>
      <SidebarFlower formFlower={FlowerElements.Hydrangea} />
      <SidebarFlower formFlower={FlowerElements.Sunflower} />
      <SidebarFlower formFlower={FlowerElements.Cosmos} />
    </div>
  );
}
