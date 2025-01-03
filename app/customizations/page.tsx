import React from "react";
import CreateCustomBtn from "../components/CreateCustomBtn";
import { getDndForms } from "@/actions/getDndForms";
import OverlayText from "../components/OverlayText";
import FormsList from "../components/FormsList/FormsList";
import CustomRequestForm from "../components/CustomRequestForm/CustomRequestForm";

export default async function page(props) {
  const dndForms = await getDndForms();

  console.log("dndForms", dndForms);
  // TODO add color of shelf
  return (
    <div className=" flex flex-col xl:bg-yellow-500 lg:bg-green-500 md:bg-blue-500 sm:bg-red-500">
      <section className="h-screen hero flex items-center justify-center ">
        <div className="hero-content lg:text-left flex-row lg:flex-row md:flex-col sm:flex-col md:text-center sm:text-center  p-12">
          <div className="flex flex-col lg:items-start	md:items-center sm:items-center">
            <OverlayText
              textSize={8}
              textColor="primary"
              style={{ fontSize: "3em" }}
            >
              Custom Creations
            </OverlayText>
            <p className="py-6">
              Design your own flower shelf to be custom made with your design or
              submit a custom request for jewlery pieces. // TODO: add something
              about submissions status (Drafts are aditable)
            </p>
            <div className="flex w-72 justify-between ">
              <button className="btn btn-primary">Get Started</button>
              <div className="flex">
                <CreateCustomBtn />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center px-16 md:px-4">
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-neutral rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-neutral bg-opacity-60 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-2 left-20 w-72 h-72  bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <div
                className="m-8 bg-white bg-opacity-60 relative space-y-4 max-h-96 overflow-y-auto shadow-lg rounded-lg
    [&::-webkit-scrollbar]:w-2
    [&::-webkit-scrollbar-track]:rounded-full
    [&::-webkit-scrollbar-track]:bg-transparent
    [&::-webkit-scrollbar-thumb]:rounded-full
    [&::-webkit-scrollbar-thumb]:bg-gray-300
    dark:[&::-webkit-scrollbar-track]:bg-transparent
    dark:[&::-webkit-scrollbar-thumb]:bg-primary"
              >
                <FormsList forms={dndForms} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen hero flex items-center justify-center ">
        <div className="hero-content lg:text-left flex-row-reverse lg:flex-row-reverse md:flex-col sm:flex-col md:text-center sm:text-center  p-12">
          <div className="flex flex-col lg:items-start	md:items-center sm:items-center">
            <OverlayText
              textSize={8}
              textColor="primary"
              style={{ fontSize: "3em" }}
            >
              Submit a Custom Request
            </OverlayText>
            <p className="py-6">
              TODO: Design your own flower shelf to be custom made with your
              design or submit a custom request for jewlery pieces. // TODO: add
              something about submissions status (Drafts are aditable)
            </p>
            <div className="flex w-72 justify-between ">
              <button className="btn btn-primary">Get Started</button>
              <div className="flex">
                <CreateCustomBtn />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center px-16 md:px-4">
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-neutral rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-neutral bg-opacity-60 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-2 left-20 w-72 h-72  bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <div
                className="m-8 bg-white bg-opacity-60 relative space-y-4 max-h-96 overflow-y-auto shadow-lg rounded-lg
    [&::-webkit-scrollbar]:w-2
    [&::-webkit-scrollbar-track]:rounded-full
    [&::-webkit-scrollbar-track]:bg-transparent
    [&::-webkit-scrollbar-thumb]:rounded-full
    [&::-webkit-scrollbar-thumb]:bg-gray-300
    dark:[&::-webkit-scrollbar-track]:bg-transparent
    dark:[&::-webkit-scrollbar-thumb]:bg-primary"
              >
                <CustomRequestForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
