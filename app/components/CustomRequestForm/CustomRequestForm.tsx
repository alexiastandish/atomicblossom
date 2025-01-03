"use client";

import axios from "axios";
import React from "react";

export default function CustomRequestForm(props) {
  const testEmail = async () => {
    const response = await axios.post(`/api/custom-request-form`);
    console.log("response", response);
  };
  return (
    <div>
      <button onClick={testEmail}>test</button>
    </div>
  );
}
