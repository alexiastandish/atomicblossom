"use client";

import { truncateString } from "@/utils/truncate-string";
import { formatPrice } from "@/utils/format-price";
import Image from "next/image";
import { Rating } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebaseConfig";
import OverlayText from "../OverlayText";

interface ProductCardProps {
  title: string;
  image?: string;
  reviews?: string[];
  price?: number;
  type?: "collections" | "products";
  data: any;
}

export default function ProductCard({
  title,
  image,
  reviews,
  price,
  type,
  data,
}: ProductCardProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [images, setImages] = useState([]);

  const getCardType = () => {
    if (pathname === "/") {
      // return 'categories'
    }
  };
  const imagesRef = ref(storage, `images/${type}/${data.id}`);
  useEffect(() => {
    listAll(imagesRef)
      .then((res) => {
        let promises = res.items.map((imageRef) => getDownloadURL(imageRef));
        Promise.all(promises).then((urls) => {
          setImages(urls);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const cardType = type?.substring(0, type.length - 1);
  return (
    <div
      className="card shadow-xl h-[300px] image-full"
      onClick={() => router.push(`/${cardType}/${data.id}`)}
    >
      <figure>
        <img
          src={images[0]}
          alt="product-image"
          className="object-cover w-[100%] min-h-[100%]"
        />
      </figure>
      <div className="card-body">
        <OverlayText textColor="white">{title}</OverlayText>
        <p>{data.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{data.buttonText}</button>
        </div>
      </div>
    </div>

    // <div
    //     onClick={() => router.push(`/product/${data.id}`)}
    //     className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:scale-105 text-center text-sm"
    // >
    //     <div className="flex flex-col items-center w-full gap-1">
    //         <div className="aspect-square overflow-hidden relative w-full">
    //             <Image
    //                 src={`${image}`}
    //                 fill
    //                 unoptimized
    //                 className="w-full h-full object-contain"
    //                 alt="product-image"
    //             />
    //         </div>
    //         <div className="">{truncateString(title, 25)}</div>
    //         <div className="">
    //             <Rating value={productRating} readOnly />
    //         </div>
    //         <div className="">{reviews.length} reviews</div>
    //         <div className="font-semibold">{formatPrice(price)}</div>
    //     </div>
    // </div>
  );
}
