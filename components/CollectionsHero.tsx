import React from "react";
import ProductCard from "./products/ProductCard";
import OverlayText from "./OverlayText";
import { collections } from "../utils/helpers/products-old";
import CustomizationBtns from "@/components/CustomizationBtns";

export default function CollectionsHero() {
  return (
    <div className="">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4	p-[0.5rem] gap-[0.5rem] translate-y-[-10vh]">
        {collections.map((category) => {
          return (
            <ProductCard
              key={category.id}
              title={category.name}
              type={category?.type}
              data={category}
            />
          );
        })}
      </div>
      <div className="flex m-auto w-screen translate-y-[-5vh]">
        <div className="p-12 lg:text-left flex lg:flex-row sm:max-md:flex-col flex-col text-center justify-between items-center max-w-[90%] mx-auto">
          <div className="flex flex-col lg:items-start	md:items-center sm:items-center w-1/2 z-10">
            <OverlayText textSize={5} textColor="primary">
              Customizations
            </OverlayText>
            <div className="py-6">
              <p className="mb-1">
                Play with our Drag & Drop Builder to create your own custom home
                decor or navigate to our Custom Request form to drop us a
                message and upload an image for inspiration.
              </p>
              <br />
              <p>
                // TODO: add more content ...e to our Custom Request form to
                drop us a message and upload an image for inspiration.
              </p>
            </div>

            <div className="flex w-full lg:justify-start justify-center">
              <CustomizationBtns />
            </div>
          </div>
          {/* <div className="flex items-center justify-center lg:w-1/2 w-full"> */}{" "}
          <div className="w-1/2 p-12 mx-auto	my-3 z-10 relative">
            <img
              src="/images/shelf-dnd-hero-image.png"
              alt="shelf-dnd-hero-image"
              className={`object-cover rounded-md shadow-md`}
            />
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="hero-content text-center min-w-[100%] mb-[2rem]">
          <div className="max-w-md">
            <OverlayText textSize={5} textColor="primary">
              Customizations
            </OverlayText>
            <p className="py-6">
              Play with our Drag & Drop Builder to create your own custom home
              decor or navigate to our Custom Request form to drop us a message
              and upload an image for inspiration.
            </p>
            <CustomizationBtns />
          </div>
        </div> */
}
