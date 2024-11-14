import React from "react";
import CreateCustomBtn from "../components/CreateCustomBtn";
import { getDndForms } from "@/actions/getDndForms";
import OverlayText from "../components/OverlayText";

export default async function page(props) {
  const dndForms = await getDndForms();
  console.log("dndForms", dndForms);

  return (
    <div className="hero">
      <div className="hero-content flex">
        <div>
          <OverlayText
            textSize={8}
            textAlign="left"
            textColor="secondary"
            style={{ fontSize: "3em", color: "var(--color-secondary)" }}
          >
            Customize it, yeah yeah
          </OverlayText>
          {/* <h1 className="text-5xl font-bold">Customize it, yeah yeah</h1> */}
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
          <div className="flex">
            <CreateCustomBtn />
          </div>
        </div>
        <div className="flex items-center justify-center px-16">
          <div className="relative w-full max-w-lg">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="m-8 relative space-y-4">
              <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                <div className="flex-1 flex justify-between items-center">
                  <div className="h-4 w-48 bg-gray-300 rounded"></div>
                  <div className="w-24 h-6 rounded-lg bg-purple-300"></div>
                </div>
              </div>
              <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                <div className="flex-1 flex justify-between items-center">
                  <div className="h-4 w-48 bg-gray-300 rounded"></div>
                  <div className="w-24 h-6 rounded-lg bg-purple-300"></div>
                </div>
              </div>
              <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                <div className="flex-1 flex justify-between items-center">
                  <div className="h-4 w-48 bg-gray-300 rounded"></div>
                  <div className="w-24 h-6 rounded-lg bg-purple-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
