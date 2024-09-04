"use client";

import React from "react";

interface OverlayTextProps {
  children: React.ReactNode;
  textWeight?: string | number;
  textSize?: number;
  textColor?: string;
  textAlign?: "left" | "right" | "center" | undefined;
}

const OverlayText: React.FC<OverlayTextProps> = ({
  children,
  textSize = 3,
  textColor,
  textWeight = "medium",
  textAlign = "center",
}) => {
  return (
    <h2
      className={`text-${textSize}xl text-shadow-pink font-display font-${textWeight} text-${textAlign} text-${textColor}`}
    >
      {children}
    </h2>
  );
};

export default OverlayText;
