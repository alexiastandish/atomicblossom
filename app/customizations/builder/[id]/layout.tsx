import React, { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return <div className="flex flex-col min-h-screen">{children}</div>;
}
