import getCurrentUser from "./getCurrentUser";

export class UserNotFoundError extends Error {}

export async function getDndForms() {
  const user = await getCurrentUser();

  if (!user) {
    throw new UserNotFoundError();
  }

  const formsData = prisma?.dndForm.findMany({
    where: {
      userId: user.id,
    },
  });

  if (!formsData) {
    throw new Error("Something went wrong :/");
  }

  return formsData;
}
