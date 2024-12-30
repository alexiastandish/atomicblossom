"use client";

import { useRouter } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebaseConfig";
import { placeholderImg } from "@/app/utils/constants/placeholder-image";

export default function CollectionsProductCard({ product }) {
  console.log("product", product);
  const router = useRouter();
  const [image, setImage] = useState(null);
  console.log(
    "`images/collections/${product.collection}/${product.id}`",
    `images/collections/${product.collection}/${product.id}`
  );
  const imagesRef = ref(storage, `images/products/${product.id}`);

  useEffect(() => {
    listAll(imagesRef)
      .then((res) => {
        console.log("res", res);
        let promises = res.items.map((imageRef) => getDownloadURL(imageRef));
        Promise.all(promises).then((urls) => {
          console.log("urls", urls);
          setImage(urls[0]);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("image", image);
  return (
    <li
      key={product.id}
      onClick={() => router.push(`/product/${product.id}`)}
      className="inline-flex w-64 flex-col text-center lg:w-auto"
    >
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 h-[200px] w-full overflow-hidden rounded-md bg-gray-200">
          <img
            src={image ?? placeholderImg}
            alt="Black machined steel pen with hexagonal grip and small white logo at top."
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <div className="mt-6">
          <h3 className="mt-1 font-semibold text-gray-900">
            <a href="#">
              <span className="absolute inset-0"></span>

              {product.name}
            </a>
          </h3>
          <p className="mt-1 text-gray-900">$35</p>
        </div>
      </div>
    </li>
  );
}
