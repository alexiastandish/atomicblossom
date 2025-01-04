import getCurrentUser from "./getCurrentUser";

export class UserNotFoundError extends Error {}

export async function getDndForms() {
  const user = await getCurrentUser();
  console.log("user", user);
  if (!user) {
    throw new UserNotFoundError();
  }

  const formsData = prisma?.dndForm.findMany({
    where: {
      userId: user.id,
    },
  });

  console.log("formsData", formsData);
  if (!formsData) {
    throw new Error("Something went wrong :/");
  }

  return formsData;
}
