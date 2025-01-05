"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Button from "./Button";
import CreateCustomBtn from "./CreateCustomBtn";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

export default function CustomizationBtns() {
  const router = useRouter();
  return (
    <div className="grid grid-cols-2 gap-2">
      <CreateCustomBtn />
      <Link
        className="btn btn-secondary"
        href="/customizations/#custom-request"
      >
        Custom Request
      </Link>
    </div>
  );
}
