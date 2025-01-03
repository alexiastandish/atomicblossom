"use client";

import Button from "@/app/components/Button";
import ProductImage from "@/app/components/products/ProductImage";
import { useCart } from "@/hooks/useCart";
import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MdCheckCircle } from "react-icons/md";
import { useRouter } from "next/navigation";

type ProductDetailsProps = {
  product: any;
};

export type CartProductType = {
  id: string;
  name: string;
  description: string;
  collection: string;
  images: SelectedImgType[];
  price: number;
};

export type SelectedImgType = {
  isCoverPhoto: boolean;
  url: string;
};

const Horizontal = () => {
  return <hr className="w-[30%] my-2"></hr>;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { handleAddProductToCart, cartProducts } = useCart();
  const [isProductInCart, setIsProductInCart] = useState(false);
  const [activeProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    collection: product.collection,
    images: { ...product.images?.[0] },
    price: product.price,
  });
  const [activeImage, setActiveImage] = useState(product.images?.[0].url);

  const router = useRouter();

  useEffect(() => {
    setIsProductInCart(false);
    if (cartProducts) {
      const exisitng = cartProducts.findIndex((item) => item.id === product.id);
      if (exisitng > -1) setIsProductInCart(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartProducts]);

  const setSelectedImage = (image) => {
    setActiveImage(image.url);
  };

  // const productRating = product.reviews.reduce((acc: number, curr: any, i) => {
  //   return curr.rating + acc / product.reviews.length;
  // }, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <ProductImage
        cartProduct={activeProduct}
        product={product}
        activeImage={activeImage}
        handleImageSelect={setSelectedImage}
      />
      <div className="flex flex-col gap-1 text-slate-500 text-sm">
        <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>

        {/* <div className="flex items-center gap-2">
          <Rating value={productRating} readOnly />
          <div className="">{product.reviews.length} reviews</div>
        </div> */}
        <Horizontal />
        <div className="text-justify">{product.description}</div>
        <Horizontal />
        <div className="">
          <span className="font-semibold">CATEGORY:</span> {product.collection}
        </div>

        <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>
          {product.inStock ? "In stock" : "Out of Stock"}
        </div>
        {/* TODO: COMEBACK */}
        {/* <Horizontal />
                <div className="">color</div>
                <Horizontal />
                <div className="">quantity</div> */}
        {isProductInCart ? (
          <>
            <p className="">
              <MdCheckCircle
                size={20}
                className="text-slate-500 flex items-center gap-1"
              />
              <span>Product added to cart</span>
            </p>
            <Button
              label="View Cart"
              outline
              accent
              onClick={() => router.push("/cart")}
            ></Button>
          </>
        ) : (
          <>
            <Horizontal />
            <div className="max-w-[300px]">
              <Button
                label="Add To Cart"
                onClick={() => {
                  return handleAddProductToCart(activeProduct);
                }}
              />
            </div>
            <Horizontal />
          </>
        )}
      </div>
    </div>
  );
};
export default ProductDetails;
