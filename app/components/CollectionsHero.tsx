import React from "react";
import ProductCard from "./products/ProductCard";
import OverlayText from "./OverlayText";
import { collections } from "../utils/helpers/products-old";
import CustomizationBtns from "./CustomizationBtns";

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
        <div className="hero-content text-center min-w-[100%] mb-[2rem]">
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
        </div>
      </div>
    </div>
  );
}
