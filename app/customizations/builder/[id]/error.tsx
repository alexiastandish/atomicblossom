"use client";
import Link from "next/link";
import React, { useEffect } from "react";

export default function ErrorPage({ error }: { error: Error }) {
  useEffect(() => console.error(error), [error]);
  return (
    <div className="h-full flex flex-col justify-center items-center flex-grow">
      <h2 className="text-destructive text-4xl text-primary">
        Something went wrong
      </h2>
      <button className="btn btn-error">
        <Link href="/">Go Back Home</Link>
      </button>
    </div>
  );
}
