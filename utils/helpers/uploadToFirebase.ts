"use server";

import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { storage } from "@/app/firebaseConfig";
import getCurrentUser from "@/actions/getCurrentUser";
import { ImageUpload } from "@prisma/client";

export const uploadToFirebase = async (
  images: ImageUpload[],
  formId: string
) => {
  try {
    const currentUser = await getCurrentUser();

    const uploads = [];

    for (const image of images) {
      const uploadAndDownload = async (uploadImage) => {
        const storageRef = ref(
          storage,
          `images/uploads/${currentUser?.id}/${formId}`
        );
        const metadata = {
          customMetadata: { ...uploadImage.metadata },
        };

        const uploadTask = await uploadString(
          storageRef,
          uploadImage.data_url,
          "data_url",
          metadata
        );

        const url = await getDownloadURL(storageRef);
        console.log("uploadTask", uploadTask);
        console.log("url", url);

        return url;
      };

      const response = await uploadAndDownload(image);
      console.log("response", response);
      uploads.push(response);
    }

    return uploads;
  } catch (error) {
    console.log("error", error);
  }
};
