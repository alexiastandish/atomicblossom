import React from "react";
import { FaSpinner } from "react-icons/fa";

export default function Loading(props) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <FaSpinner className="animate-spin h-12 w-12" />
    </div>
  );
}
