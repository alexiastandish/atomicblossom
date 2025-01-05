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
    <div>
      <button
        className="btn btn-secondary"
        onClick={() => router.push("/customizations/builder")}
      >
        Drag & Drop Builder
      </button>
      <Button
        className="btn btn-warning"
        onClick={() => router.push("/customizations/custom-request")}
        label=""
      />
      <CreateCustomBtn />
      <Link
        className="btn btn-secondary"
        href="/customizations/#custom-request"
        // smooth={true}
        // duration={500}
      >
        Request
      </Link>
      {/* <Link
      href="/customizations"
        className="btn btn-secondary"
        // onClick={() => router.push("/customizations/custom-request")}
      >Custom Request</Link> */}
    </div>
  );
}
