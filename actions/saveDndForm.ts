"use server";

import getCurrentUser from "./getCurrentUser";
import { UserNotFoundError } from "./getDndForms";

export async function saveDndForm(data: {
  name: string;
  id: string;
  content: string;
}) {
  const user = await getCurrentUser();

  if (!user) {
    throw new UserNotFoundError();
  }

  const dndForm = await prisma?.dndForm.update({
    where: {
      userId: user.id,
      id: data.id,
    },
    data: {
      content: data.content,
    },
  });

  if (!dndForm) {
    throw new Error("Something went wrong :/");
  }

  return dndForm.id;
}
