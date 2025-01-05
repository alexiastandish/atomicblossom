import Image from "next/image";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useRef, useState } from "react";
import { User } from "@prisma/client";
import toast from "react-hot-toast";
import styles from "./ImageUploader.module.scss";
import { idGenerator } from "@/utils/helpers/idGenerator";
import { Control, useFieldArray, useFormContext } from "react-hook-form";
import { UploadIcon } from "@radix-ui/react-icons";
import Button from "../Button";

type ImageUpload = {
  data_url: string;
  metadata: {
    id: string;
    filename: string;
  };
};

export default function ImageUploader({ currentUser }: { currentUser?: User }) {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control: control,
    name: "images",
  });

  const uploaderRef = useRef(null);

  const selectImage = (e: any) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent: any) => {
      append({
        data_url: readerEvent.target.result,
        metadata: { filename: e.target.files[0].name, id: idGenerator() },
      });
    };
  };
  //   const uploadToFirebase = async () => {
  //     try {
  //       if (images.length > 0) {
  //         await uploadString(storageRef, selectedFile, "data_url");
  //         const url = await getDownloadURL(storageRef);
  //         // setImageUrl(url);
  //       }
  //     } catch (error) {
  //       toast.error(error ?? "Something went wrong :/ ");
  //     }
  //   };

  // <div
  //   onClick={() => uploaderRef.current.click()}
  //   className="relative h-[16rem] w-[16rem] border cursor-pointer flex flex-col items-center justify-center overflow-hidden rounded-lg "
  // >
  //   <p>Upload Image</p>
  // </div>

  // position: relative;
  // display: inline-block;
  // margin: 0 5px 0 5px;
  // text-align: center;
  // text-decoration: none;
  // text-overflow: ellipsis;
  // white-space: nowrap;
  return (
    <div className="grid grid-cols-2 gap-4 my-4">
      <div>
        <p className="">
          {" "}
          Upload sketche and photo inspiration to aid visually in creating your
          visuion and meeting your expectations. vision.
        </p>
        <Button
          onClick={(e) => {
            e.preventDefault();
            return uploaderRef.current.click();
          }}
          small
          secondary
          label="Upload Inspo"
          icon={UploadIcon}
        />
        <input
          ref={uploaderRef}
          onChange={(e) => selectImage(e)}
          type="file"
          accept=".png, .jpg, .jpeg"
          hidden
        />

        <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
      </div>
      <div>
        {fields.length > 0 && (
          <ul id="gallery" className="grid grid-cols-3 -m-1">
            {fields.map((imageUpload, imageIndex) => {
              return (
                <li className="block p-1  h-24" key={imageUpload.id}>
                  <article
                    className={`group ${styles.hasImage} w-full h-full rounded-md focus:outline-none focus:shadow-outline bg-gray-100 cursor-pointer relative text-transparent hover:text-white shadow-sm`}
                  >
                    <Image
                      src={imageUpload.data_url}
                      fill
                      style={{ objectFit: "contain" }}
                      alt=""
                      className={`img-preview w-full h-full sticky object-cover rounded-md bg-fixed`}
                    />
                    <section className="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3 justify-between">
                      <div className="grid grid-cols-6 gap-2 items-center">
                        <i className="col-span-1">
                          <svg
                            className="fill-current w-4 h-4 ml-auto pt-"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z" />
                          </svg>
                        </i>

                        <p className="col-span-5 size text-xs overflow-hidden relative inline-block text-ellipsis whitespace-nowrap	">
                          {imageUpload.metadata.filename}
                        </p>
                      </div>
                      <button
                        type="button"
                        className="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md"
                        onClick={() => remove(imageIndex)}
                      >
                        <svg
                          className="pointer-events-none fill-current w-4 h-4 ml-auto"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            className="pointer-events-none"
                            d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z"
                          />
                        </svg>
                      </button>
                    </section>
                  </article>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
// <div className="grid grid-cols-4 min-h-[300px] gap-4 p-6">

//   <li class="block p-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 h-24">
//     <article tabindex="0" class="group hasImage w-full h-full rounded-md focus:outline-none focus:shadow-outline bg-gray-100 cursor-pointer relative text-transparent hover:text-white shadow-sm">
//       <img alt="upload preview" class="img-preview w-full h-full sticky object-cover rounded-md bg-fixed" />

//   <section class="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
//     <h1 class="flex-1"></h1>
//     <div class="flex">
//       <span class="p-1">
//         <i>
//           <svg class="fill-current w-4 h-4 ml-auto pt-" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
//             <path d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z" />
//           </svg>
//         </i>
//       </span>

//       <p class="p-1 size text-xs"></p>
//       <button class="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md">
//         <svg class="pointer-events-none fill-current w-4 h-4 ml-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
//           <path class="pointer-events-none" d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
//         </svg>
//       </button>
//     </div>
//   </section>
//     </article>
//   </li>

// <ul id="gallery" class="flex flex-1 flex-wrap -m-1">
// <li id="empty" class="h-full w-full text-center flex flex-col items-center justify-center items-center">
//   <img class="mx-auto w-32" src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png" alt="no data" />
//   <span class="text-small text-gray-500">No files selected</span>
// </li>
// </ul>
