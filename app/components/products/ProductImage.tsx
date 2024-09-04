"use client";

import {
  CartProductType,
  SelectedImgType,
} from "@/app/product/[productId]/ProductDetails";
import Image from "next/image";

interface ProductImageProps {
  cartProduct: CartProductType;
  activeImage: string;
  product: any;
  handleImageSelect: (value: SelectedImgType) => void;
}

const ProductImage: React.FC<ProductImageProps> = ({
  cartProduct,
  activeImage,
  product,
  handleImageSelect,
}) => {
  console.log("activeImage", activeImage);
  return (
    <div
      className="grid
        grid-cols-6
        gap-2
        h-full
        max-h-[500px]
        min-h-[300px]
        sm:min-h-[400px]
  "
    >
      <div
        className="flex
      flex-col
      items-center
      justify-center
      gap-4
      cursor-pointer
      border
      h-full
      max-h-[500px]
      min-h-[300px]
      sm:min-h-[400px]
      "
      >
        {product.images.map((image: SelectedImgType) => {
          return (
            <div
              key={image.url}
              onClick={() => handleImageSelect(image)}
              className={`relative w-[80%] aspect-square rounded border-teal-300
        
              `}
            >
              <img
                src={image.url}
                alt={image.url}
                // fill
                className="object-contain"
              />
            </div>
          );
        })}
      </div>
      <div className="col-span-5 relative aspect-square">
        <img
          //   fill
          src={`${activeImage}`}
          alt={activeImage}
          className="w-full
        h-full
        object-contain
        max-h-[500px]
        min-h-[300px]
        sm:min-h-[400px]
        "
        />
      </div>
    </div>
  );
};

export default ProductImage;

// ${
//     cartProduct.image.url === image.url
//       ? "border-[1.5px]"
//       : "border-none"
//   }
