"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function CustomizationBtns() {
  const router = useRouter();
  return (
    <div>
      <button
        className="btn btn-secondary"
        onClick={() => router.push("/customizations/builder")}
      >
        Drag & Drop Builder
      </button>
      <button
        className="btn btn-warning"
        onClick={() => router.push("/customizations/custom-request")}
      >
        Custom Request
      </button>
    </div>
  );
}
