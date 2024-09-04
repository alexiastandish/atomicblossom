"use server";

import getCurrentUser from "./getCurrentUser";
import { UserNotFoundError } from "./getDndForm";

export async function createDndForm(data: { name: string }) {
  console.log("data.name", data.name);
  const user = await getCurrentUser();

  if (!user) {
    throw new UserNotFoundError();
  }

  const dndForm = await prisma?.dndForm.create({
    data: {
      userId: user.id,
      name: data.name,
    },
  });

  if (!dndForm) {
    throw new Error("Something went wrong :/");
  }

  return dndForm.id;
}
