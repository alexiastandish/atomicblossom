"use client";

import React from "react";

interface OverlayTextProps {
  children: React.ReactNode;
  textWeight?: string | number;
  textSize?: number;
  textColor?: string;
  textAlign?: "left" | "right" | "center" | undefined;
  style?: any;
  className?: any;
}

const OverlayText: React.FC<OverlayTextProps> = ({
  children,
  textSize = 3,
  textColor,
  textWeight = "medium",
  className,
  textAlign,
  style,
}) => {
  return (
    <h2
      className={`text-shadow-pink font-display leading-tight	 font-${textWeight} text-${textAlign} text-${textColor} text-${textSize}xl ${
        className ? className : ""
      }`}
      style={style}
    >
      {children}
    </h2>
  );
};

export default OverlayText;
