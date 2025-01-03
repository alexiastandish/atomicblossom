import getCurrentUser from "./getCurrentUser";

export class UserNotFoundError extends Error {}

export async function getFormById(id: string) {
  const user = await getCurrentUser();

  if (!user) {
    throw new UserNotFoundError();
  }

  const formsData = prisma?.dndForm.findFirst({
    where: {
      userId: user.id,
      id,
    },
  });

  if (!formsData) {
    throw new Error("Something went wrong :/");
  }

  return formsData;
}
