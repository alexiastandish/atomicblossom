"use server";

import getCurrentUser from "@/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";
import { UserNotFoundError } from "@/actions/getDndForms";
import { Address, CustomRequestData } from "@prisma/client";

export async function submitCustomRequest(data: {
  content: CustomRequestData;
  address: Address;
}) {
  const user = await getCurrentUser();

  if (!user) {
    throw new UserNotFoundError();
  }

  const customRequest = await prisma?.customRequestSubmission.create({
    data: {
      userId: user.id,
      content: {
        name: data.content.name,
        email: data.content.email,
        images: data.content.images,
        type: data.content.type,
        length: data.content.length,
        flowerColor: data.content.flowerColor,
        resinTint: data.content.resinTint,
        description: data.content.description,
      },
      address: {
        city: data.address.city,
        postal_code: data.address.postal_code,
        address: data.address.address,
        state: data.address.state,
      },
    },
  });

  if (!customRequest) {
    throw new Error("Something went wrong :/");
  }

  return customRequest.id;
}
