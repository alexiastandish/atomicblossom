"use client";

import { useRouter } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "@/app/firebaseConfig";
import { placeholderImg } from "@/utils/constants/placeholder-image";

export default function CollectionsProductCard({ product }) {
  const router = useRouter();
  const [image, setImage] = useState(null);

  const imagesRef = ref(storage, `images/products/${product.id}`);

  useEffect(() => {
    listAll(imagesRef)
      .then((res) => {
        let promises = res.items.map((imageRef) => getDownloadURL(imageRef));
        Promise.all(promises).then((urls) => {
          setImage(urls[0]);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
            alt={image}
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
